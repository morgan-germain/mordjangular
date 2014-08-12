'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('JetSetWillyCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Jet Set Willy',
    title: 'The Marked Brother',
    mp3: 'http://krearts.fr/audio/groupes/jet-set-willy/The%20marked%20brother.mp3',
    oga: 'http://krearts.fr/audio/groupes/jet-set-willy/The%20marked%20brother.ogg',
  }, {
    artist: 'Jet Set Willy',
    title: 'Forged Iron',
    mp3: 'http://krearts.fr/audio/groupes/jet-set-willy/forged%20iron.mp3',
    oga: 'http://krearts.fr/audio/groupes/jet-set-willy/forged%20iron.ogg',
  }, {
    artist: 'Jet Set Willy',
    title: 'Omit to Be',
    mp3: 'http://krearts.fr/audio/groupes/jet-set-willy/omit%20to%20be.mp3',
    oga: 'http://krearts.fr/audio/groupes/jet-set-willy/omit%20to%20be.ogg',
  }];
}]);
