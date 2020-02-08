alert("Please be informed that the game is still underdevelopment");
let counts = 0;
let pad_pos = 0;
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sounds");
    const pads = document.querySelectorAll(".pads div");
    const scorer = document.querySelector(".scorer");
    const play_again = document.querySelector(".playagain");


    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            console.log("Keypad " + index + " pressed");
            sounds[index].currentTime = 0;
            sounds[index].play();
            baller();
            counts = counts + 1;
            scorer.innerHTML = "Total Score is " + counts ;
            pad_pos = index;
        });
    });

    play_again.addEventListener('click', ()=> {
      console.log("play again pressed");
      counts = 0;
      scorer.innerHTML = "Total Score is " + counts;
      play_again.innerHTML = "Restart Game";
    });
});



function baller () {
  let height = field.clientHeight - ball.clientHeight;
  let width = ball_lander(pad_pos);
  animate({
    duration: 2000,
    timing: makeEaseOut(bounce),
    draw: function(progress) {
      ball.style.top = height * progress + 'px'
    }  });

  animate({
    duration: 2000,
    timing: makeEaseOut(quad),
    draw: function(progress) {
      ball.style.left = width * progress + "px"
    }  });
  };
  
  function quad(timeFraction) {
    return Math.pow(timeFraction, 2);
  }

  function makeEaseOut(timing) {
    return function(timeFraction) {
      return 1 - timing(1 - timeFraction);
  }}

  function bounce(timeFraction) {
      for (let a = 0, b = 1, result; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
          return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2)
        }
      }
    }


  function animate(options) {
    var start = performance.now();
      requestAnimationFrame(function animate(time) {
      var timeFraction = (time - start) / options.duration;
      if (timeFraction > 1) timeFraction = 1;
      var progress = options.timing(timeFraction)
      options.draw(progress);
      if (timeFraction < 1) {
        requestAnimationFrame(animate);
      }
    });
  }

 //this fucntion takes the index of the pressed pad and assigns it a predefined length
 //the ball will then land on the predefined pad.
 function ball_lander(pad_pos){
   let width = 0;
   switch (pad_pos) {
    case 0:
       width = -300;
       break;
    case 1:
       width = -210;
       break;
    case 2:
        width = -140;
        break;
    case 3:
        width = -60;
        break;
    case 4:
        width = 20;
        break;
    case 5:
        width = 100;
        break;
    case 6:
        width = 175;
        break;
    case 7:
        width = 300;
        break;
   }
  return width;
 }


