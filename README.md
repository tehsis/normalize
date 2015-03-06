# Normalize

Normalize a string with utf-8 characters.

```js
console.log(normalize('Åland')) // Aland
```

```js
var n = require('normalize');

console.log(n('Åland')) // Aland
```

```js
define(['normalize'],
function(n) {
  console.log(n('Åland')) // Aland
});
```

# How it works?

Normalize is based on https://github.com/django/django/blob/master/django/contrib/admin/static/admin/js/urlify.js#L122 but supporting a
larger character's map parsed from http://unicode.org/charts/charindex.html
