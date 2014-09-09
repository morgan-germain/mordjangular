'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('RazorHeadCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Razor Head',
    title: '[DEMO] Another Suicide',
    mp3: 'http://krearts.fr/audio/groupes/RazorHead/AnotherSuicide.mp3',
    oga: 'http://krearts.fr/audio/groupes/RazorHead/AnotherSuicide.ogg',
  }, {
    artist: 'Razor Head',
    title: '[DEMO] Break Illusion',
    mp3: 'http://krearts.fr/audio/groupes/RazorHead/Break-Illusion.mp3',
    oga: 'http://krearts.fr/audio/groupes/RazorHead/Break-Illusion.ogg',
  }, {
    artist: 'Razor Head',
    title: '[DEMO] Burn Sucker',
    mp3: 'http://krearts.fr/audio/groupes/RazorHead/RZH-BurnSucker.mp3',
    oga: 'http://krearts.fr/audio/groupes/RazorHead/RZH-BurnSucker.ogg',
  }];
}]);