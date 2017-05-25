function getAgeFromBirthday() {
	var month= parseInt(document.getElementById('b-month').value);
	var day = parseInt(document.getElementById('b-day').value);
	var year = parseInt(document.getElementById('b-year').value);
	month=month-1

	var b_date = new Date(year, month, day);
	if (b_date.getDate() != day || b_date.getMonth() != month || b_date.getFullYear() != year) 
	{
	alert('Пожалуйста, введите правильную дату рождения');
	return false;
	}

	var today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);

	if (b_date > today) {
	alert('Вы из будущего или ещё не родились');
	return false;
	}
	time();
}

function time() {
	var month= parseInt(document.getElementById('b-month').value);
	var day = parseInt(document.getElementById('b-day').value);
	var year = parseInt(document.getElementById('b-year').value);
	month=month-1

	var b_date = new Date(year, month, day);

	var today = new Date();
	today.setHours(0);
	today.setMinutes(0);
	today.setSeconds(0);

	var otvet = (Math.floor((today - b_date) / 31556952000));
	//1 год 31556952000,0112 миллисекунда
	document.form1.otvet.value="Ваш возраст " + otvet+ " (год/года/лет)";

	var day_=new Date(year, month, day);
	var weekday=new Array(7);
	weekday[0]=" воскресенье";
	weekday[1]=" понедельник";
	weekday[2]="о вторник";
	weekday[3]=" среду";
	weekday[4]=" четверг";
	weekday[5]=" пятницу";
	weekday[6]=" субботу";
	document.form1.otvet.value += ", Вы родились в" + weekday[day_.getDay()];

	var comment =''
	if (b_date > today) {
		var comment = "Вы из будущего или ещё не родились"
	}
	document.form1.message.value= comment;

	var d = new Date();
	year2=(d.getFullYear());
	timeend= new Date(year2, month, day);

	today = new Date();
	var delta = timeend-today
	if (delta < 0) 
	{
		delta += 365 * 24 * 60 * 60 * 1000;
	}
	today = Math.floor(delta/1000);

	var tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
	var tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
	var thour=today%24; today=Math.floor(today/24);
	var timestr=today +" дней "+ thour+" часов "+tmin+" минут "+tsec+" секунд";
	document.form1.bday.value= timestr;
	window.setTimeout("time()",1000);

	var now = new Date();
	var setdate = new Date(year, month, day);
	var millisec = (now - setdate) ;
	var millisec = Math.round(millisec);
	var sec=Math.round(millisec/1000)
	var min=Math.round(sec/ 60)
	var thours=Math.round(min/ 60) //часы
	var answer=Math.round(thours/ 24) //дни
	var weeks=Math.round(answer/ 7) //недели 
	var months=Math.round(weeks/ 4.345238095238) // месяц  4.345238095238

	document.form1.millisec.value= millisec+" миллисекунд";
	document.form1.sec.value= sec+" секунд";
	document.form1.min.value= min+" минут";	
	document.form1.hours.value= thours+" часов";
	document.form1.answer.value= answer+" дней";
	document.form1.weeks.value= weeks+" недель";
	document.form1.months.value= months+" месяцев";

	window.setTimeout("time()",1000);
}




	

