(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(global, global.document);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = factory(global, global.document);
  } else {
      global.normalize = factory(global, global.document);
  }
} (typeof window !== 'undefined' ? window : this, function (window, document) {
  var charmap = require('./charmap');

  var regex = new RegExp('[' + Object.keys(charmap).join(' ') + ']');

  function normalize(str) {
    return str.replace(regex, function() {
      return charmap[charToReplace];
    });
  }

  return normalize;
}));
