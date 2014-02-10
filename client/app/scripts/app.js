'use strict';

var clientApp = angular.module('clientApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
]);

clientApp.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'ClientAppCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
