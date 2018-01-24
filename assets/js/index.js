var myApp=angular.module('indexApp', ['busyIndicator']).config(function($locationProvider) {
    $locationProvider.html5Mode({
        enabled : true,
        requireBase : false
    });
});


myApp.controller('contactForm',function($scope,$http,$location){
    console.log("starting js");
    $scope.requestFormData={};
    $scope.submitRequestForm = function(isValid,type) {
        //$scope.submitted = 'True';

        if (!isValid) {

        }

        if (isValid) {
            $scope.loadingData = true;
            $scope.requestFormData.description = 'Request - ' + $scope.requestFormData.message;
            $scope.requestFormData['type'] = type;

            $http({
                method : "POST",
                url : 'http://iconnectbiz.in/api/register/request',

                data : $.param($scope.requestFormData), // pass in data as strings
                headers : {'Content-Type' : 'application/x-www-form-urlencoded'}
            }).success(function(data) {
                $scope.loadingData = false;
                $scope.requestMessage=data.message;
                if(data.success) {
                    $('#thankyou2').modal('show');
                }
            }).error(function (data1){
                console.log(data1);
                $scope.loadingData = false;
				$('#thankyou2').modal('show');
            });
        }
    };
});