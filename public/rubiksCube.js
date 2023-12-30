// 0 - White, 1 - Orange, 2 - Green, 3 - Red, 4 - Blue, 5 - Yellow

export class Cube{
    constructor(){

        this.cube = new Array(6);
        this.cubeSize = parseInt(localStorage.getItem("cb-puzzle-size"));

        for(let i = 0; i < this.cube.length; i++){
            this.cube[i] = new Array(this.cubeSize);
        }

        for(let i = 0; i < this.cube.length; i++){
            for(let j = 0; j < this.cube[i].length; j++){
                this.cube[i][j] = new Array(this.cubeSize);
            }
        }

        for(let i = 0; i < this.cube.length; i++){
            for(let j = 0; j < this.cube[i].length; j++){
                for(let k = 0; k < this.cube[i][j].length; k++){
                    this.cube[i][j][k] = i;
                }
            }
        }
    }

    rightTurn(){
        let temp = new Array(4);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp[0].length; i++) {
            temp[0][i] = this.cube[5][i][this.cubeSize - 1];// Yellow
            temp[1][i] = this.cube[2][i][this.cubeSize - 1];// Green
            temp[2][i] = this.cube[0][this.cubeSize - 1 - i][this.cubeSize - 1];// White
            temp[3][i] = this.cube[4][this.cubeSize - 1 - i][0];// Blue
        }
        for (let  i = 0; i < temp[0].length; i++) {
            this.cube[2][i][this.cubeSize - 1] = temp[0][i];
            this.cube[0][i][this.cubeSize - 1] = temp[1][i];
            this.cube[4][i][0] = temp[2][i];
            this.cube[5][i][this.cubeSize - 1] = temp[3][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }



        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[3][i][j];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[3][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    rightTurnWide(){
        let temp = new Array(2);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[5][i][this.cubeSize - 1];// Yellow
            temp[0][1][i] = this.cube[2][i][this.cubeSize - 1];// Green
            temp[0][2][i] = this.cube[0][this.cubeSize - 1 - i][this.cubeSize - 1];// White
            temp[0][3][i] = this.cube[4][this.cubeSize - 1 - i][0];// Blue

            temp[1][0][i] = this.cube[5][i][this.cubeSize - 2];// Yellow
            temp[1][1][i] = this.cube[2][i][this.cubeSize - 2];// Green
            temp[1][2][i] = this.cube[0][this.cubeSize - 1 - i][this.cubeSize - 2];// White
            temp[1][3][i] = this.cube[4][this.cubeSize - 1 - i][1];// Blue
        }
        for (let  i = 0; i < temp[0][0].length; i++) {
            this.cube[2][i][this.cubeSize - 1] = temp[0][0][i];
            this.cube[0][i][this.cubeSize - 1] = temp[0][1][i];
            this.cube[4][i][0] = temp[0][2][i];
            this.cube[5][i][this.cubeSize - 1] = temp[0][3][i];

            this.cube[2][i][this.cubeSize - 2] = temp[1][0][i];
            this.cube[0][i][this.cubeSize - 2] = temp[1][1][i];
            this.cube[4][i][1] = temp[1][2][i];
            this.cube[5][i][this.cubeSize - 2] = temp[1][3][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }



        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[3][i][j];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[3][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    rightTurnWide3(){
        let temp = new Array(3);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[5][i][this.cubeSize - 1];// Yellow
            temp[0][1][i] = this.cube[2][i][this.cubeSize - 1];// Green
            temp[0][2][i] = this.cube[0][this.cubeSize - 1 - i][this.cubeSize - 1];// White
            temp[0][3][i] = this.cube[4][this.cubeSize - 1 - i][0];// Blue

            temp[1][0][i] = this.cube[5][i][this.cubeSize - 2];// Yellow
            temp[1][1][i] = this.cube[2][i][this.cubeSize - 2];// Green
            temp[1][2][i] = this.cube[0][this.cubeSize - 1 - i][this.cubeSize - 2];// White
            temp[1][3][i] = this.cube[4][this.cubeSize - 1 - i][1];// Blue

            temp[2][0][i] = this.cube[5][i][this.cubeSize - 3];// Yellow
            temp[2][1][i] = this.cube[2][i][this.cubeSize - 3];// Green
            temp[2][2][i] = this.cube[0][this.cubeSize - 1 - i][this.cubeSize - 3];// White
            temp[2][3][i] = this.cube[4][this.cubeSize - 1 - i][2];// Blue
        }
        for (let  i = 0; i < temp[0][0].length; i++) {
            this.cube[2][i][this.cubeSize - 1] = temp[0][0][i];
            this.cube[0][i][this.cubeSize - 1] = temp[0][1][i];
            this.cube[4][i][0] = temp[0][2][i];
            this.cube[5][i][this.cubeSize - 1] = temp[0][3][i];

            this.cube[2][i][this.cubeSize - 2] = temp[1][0][i];
            this.cube[0][i][this.cubeSize - 2] = temp[1][1][i];
            this.cube[4][i][1] = temp[1][2][i];
            this.cube[5][i][this.cubeSize - 2] = temp[1][3][i];

            this.cube[2][i][this.cubeSize - 3] = temp[2][0][i];
            this.cube[0][i][this.cubeSize - 3] = temp[2][1][i];
            this.cube[4][i][2] = temp[2][2][i];
            this.cube[5][i][this.cubeSize - 3] = temp[2][3][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }



        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[3][i][j];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[3][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    leftTurn(){
        let temp = new Array(4);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp[0].length; i++) {
            temp[0][i] = this.cube[5][this.cubeSize - 1 - i][0];// Yellow
            temp[1][i] = this.cube[2][i][0];// Green
            temp[2][i] = this.cube[0][i][0];// White
            temp[3][i] = this.cube[4][this.cubeSize - 1 - i][this.cubeSize - 1];// Blue
        }
        for (let i = 0; i < temp[0].length; i++) {
            this.cube[2][i][0] = temp[2][i];
            this.cube[0][i][0] = temp[3][i];
            this.cube[4][i][this.cubeSize - 1] = temp[0][i];
            this.cube[5][i][0] = temp[1][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[1][i][j];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[1][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    leftTurnWide3(){
        let temp = new Array(3);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[5][this.cubeSize - 1 - i][0];// Yellow
            temp[0][1][i] = this.cube[2][i][0];// Green
            temp[0][2][i] = this.cube[0][i][0];// White
            temp[0][3][i] = this.cube[4][this.cubeSize - 1 - i][this.cubeSize - 1];// Blue

            temp[1][0][i] = this.cube[5][this.cubeSize - 1 - i][1];// Yellow
            temp[1][1][i] = this.cube[2][i][1];// Green
            temp[1][2][i] = this.cube[0][i][1];// White
            temp[1][3][i] = this.cube[4][this.cubeSize - 1 - i][this.cubeSize - 2];// Blue

            temp[2][0][i] = this.cube[5][this.cubeSize - 1 - i][2];// Yellow
            temp[2][1][i] = this.cube[2][i][2];// Green
            temp[2][2][i] = this.cube[0][i][2];// White
            temp[2][3][i] = this.cube[4][this.cubeSize - 1 - i][this.cubeSize - 3];// Blue
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[2][i][0] = temp[0][2][i];
            this.cube[0][i][0] = temp[0][3][i];
            this.cube[4][i][this.cubeSize - 1] = temp[0][0][i];
            this.cube[5][i][0] = temp[0][1][i];

            this.cube[2][i][1] = temp[1][2][i];
            this.cube[0][i][1] = temp[1][3][i];
            this.cube[4][i][this.cubeSize - 2] = temp[1][0][i];
            this.cube[5][i][1] = temp[1][1][i];

            this.cube[2][i][2] = temp[2][2][i];
            this.cube[0][i][2] = temp[2][3][i];
            this.cube[4][i][this.cubeSize - 3] = temp[2][0][i];
            this.cube[5][i][2] = temp[2][1][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[1][i][j];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[1][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    leftTurnWide(){
        let temp = new Array(2);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[5][this.cubeSize - 1 - i][0];// Yellow
            temp[0][1][i] = this.cube[2][i][0];// Green
            temp[0][2][i] = this.cube[0][i][0];// White
            temp[0][3][i] = this.cube[4][this.cubeSize - 1 - i][this.cubeSize - 1];// Blue

            temp[1][0][i] = this.cube[5][this.cubeSize - 1 - i][1];// Yellow
            temp[1][1][i] = this.cube[2][i][1];// Green
            temp[1][2][i] = this.cube[0][i][1];// White
            temp[1][3][i] = this.cube[4][this.cubeSize - 1 - i][this.cubeSize - 2];// Blue
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[2][i][0] = temp[0][2][i];
            this.cube[0][i][0] = temp[0][3][i];
            this.cube[4][i][this.cubeSize - 1] = temp[0][0][i];
            this.cube[5][i][0] = temp[0][1][i];

            this.cube[2][i][1] = temp[1][2][i];
            this.cube[0][i][1] = temp[1][3][i];
            this.cube[4][i][this.cubeSize - 2] = temp[1][0][i];
            this.cube[5][i][1] = temp[1][1][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[1][i][j];
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[1][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    upTurn(){
        let temp = new Array(4);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp[0].length; i++) {
            temp[0][i] = this.cube[1][0][i];// Orange
            temp[1][i] = this.cube[2][0][i];// Green
            temp[2][i] = this.cube[3][0][i];// Red
            temp[3][i] = this.cube[4][0][i];// Blue
        }
        for (let i = 0; i < temp[0].length; i++) {
            this.cube[1][0][i] = temp[1][i];
            this.cube[2][0][i] = temp[2][i];
            this.cube[3][0][i] = temp[3][i];
            this.cube[4][0][i] = temp[0][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[0][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[0][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    upTurnWide(){
        let temp = new Array(2);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][0][i];// Orange
            temp[0][1][i] = this.cube[2][0][i];// Green
            temp[0][2][i] = this.cube[3][0][i];// Red
            temp[0][3][i] = this.cube[4][0][i];// Blue

            temp[1][0][i] = this.cube[1][1][i];// Orange
            temp[1][1][i] = this.cube[2][1][i];// Green
            temp[1][2][i] = this.cube[3][1][i];// Red
            temp[1][3][i] = this.cube[4][1][i];// Blue
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][0][i] = temp[0][1][i];
            this.cube[2][0][i] = temp[0][2][i];
            this.cube[3][0][i] = temp[0][3][i];
            this.cube[4][0][i] = temp[0][0][i];

            this.cube[1][1][i] = temp[1][1][i];
            this.cube[2][1][i] = temp[1][2][i];
            this.cube[3][1][i] = temp[1][3][i];
            this.cube[4][1][i] = temp[1][0][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[0][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[0][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    upTurnWide3(){
        let temp = new Array(3);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][0][i];// Orange
            temp[0][1][i] = this.cube[2][0][i];// Green
            temp[0][2][i] = this.cube[3][0][i];// Red
            temp[0][3][i] = this.cube[4][0][i];// Blue

            temp[1][0][i] = this.cube[1][1][i];// Orange
            temp[1][1][i] = this.cube[2][1][i];// Green
            temp[1][2][i] = this.cube[3][1][i];// Red
            temp[1][3][i] = this.cube[4][1][i];// Blue

            temp[2][0][i] = this.cube[1][2][i];// Orange
            temp[2][1][i] = this.cube[2][2][i];// Green
            temp[2][2][i] = this.cube[3][2][i];// Red
            temp[2][3][i] = this.cube[4][2][i];// Blue
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][0][i] = temp[0][1][i];
            this.cube[2][0][i] = temp[0][2][i];
            this.cube[3][0][i] = temp[0][3][i];
            this.cube[4][0][i] = temp[0][0][i];

            this.cube[1][1][i] = temp[1][1][i];
            this.cube[2][1][i] = temp[1][2][i];
            this.cube[3][1][i] = temp[1][3][i];
            this.cube[4][1][i] = temp[1][0][i];

            this.cube[1][2][i] = temp[2][1][i];
            this.cube[2][2][i] = temp[2][2][i];
            this.cube[3][2][i] = temp[2][3][i];
            this.cube[4][2][i] = temp[2][0][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[0][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[0][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    downTurn(){
        let temp = new Array(4);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp[0].length; i++) {
            temp[0][i] = this.cube[1][this.cubeSize - 1][i];// Orange
            temp[1][i] = this.cube[2][this.cubeSize - 1][i];// Green
            temp[2][i] = this.cube[3][this.cubeSize - 1][i];// Red
            temp[3][i] = this.cube[4][this.cubeSize - 1][i];// Blue
        }
        for (let i = 0; i < temp[0].length; i++) {
            this.cube[1][this.cubeSize - 1][i] = temp[3][i];
            this.cube[2][this.cubeSize - 1][i] = temp[0][i];
            this.cube[3][this.cubeSize - 1][i] = temp[1][i];
            this.cube[4][this.cubeSize - 1][i] = temp[2][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[5][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[5][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    downTurnWide(){
        let temp = new Array(2);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][this.cubeSize - 1][i];// Orange
            temp[0][1][i] = this.cube[2][this.cubeSize - 1][i];// Green
            temp[0][2][i] = this.cube[3][this.cubeSize - 1][i];// Red
            temp[0][3][i] = this.cube[4][this.cubeSize - 1][i];// Blue

            temp[1][0][i] = this.cube[1][this.cubeSize - 2][i];// Orange
            temp[1][1][i] = this.cube[2][this.cubeSize - 2][i];// Green
            temp[1][2][i] = this.cube[3][this.cubeSize - 2][i];// Red
            temp[1][3][i] = this.cube[4][this.cubeSize - 2][i];// Blue
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][this.cubeSize - 1][i] = temp[0][3][i];
            this.cube[2][this.cubeSize - 1][i] = temp[0][0][i];
            this.cube[3][this.cubeSize - 1][i] = temp[0][1][i];
            this.cube[4][this.cubeSize - 1][i] = temp[0][2][i];

            this.cube[1][this.cubeSize - 2][i] = temp[1][3][i];
            this.cube[2][this.cubeSize - 2][i] = temp[1][0][i];
            this.cube[3][this.cubeSize - 2][i] = temp[1][1][i];
            this.cube[4][this.cubeSize - 2][i] = temp[1][2][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[5][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[5][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    downTurnWide3(){
        let temp = new Array(3);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][this.cubeSize - 1][i];// Orange
            temp[0][1][i] = this.cube[2][this.cubeSize - 1][i];// Green
            temp[0][2][i] = this.cube[3][this.cubeSize - 1][i];// Red
            temp[0][3][i] = this.cube[4][this.cubeSize - 1][i];// Blue

            temp[1][0][i] = this.cube[1][this.cubeSize - 2][i];// Orange
            temp[1][1][i] = this.cube[2][this.cubeSize - 2][i];// Green
            temp[1][2][i] = this.cube[3][this.cubeSize - 2][i];// Red
            temp[1][3][i] = this.cube[4][this.cubeSize - 2][i];// Blue

            temp[2][0][i] = this.cube[1][this.cubeSize - 3][i];// Orange
            temp[2][1][i] = this.cube[2][this.cubeSize - 3][i];// Green
            temp[2][2][i] = this.cube[3][this.cubeSize - 3][i];// Red
            temp[2][3][i] = this.cube[4][this.cubeSize - 3][i];// Blue
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][this.cubeSize - 1][i] = temp[0][3][i];
            this.cube[2][this.cubeSize - 1][i] = temp[0][0][i];
            this.cube[3][this.cubeSize - 1][i] = temp[0][1][i];
            this.cube[4][this.cubeSize - 1][i] = temp[0][2][i];

            this.cube[1][this.cubeSize - 2][i] = temp[1][3][i];
            this.cube[2][this.cubeSize - 2][i] = temp[1][0][i];
            this.cube[3][this.cubeSize - 2][i] = temp[1][1][i];
            this.cube[4][this.cubeSize - 2][i] = temp[1][2][i];

            this.cube[1][this.cubeSize - 3][i] = temp[2][3][i];
            this.cube[2][this.cubeSize - 3][i] = temp[2][0][i];
            this.cube[3][this.cubeSize - 3][i] = temp[2][1][i];
            this.cube[4][this.cubeSize - 3][i] = temp[2][2][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[5][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[5][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    faceTurn(){
        let temp = new Array(4);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp[0].length; i++) {
            temp[0][i] = this.cube[1][i][this.cubeSize - 1];// Orange
            temp[1][i] = this.cube[0][this.cubeSize - 1][i];// White
            temp[2][i] = this.cube[3][i][0];// Red
            temp[3][i] = this.cube[5][0][i];// Yellow
        }
        for (let i = 0; i < temp[0].length; i++) {
            this.cube[1][i][this.cubeSize - 1] = temp[3][i];//Orange
            this.cube[0][this.cubeSize - 1][i] = temp[0][this.cubeSize - 1 - i];//White
            this.cube[3][i][0] = temp[1][i];//Red
            this.cube[5][0][i] = temp[2][this.cubeSize - 1 - i];//Yellow
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[2][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[2][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    faceTurnWide(){
        let temp = new Array(2);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][i][this.cubeSize - 1];// Orange
            temp[0][1][i] = this.cube[0][this.cubeSize - 1][i];// White
            temp[0][2][i] = this.cube[3][i][0];// Red
            temp[0][3][i] = this.cube[5][0][i];// Yellow

            temp[1][0][i] = this.cube[1][i][this.cubeSize - 2];// Orange
            temp[1][1][i] = this.cube[0][this.cubeSize - 2][i];// White
            temp[1][2][i] = this.cube[3][i][1];// Red
            temp[1][3][i] = this.cube[5][1][i];// Yellow
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][i][this.cubeSize - 1] = temp[0][3][i];//Orange
            this.cube[0][this.cubeSize - 1][i] = temp[0][0][this.cubeSize - 1 - i];//White
            this.cube[3][i][0] = temp[0][1][i];//Red
            this.cube[5][0][i] = temp[0][2][this.cubeSize - 1 - i];//Yellow

            this.cube[1][i][this.cubeSize - 2] = temp[1][3][i];//Orange
            this.cube[0][this.cubeSize - 2][i] = temp[1][0][this.cubeSize - 1 - i];//White
            this.cube[3][i][1] = temp[1][1][i];//Red
            this.cube[5][1][i] = temp[1][2][this.cubeSize - 1 - i];//Yellow
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[2][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[2][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    faceTurnWide3(){
        let temp = new Array(3);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][i][this.cubeSize - 1];// Orange
            temp[0][1][i] = this.cube[0][this.cubeSize - 1][i];// White
            temp[0][2][i] = this.cube[3][i][0];// Red
            temp[0][3][i] = this.cube[5][0][i];// Yellow

            temp[1][0][i] = this.cube[1][i][this.cubeSize - 2];// Orange
            temp[1][1][i] = this.cube[0][this.cubeSize - 2][i];// White
            temp[1][2][i] = this.cube[3][i][1];// Red
            temp[1][3][i] = this.cube[5][1][i];// Yellow

            temp[2][0][i] = this.cube[1][i][this.cubeSize - 3];// Orange
            temp[2][1][i] = this.cube[0][this.cubeSize - 3][i];// White
            temp[2][2][i] = this.cube[3][i][2];// Red
            temp[2][3][i] = this.cube[5][2][i];// Yellow
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][i][this.cubeSize - 1] = temp[0][3][i];//Orange
            this.cube[0][this.cubeSize - 1][i] = temp[0][0][this.cubeSize - 1 - i];//White
            this.cube[3][i][0] = temp[0][1][i];//Red
            this.cube[5][0][i] = temp[0][2][this.cubeSize - 1 - i];//Yellow

            this.cube[1][i][this.cubeSize - 2] = temp[1][3][i];//Orange
            this.cube[0][this.cubeSize - 2][i] = temp[1][0][this.cubeSize - 1 - i];//White
            this.cube[3][i][1] = temp[1][1][i];//Red
            this.cube[5][1][i] = temp[1][2][this.cubeSize - 1 - i];//Yellow

            this.cube[1][i][this.cubeSize - 3] = temp[2][3][i];//Orange
            this.cube[0][this.cubeSize - 3][i] = temp[2][0][this.cubeSize - 1 - i];//White
            this.cube[3][i][2] = temp[2][1][i];//Red
            this.cube[5][2][i] = temp[2][2][this.cubeSize - 1 - i];//Yellow
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[2][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[2][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    backTurn() {
        let temp = new Array(4);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp[0].length; i++) {
            temp[0][i] = this.cube[1][i][0];// Orange
            temp[1][i] = this.cube[0][0][i];// White
            temp[2][i] = this.cube[3][i][this.cubeSize - 1];// Red
            temp[3][i] = this.cube[5][this.cubeSize - 1][i];// Yellow
        }
        for (let i = 0; i < temp[0].length; i++) {
            this.cube[1][i][0] = temp[1][this.cubeSize - 1 - i];
            this.cube[0][0][i] = temp[2][i];
            this.cube[3][i][this.cubeSize - 1] = temp[3][this.cubeSize - 1 - i];
            this.cube[5][this.cubeSize - 1][i] = temp[0][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[4][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[4][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    backTurnWide() {
        let temp = new Array(2);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][i][0];// Orange
            temp[0][1][i] = this.cube[0][0][i];// White
            temp[0][2][i] = this.cube[3][i][this.cubeSize - 1];// Red
            temp[0][3][i] = this.cube[5][this.cubeSize - 1][i];// Yellow

            temp[1][0][i] = this.cube[1][i][1];// Orange
            temp[1][1][i] = this.cube[0][1][i];// White
            temp[1][2][i] = this.cube[3][i][this.cubeSize - 2];// Red
            temp[1][3][i] = this.cube[5][this.cubeSize - 2][i];// Yellow
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][i][0] = temp[0][1][this.cubeSize - 1 - i];
            this.cube[0][0][i] = temp[0][2][i];
            this.cube[3][i][this.cubeSize - 1] = temp[0][3][this.cubeSize - 1 - i];
            this.cube[5][this.cubeSize - 1][i] = temp[0][0][i];

            this.cube[1][i][1] = temp[1][1][this.cubeSize - 1 - i];
            this.cube[0][1][i] = temp[1][2][i];
            this.cube[3][i][this.cubeSize - 2] = temp[1][3][this.cubeSize - 1 - i];
            this.cube[5][this.cubeSize - 2][i] = temp[1][0][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[4][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[4][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }

    backTurnWide3() {
        let temp = new Array(3);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(4);
        }

        for(let i = 0; i < temp.length; i++){
            for(let j = 0; j < temp[i].length; j++){
                temp[i][j] = new Array(this.cubeSize);
            }
        }

        for (let i = 0; i < temp[0][0].length; i++) {
            temp[0][0][i] = this.cube[1][i][0];// Orange
            temp[0][1][i] = this.cube[0][0][i];// White
            temp[0][2][i] = this.cube[3][i][this.cubeSize - 1];// Red
            temp[0][3][i] = this.cube[5][this.cubeSize - 1][i];// Yellow

            temp[1][0][i] = this.cube[1][i][1];// Orange
            temp[1][1][i] = this.cube[0][1][i];// White
            temp[1][2][i] = this.cube[3][i][this.cubeSize - 2];// Red
            temp[1][3][i] = this.cube[5][this.cubeSize - 2][i];// Yellow

            temp[2][0][i] = this.cube[1][i][2];// Orange
            temp[2][1][i] = this.cube[0][2][i];// White
            temp[2][2][i] = this.cube[3][i][this.cubeSize - 3];// Red
            temp[2][3][i] = this.cube[5][this.cubeSize - 3][i];// Yellow
        }
        for (let i = 0; i < temp[0][0].length; i++) {
            this.cube[1][i][0] = temp[0][1][this.cubeSize - 1 - i];
            this.cube[0][0][i] = temp[0][2][i];
            this.cube[3][i][this.cubeSize - 1] = temp[0][3][this.cubeSize - 1 - i];
            this.cube[5][this.cubeSize - 1][i] = temp[0][0][i];

            this.cube[1][i][1] = temp[1][1][this.cubeSize - 1 - i];
            this.cube[0][1][i] = temp[1][2][i];
            this.cube[3][i][this.cubeSize - 2] = temp[1][3][this.cubeSize - 1 - i];
            this.cube[5][this.cubeSize - 2][i] = temp[1][0][i];

            this.cube[1][i][2] = temp[2][1][this.cubeSize - 1 - i];
            this.cube[0][2][i] = temp[2][2][i];
            this.cube[3][i][this.cubeSize - 3] = temp[2][3][this.cubeSize - 1 - i];
            this.cube[5][this.cubeSize - 3][i] = temp[2][0][i];
        }

        temp = new Array(this.cubeSize);

        for(let i = 0; i < temp.length; i++){
            temp[i] = new Array(this.cubeSize);
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                temp[i][j] = this.cube[4][i][j];
            }
        }
        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[4][i][j] = temp[this.cubeSize - 1 - j][i];
            }
        }
    }
}