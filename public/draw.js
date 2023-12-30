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
        // this.sizeString = localStorage.getItem("cb-puzzle");

        this.size = 4;

        // switch(this.sizeString){
        //     case "2x2":
        //         this.size = 2;
        //     break;
        //     case "3x3":
        //         this.size = 3;
        //     break;
        //     case "4x4":
        //         this.size = 4;
        //     break;
        //     case "5x5":
        //         this.size = 5;
        //     break;
        //     case "6x6":
        //         this.size = 6;
        //     break;
        //     case "7x7":
        //         this.size = 7;
        //     break;
        // }
    }
    drawLeft(){
        this.ctx.beginPath();
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
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
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
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
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
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
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
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
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
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
        for(let i = 0; i < this.size; i++){
            for(let j = 0; j < this.size; j++){
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