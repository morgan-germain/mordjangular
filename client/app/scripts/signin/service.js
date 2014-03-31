'use strict';

var app = angular.module('signin');

// See example with https://github.com/fnakstad/angular-client-side-auth

app.factory('signinService', ['$http', '$cookieStore', '$log', function($http, $cookieStore, $log){
  var currentUser = $cookieStore.get('user') || { username: '', email: '' };

  $cookieStore.remove('user');

  function changeUser(user) {
    angular.extend(currentUser, user);
  }

  return {
    /**
     * Is user authenticated ?
     * @type {Boolean}
     */
    isAuthenticated: function(user) {
      if(user === undefined) {
        user = currentUser;
      }
      return user.username !== '';
    },
    // Attempt to create user account
    signup: function(user, success, error) {
      $http.post('/signup', user).success(function(res) {
        changeUser(res);
        success();
      }).error(function(res) {
        // TODO: Perform custom stuff here
        $log.info('Resources = ' + res);
        error();
      });
    },
    // Authenticate user with given credentials
    signin: function(user, success, error) {
      $http.post('/signin', user).success(function(user){
        changeUser(user);
        success(user);
      }).error(function(res) {
        // TODO: Perform custom stuff here
        $log.info('Resources = ' + res);
        error();
      });
    },
    // Disconnect current user
    signout: function(success, error) {
      $http.post('/signout').success(function(){
        changeUser({ username: '' });
        success();
      }).error(error);
    },

    // Access logged user by typing SigningService.username / SigningService.email
    user: currentUser
  };
}]);
