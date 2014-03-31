'use strict';

var app = angular.module('signin');

app.directive('signinForm', function() {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: 'views/subviews/auth-login-form.html',
    controller: function ($scope, signinService) {
      $scope.signinService = signinService;
    },
    link: function (scope, element) {
      // Hide click events that make dropdown hide itself
      element.bind('click', function(elm) {
        elm.stopPropagation();
      });
    }
  };
});

app.directive('signinToolbar', function ($window) {
  return {
    restrict: 'E',
    scope: {},
    replace: true,
    templateUrl: 'views/subviews/auth-login-toolbar.html',
    controller: function ($scope, signinService) {
      $scope.signinService = signinService;
    },
    link: function (scope, elm/*, attrs*/) {
      elm.find('.dropdown').addClass('open');

      /**
       * Currently authenticated user
       * @type {Boolean}
       */
      scope.isDropdownable = false;

      // Update DOM to switch to dropdown or fullscreen signin toolbar
      scope.updateDropdownableStatus = function() {
        scope.isDropdownable = ($window.innerWidth >= 1300);
      };

      // Plug DOM update to resize event
      angular.element($window).bind('resize', function() {
        scope.updateDropdownableStatus();
        // Force DOM update
        scope.$digest();
      });

      // Set DOM on initialization
      scope.updateDropdownableStatus();
    }
  };
});
