'use strict';

describe('Controller: ClientAppCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var scope, ctrl;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ctrl = $controller('ClientAppCtrl', {
      $scope: scope
    });
  }));
});
