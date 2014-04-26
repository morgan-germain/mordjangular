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

mainModule.controller('contactCtrl', ['$scope', '$http', '$log', function ($scope, $http, $log) {
  $scope.email = '';
  $scope.content = '';
  $scope.hideButton = false;
  $scope.messageSent = false;
  $scope.messageError = false;

  $scope.sendMessageFromContactForm = function() {
    $scope.hideButton = true;

    $http({method: 'POST', url: 'http://krearts.fr/contact-form.php'}).
    success(function() {
      $scope.showSuccess();
    }).
    error(function(data, status, headers, config) {
      $scope.showError();
    });

    $scope.showError = function() {
      $scope.messageError = true;
    };

    $scope.showSuccess = function() {
      $scope.messageSent = true;
    };
  };
}]);
