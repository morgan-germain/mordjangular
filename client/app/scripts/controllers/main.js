'use strict';

var clientApp = angular.module('clientAppControllers', []);

clientApp.controller('ClientAppCtrl', function ($scope) {
    $scope.awesomeThings = [
      {name: 'HTML5 Boilerplate', content: 'HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites.'},
      {name: 'AngularJS', content: 'AngularJS is a toolset for building the framework most suited to your application development.'},
      {name: 'Karma', content: 'Spectacular Test Runner for JavaScript.'},
    ];
  });
