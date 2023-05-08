document.addEventListener('DOMContentLoaded',()=>{
    const playBoard = document.querySelector('.play-board');
    let scoreElement = document.querySelector('.score');
    let highScoreElement = document.querySelector('.high-score');
    let score = 0;
    let foodX = 13,foodY = 10;
    let headX = 5, headY = 10;
    let positionX = 0,positionY = 0;
    let inTerValid;
    let gameOver = false;
    let snakeBody = [];
    let highScore = localStorage.getItem("high-score") || 0;
    const changeFoodPosition = ()=> {
        foodX = Math.floor(Math.random()*30)+1;
        foodY = Math.floor(Math.random()*30)+1;
    }
const changDirection = (e)=> {
    if((e.key === 'ArrowUp' || e.key === 'w') && positionY != 1){
        positionX = 0;
        positionY = -1;
    }
    if((e.key === 'ArrowDown'|| e.key === 's') && positionY != -1){
        positionX = 0;
        positionY = 1;
    }
    if((e.key === 'ArrowLeft' || e.key === 'a') && positionX != 1){
        positionX = -1;
        positionY = 0;
    }
    if((e.key === 'ArrowRight' || e.key === 'd') && positionX != -1){
        positionX = 1;
        positionY = 0;
    }
}
    let gameOverAlert = () => {
        clearInterval(inTerValid);
        alert('Game over!');
        location.reload();
    }

    const initGame = ()=>{
        if(gameOver) return gameOverAlert();
        let htmlMarkup = `<div class="food" style="grid-area: ${foodY}/${foodX} "></div>`;
        if(headX === foodX && headY === foodY){
            changeFoodPosition();
            snakeBody.push([headX,headY]);
            score++;
            highScore = score >= highScore ? score : highScore;
            localStorage.setItem("high-score", highScore);
            scoreElement.innerText = `Score: ${score}`;
            highScoreElement.innerText = `High Score: ${highScore}`
        }
        for (let i = snakeBody.length-1; i > 0; i--) {
            snakeBody[i]=snakeBody[i-1];
        }
        snakeBody[0] = [headX,headY];
        headX += positionX;
        headY += positionY;
        if(headX<=0 || headX >30 || headY<=0 || headY >30 ){
            gameOver = true;
        }
        for (let i = 0; i < snakeBody.length; i++) {
        htmlMarkup += `<div class="head" style="grid-area:${snakeBody[i][1]}/${snakeBody[i][0]} ;"></div>`
        if(i!=0 && snakeBody[0][1] === snakeBody[i][1] && snakeBody[0][0] === snakeBody[i][0]) gameOver = true;
    }
        playBoard.innerHTML = htmlMarkup;
    }
            scoreElement.innerText = `Score: ${score}`;
            highScoreElement.innerText = `High Score: ${highScore}`
            changeFoodPosition();
inTerValid = setInterval(initGame,100);
document.addEventListener('keydown',changDirection);




document.addEventListener('click', (e)=>{
console.log(e);
})






})