/*
	comment
*/
const isNode = require('./is-node.js');

function isElement(arg){
	return isNode(arg) && arg.nodeType===1;
}

module.exports = isElement;
