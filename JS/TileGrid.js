class Tile
{
    constructor(name)
    {
        this.blockNumber;
        this.type = name;
        this.source = `<img src="./image-folder/${name}.png"></img>`;
        console.log(name);
    }
}

class TileGrid {
    constructor() {
        this.tileArray = {

        };
        this.bossIntelligence = 50;
        this.gridHeight = 5;
        this.gridWidth = 5;
        this.gameOver = false;
        this.time = 0;
        this.playerScore = 0;
        this.bossExists = false;
        this.castleExists = false;
        this.playerExists = false;
        this.playerX = null;
        this.playerY = null;
        this.castleX = null;
        this.castleY = null;
        this.bossX = null;
        this.bossY = null;
    }
    generateTiles() {
        for (let i = 0; i < 5; i++) {
            this.tileArray[i] = { };
            for (let j = 0; j < 5; j++) {
                if (!this.playerExists) {
                    if (Math.floor(100 * Math.random()) > 95) {
                        this.tileArray[i][j] = new Tile("player");
                        this.playerX = i;
                        this.playerY = j;
                        this.playerExists = true;
                        continue;
                    }
                }
                if (!this.bossExists) {
                    if (Math.floor(100 * Math.random()) > 95) {
                        this.tileArray[i][j] = new Tile("boss");
                        this.bossX = i;
                        this.bossY = j;
                        this.bossExists = true;
                        continue;
                    }
                }
                if (!this.castleExists) {
                    if (Math.floor(100 * Math.random()) > 95) {
                        this.tileArray[i][j] = new Tile("castle");
                        this.castleX = i;
                        this.castleY = j;
                        this.castleExists = true;
                        continue;
                    }
                }
                if (Math.floor(100 * Math.random()) > 95) {
                    this.tileArray[i][j] = new Tile("coin");
                    continue;
                }
                this.tileArray[i][j] = new Tile("grass");
            }
        }
        if (!this.playerExists) {
            if (this.tileArray[2][2].type != "grass" || this.tileArray[2][2].type != "coin") {
                this.tileArray[2][2] = new Tile("player");
                this.playerX = 2;
                this.playerY = 2;
                this.playerExists = true;
            }
            if (!this.playerExists && (this.tileArray[2][3].type != "grass" || this.tileArray[2][3].type != "coin")) {
                this.tileArray[2][3] = new Tile("player");
                this.playerX = 2;
                this.playerY = 3;
                this.playerExists = true;
            }
            if (!this.playerExists && (this.tileArray[2][4].type != "grass" || this.tileArray[2][4].type != "coin")) {
                this.tileArray[2][4] = new Tile("player");
                this.playerX = 2;
                this.playerY = 4;
                this.playerExists = true;
            }
        }
        if (!this.bossExists) {
            if (this.tileArray[0][0].type != "grass" || this.tileArray[0][0].type != "coin") {
                this.tileArray[0][0] = new Tile("boss");
                this.bossX = 0;
                this.bossY = 0;
                this.bossExists = true;
            }
            if (!this.bossExists && (this.tileArray[0][1].type != "grass" || this.tileArray[0][1].type != "coin")) {
                this.tileArray[0][1] = new Tile("boss");
                this.bossX = 0;
                this.bossY = 1;
                this.bossExists = true;
            }
            if (!this.bossExists && (this.tileArray[0][2].type != "grass" || this.tileArray[0][2].type != "coin")) {
                this.tileArray[0][2] = new Tile("boss");
                this.bossX = 0;
                this.bossY = 2;
                this.bossExists = true;
            }
        }
        if (!this.castleExists) {
            if (this.tileArray[4][4].type != "grass" || this.tileArray[2][2].type != "coin") {
                this.tileArray[4][4] = new Tile("castle");
                this.castleX = 4;
                this.castleY = 4;
                this.castleExists = true;
            }
            if (!this.castleExists && (this.tileArray[4][3].type != "grass" || this.tileArray[4][3].type != "coin")) {
                this.tileArray[4][3] = new Tile("castle");
                this.castleX = 4;
                this.castleY = 3;
                this.castleExists = true;
            }
            if (!this.castleExists && (this.tileArray[4][2].type != "grass" || this.tileArray[4][2].type != "coin")) {
                this.tileArray[4][2] = new Tile("castle");
                this.castleX = 4;
                this.castleY = 2;
                this.castleExists = true;
            }
        }
    }
    printTiles() {
        for (var i = 0; i < 5; i++) {
            console.log(this.tileArray[i][0].type, this.tileArray[i][1].type, this.tileArray[i][2].type, this.tileArray[i][3].type, this.tileArray[i][4].type);
        }
    }
    startTime() {
        setInterval(this.incrementTime(), 1000);
    }
    incrementTime() {
        this.time = this.time + 1;
        console.log(this.time);
        document.getElementById('timer').innerHTML = this.time;
    }
    logTime() {
        console.log(this.time);
    }
    assignTiles() {
        for (let i = 0; i < 5; i++) {
            for (let j = 0; j < 5; j++) {
                let boxNum = "box" + (((i*5) + j)+1);
                document.getElementById(boxNum).innerHTML = this.tileArray[i][j].source;
            }
        }
    }
    restartGame() {
        console.log("Restarting Game");
        this.tileArray = {

        };
        this.gameOver = false;
        this.time = 0;
        this.playerScore = 0;
        this.bossExists = false;
        this.castleExists = false;
        this.playerExists = false;
        this.playerX = null;
        this.playerY = null;
        this.castleX = null;
        this.castleY = null;
        this.bossX = null;
        this.bossY = null;
        this.generateTiles();
        this.assignTiles();
    }
    gameLost() {
        setTimeout(() => {
            var playAgain = window.prompt("YOU LOST!!!\n\nPlay Again (y/n)?");
            var x = document.getElementById("DefeatSong.mp3");
            function playAudio() {
                 x.play();
            }
            if (playAgain.toLowerCase() == "y") {
                this.restartGame();
            }
            else {
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        let boxNum = "box" + (((i*5) + j)+1);
                        document.getElementById(boxNum).innerHTML = "";
                    }
                }
            }
            this.gameOver = true;
            console.log("GAME OVER");
        }, 500);

        
    }
    gameWon() {
        setTimeout(() => {
            var playAgain = window.prompt("YOU WIN!!!\n\nPlay Again (y/n)?");
            if (playAgain.toLowerCase() == "y") {
                this.restartGame();
            }
            else {
                for (let i = 0; i < 5; i++) {
                    for (let j = 0; j < 5; j++) {
                        let boxNum = "box" + (((i*5) + j)+1);
                        document.getElementById(boxNum).innerHTML = "";
                    }
                }
            }
            console.log("GAME WON");
        }, 500);
    }
    playerMovePossible(moveDir) {
        if (moveDir == "x+") {
            return (this.playerX+1 < 5 && this.playerX+1 >= 0 ? true : false);
        }
        if (moveDir == "x-") {
            return (this.playerX-1 < 5 && this.playerX-1 >= 0 ? true : false);
        }
        if (moveDir == "y+") {
            return (this.playerY+1 < 5 && this.playerY+1 >= 0 ? true : false);
        }
        if (moveDir == "y-") {
            return (this.playerY-1 < 5 && this.playerY-1 >= 0 ? true : false);
        }
        return false;
    }
    bossMovePossible(moveDir) {
        if (moveDir == "x+") {
            return (this.bossX+1 < 5 && this.bossX+1 >= 0 ? true : false);
        }
        if (moveDir == "x-") {
            return (this.bossX-1 < 5 && this.bossX-1 >= 0 ? true : false);
        }
        if (moveDir == "y+") {
            return (this.bossY+1 < 5 && this.bossY+1 >= 0 ? true : false);
        }
        if (moveDir == "y-") {
            return (this.bossY-1 < 5 && this.bossY-1 >= 0 ? true : false);
        }
        return false;
    }
    moveBoss() {
        if (this.gameOver != true) {
            console.log("STARTING BOSS MOVE");
            let changeX = (this.bossX-this.playerX)/2;
            let changeY = (this.bossY-this.playerY)/2;
            console.log(changeX);
            console.log(changeY);
            if (Math.floor(Math.random() * 100) > this.bossIntelligence) {
                if (Math.abs(changeX) > Math.abs(changeY)) {
                    if (changeX > 0) {
                        this.moveBossUp();
                    }
                    else {
                        this.moveBossDown();
                    }
                    return;
                }
                if (Math.abs(changeX) <= Math.abs(changeY)) {
                    if (changeY > 0) {
                        this.moveBossLeft();
                    }
                    else {
                        this.moveBossRight();
                    }
                    return;
                }
            }
            else {
                if (Math.floor(Math.random() * 4) > 3) {
                    this.moveBossDown();
                    return;
                }
                if (Math.floor(Math.random() * 4) > 2) {
                    this.moveBossLeft();
                    return;
                }
                if (Math.floor(Math.random() * 4) > 0) {
                    this.moveBossRight();
                    return;
                }
                this.moveBossUp();
            }
        }
    }
    moveBossLeft() {
        if (this.tileArray[this.bossX][this.bossY-1].type == "player") {
            this.gameLost();
        }
        if (this.tileArray[this.bossX][this.bossY-1].type == "castle") {
            return
        }
        this.tileArray[this.bossX][this.bossY-1] = new Tile("boss");
        this.tileArray[this.bossX][this.bossY] = new Tile("grass");
        this.bossY--;
        console.log(this.tileArray);
    }
    moveBossUp() {
        if (this.tileArray[this.bossX-1][this.bossY].type == "player") {
            this.gameLost();
        }
        if (this.tileArray[this.bossX-1][this.bossY].type == "castle") {
            return
        }
        this.tileArray[this.bossX-1][this.bossY] = new Tile("boss");
        this.tileArray[this.bossX][this.bossY] = new Tile("grass");
        this.bossX--;
        console.log(this.tileArray);
    }
    moveBossRight() {
        if (this.tileArray[this.bossX][this.bossY+1].type == "player") {
            this.gameLost();
        }
        if (this.tileArray[this.bossX][this.bossY+1].type == "castle") {
            return
        }
        this.tileArray[this.bossX][this.bossY+1] = new Tile("boss");
        this.tileArray[this.bossX][this.bossY] = new Tile("grass");
        this.bossY++;
        console.log(this.tileArray);
    }
    moveBossDown() {
        console.log(this.bossX);
        console.log(this.bossY);
        if (this.tileArray[this.bossX+1][this.bossY].type == "player") {
            this.gameLost();
        }
        if (this.tileArray[this.bossX+1][this.bossY].type == "castle") {
            return
        }
        this.tileArray[this.bossX+1][this.bossY] = new Tile("boss");
        this.tileArray[this.bossX][this.bossY] = new Tile("grass");
        this.bossX++;
        console.log(this.tileArray);
    }
    movePlayerLeft() {
        if (this.playerMovePossible("y-")) {
            if (this.tileArray[this.playerX][this.playerY-1].type == "coin") {
                this.playerScore++;
            }
            if (this.tileArray[this.playerX][this.playerY-1].type == "boss") {
                this.gameLost();
            }
            if (this.tileArray[this.playerX][this.playerY-1].type == "castle") {
                this.gameWon();
            }
            this.tileArray[this.playerX][this.playerY-1] = new Tile("player");
            this.tileArray[this.playerX][this.playerY] = new Tile("grass");
            this.playerY--;
            console.log(this.tileArray);
        }
    }
    movePlayerUp() {
        if (this.playerMovePossible("x-")) {
            if (this.tileArray[this.playerX-1][this.playerY].type == "coin") {
                this.playerScore++;
            }
            if (this.tileArray[this.playerX-1][this.playerY].type == "boss") {
                this.gameLost();
            }
            if (this.tileArray[this.playerX-1][this.playerY].type == "castle") {
                this.gameWon();
            }
            this.tileArray[this.playerX-1][this.playerY] = new Tile("player");
            this.tileArray[this.playerX][this.playerY] = new Tile("grass");
            this.playerX--;
            console.log(this.tileArray);
        }
    }
    movePlayerRight() {
        if (this.playerMovePossible("y+")) {
            if (this.tileArray[this.playerX][this.playerY+1].type == "coin") {
                this.playerScore++;
            }
            if (this.tileArray[this.playerX][this.playerY+1].type == "boss") {
                this.gameLost();
            }
            if (this.tileArray[this.playerX][this.playerY+1].type == "castle") {
                this.gameWon();
            }
            this.tileArray[this.playerX][this.playerY+1] = new Tile("player");
            this.tileArray[this.playerX][this.playerY] = new Tile("grass");
            this.playerY++;
            console.log(this.tileArray);
        }
    }
    movePlayerDown() {
        if (this.playerMovePossible("x+")) {
            if (this.tileArray[this.playerX+1][this.playerY].type == "coin") {
                this.playerScore++;
            }
            if (this.tileArray[this.playerX+1][this.playerY].type == "boss") {
                this.gameLost();
            }
            if (this.tileArray[this.playerX+1][this.playerY].type == "castle") {
                this.gameWon();
            }
            this.tileArray[this.playerX+1][this.playerY] = new Tile("player");
            this.tileArray[this.playerX][this.playerY] = new Tile("grass");
            this.playerX++;
            console.log(this.tileArray);
        }
    }
    spawnCoins() {
        for (let i = 0; i < this.gridHeight; i++) {
            for (let j = 0; j < this.gridWidth; j++) {
                if (this.tileArray[i][j].type == "grass") {
                    let x = Math.floor(100 * Math.random());
                    if (x >= 99) {
                        this.tileArray[i][j] = new Tile("coin");
                    }
                }
            }
        }
        this.assignTiles();
    }
    updateScore() {
        document.getElementById("scoreText").innerHTML = this.playerScore;
    }
};