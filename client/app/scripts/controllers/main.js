'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', ['$rootScope', '$route', 'PlayerService',
      function ($scope, $route, PlayerService) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;


  $scope.daffos = [
    {title: 'noizz6', url: 'http://krearts.fr/audio/noizz6.mp3'},
    {title: '1', url: 'http://krearts.fr/audio/1.mp3'},
  ];

}]);
