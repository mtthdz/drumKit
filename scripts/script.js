

// namespace
const samples = {
    
    // first row variables
    "49": new Audio("./samples/clapOne.wav"),
    "50": new Audio("./samples/clapTwo.wav"),
    "51": new Audio("./samples/triangle.wav"),
    "52": new Audio("./samples/voxCymbal.wav"),

    // second row variables
    "81": new Audio("./samples/snareOne.wav"),
    "87": new Audio("./samples/snareTwo.wav"),
    "69": new Audio("./samples/snareThree.wav"),
    "82": new Audio("./samples/snareFour.wav"),

    // third row variables
    "65": new Audio("./samples/kickOne.wav"),
    "83": new Audio("./samples/kickTwo.wav"),
    "68": new Audio("./samples/kickThree.wav"),
    "70": new Audio("./samples/kickFour.wav"),
    
    // fourth row variables
    "90": new Audio("./samples/bassC.wav"),
    "88": new Audio("./samples/bassF.wav"),
    "67": new Audio("./samples/bassG.wav"),
    "86": new Audio("./samples/bassB.wav"),

}


// keyboard event method
// event.keyCode retrieves the code of the key pressed
// .toString() converts the keyCode from number to string, as numbers can't be used as object keys
samples.keyboard = () => {
    $(this).keydown(function (event) {
        const key = event.keyCode.toString();
        samples[key].currentTime = 0;
        samples[key].play();
    });
},

// click event method (MVP)
// this.className retrieves both classes of the div clicked in the form of a string
// .slice(9, 11) removes first class name and whitespace
samples.click = function () {
    $(".drumBeat").on("click", function () {
        const classes = this.className.slice(9, 11);
        samples[classes].currenTime = 0;
        samples[classes].play();
    });
},


/////////////////////////////////////

// init fn
samples.init = function() {
    samples.keyboard();
    samples.click();
};


// doc ready fn
$(function() {
    samples.init();
});

