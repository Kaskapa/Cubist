import { Cube } from "./rubiksCube.js";

export function scrambleCubeArray(scrambleArr, cube = new Cube()){
    scrambleArr.forEach(turn => {
        switch(turn){
            case "L":
                cube.leftTurn(); 
            break;
            case "L'":
                for(let i = 0; i < 3; i++){
                    cube.leftTurn(); 
                }
            break;
            case "L2":
                for(let i = 0; i < 2; i++){
                    cube.leftTurn(); 
                }
            break;

            case "R":
                cube.rightTurn(); 
            break;
            case "R'":
                for(let i = 0; i < 3; i++){
                    cube.rightTurn(); 
                }
            break;
            case "R2":
                for(let i = 0; i < 2; i++){
                    cube.rightTurn(); 
                }
            break;

            case "F":
                cube.faceTurn(); 
            break;
            case "F'":
                for(let i = 0; i < 3; i++){
                    cube.faceTurn(); 
                }
            break;
            case "F2":
                for(let i = 0; i < 2; i++){
                    cube.faceTurn(); 
                }
            break;

            case "B":
                cube.backTurn(); 
            break;
            case "B'":
                for(let i = 0; i < 3; i++){
                    cube.backTurn(); 
                }
            break;
            case "B2":
                for(let i = 0; i < 2; i++){
                    cube.backTurn(); 
                }
            break;

            case "U":
                cube.upTurn(); 
            break;
            case "U'":
                for(let i = 0; i < 3; i++){
                    cube.upTurn(); 
                }
            break;
            case "U2":
                for(let i = 0; i < 2; i++){
                    cube.upTurn(); 
                }
            break;

            case "D":
                cube.downTurn(); 
            break;
            case "D'":
                for(let i = 0; i < 3; i++){
                    cube.downTurn(); 
                }
            break;
            case "D2":
                for(let i = 0; i < 2; i++){
                    cube.downTurn(); 
                }
            break;
        }
    });

    return cube;
}



