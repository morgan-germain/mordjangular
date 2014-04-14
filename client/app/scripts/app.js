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
        templateUrl: 'views/home.html',
        controller: 'mainCtrl',
        activetab: 'home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'mainCtrl',
        activetab: 'about'
      })
      .when('/artists', {
        templateUrl: 'views/artists.html',
        controller: 'mainCtrl',
        activetab: 'artists'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'mainCtrl',
        activetab: 'contact'
      })
      .when('/links', {
        templateUrl: 'views/links.html',
        controller: 'mainCtrl',
        activetab: 'links'
      })
      .when('/services', {
        templateUrl: 'views/services.html',
        controller: 'mainCtrl',
        activetab: 'services'
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);
