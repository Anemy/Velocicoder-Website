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

// 
	$('body').on('click', '#projectsLink', function() {
		page = 1;
		update();
	});
	$('body').on('click', '#aboutLink', function() {
		page = 2;
		update();
	});
});

var html;
var landing = 0;
var projects = 1;
var about = 2;



var page = 0;

function update() {
	updateHtml();
	$('body').html(html);
}

function updateHtml() {
	html = '';
	switch(page) {
		case landing:
			html += '<div id="landing">';
			html +=		'<img src="assets/Logo.svg">';
			html += 	'<h1><span>V</span>elocicoder Studios</h1>';
			html += 	'<h3><span id="projectsLink">Projects</span> | <span id="aboutLink">About</span></h3>';
			html += '</div>';
			break;
		case projects:
			break;
		case about:
			break;
		default:
			html += "<h1>404 Error!</h1>"
			break;
	}
}