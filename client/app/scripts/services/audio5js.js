'use strict';

var mainModule = angular.module('mainModule');


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

mainModule.factory('PlayerService', ['AudioService', function(AudioService) {
  var factory = {
    currentTrack: undefined,
    isPlaying: false
  };

  factory.selectTrack = function(track) {
    if (factory.currentTrack === track) {
      factory.currentTrack = undefined;
    } else {
      factory.currentTrack = track;
      factory.player.pause();
      factory.isPlaying = false;
      factory.player.load(track.url);
    }
    console.log('Changed selection to ' + factory.currentTrack.url);
  };

  factory.playPause = function() {
    factory.isPlaying = !factory.player.playing;
    factory.player.playPause();
  };

  //bind AudioService to this factory
  factory.player = AudioService;

  return factory;
}]);

mainModule.directive('playlist', ['PlayerService', function(PlayerService) {

  return {
    restrict: 'E',
    templateUrl: 'views/subviews/playlist.html'
  };
}]);