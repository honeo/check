/*
	引数のdateインスタンスが同じ日か

		args
			1: date
			2: date
		result
			boolean
*/
function isSameDay(date1, date2){
	const year_1 = date1.getFullYear();
	const year_2 = date2.getFullYear();
	const mon_1 = date1.getMonth();
	const mon_2 = date2.getMonth();
	const day_1 = date1.getDate();
	const day_2 = date2.getDate();
	const str_date1 = `${year_1}.${mon_1}.${day_1}`;
	const str_date2 = `${year_2}.${mon_2}.${day_2}`;
	return str_date1===str_date2;
}

export default isSameDay;
