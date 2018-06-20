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
