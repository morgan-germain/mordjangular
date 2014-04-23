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
    {title: '1', url: 'http://krearts.fr/audio/1.mp3'},
  ];

  $scope.daffos = [
    {title: 'noizz6', url: 'http://krearts.fr/audio/noizz6.mp3'},
    {title: '1', url: 'http://krearts.fr/audio/1.mp3'},
  ];

  $scope.eraserhead = [
    {title: 'kilinik-voix', url: 'http://krearts.fr/audio/eraserhead/klinik-voix.mp3'},
    {title: 'RZH-AnotherSuicide', url: 'http://krearts.fr/audio/eraserhead/RZH-AnotherSuicide.mp3'},
    {title: 'RZH-Break-Illusion', url: 'http://krearts.fr/audio/eraserhead/RZH-Break-Illusion.mp3'},
    {title: 'RZH-BurnSucker', url: 'http://krearts.fr/audio/eraserhead/RZH-BurnSucker.mp3'},
    {title: 'track3-voix', url: 'http://krearts.fr/audio/eraserhead/track3-voix.mp3'},
    {title: 'Trk8-burnsucker', url: 'http://krearts.fr/audio/eraserhead/Trk8-burnsucker.mp3'},
  ];


}]);
