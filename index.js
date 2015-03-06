(function(global, factory) {
  if (typeof define === 'function' && define.amd) {
    define(function() {
      return factory(global, global.document);
    });
  } else if (typeof module !== 'undefined' && module.exports) {
      module.exports = factory(global, global.document);
  } else {
      global.standarize = factory(global, global.document);
  }
} (typeof window !== 'undefined' ? window : this, function (window, document) {
  var charmap = require('./charmap');

  var regexstr = '[' + Object.keys(charmap).join(' ') + ']';
  var regex = new RegExp(regexstr);


  function replacer(charToReplace) {
    return charmap[charToReplace];
  }

  function standarize(str) {
    return str.replace(regex, replacer);
  }

  return standarize;
}));
