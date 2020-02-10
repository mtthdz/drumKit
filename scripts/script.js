console.log("suh dude");


var samples = {
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


document.addEventListener("keydown", function(e) {
    let keyCode = e.keyCode;
    let keyCodeString = keyCode.toString();
    console.log(keyCodeString);
    samples[keyCodeString].play();
    



    // let audio = document.querySelector("audio[id='" + keyCode + "']");
    // audio.play();
    // audio.currentTime = 0;
})

