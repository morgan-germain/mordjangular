'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('DifossCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'myArtist1',
    title: 'myTitle1',
    mp3: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
    oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
    free: true
  }, {
    artist: 'myArtist2',
    title: 'myTitle2',
    mp3: 'http://www.jplayer.org/audio/mp3/TSP-01-Cro_magnon_man.mp3',
    oga: 'http://www.jplayer.org/audio/ogg/TSP-01-Cro_magnon_man.ogg',
    free: true
  }];

}]);