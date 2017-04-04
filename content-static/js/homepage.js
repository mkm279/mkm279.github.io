var Homepage = function() {
	var proto 		= Homepage.prototype;

	proto.init = function() {
		$(document).ready(function() {console.log('here');
			handleSubmitClick();
		});
	};

	var animateLogin = function() {
		$('.box-container-outer').hide();
		$('#myProgress').show();
		var elem = document.getElementById("myBar");   
		var width = 10;
		var id = setInterval(frame, 10);
		function frame() {
			if (width >= 100) {
				clearInterval(id);
			} else {
				width = width+10; 
				elem.style.width = width + '%'; 
			}
		}
	};

	var goToAvatarPage = function() {
		var url= "avatar.html";				
		$(location).attr('href', url)
	}

	var handleSubmitClick = function () {
		$('.btn-submit').click(function() {
			var username 	= $('.input-username');
			var password 	= $('.input-password');
			var error 		= $('.error-hidden');
			if(!username.val()) {
				errorFunction();
				username.addClass('error-class').focus();
				password.removeClass('error-class');
				error.show().text('Username can not be empty');
				return;
			}
			if(!password.val()) {
				errorFunction();
				username.removeClass('error-class').text(username.val());
				password.addClass('error-class').focus();
				error.show().text('Password can not be empty');
				return;
			}
			if(username.val() != "yoda") {
				animateLogin();
				setTimeout(function(){
					errorFunction();
					username.addClass('error-class').text(username.val()).focus();
					password.removeClass('error-class');
					error.show().text('Invalid username');
					return;
				}, 500);
				
			}
			if(username.val() === "yoda" && password.val() != "dogbah"  ) {
				animateLogin();
				setTimeout(function(){
					errorFunction();
					username.addClass('success-class').text(username.val());
					password.addClass('error-class').val(password.val() ? password.val() : '******').focus();
					error.show().text('The password you have entered does not match the username');
					return;
				}, 500);
				
			}
			else if(username.val() === "yoda" && password.val() === "dogbah") {
				// $.when(animateLogin()).then(goToAvatarPage());
				animateLogin();
				setTimeout(function(){
					goToAvatarPage();
				}, 500);

			}
		});
};

var errorFunction = function () {
	$('#myProgress').hide();
	$('.img-box').addClass('shake');
	$('.box-container-outer').show().addClass('shake');
	$('.img-box img').attr("src", "../content-static/assets/starwars-stormtrooper.png").fadeIn('slow');
	setTimeout(function(){
					$('.img-box').removeClass('shake');
			$('.box-container-outer').removeClass('shake');
				}, 500);
	
};
};
var HOMEPAGE = new Homepage();
HOMEPAGE.init();