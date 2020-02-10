console.log("suh dude");


var samples = {
    // first row variables
    clapOne: new Audio("./samples/clapOne.wav"),
    clapTwo: new Audio("./samples/clapTwo.wav"),
    triangle: new Audio("./samples/triangle.wav"),
    voxCymbal: new Audio("./samples/voxCymbal.wav"),

    // second row variables
    snareOne: new Audio("./samples/snareOne.wav"),
    snareTwo: new Audio("./samples/snareTwo.wav"),
    snareThree: new Audio("./samples/snareThree.wav"),
    snareFour: new Audio("./samples/snareFour.wav"),

    // third row variables
    kickOne: new Audio("./samples/kickOne.wav"),
    kickTwo: new Audio("./samples/kickTwo.wav"),
    kickThree: new Audio("./samples/kickThree.wav"),
    kickFour: new Audio("./samples/kickFour.wav"),

    // fourth row variables
    bassOne: new Audio("./samples/bassOne.wav"),
    bassTwo: new Audio("./samples/bassTwo.wav"),
    bassThree: new Audio("./samples/bassThree.wav"),
    bassFour: new Audio("./samples/bassFour.wav"),
}

$(".drumBeat").on("click", function () {
    samples.snareOne.play();
});

document.addEventListener("keydown", function(e) {
    let keyCode = e.keyCode;
    let keyCodeString = keyCode.toString();
    console.log(keyCode);
    samples.keyCodeString.play();

    // let audio = document.querySelector("audio[id='" + keyCode + "']");
    // audio.play();
    // audio.currentTime = 0;
})

