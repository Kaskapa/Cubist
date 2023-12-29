export function generateScrambles(type){
    let randomNumber = 0;
    let notations = [];
    let reverseNotations = [];
    switch(type){
        case "2x2":
            randomNumber = Math.floor(Math.random() * (15 - 10) ) + 10;
            notations = ['U', 'D', 'R', 'L', 'F', 'B'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case "3x3":
            randomNumber = Math.floor(Math.random() * (25 - 20) ) + 20;
            notations = ['U', 'D', 'R', 'L', 'F', 'B'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case "4x4":
            randomNumber = Math.floor(Math.random() * (40 - 35) ) + 35;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case "5x5":
            randomNumber = Math.floor(Math.random() * (60 - 55) ) + 55;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case "6x6":
            randomNumber = Math.floor(Math.random() * (80 - 75) ) + 75;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw', '3Uw', '3Dw', '3Rw', '3Lw', '3Fw', '3Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw'], ['3Uw', '3Dw'], ['3Fw', '3Bw'], ['3Rw', '3Lw']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case "7x7":
            randomNumber = Math.floor(Math.random() * (100 - 90) ) + 90;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw', '3Uw', '3Dw', '3Rw', '3Lw', '3Fw', '3Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw'], ['3Uw', '3Dw'], ['3Fw', '3Bw'], ['3Rw', '3Lw']];
            return generateScramble(randomNumber, notations, reverseNotations);
    }
}
function generateScramble(count, notations, reverseNotations){
    let moves = [];

    for(let i = 0; i < count; i++){
        let randomNum = Math.floor(Math.random() * notations.length);
        let move = notations[randomNum];

        let whichTurn;
        let whichMove;
        for(let i = 0; i < reverseNotations.length; i++){
            if(reverseNotations[i][0] === move){
                whichTurn = i;
                whichMove = 0;
            }else if(reverseNotations[i][1] === move){
                whichTurn = i;
                whichMove = 1;
            }
        }
        let whichMoveRev;

        if(whichMove == 0){
            whichMoveRev = 1;
        }else{
            whichMoveRev = 0;
        }

        while(i > 1 && move === reverseNotations[whichTurn][whichMove] && reverseNotations[whichTurn][whichMove] === moves[moves.length - 2].charAt(0) + "" && reverseNotations[whichTurn][whichMoveRev] === moves[moves.length - 1].charAt(0) + ""){
            randomNum = Math.floor(Math.random() * notations.length);
            move = notations[randomNum];
        }

        if(i > 0 && move.charAt(0) + "" === moves[moves.length-1].charAt(0) + ""){
            moves[moves.length-1] = move + "2";
            i--;
        }else{
            let rev = parseInt(Math.random() * 2) ?  true : false;
            if(rev){
                move += "'";
            }
            moves.push(move);
        }
    }
    return moves;
}
export function createScrambleFromArray(moves){
    let scramble = "";
    moves.forEach(move => {
        scramble += move + " ";
    });
    scramble = scramble.trim();

    return scramble;
}