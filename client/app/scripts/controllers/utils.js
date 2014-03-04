'use strict';

var app = angular.module('utilsControllers', []);

app.controller('DropdownController', function ($scope) {
  $scope.stopPropagation = function(event) {
    if (event) {
      event.stopPropagation();
      event.preventDefault();
    }
  };
});
