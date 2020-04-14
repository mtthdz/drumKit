
// to get anime js working, you must move  the anime.min.js file into the scripts folder; keep the script tag within the html.

// namespace
const samples = {
	// audio sample lookup
	"81": new Audio("./samples/kick.wav"),
	"87": new Audio("./samples/snare.wav"),
	"69": new Audio("./samples/hatClosed.wav"),
	"82": new Audio("./samples/hatOpen.wav"),
	"84": new Audio("./samples/clap.wav"),

	// visualizer array
	bar: [".a", ".b", ".c", ".d", ".e", ".f", ".g", ".h", ".i", ".j"],
}


// click event
samples.clickEvent = function() {
	$(".drumBeat").mousedown(function() {
		const classes = this.className.slice(9, 11);
		samples[classes].currentTime = 0;
		samples[classes].play();
		samples.animate();
		$(`.${classes}`).css("background-color", "#f7ec4f");
		samples.focus(`.${classes}`);

	}).mouseup(function(){
		const classes = this.className.slice(9, 11);
		$(`.${classes}`).css("background-color", "#ffffff");
		samples.focus(`.${classes}`);

	});
},


// keyboard event
samples.keyboardEvent = () => {
	$(this).keydown(function(event) {
		const key = event.keyCode.toString();
		samples[key].currentTime = 0;
		samples[key].play();
		samples.animate();		
		$(`.${key}`).css("background-color", "#f7ec4f");
		samples.focus(`.${key}`);

	}).keyup(function(event) {
		const key = event.keyCode.toString();
		$(`.${key}`).css("background-color", "#ffffff");
		samples.focus(`.${key}`);			
	});
},


samples.animate = function() {
	const random = Math.floor(Math.random() * 6) + 2;
	const peak = samples.bar[random];
	const minusOne = samples.bar[random - 1];
	const minusTwo = samples.bar[random - 2];
	const plusOne = samples.bar[random + 1];
	const plusTwo = samples.bar[random + 2];

	anime({
		targets: ".visualizerBar",
		height: ["0%", "5%"],
		easing: "easeInOutQuad",
		direction: 'alternate',
		duration: 165,
	})

	anime({
		targets: peak,
		height: ["0%", "90%"],
		easing: "easeInOutQuad",
		direction: 'alternate',
		duration: 150,
	});

	anime({
		targets: minusOne,
		height: ["0%", "60%"],
		easing: "easeInOutQuad",
		direction: 'alternate',
		duration: 155,
	})

	anime({
		targets: [minusTwo, plusOne],
		height: ["0%", "30%"],
		easing: "easeInOutQuad",
		direction: 'alternate',
		duration: 160,
	})

	anime({
		targets: plusTwo,
		height: ["0%", "15%"],
		easing: "easeInOutQuad",
		direction: 'alternate',
		duration: 160,
	})
}


samples.focus = function(played) {
	$(played).focusin(function() {
		$(played).css("background-color", "#f7ec4f");
	}).focusout(function() {
		$(played).css("background-color", "#ffffff");
	})
}


/////////////////////////////////////


// init fn
samples.init = function() {
	this.keyboardEvent();
	this.clickEvent();
};


/////////////////////////////////////


// doc ready fn
$(function() {
	samples.init();
});

