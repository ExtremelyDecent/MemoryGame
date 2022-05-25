//Henry
const gameContainer = document.getElementById("game");

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];
let clickCounter = 0;
let firstClick;
let secondClick;
let wait = false;
// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);
//this function checks to see if the game is over
function isGameOver(){
  const tiles = [];

  
  console.log(gameContainer);
  // for(let i = 0; i<gameContainer.classList.length; i++){
  //   tiles[i] = gameContainer.
  // }
  
}

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick(event) {
  // you can use event.target to see which element was clicked
  //console.log("you just clicked", event.target);
  //console.log(clickCounter);
  

  if (wait === false){
    if (clickCounter === 0 && event.target.style.backgroundColor !== event.target.classList.value){ // first flip
      firstClick = event.target;
      firstClick.style.backgroundColor = firstClick.classList.value;
      clickCounter++;
    }
    else if(clickCounter === 1 && event.target.style.backgroundColor !== event.target.classList.value && !wait){ //second flip check and check for matching background aka flipped
      wait = true;
      secondClick = event.target;
      secondClick.style.backgroundColor = secondClick.classList.value;
      if(secondClick.classList.value !== firstClick.classList.value){ //wrong guess
        
        setTimeout(function(){
          firstClick.style.backgroundColor = 'white';
          secondClick.style.backgroundColor = 'white';
          wait = false;
        },1000);
        clickCounter = 0;
      }
      else{
        wait=false;
        clickCounter = 0;
      }
    }
  }
  else{
    console.log("YOU MUST WAIT!");
  }
  isGameOver();
}
  


// when the DOM loads
createDivsForColors(shuffledColors);

/* */