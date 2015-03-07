var fs = require('fs');

var request = require('superagent');
var cheerio = require('cheerio');

var map = {};

request.get('http://unicode.org/charts/charindex.html')
.end(function(res) {
  var $ = cheerio.load(res.text);

 $('a[href*=pdf]').each(function() {
   var code = String.fromCharCode(parseInt($(this).text(), 16));
   var character_title = $(this).parent().prev().text();
   var character = character_title.charAt(0);

   if(character_title.charAt(1) === ' ' || character_title.charAt(1) === ',') {
    map[code.charCodeAt(0)] = character;
    map[(code.toLowerCase()).charCodeAt(0)] = character.toLowerCase();
   }
 });

 fs.writeFile('../charmap.json', JSON.stringify(map), function (err) {
    if (err) return console.log(err);
    console.log('charmap.json created!');
  });


});




