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
    movePlayerLeft() {
        this.tileArray[this.playerX][this.playerY-1] = new Tile("player");
        this.tileArray[this.playerX][this.playerY] = new Tile("grass");
        this.playerY--;
        console.log(this.tileArray);
    }
    movePlayerUp() {
        this.tileArray[this.playerX-1][this.playerY] = new Tile("player");
        this.tileArray[this.playerX][this.playerY] = new Tile("grass");
        this.playerX--;
        console.log(this.tileArray);
    }
    movePlayerRight() {
        this.tileArray[this.playerX][this.playerY+1] = new Tile("player");
        this.tileArray[this.playerX][this.playerY] = new Tile("grass");
        this.playerY++;
        console.log(this.tileArray);
    }
    movePlayerDown() {
        this.tileArray[this.playerX+1][this.playerY] = new Tile("player");
        this.tileArray[this.playerX][this.playerY] = new Tile("grass");
        this.playerX++;
        console.log(this.tileArray);
    }
};