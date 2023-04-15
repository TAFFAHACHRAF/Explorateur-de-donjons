const container = document.getElementById("grid-container");

for (let i = 0; i < 25 * 15; i++) {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");
  container.appendChild(gridItem);
}



const gridItems = document.querySelectorAll('.grid-item');
let activeItemIndex = 0;

gridItems[activeItemIndex].classList.add('active');

document.addEventListener('keydown', (event) => {
    let scoreElem = document.getElementById("score");
    let currentScore = scoreElem.innerHTML;
    if(currentScore != 'Nan'){
        scoreElem.innerHTML++;   
    }

    gridItems[activeItemIndex].classList.remove('active');

  if (event.keyCode === 37 && activeItemIndex !== 0) {
    activeItemIndex--;
  } else if (event.keyCode === 38 && activeItemIndex >= 25) {
    activeItemIndex -= 25;
  } else if (event.keyCode === 39 && activeItemIndex !== gridItems.length - 1) {
    activeItemIndex++;
  } else if (event.keyCode === 40 && activeItemIndex <= gridItems.length - 26) {
    activeItemIndex += 25;
  }

  gridItems[activeItemIndex].classList.add('active');
});
