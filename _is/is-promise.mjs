/*
	引数がPromiseインスタンスか
*/
function isPromise(arg){
	return arg instanceof Promise;
}

export default isPromise;
