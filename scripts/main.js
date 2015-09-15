'use strict';
$(document).ready(function(){
	var name = $('#name');
	var email = $('#email');
	var website = $('#website');
	var message = $('#message');

	$('.error').hide();
	function submit() {
		
		if(name.val() === '') {
			$('.name').show();
		}
		if(email.val() === '') {
			$('.error email').show();
		} else if(email.val().indexOf('@') === -1) {
			$('.email').show();
		}
		console.log(website.val());
		if(website.val() === '') {
			$('.website').show();
		} else if(website.val().toLowerCase().indexOf('http://') === 0) {
			return website;
		} else {
			$('.website').show();
		}
		console.log(message.val());
		if(message.val() === '') {
			$('.message').show();
		}
	}
	$('#button').click(submit);
});