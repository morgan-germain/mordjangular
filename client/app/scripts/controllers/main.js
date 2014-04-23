'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', ['$rootScope', '$route',
      function ($scope, $route) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;


  $scope.arcaide = [
    {title: '1', url: 'http://krearts.fr/audio/1.mp3'},
  ];

  $scope.jetsetwilly = [
    {title: '1', url: 'http://krearts.fr/audio/jet-set-willy/1.mp3'},
    {title: '[WAV] bowiewilie-2', url: 'http://krearts.fr/audio/jet-set-willy/bowiewilie-2.wav'},
    {title: '[WAV] metalvoix', url: 'http://krearts.fr/audio/jet-set-willy/metalvoix.wav'},
  ];

  $scope.daffos = [
    {title: 'blade3-2', url: 'http://krearts.fr/audio/daffos/blade3-2.mp3'},
    {title: '[WAV] dafos', url: 'http://krearts.fr/audio/daffos/dafos.mp3'},
    {title: 'klinik-voix', url: 'http://krearts.fr/audio/daffos/klinik-voix.mp3'},
    {title: 'noizz6', url: 'http://krearts.fr/audio/daffos/noizz6.mp3'},
  ];

  $scope.eraserhead = [
    {title: 'kilinik-voix', url: 'http://krearts.fr/audio/eraserhead/klinik-voix.mp3'},
    {title: 'RZH-AnotherSuicide', url: 'http://krearts.fr/audio/eraserhead/RZH-AnotherSuicide.mp3'},
    {title: 'RZH-Break-Illusion', url: 'http://krearts.fr/audio/eraserhead/RZH-Break-Illusion.mp3'},
    {title: 'RZH-BurnSucker', url: 'http://krearts.fr/audio/eraserhead/RZH-BurnSucker.mp3'},
    {title: 'track3-voix', url: 'http://krearts.fr/audio/eraserhead/track3-voix.mp3'},
    {title: 'Trk8-burnsucker', url: 'http://krearts.fr/audio/eraserhead/Trk8-burnsucker.mp3'},
  ];

  $scope.toxicazsid = [
    {title: 'Toxicazsid-BelowMyBunker', url: 'http://krearts.fr/audio/toxicazsid/Toxicazsid-BelowMyBunker.mp3'},
    {title: 'Toxicazsid-FollowingCold', url: 'http://krearts.fr/audio/toxicazsid/Toxicazsid-FollowingCold.mp3'},
    {title: 'Toxicazsid-Mescaline', url: 'http://krearts.fr/audio/toxicazsid/Toxicazsid-Mescaline.mp3'},
  ];


}]);
