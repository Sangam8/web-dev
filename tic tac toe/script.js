const gameCells = document.querySelectorAll('.cell');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const restartBtn = document.querySelector('.restartBtn');

//makeing variables
let currentPlayer = 'X';
let nextPlayer = 'O';
let playerTurn = currentPlayer;

player1.textContent=`Player1: ${currentPlayer}`;
player2.textContent=`Player2: ${nextPlayer}`;
//Function to start your game
const startGame= () => {
    gameCells.forEach(cell => {
        cell.addEventListener('click' , handleClick)
            

            

            // console.log(e.target);
            // e.target means jab bhi iss console pe click karoge toh ek parameter e pass hoga jo console pe Show hoga
        });
    
}

const handleClick = (e) => {
    if(e.target.textContent=== ''){
        e.target.textContent= playerTurn;
       if( checkwin()){
        console.log(`${playerTurn} is a winner`);
        diableCells();
       }
       else if (checkTie()){
        console.log(`It's a Tie`)
        diableCells();
       }
       else{
        changePlayerTurn();
       }
    }

}
// Function to chnage player's Turn
const changePlayerTurn = ()  =>{
    if(playerTurn === currentPlayer){
        playerTurn= nextPlayer;
    }
    else{
        playerTurn = currentPlayer;
    }

    // playerTurn= playerTurn === currentPlayer ? nextPlayer : currentPlayer;

}
// Function to check win
const checkwin = () => {
    const winningConditions = 
        [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
            [0,3,6],
        ];
    for(let i=0; i<winningConditions.length; i++){
        const [pos1,pos2,pos3] = winningConditions[i];
        if (gameCells[pos1].textContent !=='' && gameCells[pos1].textContent === gameCells[pos2].textContent &&
            gameCells[pos2].textContent === gameCells[pos3].textContent){
                return true;
            }
    }
    return false;
}

//Function to check for a Tie
const checkTie = ()  =>{
    let emptyCellsCount = 0;
    gameCells.forEach(cell =>{
        if (cell.textContent ===''){
            emptyCellsCount++
        }
    });
    return emptyCellsCount=== 0 && !checkwin();
}

//function to disable game-board cells after a win or tie
const diableCells = () => {
    gameCells.forEach(cell => {
        cell.removeEventListener('click', handleClick);
        cell.classList.add('disabled');
    });
}
startGame();