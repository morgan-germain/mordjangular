'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('ArcaideCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Arcaide',
    title: '[DEMO] 2014 - Negredite Xydo',
    mp3: 'http://krearts.fr/audio/groupes/Arcaide/Negredite%20Xydoo.mp3',
    oga: 'http://krearts.fr/audio/groupes/Arcaide/Negredite%20Xydoo.ogg',
  }, {
    artist: 'Arcaide',
    title: '2008 Tainting Dolls',
    mp3: 'http://krearts.fr/audio/groupes/Arcaide/Tainting%20Dolls.mp3',
    oga: 'http://krearts.fr/audio/groupes/Arcaide/Tainting%20Dolls.ogg',
  }, {
    artist: 'Arcaide',
    title: '2006 - Le Cafard Brume',
    mp3: 'http://krearts.fr/audio/groupes/Arcaide/Le%20cafard%20brume.mp3',
    oga: 'http://krearts.fr/audio/groupes/Arcaide/Le%20cafard%20brume.ogg',
  }, {
    artist: 'Arcaide',
    title: '2003 - Beyond The Only Home',
    mp3: 'http://krearts.fr/audio/groupes/Arcaide/beyond_the_only_home.mp3',
    oga: 'http://krearts.fr/audio/groupes/Arcaide/beyond_the_only_home.ogg',
  }, {
    artist: 'Arcaide',
    title: '2001 - After The Sun',
    mp3: 'http://krearts.fr/audio/groupes/Arcaide/after_the_sun.mp3',
    oga: 'http://krearts.fr/audio/groupes/Arcaide/after_the_sun.ogg',
  }];
}]);
