import { Cube } from "./rubiksCube.js";
const colors = ["white", "orange", "green", "red", "blue", "yellow"];

export class Draw{
    constructor(cube = new Cube, canvas, cubeSize, placement, radius, x, y){
        this.radius = radius;
        this.x = x;
        this.y = y;
        this.cubeSize = cubeSize;
        this.placement = placement;
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
                this.ctx.fillRect(this.x + (this.cubeSize * j), this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize);
                this.ctx.roundRect(this.x + (this.cubeSize * j), this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize, this.radius);
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
                this.ctx.fillRect(this.x + (this.cubeSize * j) + this.placement, this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize);
                this.ctx.roundRect(this.x + (this.cubeSize * j) + this.placement, this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize, this.radius);
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
                this.ctx.fillRect(this.x + (this.cubeSize * j) + this.placement, this.y + (this.cubeSize * i), this.cubeSize, this.cubeSize);
                this.ctx.roundRect(this.x + (this.cubeSize * j) + this.placement, this.y + (this.cubeSize * i), this.cubeSize,this.cubeSize, this.radius);
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
                this.ctx.fillRect(this.x + (this.cubeSize * j) + this.placement, this.y + (this.placement*2) + (this.cubeSize * i), this.cubeSize, this.cubeSize);
                this.ctx.roundRect(this.x + (this.cubeSize * j) + this.placement, this.y + (this.placement*2) + (this.cubeSize * i), this.cubeSize, this.cubeSize, this.radius);
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
                this.ctx.fillRect(this.x + (this.cubeSize * j) + (this.placement*2), this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize);
                this.ctx.roundRect(this.x + (this.cubeSize * j) + (this.placement*2), this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize, this.radius);
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
                this.ctx.fillRect(this.x + (this.cubeSize * j) + (this.placement*3), this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize);
                this.ctx.roundRect(this.x + (this.cubeSize * j) + (this.placement*3), this.y + this.placement + (this.cubeSize * i), this.cubeSize, this.cubeSize, this.radius);
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