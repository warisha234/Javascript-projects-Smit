let container = document.getElementById('game-container');
let scoreDisplay = document.getElementById('score-display');
let score = 0;
let colors = ['brown', 'gray', 'purple', 'orange'];

function createColorBox(color){
    let box = document.createElement('div');
    box.classList.add('color-box');
    box.style.backgroundColor = color;
    box.addEventListener("click",checkColor);
    container.appendChild(box);
    return box;
}
function checkColor(event){
    let clickedBox = event.target;
    let randomColor = colors[Math.floor(Math.random()*colors.length)];
    if(clickedBox.style.backgroundColor === randomColor){
        score++;
        scoreDisplay.textContent = `Score: ${score}`;
        alert("Yay!🎊 Your score is now " + score);
    } else {
        alert("Oops!🥺 The correct color was " + randomColor);
    }
}

for (let i=0; i<colors.length; i++){
    createColorBox(colors[i]);
}

