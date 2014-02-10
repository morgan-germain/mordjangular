'use strict';

describe('Controller: ClientAppCtrl', function () {

  // load the controller's module
  beforeEach(module('clientApp'));

  var ClientAppCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ClientAppCtrl = $controller('ClientAppCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
