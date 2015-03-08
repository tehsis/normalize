var charmap = require('./charmap');

var supported_chars = [];

Object.keys(charmap).forEach(function(code) {
  supported_chars.push(String.fromCharCode(code));
});

console.log(supported_chars.join(' '));
