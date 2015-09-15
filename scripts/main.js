'use strict';
$(document).ready(function(){
	var name = $('#name');
	var email = $('#email');
	var website = $('#website');
	var message = $('#message');
	

	$('.error').hide();
	function submit() {
		var counter = 0
		if(name.val() === '') {
			$('.name').show();
		} else {
			$('.error').hide();
			counter++
		}
		if(email.val().indexOf('@') === -1) {
			$('.email').show();
		} else {
			$('.error').hide();
			counter++
		}
		
		 if(website.val().toLowerCase().substr(0, 7) !== "http://") {
			$('.website').show();
		} else {
			$('.error').hide();
			counter++
		}
		console.log(message.val());
		if(message.val() === '') {
			$('.message').show();
		} else {
			counter++
		}
		if (counter === 4) {
			$('section').html("<div>Thanks for contacting us " + name.val() + ". We have received your message and will be in touch shortly.</div>");
		}
	}
	$('#button').click(submit);
});