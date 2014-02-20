'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('E2E Tests: Rooting through pages', function() {

  describe('Main page', function() {

    beforeEach(function() {
      browser().navigateTo('/' /*'app/index.html'*/);
    });

    it('should display the correct home page', function() {
      expect(browser().location().path()).toBe('/');
    });

    it('should there a list of awesomeThings shown', function() {
      expect(repeater('div.awesomeThing').count()).toBe(3);
    });
  });
});
