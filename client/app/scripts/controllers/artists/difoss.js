'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('DifossCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Dïfoss',
    title: '[DEMO] Blade',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/Blade.mp3',
    oga: 'http://krearts.fr/audio/groupes/Difoss/Blade.ogg',
  }, {
    artist: 'Dïfoss',
    title: '[DEMO] Sarcastic Forms',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/SarcasticForms.mp3',
    oga: 'http://krearts.fr/audio/groupes/Difoss/SarcasticForms.ogg',
  }, {
    artist: 'Dïfoss',
    title: '[DEMO] Sorrow',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/Sorrow.mp3',
    oga: 'http://krearts.fr/audio/groupes/Difoss/Sorrow.ogg',
  }];
}]);
