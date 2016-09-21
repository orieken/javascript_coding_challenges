(function(){
  var expect = require('chai').expect;

  /*
   The basic premise is really simple.
   You write a module called StringSplitter, that has a single function named chop that takes two arguments,
   a string, and a column number.  The function returns the string, but with line breaks inserted at just the
   right places to make sure that no line is longer than the column number.
   You try to break lines at word boundaries.
   */

  describe('StringSplitter:  ', function(){
    it('is defined', function(){
      expect(StringSplitter).to.be.defined;
    });

    it('returns empty when sent null and 1', function(){
      expect(StringSplitter.chop(null, 1)).to.equal('');
    });

    it('returns empty when sent "" and 1', function(){
      expect(StringSplitter.chop('', 1)).to.equal('');
    });

    it('returns x when sent x and 1', function(){
      expect(StringSplitter.chop('x', 1)).to.equal('x');
    });

    xit('returns x\nx when sent xx and 1', function(){
      expect(StringSplitter.chop('xx', 1)).to.equal('x\nx');
    });

    xit('returns x\nx\nx when sent xxx and 1', function(){
      expect(StringSplitter.chop('xxx', 1)).to.equal('x\nx\nx');
    });

    xit('returns x\nx when sent x x and 1', function(){
      expect(StringSplitter.chop('x x', 1)).to.equal('x\nx');
    });

    xit('returns x\nxx when sent x xx and 3', function(){
      expect(StringSplitter.chop('x xx', 3)).to.equal('');
    });

    xit('returns x\nx when sent "Four score and" and 7', function(){
      expect(StringSplitter.chop('Four score and', 7)).to.equal('Four\nscore\nand');
    });


    xit('returns long split string when sent a long string and 7', function(){
      var initialString = 'Four score and seven years ago our fathers brought forth upon this continent';
      var expectedString = 'Four\nscore\nand\nseven\nyears\nago our\nfathers\nbrought\nforth\nupon\nthis\ncontine\nnt';
      expect(StringSplitter.chop(initialString, 7)).to.equal(expectedString);
    });

    xit('a dog', function(){
      expect(StringSplitter.chop('a dog', 5)).to.equal('a dog');
    });
  });
})();
