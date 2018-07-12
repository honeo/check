/*
	comment
*/
const isObject = require('./is-object.js');

function isElement(arg){
	return arg instanceof Element;
}

module.exports = isElement;
