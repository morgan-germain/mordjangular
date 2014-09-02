'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('KomakCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Komak',
    title: 'Crime',
    mp3: 'http://krearts.fr/audio/groupes/Komak/04-crime.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/04-crime.ogg'
  }, {
    artist: 'Komak',
    title: 'Nomade',
    mp3: 'http://krearts.fr/audio/groupes/Komak/05-nomade.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/05-nomade.ogg'
  }, {
    artist: 'Komak',
    title: 'T',
    mp3: 'http://krearts.fr/audio/groupes/Komak/06-T.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/06-T.ogg'
  }, {
    artist: 'Komak',
    title: 'Out',
    mp3: 'http://krearts.fr/audio/groupes/Komak/10-out.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/10-out.ogg'
  }, {
    artist: 'Komak',
    title: 'Elasto',
    mp3: 'http://krearts.fr/audio/groupes/Komak/13-elasto.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/13-elasto.ogg'
  }, {
    artist: 'Komak',
    title: 'Sgoten',
    mp3: 'http://krearts.fr/audio/groupes/Komak/14-sgoten.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/14-sgoten.ogg'
  }, {
    artist: 'Komak',
    title: '...',
    mp3: 'http://krearts.fr/audio/groupes/Komak/16-....mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/16-....ogg'
  }, {
    artist: 'Komak',
    title: 'Cobalt',
    mp3: 'http://krearts.fr/audio/groupes/Komak/17-cobalt.mp3',
    oga: 'http://krearts.fr/audio/groupes/Komak/17-cobalt.ogg'
  }];
}]);
