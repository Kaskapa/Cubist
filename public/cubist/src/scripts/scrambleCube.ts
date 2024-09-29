import { Cube } from "./rubiksCube.ts";

export function scrambleCubeArray(scrambleArr: string[], cube = new Cube()){
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
            case "Rw":
                cube.rightTurnWide();
            break;
            case "Rw'":
                for(let i = 0; i < 3; i++){
                    cube.rightTurnWide();
                }
            break;
            case "Rw2":
                for(let i = 0; i < 2; i++){
                    cube.rightTurnWide();
                }
            break;
            case "Lw":
                cube.leftTurnWide();
            break;
            case "Lw'":
                for(let i = 0; i < 3; i++){
                    cube.leftTurnWide();
                }
            break;
            case "Lw2":
                for(let i = 0; i < 2; i++){
                    cube.leftTurnWide();
                }
            break;
            case "Fw":
                cube.faceTurnWide();
            break;
            case "Fw'":
                for(let i = 0; i < 3; i++){
                    cube.faceTurnWide();
                }
            break;
            case "Fw2":
                for(let i = 0; i < 2; i++){
                    cube.faceTurnWide();
                }
            break;
            case "Bw":
                cube.backTurnWide();
            break;
            case "Bw'":
                for(let i = 0; i < 3; i++){
                    cube.backTurnWide();
                }
            break;
            case "Bw2":
                for(let i = 0; i < 2; i++){
                    cube.backTurnWide();
                }
            break;
            case "Uw":
                cube.upTurnWide();
            break;
            case "Uw'":
                for(let i = 0; i < 3; i++){
                    cube.upTurnWide();
                }
            break;
            case "Uw2":
                for(let i = 0; i < 2; i++){
                    cube.upTurnWide();
                }
            break;
            case "Dw":
                cube.downTurnWide();
            break;
            case "Dw'":
                for(let i = 0; i < 3; i++){
                    cube.downTurnWide();
                }
            break;
            case "Dw2":
                for(let i = 0; i < 2; i++){
                    cube.downTurnWide();
                }
            break;
            case "3Uw":
                cube.upTurnWide3();
            break;
            case "3Uw'":
                for(let i = 0; i < 3; i++){
                    cube.upTurnWide3();
                }
            break;
            case "3Uw2":
                for(let i = 0; i < 2; i++){
                    cube.upTurnWide3();
                }
            break;
            case "3Dw":
                cube.downTurnWide3();
            break;
            case "3Dw'":
                for(let i = 0; i < 3; i++){
                    cube.downTurnWide3();
                }
            break;
            case "3Dw2":
                for(let i = 0; i < 2; i++){
                    cube.downTurnWide3();
                }
            break;
            case "3Rw":
                cube.rightTurnWide3();
            break;
            case "3Rw'":
                for(let i = 0; i < 3; i++){
                    cube.rightTurnWide3();
                }
            break;
            case "3Rw2":
                for(let i = 0; i < 2; i++){
                    cube.rightTurnWide3();
                }
            break;
            case "3Lw":
                cube.leftTurnWide3();
            break;
            case "3Lw'":
                for(let i = 0; i < 3; i++){
                    cube.leftTurnWide3();
                }
            break;
            case "3Lw2":
                for(let i = 0; i < 2; i++){
                    cube.leftTurnWide3();
                }
            break;
            case "3Fw":
                cube.faceTurnWide3();
            break;
            case "3Fw'":
                for(let i = 0; i < 3; i++){
                    cube.faceTurnWide3();
                }
            break;
            case "3Fw2":
                for(let i = 0; i < 2; i++){
                    cube.faceTurnWide3();
                }
            break;
            case "3Bw":
                cube.backTurnWide3();
            break;
            case "3Bw'":
                for(let i = 0; i < 3; i++){
                    cube.backTurnWide3();
                }
            break;
            case "3Bw2":
                for(let i = 0; i < 2; i++){
                    cube.backTurnWide3();
                }
            break;
        }
    });

    return cube;
}



