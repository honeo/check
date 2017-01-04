/*
	設定オブジェクトを返す
*/
const config = {
	// 可変長引数に関する設定
	variadic: {
		ignore: ['isMultiple'] // 無視する関数名
	},

	// 別名付けるやつ
	short: {
		isArray: 'isArr',
		isBoolean: 'isBool',
		isFunction: 'isFunc',
		isNumber: 'isNum',
		isRegExp: 'isRE',
		isString: 'isStr',
		isObject: 'isObj',
		isDocumentFragment: 'isDF'
	}
}

module.exports = config;
