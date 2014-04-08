'use strict';

var app = angular.module('mainApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',

  'ui.bootstrap',

  'mainModule',
  'signin'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'mainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'mainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
