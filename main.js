$(document).ready(function() {
	update();

// PROJECTS LINK HOVER ANIMATION
	$('body').on('mouseenter', '#projectsLink', function() {
		$('#projectsLink').animate({
			opacity: 0.8
		}, 200);
	});
	$('body').on('mouseleave', '#projectsLink', function() {
		$('#projectsLink').animate({
			opacity: 1
		}, 200);
	});

// ABOUT LINK HOVER ANIMATION
	$('body').on('mouseenter', '#aboutLink', function() {
		$('#aboutLink').animate({
			opacity: 0.8
		}, 200);
	});
	$('body').on('mouseleave', '#aboutLink', function() {
		$('#aboutLink').animate({
			opacity: 1
		}, 200);
	});

// PAGE ABOUT DEVELOPERS HOVER ANIMATION
	$('body').on('mouseenter', '#developersLink', function() {
		$('#developersLink').animate({
			opacity: 0.8
		}, 200);
	});
	$('body').on('mouseleave', '#developersLink', function() {
		$('#developersLink').animate({
			opacity: 1
		}, 200);
	});

// PAGE ABOUT CONTACTUS HOVER ANIMATION
	$('body').on('mouseenter', '#contactusLink', function() {
		$('#contactusLink').animate({
			opacity: 0.8
		}, 200);
	});
	$('body').on('mouseleave', '#contactusLink', function() {
		$('#contactusLink').animate({
			opacity: 1
		}, 200);
	});

// CLICK ACTIONS
	//LANDING
	$('body').on('click', '#projectsLink', function() {
		history.pushState();
		page = 1;
		update();
	});
	$('body').on('click', '#aboutLink', function() {
		history.pushState();
		page = 2;
		update();
	});
	$('body').on('click', '#fbicon', function() {
		window.open("https://www.facebook.com/velocicoder");
	});
	$('body').on('click', '#twicon', function() {
		window.open("https://www.twitter.com/");
	});

	//ABOUT
	$('body').on('click', '#developersLink', function() {
		history.pushState();
		aboutPage = 0;
		update();
	});
	$('body').on('click', '#contactusLink', function() {
		history.pushState();
		aboutPage = 1;
		update();
	});


});

var page = 0;
//tab IDs
var html;
var landing = 0;
var projects = 1;
var about = 2;


var aboutPage = 0;
//about tab IDs
var developers = 0;
var contactus = 1;


function update() {
	updateHtml();
	$('body').html(html);
	$('body').css('display', 'none');
	$('body').fadeIn(500);
}

function updateHtml() {
	html = '';
	switch(page) {
		case landing:
			html += '<div id="landing">';
			html +=		'<img id="vsicon" src="assets/Logo.svg">';

			//Text
			html += 	'<h1><span>V</span>elocicoder Studios</h1>';
			html += 	'<h3><span id="projectsLink">Projects</span> | <span id="aboutLink">About</span></h3>';

			//Media icons
			html +=		'<img id="fbicon" src="assets/fb_logo.svg">';
			html +=		'<img id="twicon" src="assets/tw_logo.svg">';
			html += '</div>';
			break;
		case projects:
			break;
		case about:
			html += '<div id="about">';
			html += 	'<div id="about_bar">';
			html += 		'<h1><span>A</span>bout</h1>';
			html += 		'<h3><span id="developersLink">Developers</span> | <span id="contactusLink">Contact us</span></h3>';
			html += 	'</div>';
			switch(aboutPage) {
				case developers:
					//TODO: Add dev images + text
					break;
				case contactus:
					//TODO: Add contact us field
					break;
			}
			html += '</div>';
			break;
		default:
			html += "<h1>404 Error!</h1>"
			break;
	}
	//ADDING FOOTER COPYRIGHT
	html += '<div id="footer">';
	html += 	'<p>&copy; 2014 Velocicoder Studios</p>';
	html += '</div>';
}
