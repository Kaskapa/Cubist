import { Cube } from "./rubiksCube.js";
const colors = ["white", "orange", "green", "red", "blue", "yellow"];
const x = 15;
const y = 25;

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
                this.ctx.fillStyle = colors[this.cube.cube[1][i][j]];
                this.ctx.fillRect(x + (20 * j), y + 70 + (20 * i), 19, 19);
                this.ctx.strokeRect(x + (20 * j), y + 70 + (20 * i), 20, 20);
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
                this.ctx.fillRect(x + (20 * j) + 70, y + 70 + (20 * i), 19, 19);
                this.ctx.strokeRect(x + (20 * j) + 70, y + 70 + (20 * i), 20, 20);
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
                this.ctx.fillRect(x + (20 * j) + 70, y + (20 * i), 19, 19);
                this.ctx.strokeRect(x + (20 * j) + 70, y + (20 * i), 20, 20);
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
                this.ctx.fillRect(x + (20 * j) + 70, y + 140 + (20 * i), 19, 19);
                this.ctx.strokeRect(x + (20 * j) + 70, y + 140 + (20 * i), 20, 20);
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
                this.ctx.fillRect(x + (20 * j) + 140, y + 70 + (20 * i), 19, 19);
                this.ctx.strokeRect(x + (20 * j) + 140, y + 70 + (20 * i), 20, 20);
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
                this.ctx.fillRect(x + (20 * j) + 210, y + 70 + (20 * i), 19, 19);
                this.ctx.strokeRect(x + (20 * j) + 210, y + 70 + (20 * i), 20, 20);
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