'use strict';

var mainModule = angular.module('mainModule', []);

mainModule.controller('headerCtrl', ['$scope', '$route',
      function ($scope, $route) {
  // Keep route scope to obtain active tab
  $scope.$route = $route;
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
