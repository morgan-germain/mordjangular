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

  it('should have a name and a content attached to each awesomeThing', function () {
    console.info('Listing each awesomeThing');
    scope.awesomeThings.forEach(function(awesomeThing) {
      expect(awesomeThing.name).toBeDefined();
      expect(awesomeThing.content).toBeDefined();
    });
  });
});
