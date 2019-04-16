# check
* [honeo/check](https://github.com/honeo/check)
* [@honeo/check](https://www.npmjs.com/package/@honeo/check)


## なにこれ
型・インスタンス等をチェックするやつ。  
Polyfill前提。


## 使い方
```bash
$ npm i @honeo/check
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
is.FooBar===is.foobar; // true
```


### Type, Instance
```js
is.array([]); // true
is.arr([], []); // true

is.boolean(false); // true
is.bool(true, false); // true

is.buffer(new Buffer('foobar')); // true

is.error(new Error('hoge')); // true

is.function(function(){}); // true
is.func(()=>{}); // true
is.fn(_=>_); // true

is.number(1); // true
is.num(0, 1); // true

is.regexp(/hoge/); // true
is.re(/foo/, /bar/); // true

is.string('hoge'); // true
is.str('fuga', 'piyo'); // true

is.undefined(undefined); // true
is.undef(null); // false

is.null(null); // true

is.nan(NaN); // true

is.date(new Date()); // true

is.object({}); // true
is.obj(null); // false

is.promise(new Promise(_=>_)); // true

is.stats( fs.statSync('./') ); // true
```

| name                                   | description | varargs |
|:-------------------------------------- |:----------- |:-------:|
| Array, Arr, array, arr                 |             |    ○    |
| Boolean, Bool, boolean, bool           |             |    ○    |
| Buffer, Buf, buffer, buf               |             |    ○    |
| Error, Err, error, err                 |             |    ○    |
| Function, Func, Fn, function, func, fn |             |    ○    |
| Number, Num, number, num               |             |    ○    |
| RegExp, RE, regexp, re                 |             |    ○    |
| String, Str, string, str               |             |    ○    |
| Undefined, Undef, undefined, undef     |             |    ○    |
| Null, null                             |             |    ○    |
| NaN, nan                               |             |    ○    |
| Date, date                             |             |    ○    |
| Object, Obj, object, obj               |             |    ○    |
| Promise, promise                       |             |    ○    |
| Stats, stats                           |             |    ○    |



### 数値

```js
is.odd(2); // true

is.even(3); // true

is.multiple(8080, 80); // true
```

| name               | description            | varargs |
|:------------------ |:---------------------- |:-------:|
| Odd, odd           |                        |    ○    |
| Even, even         |                        |    ○    |
| Multiple, multiple | 引数1が引数2の倍数か。 |    ✗    |




### DOM

```js
is.node(document.body, document.createTextNode('hoge')); // true

is.textnode(document.createTextNode('hoge')); // true

is.element(document.head, document.body); // true

is.df(document.createDocumentFragment()); // true

is.event( new Event("hoge") ); // true

is.eventtarget(document, window); // true
```

| name                                       | description | varargs |
|:------------------------------------------ |:----------- |:-------:|
| Node, node                                 |             |    ○    |
| TextNode, textnode                         |             |    ○    |
| Element, Elm, element, elm                 |             |    ○    |
| DocumentFragment, DF, documentfragment, df |             |    ○    |
| Event, event                               |             |    ○    |
| EventTarget, eventtarget                   |             |    ○    |


### その他

```js
is.true(true, !0); // true

is.false(false !1); // true

is.truthy(true, "hoge", 1, [], {}); // true

is.falsy(null, undefined, "", 0, NaN); // true

is.instance(new Date(), Date); //true

is.objectliteral({}); // true
not.objectliteral([], new function(){}); // true

is.arraylike([], 'hoge'); // true

is.comparisonoperator('<='); // true

is.semver('1.2.3'); // true
is.semver('1.0.0-foo.bar'); // true

is.version('7.7.4', '2.5.0.1') // true
is.version('1.2A', 1.0); // false

is.empty('', [], {}) // true
is.empty(0, null); // false

is.leapyear(2020, new Date('2024'));
```

| name                                       | description                                       | varargs |
|:------------------------------------------ |:------------------------------------------------- |:-------:|
| ArrayLike(), arraylike()                   |                                                   |    ○    |
| True(), true()                             |                                                   |    ○    |
| False(), false()                           |                                                   |    ○    |
| Truthy(), truthy()                         |                                                   |    ○    |
| Falsy(), falsy()                           |                                                   |    ○    |
| Empty(), empty()                           | 要素が空か。                                      |    ○    |
| Instance(), instance                       | 引数1が引数2のConstructor/Classのインスタンスか。 |    ✗    |
| ObjectLiteral(), objectliteral()           | 未継承の素のオブジェクトか。                      |    ○    |
| ComparisonOperator(), comparisonoperator() | 有効な比較演算子の文字列か。                      |    ○    |
| SemVer(), semver()                         | 有効なSemVer文字列か。                            |    ○    |
| Version(), Ver(), versiom(), ver()         | 有効な数字, dotのバージョン文字列か。             |    ○    |
| LeapYear(), leapyear()                     | 閏年か。                                          |    ○    |
