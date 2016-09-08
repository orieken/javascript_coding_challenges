(function() {
  'use strict';

  describe('controllers', function(){
    var vm;

    beforeEach(module('challenges'));
    beforeEach(inject(function(_$controller_, _webDevTec_) {
      spyOn(_webDevTec_, 'getTec').and.returnValue([{}, {}, {}, {}, {}]);

      vm = _$controller_('MainController');
    }));

    it('should define more than 5 awesome things', function() {
      expect(angular.isArray(vm.awesomeThings)).toBeTruthy();
      expect(vm.awesomeThings.length === 5).toBeTruthy();
    });
  });
})();
