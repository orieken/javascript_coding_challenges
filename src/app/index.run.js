(function() {
  'use strict';

  angular
    .module('challenges')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
