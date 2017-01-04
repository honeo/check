/*
	comment
*/
const isNumber = require('./is-number.js');
const isObject = require('./is-object.js');

function isNode(arg){
	return isObject(arg) && isNumber(arg.nodeType);
}

module.exports = isNode;
