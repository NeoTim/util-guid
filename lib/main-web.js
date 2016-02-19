'use strict';

var guid = require('./util-gui');

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof window === 'object') {
    window.guid = factory();
  }
}(function() {

  return guid;
}));
