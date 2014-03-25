'use strict';

var app = angular.module('signin');

app.factory('signinService', function(){
  return {
    isSignupShown: false,
    isLoginShown: false,

    /**
     * Currently authenticated user
     * @dict
     */
    currentUser: {
      username: '',
      email: ''
    },

    showLogin: function () {
      this.isSignupShown = false;
      this.isLoginShown = true;
    },

    hideAll: function () {
      this.isSignupShown = false;
      this.isLoginShown = false;
    },

    toggleLoginView: function () {
      if (!this.isLoginShown) {
        this.showLogin();
      } else {
        this.hideAll();
      }
    },

    showSignup: function () {
      this.isLoginShown = false;
      this.isSignupShown = true;
    },

    login: function (username/*, password*/) {
      this.currentUser = {username: username, email: username+'@example.com' };
      this.isLoginShown = false;
    },

    signup: function (username, email/*, password1, password2*/) {
      this.currentUser = {username: username, email: email};
      this.isSignupShown = false;
    },

    logout: function () {
      delete this.currentUser;
    },

    isAuthenticated: function () {
      return this.currentUser.username !== '' && this.currentUser.email !== '';
    }
  };
});


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
