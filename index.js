'use strict';

var Filter = require('broccoli-persistent-filter');

function UseStrictRemover (inputTree, _options) {
  if (!(this instanceof UseStrictRemover)) {
    return new UseStrictRemover(inputTree, _options);
  }

  var options = _options || {};
  if (!options.hasOwnProperty('persist')) {
    options.persist = true;
  }
  Filter.call(this, inputTree, options);
}

UseStrictRemover.prototype = Object.create(Filter.prototype);
UseStrictRemover.prototype.constructor = UseStrictRemover;

UseStrictRemover.prototype.extensions = ['js'];
UseStrictRemover.prototype.targetExtension = 'js';

UseStrictRemover.prototype.baseDir = function() {
  return __dirname;
};

UseStrictRemover.prototype.processString = function(content) {
  return content.replace(/\s*["']use strict['"]\s*;/g, '');
};

module.exports = UseStrictRemover;
