

// notes
// order:
//   1. namespace declaration (initial key & values)
//   2. namespace methods
//   3. init function
//   4. document ready function


// namespace
const samples = {
    
    // first row variables
    "49": new Audio("./samples/clapOne.wav"),
    "50": new Audio("./samples/clapTwo.wav"),
    "51": new Audio("./samples/airhorn.wav"),
    "52": new Audio("./samples/inception.mp3"),

    // second row variables
    "81": new Audio("./samples/hatClosedOne.wav"),
    "87": new Audio("./samples/hatClosedTwo.wav"),
    "69": new Audio("./samples/hatOpenOne.wav"),
    "82": new Audio("./samples/hatOpenTwo.wav"),

    // third row variables
    "65": new Audio("./samples/snareOne.wav"),
    "83": new Audio("./samples/snareTwo.wav"),
    "68": new Audio("./samples/snareThree.wav"),
    "70": new Audio("./samples/snareFour.wav"),
    
    // fourth row variables
    "90": new Audio("./samples/kickOne.wav"),
    "88": new Audio("./samples/kickTwo.wav"),
    "67": new Audio("./samples/kickThree.wav"),
    "86": new Audio("./samples/kickFour.wav"),

    // color randomizer
    "1": "#F7EC4F", // yellow
    "2": "#F79665", // orange
    "3": "#63FFE5", // blue
    "4": "#24FF9E", // green

}


// click event method (MVP)
// this.className retrieves both classes of the div clicked in the form of a string
// .slice(9, 11) removes first class name and whitespace
// colorValue returns a random color from the sample object 
samples.clickEvent = function() {
    $(".drumBeat").mousedown(function() {
        const classes = this.className.slice(9, 11);
        samples[classes].currenTime = 0;
        samples[classes].play();
        colorValue = Math.floor(Math.random() * 4) + 1;

        $(`.${classes}`).css("background-color", `${samples[colorValue]}`);

    }).mouseup(function(){
        const classes = this.className.slice(9, 11);
        $(`.${classes}`).css("background-color", "#D0D0D1");

    });
},


// keyboard event method
// arrow fn is used to target the document object with "this"
// event.keyCode retrieves the code of the key pressed
// .toString() converts the keyCode from number to string, as numbers can't be used as object keys
// colorValue returns a random color from the sample object 
samples.keyboardEvent = () => {
    $(this).keydown(function(event) {
        const key = event.keyCode.toString();
        samples[key].currentTime = 0;
        samples[key].play();
        colorValue = Math.floor(Math.random() * 4) + 1;

        $(`.${key}`).css("background-color", `${samples[colorValue]}`);

    }).keyup(function(event) {
        const key = event.keyCode.toString();
        $(`.${key}`).css("background-color", "#D0D0D1");
        
    });
},


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

