function setCookie(cname,cvalue,exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays*24*60*60*1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
	var name = cname + "=";
	var decodedCookie = decodeURIComponent(document.cookie);
	var ca = decodedCookie.split(';');
	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

function showSalesElements(){
	$(".refference").css({paddingTop: "300px"});
	// $("#early-cta, #guarentee, #payments, #info, #details").show();
	$("#early-cta, #guarentee, #payments, #info, #details, #ingredients").fadeIn(3000);
}

var visited = getCookie('visited');

$(document).ready(function(){
	if(visited == ''){
		setTimeout(function(){
			showSalesElements();
			setCookie('visited', 'visited', 365);
		}, 1560000);
	}else{
		showSalesElements();
	}
});


//1560000