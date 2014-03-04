'use strict';

var clientApp = angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',

  'ui.bootstrap',

  'clientAppControllers',
]);

clientApp.config(function ($routeProvider) {
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
      .otherwise({
        redirectTo: '/'
      });
  });
