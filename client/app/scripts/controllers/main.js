'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', ['$rootScope', '$route', 'PlayerService',
      function ($scope, $route, PlayerService) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;


  $scope.playlist = [
    {title: 'noizz6', url: 'http://krearts.fr/audio/noizz6.mp3'},
    {title: '1', url: 'http://krearts.fr/audio/1.mp3'},
  ];


  $scope.playerService = PlayerService;

  // Update timestamps on view
  $scope.playerService.player.on('timeupdate',function(){
    $scope.$apply();
  });

}]);
