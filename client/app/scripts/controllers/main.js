'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', ['$rootScope', '$route', function ($scope, $route) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;
}]);
