const container = document.getElementById("grid-container");
const numItems = 25 * 15;
const trapProbability = 0.9;
const moveDelay = 200; // in milliseconds

let lastMoveTime = 0;
let score = 0;
let activeItemIndex = 0;

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
gridItems[activeItemIndex].classList.add('active');

document.addEventListener('keydown', (event) => {
  const currentTime = Date.now();
  if (currentTime - lastMoveTime < moveDelay) {
    return; // wait for moveDelay before allowing a new move
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
    // alert(`Game over! Your score is ${score}`);
    // location.reload(); // restart the game
    currentTile.classList.remove('trap');
  } else if (currentTile.classList.contains('treasure')) {
    score++;
    document.getElementById('score').textContent = score;
    currentTile.classList.remove('treasure');
  }

  currentTile.classList.add('active');
});
