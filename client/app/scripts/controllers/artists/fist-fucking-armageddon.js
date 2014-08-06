'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('FistFuckingAramageddonCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Dïfoss',
    title: 'Blade',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/Blade.mp3',
    oga: 'http://krearts.fr/audio/groupes/Difoss/Blade.ogg',
    free: true
  }, {
    artist: 'Dïfoss',
    title: 'Sarcastic Forms',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/SarcasticForms.mp3',
    oga: 'http://krearts.fr/audio/groupes/Difoss/SarcasticForms.ogg',
    free: true
  }, {
    artist: 'Dïfoss',
    title: 'Sorrow',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/Sorrow.mp3',
    oga: 'http://krearts.fr/audio/groupes/Difoss/Sorrow.ogg',
    free: true
  }];
}]);
