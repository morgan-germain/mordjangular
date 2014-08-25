'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('FirstPageCtrl', ['$rootScope', '$route',
      function ($scope, $route) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;

}]);
