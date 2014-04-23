'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', ['$rootScope', '$route', 'AudioService',
      function ($scope, $route, AudioService) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;


  $scope.playlist = [
    {title: 'noizz6', url: 'http://krearts.fr/audio/noizz6.mp3'},
    {title: '1', url: 'http://krearts.fr/audio/1.mp3'},
  ];


  $scope.currentTrack = undefined;
  $scope.isPlaying = false;

  $scope.selectTrack = function(track) {
    if ($scope.currentTrack === track) {
      $scope.currentTrack = undefined;
    } else {
      $scope.currentTrack = track;
      $scope.player.pause();
      $scope.player.load(track.url);
    }
    console.log('Changed selection to ' + $scope.currentTrack.url);
  };

  $scope.playPause = function() {
    $scope.isPlaying = !$scope.player.playing;
    $scope.player.playPause();
  };


  //bind AudioService to scope
  $scope.player = AudioService;
  //example of event binding
  $scope.player.on('timeupdate',function(){
    $scope.$apply();
  });

}]);
