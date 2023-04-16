const container = document.getElementById("grid-container");
const numItems = 25 * 15;
const trapProbability = 0.9;
const moveDelay = 200; // in milliseconds

let lastMoveTime = 0;
let score = 0;
let activeItemIndex = 188;
let energie = 40;

for (let i = 0; i < numItems; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  if (Math.random() < trapProbability) {
    gridItem.classList.add("trap");
  } else {
    gridItem.classList.add("treasure");
  }
  container.appendChild(gridItem);
}

const gridItems = document.querySelectorAll('.grid-item');
gridItems[activeItemIndex].classList.remove('trap');
gridItems[activeItemIndex].classList.remove('treasure');
gridItems[activeItemIndex].classList.add('active');


document.addEventListener('keydown', (event) => {
  const currentTime = Date.now();
  if (currentTime - lastMoveTime < moveDelay) {
    return; 
  }

  lastMoveTime = currentTime;

  gridItems[activeItemIndex].classList.remove('active');

  if (event.keyCode === 37 && activeItemIndex % 25 !== 0) { // move left
    activeItemIndex--;
  } else if (event.keyCode === 38 && activeItemIndex >= 25) { // move up
    activeItemIndex -= 25;
  } else if (event.keyCode === 39 && (activeItemIndex + 1) % 25 !== 0) { // move right
    activeItemIndex++;
  } else if (event.keyCode === 40 && activeItemIndex <= numItems - 26) { // move down
    activeItemIndex += 25;
  }

  const currentTile = gridItems[activeItemIndex];
  if (currentTile.classList.contains('trap')) {
    gameOver();

    var catSound = document.getElementById("cat-sound-trap");
    catSound.play();
    energie=energie-1;
    score=score-50
    document.getElementById('file').value = energie;
    document.getElementById('energie').textContent = "Energie : "+energie;
    document.getElementById('score').textContent = "Score : "+score;
    currentTile.classList.remove('trap');
  } else if (currentTile.classList.contains('treasure')) {
      var catSound = document.getElementById("cat-sound-treasure");
      catSound.play();
    score=score+1000;
    document.getElementById('score').textContent = "Score : "+score;
    currentTile.classList.remove('treasure');
  }else{
    score=score-10
    document.getElementById('score').textContent = "Score : "+score;
  }

  currentTile.classList.add('active');
});

function gameOver() {
  if(energie==0){
    var answer = confirm("Game Over! Do you want to retry? "+" Score : "+score);
    if (answer == true) {
      location.reload();
    } 
  }
}

document.getElementById("exiteGame").onclick = () =>{
  location.reload();
}




