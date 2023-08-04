// 0 - White, 1 - Orange, 2 - Green, 3 - Red, 4 - Blue, 5 - Yellow 

export class Cube{
    constructor(){
        this.cube = [ [ 
        [ 0, 0, 0 ], 
        [ 0, 0, 0 ], 
        [ 0, 0, 0 ] 
        ],
        [ 
        [ 1, 1, 1 ], 
        [ 1, 1, 1 ], 
        [ 1, 1, 1 ] 
        ],
        [ 
        [ 2, 2, 2 ], 
        [ 2, 2, 2 ], 
        [ 2, 2, 2 ] 
        ],
        [ 
        [ 3, 3, 3 ], 
        [ 3, 3, 3 ], 
        [ 3, 3, 3 ] 
        ],
        [ 
        [ 4, 4, 4 ], 
        [ 4, 4, 4 ], 
        [ 4, 4, 4 ] 
        ],
        [ 
        [ 5, 5, 5 ], 
        [ 5, 5, 5 ], 
        [ 5, 5, 5 ] 
    ] ];

    }

    rightTurn(){
        let temp = new Array(4);
    
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            temp[0][i] = this.cube[5][i][2];// Yellow
            temp[1][i] = this.cube[2][i][2];// Green
            temp[2][i] = this.cube[0][2 - i][2];// White
            temp[3][i] = this.cube[4][2 - i][0];// Blue
        }
        for (let  i = 0; i < 3; i++) {
            this.cube[2][i][2] = temp[0][i];
            this.cube[0][i][2] = temp[1][i];
            this.cube[4][i][0] = temp[2][i];
            this.cube[5][i][2] = temp[3][i];
        }
    
        temp = new Array(3);
    
        for(let i = 0; i < 3; i++){
            temp[i] = new Array(3);
        }
    
    
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                temp[i][j] = this.cube[3][i][j];
            }
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cube[3][i][j] = temp[2 - j][i];
            }
        }
    }
    
    leftTurn(){
        let temp = new Array(4);
    
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            temp[0][i] = this.cube[5][2 - i][0];// Yellow
            temp[1][i] = this.cube[2][i][0];// Green
            temp[2][i] = this.cube[0][i][0];// White
            temp[3][i] = this.cube[4][2 - i][2];// Blue
        }
        for (let i = 0; i < 3; i++) {
            this.cube[2][i][0] = temp[2][i];
            this.cube[0][i][0] = temp[3][i];
            this.cube[4][i][2] = temp[0][i];
            this.cube[5][i][0] = temp[1][i];
        }
    
        temp = new Array(3);
    
        for(let i = 0; i < 3; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                temp[i][j] = this.cube[1][i][j];
            }
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cube[1][i][j] = temp[2 - j][i];
            }
        }
    }
    
    upTurn(){
        let temp = new Array(4);
    
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            temp[0][i] = this.cube[1][0][i];// Orange
            temp[1][i] = this.cube[2][0][i];// Green
            temp[2][i] = this.cube[3][0][i];// Red
            temp[3][i] = this.cube[4][0][i];// Blue
        }
        for (let i = 0; i < 3; i++) {
            this.cube[1][0][i] = temp[1][i];
            this.cube[2][0][i] = temp[2][i];
            this.cube[3][0][i] = temp[3][i];
            this.cube[4][0][i] = temp[0][i];
        }
    
        temp = new Array(3);
    
        for(let i = 0; i < 3; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                temp[i][j] = this.cube[0][i][j];
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cube[0][i][j] = temp[2 - j][i];
            }
        }
    }
    
    downTurn(){
        let temp = new Array(4);
    
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            temp[0][i] = this.cube[1][2][i];// Orange
            temp[1][i] = this.cube[2][2][i];// Green
            temp[2][i] = this.cube[3][2][i];// Red
            temp[3][i] = this.cube[4][2][i];// Blue
        }
        for (let i = 0; i < 3; i++) {
            this.cube[1][2][i] = temp[3][i];
            this.cube[2][2][i] = temp[0][i];
            this.cube[3][2][i] = temp[1][i];
            this.cube[4][2][i] = temp[2][i];
        }
    
        temp = new Array(3);
    
        for(let i = 0; i < 3; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                temp[i][j] = this.cube[5][i][j];
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cube[5][i][j] = temp[2 - j][i];
            }
        }
    }
    
    faceTurn(){
        let temp = new Array(4);
    
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            temp[0][i] = this.cube[1][i][2];// Orange
            temp[1][i] = this.cube[0][2][i];// White
            temp[2][i] = this.cube[3][i][0];// Red
            temp[3][i] = this.cube[5][0][i];// Yellow
        }
        for (let i = 0; i < 3; i++) {
            this.cube[1][i][2] = temp[3][i];
            this.cube[0][2][i] = temp[0][2 - i];
            this.cube[3][i][0] = temp[1][i];
            this.cube[5][0][i] = temp[2][2 - i];
        }
    
        temp = new Array(3);
    
        for(let i = 0; i < 3; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                temp[i][j] = this.cube[2][i][j];
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cube[2][i][j] = temp[2 - j][i];
            }
        }
    }
    
    backTurn() {
        let temp = new Array(4);
    
        for(let i = 0; i < 4; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            temp[0][i] = this.cube[1][i][0];// Orange
            temp[1][i] = this.cube[0][0][i];// White
            temp[2][i] = this.cube[3][i][2];// Red
            temp[3][i] = this.cube[5][2][i];// Yellow
        }
        for (let i = 0; i < 3; i++) {
            this.cube[1][i][0] = temp[1][2 - i];
            this.cube[0][0][i] = temp[2][i];
            this.cube[3][i][2] = temp[3][2 - i];
            this.cube[5][2][i] = temp[0][i];
        }
    
        temp = new Array(3);
    
        for(let i = 0; i < 3; i++){
            temp[i] = new Array(3);
        }
    
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                temp[i][j] = this.cube[4][i][j];
            }
        }
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                this.cube[4][i][j] = temp[2 - j][i];
            }
        }
    }
}