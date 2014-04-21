'use strict';

var mainModule = angular.module('mainModule', []);

// See https://github.com/zohararad/audio5js
mainModule.factory('AudioService', function () {
  var params = {
    swf_path:'../../swf/audio5js.swf',
    throw_errors:true,
    format_time:true
  };

  var audio5js = new Audio5js(params);

  return audio5js;
});


mainModule.controller('mainCtrl', ['$rootScope', '$route', 'AudioService',
      function ($scope, $route, AudioService) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;

  //bind AudioService to scope
  $scope.player = AudioService;
  //Load the song, every event, class method and Instance attribute from audio5js are accessible from the template
  $scope.player.load('http://krearts.fr/audio/noizz6.mp3');

  $scope.isPlaying = false;

  //example of event binding
  $scope.player.on('timeupdate',function(){
    $scope.$apply();
  });

  $scope.onPlayPause = function() {
    $scope.player.playPause();
    $scope.isPlaying = ! $scope.isPlaying;
  };

}]);
