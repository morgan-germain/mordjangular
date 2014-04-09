'use strict';

var app = angular.module('mainApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',

  'ui.bootstrap',

  'mainModule'
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
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'mainCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'mainCtrl'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'mainCtrl'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'mainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
