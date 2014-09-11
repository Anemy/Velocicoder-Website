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

	$('#fbLink').click(function() {
		window.open("https://www.facebook.com/velocicoder");
	});

	$('#twLink').click(function() {
		window.open("https://www.twitter.com");
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
			html +=		'<img src="assets/Logo.svg">';

			//Text
			html += 	'<h1><span>VELOCICODER</span> STUDIOS</h1>';
			html += '</div>';
			break;
		case about:
			break;
		case bio:
			html += '<div class="bios">';
			html += 	'<h1>THE VELOCICODER TEAM</h1>';
			html += 	'<ul>';
									//ROY ICON + TEXT
    	html += 		'<li class="figures">';
      html += 			'<img src="assets/roy.jpg" alt="" class="figure"/>';
      html += 			'<span class="bioName">Roy Fu</span>';
			html += 			'<span class="bioJob">Such Designer</span>';
    	html += 		'</li>';
									//RHYS ICON + TEXT
    	html += 		'<li class="figures">';
      html += 			'<img src="assets/rhys.jpg" alt="" class="figure"/>';
      html += 			'<span class="bioName">Rhys Howell</span>';
			html += 			'<span class="bioJob">Programmer</span>';
    	html += 		'</li>';
			html += 	'</ul>';
			html += '</div>';
			break;
		case amish:
			html += '<div class="amish">';
			html +=		'<img id="amishTitle" src="assets/amishTitle.png">';
			html += 	'<hr></hr>';
			html += 	'<div class="amishBar">';
			html +=			'<img id="amishScreen" src="assets/amishScreen.png">';
			html += 		'<p id="amishSidePanel"><span><a href="http://amishhero.com">PLAY NOW!</a></span><br><br>Collect your harvest while maintaining your Amish ways!</p>';
			html +=			'<img id="amishRightScreen" src="assets/amishRightScreen.png">';
			html += 	'</div>';
			html += 	'<p id="amishUnderPanel">HTML5 | Javascript | Canvas<br>Created in 12 hours.<br>Programming: Rhys Howell <br>Graphics: Roy Fu.<br>2nd place at a hackathon.</p>';
			html += '</div>';
			break;
		case stick:
			html += '<div class="stick">';
			html +=		'<img id="stickTitle" src="assets/stickTitle.png">';
			html += 	'<hr></hr>';
			html += 	'<div class="stickBar">';
			html +=			'<img id="stickScreen" src="assets/stickScreen.png">';
			html += 		'<p id="stickSidePanel"><span><a href="http://stick-battle.com">PLAY NOW!</a></span><br><br>Battle your friends and zombies in this arade style stick figure shooting game! Complete with online modes and AI!</p>';
			html +=			'<img id="stickRightScreen" src="assets/stickRightScreen.png">';
			html += 	'</div>';
			html += 	'<p id="stickUnderPanel">HTML5 | Javascript | Canvas | Node.js | Socket io | Express<br>Programming & Design: Paul Henninger <br>Programming: Rhys Howell</p>';
			html += '</div>';
			break;
		default:
			break;
	}
	return html;
}
