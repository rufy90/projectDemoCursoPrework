// Access the DOM elements in JavaScript
const boxes = document.querySelectorAll('.box');
const text = document.querySelector('#heading');
const strategy = document.querySelector('strategy');
const restartBtn = document.querySelector('#restart');

//Lets call the function drawBoard
const drawBoard = () => {
    boxes.forEach((box, i) => {
        let styleString ='';
        if (i < 3){
            styleString += "border-bottom: 3px solid var(--text);";
        }
        if (i % 3 === 0){
            styleString += "border-right: 3px solid var(--text);";
        }
        if (i % 3 === 2){
            styleString += "border-left: 3px solid var(--text);";
        }
        if (i > 5){
            styleString += "border-top: 3px solid var(--text);";
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked);
    });
};

//Defiune a few more variables
const spaces = [];
const tick_circle = '0';
const tick_x = 'X';
let currentPlayer = tick_circle;

// boxClicked function will take the event as an argument
const boxClicked = (e) => {
    const id = e.target.id;
    console.log(e);
    if (!spaces[id]) {
        console.log(spaces[id]);
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerWon()) {
            text.innerText = `${currentPlayer} has won!`
            restartBtn();
            return;
        }

        if (playerDraw()) {
            return;
        }
        currentPlayer = currentPlayer === tick_circle ? tick_x : tick_circle;
    }
};

//Lets see PlayerWon function now!
const playerWon = () => {
    if (spaces[0] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins up to top`;
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins on the left`;
            return true;
        }
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins diagonally`;
            return true;
        }
    }

    if (spaces[8] === currentPlayer) {
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins on the right`;
            return true;
        }
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins on the bottom`;
            return true;
        }
    }

    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins vertically on middle`;
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins horinzontally on the middle`;
            return true;
        }
        if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
            strategy.innerText = `${currentPlayer} wins diagonally`;
            return true;
        }
    }
};

//Lets create the draw function
const playerDraw = () => {
    let draw = 0;
    spaces.forEach((space, i) => {
        if (spaces[i] !== null) draw++;
    });

    if (draw === 9) {
        text.innerText = `Draw`;
        restartBtn();
    }
};

//Lets create the restart function
const restart = () => {
    setTimeout(() => {
        spaces.forEach((space, i) => {
            spaces[i] = null;
        });
        boxes.forEach((box) =>{
            box.innerText = `Play`;
            strategy.innerText = ``;
        });
    }, 1000);
};

//Finally, give life to Restart Button!
restartBtn.addEventListener("click", restart);
restart();
drawBoard();