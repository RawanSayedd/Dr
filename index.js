//detecting button pressed
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}
function handleClick() {
  makeSound(this.innerHTML);
  buttonAnimation(this.innerHTML);
}

//detecting keyboard pressed
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}); //to detect the entre web page if a any key is pressed.
function makeSound(key) {
  switch (key) {
    case "w":
      var audio1 = new Audio("./sounds/crash.mp3");
      audio1.play();
      break;
    case "a":
      var audio2 = new Audio("./sounds/snare.mp3");
      audio2.play();
      break;
    case "s":
      var audio3 = new Audio("./sounds/kick-bass.mp3");
      audio3.play();
      break;
    case "d":
      var audio4 = new Audio("./sounds/tom-4.mp3");
      audio4.play();
      break;
    case "j":
      var audio5 = new Audio("./sounds/tom-1.mp3");
      audio5.play();
      break;
    case "k":
      var audio6 = new Audio("./sounds/tom-2.mp3");
      audio6.play();
      break;
    case "l":
      var audio7 = new Audio("./sounds/tom-3.mp3");
      audio7.play();
      break;
    default:
      console.log("this.innerHTML");
  }
}

//adding animation on the buttons when pressed and disappear after 3 secs
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  var timeout = setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 3000);
}
