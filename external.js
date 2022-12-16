//homepage script
//Amir did this
let openBtn = document.getElementById("openBtn");

function openBtnDisappear() {
  openBtn.innerHTML =
    "prees space key to start the game \n - avoid the tequila to graduate \n -press arrow up to jump";
}
//Prathibha did this
//study tips script
function change() {
  document.getElementById(id="titleChanging").style.color = "#4d79ff";
}

//Amir did this

//game
//associated  the elements from our html documents to constants or var to modify it with js
const student = document.getElementById("student");
const alcohol = document.getElementById("alcohol");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");
let live = document.querySelector("#live");

document.getElementById("game").classList.add("bg1");

//crate an event to call the function
window.addEventListener("keydown", (e) => {
  //console.log(e);
  if (e.key == "ArrowUp") {
    //make the object jump by adding and removing the jump class to it
    if (student.classList != "jump") {
      student.classList.add("jump");

      //give time for the animation and restrict the player from jumping before the animation ends
      setTimeout(function () {
        student.classList.remove("jump");
      }, 500);
    }
  }
});

//declare variables for score
let interval = null;
let playerScore = 0;

//score function
let scoreCounter = () => {
  playerScore++;
  score.innerHTML = `Score <b>${playerScore}</b>`;
  // change speed of the obstacle according to the score
  if (playerScore > 5 && playerScore < 10) {
    alcohol.classList.remove("alcoholActive");
    alcohol.classList.add("alcoholActive2");
  } else if (playerScore > 10 && playerScore < 15) {
    alcohol.classList.remove("alcoholActive2");
    alcohol.classList.add("alcoholActive3");
  } else if (playerScore > 15) {
    alcohol.classList.remove("alcoholActive3");
    alcohol.classList.add("alcoholActive4");
  }
};

function random() {
  //get a random
  var items = ["bg1", "bg2", "bg3"];

  //assign to the the index
  var index = Math.floor(Math.random() * items.length);
  //use the random numbern to get a item
  items[index];
  //display
  document.getElementById("game").classList.remove("bg1", "bg2", "bg3");
  document.getElementById("game").classList.add(items[index]);
}

//start game
window.addEventListener("keydown", (start) => {
  // console.log(start);
  if (start.code == "Space") {
    random();
    // To get the scroll position of current webpage
    TopScroll = window.pageYOffset || document.documentElement.scrollTop;
    (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
      // if scroll happens, set it to the previous value
      (window.onscroll = function () {
        window.scrollTo(LeftScroll, TopScroll);
      });

    gameOver.style.display = "none";
    live.style.display = "block";
    alcohol.classList.add("alcoholActive");

    //stablish score
    interval = setInterval(scoreCounter, 200);
    playerScore = 0;
  }
});

//finish the game
let isAlive = setInterval(function () {
  // get current student y position
  let studentTop = parseInt(
    window.getComputedStyle(student).getPropertyValue("top")
  );
  // get current student y position
  let alcoholLeft = parseInt(
    window.getComputedStyle(alcohol).getPropertyValue("left")
  );

  //detect collision
  if (alcoholLeft < 50 && alcoholLeft > 0 && studentTop >= 140) {
    window.onscroll = function () {};

    //collison
    //console.log('Game over')

    clearInterval(interval);
    gameOver.style.display = "block";
    live.style.display = "none";

    alcohol.classList.remove("alcoholActive");
    alcohol.classList.remove("alcoholActive2");
    alcohol.classList.remove("alcoholActive3");
    alcohol.classList.remove("alcoholActive4");
    playerScore = 0;
  }

  if (alcoholLeft < 0) {
    alcohol.style.opacity = 0;
  } else {
    alcohol.style.opacity = 1;
  }
}, 10);

// forms code
//Prathibha did this

//set valid to true - flag
var valid = true;
var msge = "Incompleted form, "; //set up the message
function validate() {
  //use if statements to check the data and set the message
  if (document.getElementById("fname").value == "") {
    msge += "you need to fill in your firstname";
    valid = false;
  }
  //validate the radio button of level of education
  if (document.getElementById("lname").value == "") {
    msge += "you need to fill in your surname";
    valid = false;
  }

  //validate the email input
  if (document.getElementById("email").value == "") {
    msge += "you need to fill in your email id";
    valid = false;
  }

  //validate the country input
  if (document.getElementById("country").value == "") {
    msge += "you need to fill in your country";
    valid = false;
  }

  //validate the radio button of level of education
  if (
    document.getElementById("school").checked == false &&
    document.getElementById("college").checked == false
  ) {
    msge += "You need to select one of the buttons.";
    valid = false;
  }

  //validate hours of study
  if (document.getElementById("hours").value == 0) {
    msge += "You need to fill in the number of hour you study. ";
    valid = false;
  }

  if (!valid) {
    document.getElementById("msge1").innerHTML = msge;
  }
  return valid;
}
