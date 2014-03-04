'use strict';

var app = angular.module('signinControllers', []);

app.controller('SigninController', function ($scope) {
  $scope.onSignin = function() {
    alert('signin');
  };
});
