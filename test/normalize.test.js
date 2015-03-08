var characters_map = require('../charmap.json');
var special_characters = Object.keys(characters_map);
var characters_array = []; 
Object.keys(characters_map).forEach(function(key) {
 characters_array.push(characters_map[key]);
});

var assert = require('assert');
console.time('duration');
var normalize = require('../index');
special_characters.forEach(function(value, index) {
  var special_char = String.fromCharCode(value);
  assert(normalize(special_char) === characters_array[index], 'The character ' + special_char + ' was normalized');
});
console.timeEnd('duration');
