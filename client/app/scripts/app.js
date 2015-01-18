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
      activetab: 'home'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      activetab: 'about'
    })
    .when('/artists', {
      templateUrl: 'views/artists.html',
      activetab: 'artists'
    })
    .when('/contact', {
      templateUrl: 'views/contact.html',
      activetab: 'contact'
    })
    .when('/links', {
      templateUrl: 'views/links.html',
      activetab: 'links'
    })
    .when('/partners', {
      templateUrl: 'views/partners.html',
      activetab: 'partners'
    })

    .when('/artists/arcaide', {
      templateUrl: 'views/artists-arcaide.html',
      activetab: 'artists'
    })
    .when('/artists/jet-set-willy', {
      templateUrl: 'views/artists-jet-set-willy.html',
      activetab: 'artists'
    })
    .when('/artists/difoss', {
      templateUrl: 'views/artists-difoss.html',
      activetab: 'artists'
    })
    .when('/artists/razor-head', {
      templateUrl: 'views/artists-razor-head.html',
      activetab: 'artists'
    })
    .when('/artists/toxicazsid', {
      templateUrl: 'views/artists-toxicazsid.html',
      activetab: 'artists'
    })
    .when('/artists/fist-fucking-armageddon', {
      templateUrl: 'views/artists-fist-fucking-armageddon.html',
      activetab: 'artists'
    })
    .when('/artists/komak', {
      templateUrl: 'views/artists-komak.html',
      activetab: 'artists'
    })
    .when('/artists/arnaud-grimmer', {
      templateUrl: 'views/artists-arnaud-grimmer.html',
      activetab: 'artists'
    })

    .otherwise({
      redirectTo: '/'
    });
}]);

// Workaround for AngularJS issue where you can nest ng-view inside a ng-inglude
// https://github.com/angular/angular.js/issues/1213
app.run(['$route', angular.noop]);