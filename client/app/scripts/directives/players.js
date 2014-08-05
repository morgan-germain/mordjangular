'use strict';

var app = angular.module('mainApp');


app.directive('jplayer', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/subviews/audio-jplayer.html',
    scope: {
      tracks: '='
    },
    link: function(scope, element, attrs) {
      // Initialize player
      var myPlaylist = new jPlayerPlaylist({
        jPlayer: "#jquery_jplayer_1",
        cssSelectorAncestor: "#jp_container_1"
      },
      scope.tracks, {
        swfPath: "./bower_components/jplayer/jquery.jplayer",
        supplied: "mp3",
        wmode: "window",
        smoothPlayBar: true,
        keyEnabled: true
      });

    }
  };
});
