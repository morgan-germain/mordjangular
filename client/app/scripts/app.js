'use strict';

var app = angular.module('mainApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',

  'ui.bootstrap',

  'clientAppControllers',
  'utilsControllers',
  'signin'
]);

app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ClientAppCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'ClientAppCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ClientAppCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'SigninController',
        access: {
          isFree: true
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
