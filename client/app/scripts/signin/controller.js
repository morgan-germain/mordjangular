'use strict';

var app = angular.module('signin');

// General form controller
app.controller('signinController',
    ['$rootScope', '$scope', '$location', '$window', '$log', 'signinService',
    function($rootScope, $scope, $location, $window, $log, signinService) {

  $scope.login = 'bob@nowhere.com';
  $scope.password = 'secret';
  $scope.rememberMe = true;

  $scope.signin = function() {
    signinService.signin({
        login: $scope.login,
        password: $scope.password,
        rememberMe: $scope.rememberMe
      },
      function(/*res*/) {
        $log.info('Redirecting to /');
        $location.path('/');
      },
      function(/*err*/) {
        $log.info('Handling a signin failure from controller');
        $rootScope.error = 'Failed to login';
      });
  };
}]);

app.controller('signinModalController', ['$scope', '$modal', '$log', function($scope, $modal, $log) {

  // Modal handler
  $scope.openModal = function () {

    var modalInstance = $modal.open({
      templateUrl: 'views/subviews/auth-login-modal.html',
      controller: 'signinModalInstanceSubCtrl'
    });

    modalInstance.result.then(function (dialogResult) {
      $log.info('Modal worked with result = ' + dialogResult);
    }, function (dialogResult) {
      $log.info('Modal dismissed at: ' + new Date() + 'with message = ' + dialogResult);
    });
  };
}]);

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

app.controller('signinModalInstanceSubCtrl', ['$scope', '$modalInstance', function ($scope, $modalInstance) {
  $scope.ok = function () {
    $modalInstance.close('ok');
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
}]);