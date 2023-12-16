import { Cube } from "./rubiksCube.js";
const colors = ["white", "orange", "green", "red", "blue", "yellow"];
const x = 5;
const y = 10;
const cubeSize = 30;
const placement = 100;
const radius = 2;

export class Draw{
    constructor(cube = new Cube, canvas){
        this.cube = cube;
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");

    }
    drawLeft(){
        this.ctx.beginPath();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.ctx.strokeStyle = "rgb(0,0,0)"
                this.ctx.lineWidth = 2;
                this.ctx.fillStyle = colors[this.cube.cube[1][i][j]];
                this.ctx.fillRect(x + (cubeSize * j), y + placement + (cubeSize * i), cubeSize, cubeSize);
                this.ctx.roundRect(x + (cubeSize * j), y + placement + (cubeSize * i), cubeSize, cubeSize, radius);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }
    drawFace(){
        this.ctx.beginPath();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.ctx.fillStyle = colors[this.cube.cube[2][i][j]];
                this.ctx.fillRect(x + (cubeSize * j) + placement, y + placement + (cubeSize * i), cubeSize, cubeSize);
                this.ctx.roundRect(x + (cubeSize * j) + placement, y + placement + (cubeSize * i), cubeSize, cubeSize, radius);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }
    drawUp(){
        this.ctx.beginPath();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.ctx.fillStyle = colors[this.cube.cube[0][i][j]];
                this.ctx.fillRect(x + (cubeSize * j) + placement, y + (cubeSize * i), cubeSize, cubeSize);
                this.ctx.roundRect(x + (cubeSize * j) + placement, y + (cubeSize * i), cubeSize,cubeSize, radius);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }
    drawDown(){
        this.ctx.beginPath();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.ctx.fillStyle = colors[this.cube.cube[5][i][j]];
                this.ctx.fillRect(x + (cubeSize * j) + placement, y + (placement*2) + (cubeSize * i), cubeSize, cubeSize);
                this.ctx.roundRect(x + (cubeSize * j) + placement, y + (placement*2) + (cubeSize * i), cubeSize, cubeSize, radius);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }
    drawRight(){
        this.ctx.beginPath();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.ctx.fillStyle = colors[this.cube.cube[3][i][j]];
                this.ctx.fillRect(x + (cubeSize * j) + (placement*2), y + placement + (cubeSize * i), cubeSize, cubeSize);
                this.ctx.roundRect(x + (cubeSize * j) + (placement*2), y + placement + (cubeSize * i), cubeSize, cubeSize, radius);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }
    drawBack(){
        this.ctx.beginPath();
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                this.ctx.fillStyle = colors[this.cube.cube[4][i][j]];
                this.ctx.fillRect(x + (cubeSize * j) + (placement*3), y + placement + (cubeSize * i), cubeSize, cubeSize);
                this.ctx.roundRect(x + (cubeSize * j) + (placement*3), y + placement + (cubeSize * i), cubeSize, cubeSize, radius);
                this.ctx.closePath();
                this.ctx.stroke();
            }
        }
    }
    drawScramble(){
        this.drawLeft();
        this.drawBack();
        this.drawDown();
        this.drawFace();
        this.drawRight();
        this.drawUp();
    }
}