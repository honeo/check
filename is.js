/*
	可変長引数化
*/

// 素の判定モジュール詰め合わせ
const _is = require('./_is');

// 設定
const config = require('./config.js');

// このモジュール返り値
const is = {}

/*
	_isの関数を元に改名＆可変長引数化
		可変長引数
			引数があれば判定関数を渡してevery、なければfalseを返す
			config.variadic.ignoreと一致するメソッド名は無視する
		改名
			config.shortのpropertyと一致する名前のメソッドは略称版を作る

*/
for(let [key, func] of Object.entries(_is)){


	// 関数名作り isFooBar => FooBar, foobar [, FB, fb]
	const nameArr = [];
	const name1 = key.slice(2);
	const name2 = name1.toLowerCase();
	nameArr.push(name1, name2);
	// 略称版があれば作る
	const name_short = config.short[key];
	if( name_short ){
		const name_short1 = name_short.slice(2);
		const name_short2 = name_short1.toLowerCase();
		nameArr.push(name_short1, name_short2);
	}

	// 可変長引数化
	const method = (function(){
		const isVariadic = !config.variadic.ignore.includes(key);
		// console.log(`isVariadic: ${key} ${isVariadic}`);
		if( isVariadic ){
			return (...args)=>{
				return args.length ?
					args.every(func):
					false;
			}
		}else{
			return func;
		}
	}());

	nameArr.forEach( (name)=>{
		is[name] = method;
	});

}

module.exports = is;
