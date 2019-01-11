// generic javascript
// ------------------------------------------------------------


// global vars
// ------------------------------------------------------------
// ------------------------------------------------------------
var vw = Number;
var vh = Number;
var mobile = Boolean;
var scrolled = false;



	
// update screen height
// ------------------------------------------------------------	
function update_window_size() {
	vw = $(window).innerWidth();
	vh = $(window).innerHeight();
	
	// set breakpoints
	if (vw > 912) {
		mobile = false;
	} else {
		mobile = true;
	};
};
update_window_size();
	
// update when resizing
$(window).resize(function() {
	update_window_size();
});




// functionality that"s on linked on scroll
// ------------------------------------------------------------

$(window).scroll(function() {
	scrolled = true;
	if (scrolled) {
		//requestAnimationFrame(scrolling);
	};
});

function scrolling() {
	var pos = $(window).scrollTop();
	// fade arrow scroll down button
	scrolled = false;
};