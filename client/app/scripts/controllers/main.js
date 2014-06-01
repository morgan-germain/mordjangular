'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('mainCtrl', ['$rootScope', '$route',
      function ($scope, $route) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;

  $scope.toxicazsid = [
    {title: 'Toxicazsid-BelowMyBunker', url: 'http://krearts.fr/audio/toxicazsid/Toxicazsid-BelowMyBunker.mp3'},
    {title: 'Toxicazsid-FollowingCold', url: 'http://krearts.fr/audio/toxicazsid/Toxicazsid-FollowingCold.mp3'},
    {title: 'Toxicazsid-Mescaline', url: 'http://krearts.fr/audio/toxicazsid/Toxicazsid-Mescaline.mp3'},
  ];

}]);

mainModule.controller('contactCtrl', ['$scope', '$http', function ($scope, $http) {
  $scope.email = '';
  $scope.content = '';
  $scope.hideButton = false;
  $scope.messageSent = false;
  $scope.messageError = false;

  $scope.sendMessageFromContactForm = function() {
    $scope.hideButton = true;

    var myData = {
      'email': $scope.email,
      'content': $scope.content
    };
    //$http.post({method: 'POST', url: 'http://krearts.fr/contact-form.php'})
    $http.post('http://krearts.fr/contact-form.php', myData)
    .success(function() {
      $scope.messageSent = true;
      $scope.hideButton = true;
    })
    .error(function() {
      $scope.messageError = true;
      $scope.hideButton = true;
    });
  };
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