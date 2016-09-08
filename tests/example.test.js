(function(){
  var assert = require('chai').assert;

  describe('Example Assert:  ', function() {

    beforeEach(function () {});
    it('is True', function () {
      assert.isTrue(true);
    });
    it('is falsey', function () {
      assert.isFalse(false);
    });

  });
})();

(function(){
  var expect = require('chai').expect;

  describe('Example Expect:  ', function() {

    beforeEach(function () {});
    it('is truthy', function () {
      expect(true).to.be.truthy
    });

    it('is falsey', function () {
      expect(false).to.be.falsey;
    });

  });
})();
