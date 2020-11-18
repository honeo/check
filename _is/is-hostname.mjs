// Var
const re_label = /[a-z0-9][a-z0-9-]+[a-z0-9]/;
const re_tld = /[a-z]{2,}|[a-z]{2}\.[a-z]{2}/;
const re_domain = new RegExp(`${re_label.source}\.${re_tld.source}`);
const re_hostname = new RegExp(`^(${re_label.source}\\.)*${re_domain.source}$`, 'i');


/*
	ホスト名文字列か
		厳密な仕様がよくわからないのでやっつけ実装。
		dotで区切られた半角英数＆ハイフン（ラベル）。
			大文字・小文字は区別しない。
			ハイフンは先頭・末尾NG.
			ラベル毎の長さは3-63文字。
				ドメイン部分は2文字もある。
			合計255文字まで。

		args
			1: string
		result
			boolean
*/
function isHostname(str){
	const isU256 = str.length <= 255;
	return isU256 && re_hostname.test(str);
}



export default isHostname;
