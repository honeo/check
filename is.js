// 設定
const config = require('./config.js');

// 型・インスタンス
const isArray = require('./lib/is-array.js');
const isBoolean = require('./lib/is-boolean.js');
const isFunction = require('./lib/is-function.js');
const isNumber = require('./lib/is-number.js');
const isRegExp = require('./lib/is-reg-exp.js');
const isString = require('./lib/is-string.js');
const isUndefined = require('./lib/is-undefined.js');
const isNull = require('./lib/is-null.js');
const isNaN = require('./lib/is-nan.js');
const isDate = require('./lib/is-date.js');
const isEvent = require('./lib/is-event.js');
const isEventTarget = require('./lib/is-event-target.js');
const isObject = require('./lib/is-object.js');
const isPromise = require('./lib/is-promise.js');
// 数値の内容判定
const isOdd = require('./lib/is-odd.js');
const isEven = require('./lib/is-even.js');
const isMultiple = require('./lib/is-multiple.js');
// DOM
const isNode = require('./lib/is-node.js');
const isTextNode = require('./lib/is-textnode.js');
const isElement = require('./lib/is-element.js');
const isDocumentFragment = require('./lib/is-document-fragment.js');
// 雑多
const isTrue = require('./lib/is-true.js');
const isFalse = require('./lib/is-false.js');
const isTruthy = require('./lib/is-truthy.js');
const isFalsy = require('./lib/is-falsy.js');
const isObjectLiteral = require('./lib/is-object-literal.js');
const isArrayLike = require('./lib/is-array-like.js');
const isComparisonOperator = require('./lib/is-comparison-operator.js');
const isSemVer = require('./lib/is-sem-ver.js');
const isVersion = require('./lib/is-version.js');
const isEmpty = require('./lib/is-empty.js');

// isMethod詰め合わせ
const base = {}
// 返り値
const is = {}

/*
	型チェック
*/
base.array = isArray;
base.arr = isArray;

base.boolean = isBoolean;
base.bool = isBoolean;

base.function = isFunction;
base.func = isFunction;

base.number = isNumber;
base.num = isNumber;

base.regexp = isRegExp;
base.re = isRegExp;

base.string = isString;
base.str = isString;

base.undefined = isUndefined;
base.null = isNull;

base.nan = isNaN;

/*
	インスタンス判定
*/
base.date = isDate;

base.event = isEvent;

base.eventtarget = isEventTarget;

base.object = isObject;
base.obj = isObject;

base.promise = isPromise;



/*
	Numberの内容判定
*/
base.odd = isOdd;
base.even = isEven;
base.multiple = isMultiple;

/*
	DOM
*/
base.node = isNode;

base.textnode = isTextNode;

base.element = isElement;

base.documentfragment = isDocumentFragment;
base.df = isDocumentFragment;


/*
	その他
*/

base.true = isTrue;

base.false = isFalse;

base.truthy = isTruthy;

base.falsy = isFalsy;

base.objectliteral = isObjectLiteral;

base.arraylike = isArrayLike;

base.comparisonoperator = isComparisonOperator;

base.semver = isSemVer;

base.version = isVersion;

base.empty = isEmpty;

/*
	is
		baseを可変長引数化
			config.variadic.ignoreの内容は無視する
		引数があれば判定関数を渡してevery
		なければfalseを返す
*/
for(let [key, func] of Object.entries(base)){
	const isVariadic = !config.variadic.ignore.includes(key);
	if( isVariadic ){
		is[key] = (...args)=>{
			return args.length ?
				args.every(func):
				false;
		}
	}else{
		is[key] = func;
	}

}

module.exports = is;
