'use strict';

var mainModule = angular.module('mainModule');

mainModule.controller('ToxicAzSidCtrl', ['$scope', function ($scope) {

  $scope.tracks = [{
    artist: 'Toxic Azsid',
    title: 'Below My Bunker',
    mp3: 'http://krearts.fr/audio/groupes/Toxicazsid/Toxicazsid-BelowMyBunker.mp3',
    oga: 'http://krearts.fr/audio/groupes/Toxicazsid/Toxicazsid-BelowMyBunker.ogg',
  }, {
    artist: 'Toxic Azsid',
    title: 'Following Cold',
    mp3: 'http://krearts.fr/audio/groupes/Toxicazsid/Toxicazsid-FollowingCold.mp3',
    oga: 'http://krearts.fr/audio/groupes/Toxicazsid/Toxicazsid-FollowingCold.ogg',
  }, {
    artist: 'Toxic Azsid',
    title: 'Mescaline',
    mp3: 'http://krearts.fr/audio/groupes/Toxicazsid/Toxicazsid-Mescaline.mp3',
    oga: 'http://krearts.fr/audio/groupes/Toxicazsid/Toxicazsid-Mescaline.ogg',
  }];
}]);
