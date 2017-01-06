# check
* [honeo/check](https://github.com/honeo/check)
* [@honeo/check](https://www.npmjs.com/package/@honeo/check)

## なにこれ
型・インスタンス等をチェックするやつ。  
Polyfill前提。

## 使い方
```sh
$ npm i -S @honeo/check
```
```js
const {is, not, any} = require('@honeo/check');
// or
const is = require('@honeo/check/is');

is.arr([]); // true

is.arr([], {}); // false
not.arr([], {}); // false
any.arr([], {}); // true
```

## API
is, not, any共用。
```js
mod.FooBar===mod.foobar; // true
```

### Type

#### Array(), Arr(), array(), arr()
```js
is.array([]); // true

is.arr([], []); // true
```

#### Boolean(), Bool(), boolean(), bool()
```js
is.boolean(false); // true

is.bool(true, false); // true
```

#### Function(), Func(), function(), func()
```js
is.function(function(){}); // true

is.func(_=>_, _=>_); // true
```

#### Number(), Num(), number(), num()
```js
is.number(1); // true

is.num(0, 1); // true
```

#### RegExp(), RE(), regexp(), re()
```js
is.regexp(/hoge/); // true

is.re(/foo/, /bar/); // true
```

#### String(), Str(), string(), str()
```js
is.string('hoge'); // true

is.str('fuga', 'piyo'); // true
```

#### Undefined(), undefined()
```js
is.undefined(undefined); // true
```

#### Null(), null()
```js
is.null(null); // true
```

#### NaN(), nan()
```js
is.nan(NaN); // true
```

#### Date(), date()
```js
is.date(new Date()); // true
```

#### Object(), Obj(), object(), obj()
```js
is.object({}); // true

is.obj({}, {}); // true

is.obj(null); // false
```

#### Promise(), promise()
```js
is.promise(new Promise(_=>_)); // true
```

### 数値

#### Odd(), odd()
```js
is.odd(2); // true
```

#### Even(), even()
```js
is.even(3); // true
```

#### Multiple(), multiple(number, number)
可変長引数には非対応。
```js
is.multiple(8080, 80); // true
```

### DOM

#### Node(), node()
```js
is.node(document.createElement('a'), document.createTextNode('hoge')); // true
```

#### TextNode(), textnode()
```js
is.textnode(document.createTextNode('hoge')); // true
```

#### Element(), Elm(), element(), elm()
```js
is.element(document.head, document.body); // true
```

#### DocumentFragment(), DF(), documentfragment(), df()
```js
is.df(document.createDocumentFragment()); // true
```


#### Event(), event()
```js
is.event( new Event("hoge") ); // true
```

#### EventTarget(), eventtarget()
```js
is.eventtarget(document, window); // true
```

### その他

#### True(), true()
```js
is.true(true, !0); // true
```

#### False(), false()
```js
is.false(false !1); // true
```

#### Truthy(), truthy()
```js
is.truthy(true, "hoge", 1, [], {}); // true
```

#### Falsy(), falsy()
```js
is.falsy(null, undefined, "", 0, NaN); // true
```

#### ObjectLiteral(), objectliteral()
何も継承していない素のオブジェクトか。
```js
is.objectliteral({}); // true
not.objectliteral([], new function(){}); // true
```

#### ArrayLike(), arraylike()
```js
is.arraylike([], 'hoge'); // true
```

#### ComparisonOperator(), comparisonoperator()
有効な比較演算子の文字列か。
```js
is.comparisonoperator('<='); // true
```

#### SemVer(), semver()
有効なSemVer文字列か。
```js
is.semver('1.2.3'); // true

is.semver('1.0.0-foo.bar'); // true
```

#### Version(), Ver(), versiom(), ver()
有効な数字とdotからなるバージョン文字列か。
```js
is.version('7.7.4', '2.5.0.1') // true
is.version('1.2A', 1.0); // false
```

#### Empty(), empty()
引数の要素が空か。
```js
is.empty('', [], {}) // true
is.empty(0, null); // false
```
