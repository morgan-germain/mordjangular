'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  describe('Phone list view', function() {

    beforeEach(function() {
      browser().navigateTo('app/index.html');
    });


    it('should there a list of awesomeThings shown', function() {
      expect(repeater('.awesomeThing div').count()).toBe(4);
    });
  });
});
