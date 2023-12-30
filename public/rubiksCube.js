// 0 - White, 1 - Orange, 2 - Green, 3 - Red, 4 - Blue, 5 - Yellow

export class Cube{
    constructor(){
        this.cube = [ [
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ],
        [ 0, 0, 0, 0 ]
        ],
        [
        [ 1, 1, 1, 1 ],
        [ 1, 1, 1, 1 ],
        [ 1, 1, 1, 1 ],
        [ 1, 1, 1, 1 ]
        ],
        [
        [ 2, 2, 2, 2 ],
        [ 2, 2, 2, 2 ],
        [ 2, 2, 2, 2 ],
        [ 2, 2, 2, 2 ]
        ],
        [
        [ 3, 3, 3, 3 ],
        [ 3, 3, 3, 3 ],
        [ 3, 3, 3, 3 ],
        [ 3, 3, 3, 3 ]
        ],
        [
        [ 4, 4, 4, 4 ],
        [ 4, 4, 4, 4 ],
        [ 4, 4, 4, 4 ],
        [ 4, 4, 4, 4 ]
        ],
        [
        [ 5, 5, 5, 5 ],
        [ 5, 5, 5, 5 ],
        [ 5, 5, 5, 5 ],
        [ 5, 5, 5, 5 ]
    ] ];
        this.cubeSize = 4;

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
                temp[i][j] = this.cube[3][i][j];    //RED
            }
        }

        for (let i = 0; i < temp.length; i++) {
            for (let j = 0; j < temp[i].length; j++) {
                this.cube[3][i][j] = temp[this.cubeSize - 1 - j][i];    //RED
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
}