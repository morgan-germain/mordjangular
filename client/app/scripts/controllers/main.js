'use strict';

var clientApp = angular.module('clientApp', []);

clientApp.controller('ClientAppCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
