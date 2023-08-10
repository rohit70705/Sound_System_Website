

// Detecting button press

var numberOfButton = document.querySelectorAll(".drum").length;
for(var i = 0; i<numberOfButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
        
    });
}

// Detectiong keyboard press
document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;
        case "a":
            var kick_bass = new Audio('sounds/kick-bass.mp3');
            kick_bass.play();
        break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;
        case "d":
            var tom1 = new Audio('sounds/tom1.mp3');
            tom1.play();
        break;
        case "j":
            var tom2 = new Audio('sounds/tom2.mp3');
            tom2.play();
        break;
        case "k":
            var tom3 = new Audio('sounds/tom3.mp3');
            tom3.play();
        break;
        case "l":
            var tom4 = new Audio('sounds/tom4.mp3');
            tom4.play();
        break;
           
         default:  console.log(buttonInnerHTML);
            break;
    } 

}

function buttonAnimation(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");

    // for delay
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    },150);
}
  