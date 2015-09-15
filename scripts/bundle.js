(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
$(document).ready(function () {
	var name = $('#name');
	var email = $('#email');
	var website = $('#website');
	var message = $('#message');

	$('.error').hide();
	function submit() {
		var counter = 0;
		if (name.val() === '') {
			$('.name').show();
		} else {
			$('.error').hide();
			counter++;
		}
		if (email.val().indexOf('@') === -1) {
			$('.email').show();
		} else {
			$('.error').hide();
			counter++;
		}

		if (website.val().toLowerCase().substr(0, 7) !== "http://") {
			$('.website').show();
		} else {
			$('.error').hide();
			counter++;
		}
		console.log(message.val());
		if (message.val() === '') {
			$('.message').show();
		} else {
			counter++;
		}
		if (counter === 4) {
			$('section').html("<div>Thanks for contacting us " + name.val() + ". We have received your message and will be in touch shortly.</div>");
		}
	}
	$('#button').click(submit);
});

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map