# Normalize ![travis](https://travis-ci.org/tehsis/normalize.svg?branch=master)

Normalize a string with utf-8 characters.

# Usage

Download: [normalize.js](https://github.com/tehsis/normalize/blob/master/normalize.js) or [normalize.min.js](https://github.com/tehsis/normalize/blob/master/normalize.min.js)

```
$npm install normalize --save
```

or

```
$bower install normalize --save
```

Just use the string you want to *normalize* as argument

```javascript
console.log(normalize('Åland')) // Aland
```

You can import it as a commonJS module

```javascript
var n = require('normalize');

console.log(n('Åland')) // Aland
```

or as an AMD module

```javascript
define(['normalize'],
function(n) {
  console.log(n('Åland')) // Aland
});
```

# How it works?

Normalize is based on [Django's urlify](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js#L122) scrapping character's map from [http://unicode.org/charts/charindex.html]

# Why?

JS _compares strings according to the utf-8 code of each character_. This means, for example, that *õ comes after z* (i.e. 'õ' > 'z' === true)
and this causes disasters when sorting strings. With normalize, you can correctly fix this.
Althought you have available `String.prototype.localCompare` which solve it, it is not yet supported on some browsers (i.e. IE10 and below).

# Supported characters

```
i À Á Â Ã Ä Å Ç È É Ê Ë Ì Í Î Ï Ñ Ò Ó Ô Õ Ö Ø Ù Ú Û Ü Ý ß à á â ã ä å ç è é ê ë ì í î ï ñ ò ó ô õ ö ø ù ú û ü ý ÿ ā ă ą ć ĉ ċ č ď đ ē ĕ ė ę ě ĝ ğ ġ ģ ĥ ħ ĩ ī ĭ į İ ı ĵ ķ ĺ ļ ľ ŀ ł ń ņ ň ō ŏ ő œ ŕ ŗ ř ś ŝ ş š ţ ť ŧ ũ ū ŭ ů ű ų ŵ ŷ Ÿ ź ż ž ſ ƀ Ɓ ƃ Ɔ ƈ Ɖ Ɗ ƌ Ǝ Ɛ ƒ Ɠ Ɨ ƙ ƚ Ɯ Ɲ ƞ Ɵ ơ ƥ ƫ ƭ Ʈ ư Ʋ ƴ ƶ ǎ ǐ ǒ ǔ ǝ ǥ ǧ ǩ ǫ ǰ ǵ ǹ ȁ ȃ ȅ ȇ ȉ ȋ ȍ ȏ ȑ ȓ ȕ ȗ ș ț ȟ Ƞ ȡ ȥ ȧ ȩ ȯ ȳ ȴ ȵ ȶ ȷ Ⱥ Ȼ ȼ Ƚ Ⱦ ȿ ɀ Ƀ Ʉ Ʌ Ɇ ɇ Ɉ ɉ Ɋ ɋ Ɍ ɍ Ɏ ɏ ɐ ɑ ɓ ɔ ɕ ɖ ɗ ɘ ɛ ɜ ɝ ɞ ɟ ɠ ɡ ɢ ɥ ɦ ɨ ɪ ɫ ɬ ɭ ɯ ɰ ɱ ɲ ɳ ɴ ɵ ɹ ɺ ɻ ɼ ɽ ɾ ɿ ʀ ʁ ʂ ʇ ʈ ʉ ʋ ʌ ʍ ʎ ʏ ʐ ʑ ʗ ʙ ʚ ʛ ʜ ʝ ʞ ʟ ʠ ʮ ʰ ʲ ʳ ʴ ʶ ʷ ʸ ˡ ˢ ˣ ̌ ̽ ͓ ͣ ͤ ͥ ͦ ͧ ͨ ͩ ͪ ͫ ͬ ͭ ͮ ͯ ᴀ ᴃ ᴄ ᴅ ᴇ ᴈ ᴉ ᴊ ᴋ ᴌ ᴍ ᴎ ᴏ ᴐ ᴑ ᴒ ᴓ ᴖ ᴗ ᴘ ᴙ ᴚ ᴛ ᴜ ᴝ ᴞ ᴟ ᴠ ᴡ ᴢ ᵢ ᵣ ᵤ ᵥ ḁ ḃ ḅ ḇ ḋ ḍ ḏ ḑ ḓ ḙ ḛ ḟ ḡ ḣ ḥ ḧ ḩ ḫ ḭ ḱ ḳ ḵ ḷ ḻ ḽ ḿ ṁ ṃ ṅ ṇ ṉ ṋ ṕ ṗ ṙ ṛ ṟ ṡ ṣ ṫ ṭ ṯ ṱ ṳ ṵ ṷ ṽ ṿ ẁ ẃ ẅ ẇ ẉ ẋ ẍ ẏ ẑ ẓ ẕ ẖ ẗ ẘ ẙ ẚ ẛ ạ ả ẹ ẻ ẽ ỉ ị ọ ỏ ụ ủ ỳ ỵ ỷ ỹ ⁱ ₕ ₖ ₗ ₘ ₙ ₚ ₛ ₜ ℂ ℊ ℋ ℌ ℍ ℐ ℑ ℒ ℓ ℔ ℕ ℘ ℙ ℚ ℛ ℜ ℝ ℤ ℨ ℬ ℭ ℯ ℰ ℱ Ⅎ ℳ ℴ ℺ ⅁ ⅂ ⅃ ⅄ ⅅ ⅆ ⅇ ⅈ ⅉ ⅎ Ↄ ↄ ∽ ∾ ⋿ ⌧ ☒ ☰ ⚊ ✕ ✖ ✗ ✘ ⦁ ⦂ ⱥ ⱦ ䷀ 
```
