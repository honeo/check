/*
	comment
*/
const isObject = require('./is-object.js');

function isElement(arg){
	return isObject(arg) && arg instanceof Element;
}

module.exports = isElement;
