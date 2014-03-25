'use strict';

var app = angular.module('signin');

app.controller('SigninController', ['$scope', '$http', '$window', 'signinService', function($scope, $http, $window, SigninService) {
  $scope.user = {
    myName: '',
    myPassword: ''
  };


  $scope.onSignin = function() {
    SigninService.login($scope.user.myName, $scope.user.myPassword);

    $window.alert('signin with ' + $scope.user.myName);
  };
}]);
