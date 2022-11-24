'use strict';
var $ = require('../internals/export');
var call = require('../internals/function-call');
var toSetLike = require('../internals/to-set-like');
var $isSubsetOf = require('../internals/set-is-subset-of');

// `Set.prototype.isSubsetOf` method
// https://github.com/tc39/proposal-set-methods
$({ target: 'Set', proto: true, real: true, forced: true }, {
  isSubsetOf: function isSubsetOf(iterable) {
    return call($isSubsetOf, this, toSetLike(iterable));
  }
});
