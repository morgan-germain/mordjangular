'use strict';

var app = angular.module('mainApp');


app.directive('jplayer', function() {
  return {
    restrict: 'EA',
    templateUrl: 'views/subviews/audio-jplayer.html',
    link: function(scope, element, attrs) {

      var tracks = JSON.parse(attrs.tracks);


      element.ready(function() {
        var myPlaylist = new jPlayerPlaylist({
          jPlayer: "#jquery_jplayer_1",
          cssSelectorAncestor: "#jp_container_1"
        }, tracks, {
          swfPath: "/js",
          supplied: "ogv, m4v, oga, mp3",
          smoothPlayBar: true,
        });

      });

    }
  };
});
