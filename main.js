$(document).ready(function() {
	update();
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
			html += 	'<h1>Velocicoder Studios</h1>';
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