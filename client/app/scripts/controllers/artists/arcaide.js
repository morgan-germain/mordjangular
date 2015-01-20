'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('ArcaideCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Arcaide',
    title: '2015 - Nôva',
    mp3: 'http://krearts.fr/audio/groupes/Arcaide/N%C3%B4va.mp3',
    oga: 'http://krearts.fr/audio/groupes/Arcaide/N%C3%B4va.ogg',
  }, {
    artist: 'Arcaide',
    title: '2014 - Negredite Xydo',
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


mainModule.controller('carouselController', ['$scope', function($scope) {
  $scope.slideImages = [
    'images/audio/groupes/Arcaide/l.jpg',
    'images/audio/groupes/Arcaide/lc.jpg',
    'images/audio/groupes/Arcaide/ld.jpg',
    'images/audio/groupes/Arcaide/le.jpg',
    'images/audio/groupes/Arcaide/lf.jpg',
    'images/audio/groupes/Arcaide/lg.jpg',
    'images/audio/groupes/Arcaide/lh.jpg',
    'images/audio/groupes/Arcaide/lj.jpg',
    'images/audio/groupes/Arcaide/lk.jpg',
    'images/audio/groupes/Arcaide/lm.jpg',
    'images/audio/groupes/Arcaide/ln.jpg',
    'images/audio/groupes/Arcaide/photo-1.jpg',
    'images/audio/groupes/Arcaide/photo-2.jpg',
    'images/audio/groupes/Arcaide/photo-3.jpg',
    'images/audio/groupes/Arcaide/photo-4.jpg',
    'images/audio/groupes/Arcaide/photo-5.jpg',
    'images/audio/groupes/Arcaide/photo-6.jpg'
  ];
}]);
