
for (var i = 0; i < document.querySelectorAll(".drum").length; i++){

  document.querySelectorAll(".drum")[i].addEventListener("click", function (){

var buttonInnerHTML = this.innerHTML;
makeSound(buttonInnerHTML);




  });

  document.addEventListener("keydown",function() {

  makeSound(event.key);

  }

}

function makeSound(key)
{
  switch (key) {
    case 'w':
    var audio = new Audio('sounds/crash.mp3')
    crash.play();
      break
      case "a":
      var audio = new Audio('sounds/kick-bass.mp3')
      kick.play();
        break;
        case "s":
        var audio = new Audio('sounds/snare.mp3')
        snare.play();
          break;
          case "d":
          var audio = new Audio('sounds/tom-1.mp3')
          audio.play();
            break;
            case "j":
            var audio = new Audio('sounds/tom-2.mp3')
            audio.play();
              break;
              case "k":
              var audio = new Audio('sounds/tom-3.mp3')
              audio.play();
                break;
                case "l":
                var audio = new Audio('sounds/tom-4.mp3')
                audio.play();
                  break;
    default: none;

  }
}


});


//var audio = new Audio('sounds/tom-1.mp3')
//audio.play();
