$(document).scroll(function(){
	var con = $("#top");
	var con2= $("#bottom");
	var position = $(window).scrollTop();
	if(position > 250){ con.fadeIn(500); }
	else if(position < 250){ con.fadeOut(500); }
	if(position > 250){ con2.fadeIn(500); }
	else if(position < 250){ con2.fadeOut(500); }
});
function goTop(){
	$('html').animate({scrollTop: 0});
}
function goBottom(){
	$('html').animate({scrollTop: $(document).height()});
}
function goHome(){
	location.href="index.html"
}

function dpTime(){
	 var now = new Date();
		hours = now.getHours();
		minutes = now.getMinutes();
		seconds = now.getSeconds();

		if (hours > 12){
				hours -= 12;
		ampm = "오후 ";
		}else{
				ampm = "오전 ";
		}
		if (hours < 10){
				hours = "0" + hours;
		}
		if (minutes < 10){
				minutes = "0" + minutes;
		}
		if (seconds < 10){
				seconds = "0" + seconds;
		}
		document.getElementById("dpTime").innerHTML = ampm + hours + ":" + minutes + ":" + seconds;
}
