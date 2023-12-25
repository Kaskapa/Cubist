export function generateScramble(count){
    let notations = ['U', 'D', 'R', 'L', 'F', 'B'];
    let reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L']];
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