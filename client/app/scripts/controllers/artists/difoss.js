'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('DifossCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Dïfoss',
    title: 'Blade',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/Blade.mp3',
    free: true
  }, {
    artist: 'Dïfoss',
    title: 'Sarcastic Forms',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/SarcasticForms.mp3',
    free: true
  }, {
    artist: 'Dïfoss',
    title: 'Sorrow',
    mp3: 'http://krearts.fr/audio/groupes/Difoss/Sorrow.mp3',
    free: true
  }];
}]);