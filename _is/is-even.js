/*
	偶数判定（0含む)
*/
const isNumber = require('./is-number.js');

// 奇数判定
function isEven(num){
	return isNumber(num) && !!(num % 2);
}

module.exports = isEven;
