var page = 0;

var landing = 0;
var about = 1;
var bio = 2;
var amish = 3;
var stick = 4;

$(document).ready(function() {
	update();

	$('#landingLink').click(function() {
		if(page != landing) {
			page = landing;
			update();
		}
	});

	$('#aboutLink').click(function() {
		if(page != about) {
			page = about;
			update();
		}
	});

	$('#bioLink').click(function() {
		if(page != bio) {
			page = bio;
			update();
		}
	});

	$('#amishLink').click(function() {
		if(page != amish) {
			page = amish;
			update();
		}
	});

	$('#stickLink').click(function() {
		if(page != stick) {
			page = stick;
			update();
		}
	});
});

function update() {
	var newHtml = updateHtml();
	$('.content').html(newHtml);
}



function updateHtml() {
	var html = '';
	switch(page) {
		case landing:
			html += '<div id="landing">';
			html +=		'<img id="vsicon" src="assets/Logo.svg">';

			//Text
			html += 	'<h1><span>VELOCICODER</span> STUDIOS</h1>';
			html += '</div>';
			break;
		case about:
			break;
		case bio:
			html += '<div id="bio">';
			html += 	'<h1>THE VELOCICODER TEAM</h1>';
			html += '</div>';
			break;
		default:
			break;
	}
	return html;
}
