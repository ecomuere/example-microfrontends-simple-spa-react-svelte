define('module.search/module', [
  'module.search/view/View'
], function (View) {
  'use strict';
  return {    
    init: function (options) {
      new View({
        el: options.$el
      }, options);
    }
  };
});