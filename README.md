# Normalize

Normalize a string with utf-8 characters.

```js
# Used as a global variable
console.log(normalize('Åland')) // Aland
```

```js
# Used as commonjs module
var n = require('normalize');

console.log(n('Åland')) // Aland
```

```js
# Used as AMD module
define(['normalize'],
function(n) {
  console.log(n('Åland')) // Aland
});
```

# How it works?

Normalize is based on [Django's urlify](https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js#L122) but supporting a
larger character's map parsed from [http://unicode.org/charts/charindex.html]

# Why?

JS compares strings according to the utf-8 code of each characters. This means, for example, that õ comes after z (i.e. 'õ' > 'z' === true)
and this causes disasters when sorting strings. With normalize, you can correctly fix this issue.
Now you have available `String.prototype.localCompare` which solve this issue, but is not yet supported on some browsers (i.e. IE10 and below).
