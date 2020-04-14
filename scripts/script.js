

// namespace
const samples = {
	// audio sample lookup
	"81": new Audio("./samples/kick.wav"),
	"87": new Audio("./samples/snare.wav"),
	"69": new Audio("./samples/hatClosed.wav"),
	"82": new Audio("./samples/hatOpen.wav"),
	"84": new Audio("./samples/clap.wav"),


	// color randomizer
	"1": "#F7EC4F", // yellow
	"2": "#F79665", // orange
	"3": "#63FFE5", // blue
	"4": "#24FF9E", // green

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
		$(`.${classes}`).css("background-color", "#d8d8d8");

	}).mouseup(function(){
		const classes = this.className.slice(9, 11);
		$(`.${classes}`).css("background-color", "#ffffff");

	});
},


// keyboard event
samples.keyboardEvent = () => {
	$(this).keydown(function(event) {
		const key = event.keyCode.toString();
		samples[key].currentTime = 0;
		samples[key].play();
		samples.animate();		
		$(`.${key}`).css("background-color", "#d8d8d8");

	}).keyup(function(event) {
		const key = event.keyCode.toString();
		$(`.${key}`).css("background-color", "#ffffff");
			
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

