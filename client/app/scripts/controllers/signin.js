'use strict';

var app = angular.module('signinControllers', []);

app.controller('SigninController', function($scope, $window) {
  $scope.onSignin = function() {
    $window.alert('signin');
  };
});
