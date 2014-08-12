'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('FistFuckingAramageddonCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'FFA',
    title: 'Serenity - 1 Hinman\'s song',
    mp3: 'http://krearts.fr/audio/groupes/FFA/FFA%20-%20Hinman\'s%20song.mp3',
    oga: 'http://krearts.fr/audio/groupes/FFA/FFA%20-%20Hinman\'s%20song.ogg'
  }, {
    artist: 'FFA',
    title: 'Serenity - 4 Behind the door',
    mp3: 'http://krearts.fr/audio/groupes/FFA/FFA%20-%20Behind%20the%20door.mp3',
    oga: 'http://krearts.fr/audio/groupes/FFA/FFA%20-%20Behind%20the%20door.ogg'
  }, {
    artist: 'FFA',
    title: 'Serenity - 7 Latnem noitarcesed',
    mp3: 'http://krearts.fr/audio/groupes/FFA/FFA%20-%20Latnem%20noitarcesed.mp3',
    oga: 'http://krearts.fr/audio/groupes/FFA/FFA%20-%20Latnem%20noitarcesed.ogg'
  }, {
    artist: 'FFA',
    title: 'Harsh cerebral system - 1 Cold skin red heaet',
    mp3: 'http://krearts.fr/audio/groupes/FFA/FFA-HarshCerebralSystem-ColdSkinRedHeart.mp3',
    oga: 'http://krearts.fr/audio/groupes/FFA/FFA-HarshCerebralSystem-ColdSkinRedHeart.ogg'
  }, {
    artist: 'FFA',
    title: 'Harsh cerebral system - 2 Dancing with the past',
    mp3: 'http://krearts.fr/audio/groupes/FFA/FFA-HarshCerebralSystem-DancingWithThePast.mp3',
    oga: 'http://krearts.fr/audio/groupes/FFA/FFA-HarshCerebralSystem-DancingWithThePast.ogg'
  }, {
    artist: 'FFA',
    title: 'Harsh cerebral system - 3 Hope ?',
    mp3: 'http://krearts.fr/audio/groupes/FFA/FFA-HarshCerebralSystem-Hope.mp3',
    oga: 'http://krearts.fr/audio/groupes/FFA/FFA-HarshCerebralSystem-Hope.ogg'
  }];
}]);
