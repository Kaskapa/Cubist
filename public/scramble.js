export function generateScrambles(type){
    let randomNumber = 0;
    let notations = [];
    let reverseNotations = [];
    switch(type){
        case 2:
            randomNumber = Math.floor(Math.random() * (15 - 10) ) + 10;
            notations = ['U', 'D', 'R', 'L', 'F', 'B'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case 3:
            randomNumber = Math.floor(Math.random() * (25 - 20) ) + 20;
            notations = ['U', 'D', 'R', 'L', 'F', 'B'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L']];
            return generateScramble(randomNumber, notations, reverseNotations);
        case 4:
            randomNumber = Math.floor(Math.random() * (40 - 35) ) + 35;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw'], ["U", "Dw"], ["D", "Uw"], ["R", "Lw"], ["L", "Rw"], ["F", "Bw"], ["B", "Fw"]];
            return generateScramble(randomNumber, notations, reverseNotations);
        case 5:
            randomNumber = Math.floor(Math.random() * (60 - 55) ) + 55;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw'], ["U", "Dw"], ["D", "Uw"], ["R", "Lw"], ["L", "Rw"], ["F", "Bw"], ["B", "Fw"]];
            return generateScramble(randomNumber, notations, reverseNotations);
        case 6:
            randomNumber = Math.floor(Math.random() * (80 - 75) ) + 75;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw', '3Uw', '3Dw', '3Rw', '3Lw', '3Fw', '3Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw'], ['3Uw', '3Dw'], ['3Fw', '3Bw'], ['3Rw', '3Lw'], ["U", "3Dw"], ["D", "3Uw"], ["R", "3Lw"], ["L", "3Rw"], ["F", "3Bw"], ["B", "3Fw"], ["Bw", "3Fw"], ["Fw", "3Bw"], ["Lw", "3Rw"], ["Rw", "3Lw"], ["Dw", "3Uw"], ["Uw", "3Dw"], ["U", "Dw"], ["D", "Uw"], ["R", "Lw"], ["L", "Rw"], ["F", "Bw"], ["B", "Fw"]];
            return generateScramble(randomNumber, notations, reverseNotations);
        case 7:
            randomNumber = Math.floor(Math.random() * (100 - 90) ) + 90;
            notations = ['U', 'D', 'R', 'L', 'F', 'B', 'Uw', 'Dw', 'Rw', 'Lw', 'Fw', 'Bw', '3Uw', '3Dw', '3Rw', '3Lw', '3Fw', '3Bw'];
            reverseNotations = [['U', 'D'], ['F', 'B'], ['R', 'L'], ['Uw', 'Dw'], ['Fw', 'Bw'], ['Rw', 'Lw'], ['3Uw', '3Dw'], ['3Fw', '3Bw'], ['3Rw', '3Lw'], ["U", "3Dw"], ["D", "3Uw"], ["R", "3Lw"], ["L", "3Rw"], ["F", "3Bw"], ["B", "3Fw"], ["Bw", "3Fw"], ["Fw", "3Bw"], ["Lw", "3Rw"], ["Rw", "3Lw"], ["Dw", "3Uw"], ["Uw", "3Dw"], ["U", "Dw"], ["D", "Uw"], ["R", "Lw"], ["L", "Rw"], ["F", "Bw"], ["B", "Fw"]];
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
        let whichMoveRev;
        for(let j = 0; j < reverseNotations.length; j++){
            if(reverseNotations[j][0] === move){
                whichTurn = j;
                whichMove = 0;
                whichMoveRev = 1;

                while(i > 1 && move === reverseNotations[whichTurn][whichMove] && (reverseNotations[whichTurn][whichMove] === moves[moves.length - 2].charAt(0) + "" || reverseNotations[whichTurn][whichMoveRev] === moves[moves.length - 1].charAt(0) + "")){
                    randomNum = Math.floor(Math.random() * notations.length);
                    move = notations[randomNum];
                    j=0;
                }
            }else if(reverseNotations[j][1] === move){
                whichTurn = j;
                whichMove = 1;
                whichMoveRev = 0;

                while(i > 1 && move === reverseNotations[whichTurn][whichMove] && (reverseNotations[whichTurn][whichMove] === moves[moves.length - 2].charAt(0) + "" || reverseNotations[whichTurn][whichMoveRev] === moves[moves.length - 1].charAt(0) + "")){
                    randomNum = Math.floor(Math.random() * notations.length);
                    move = notations[randomNum];
                    j=0;
                }
            }
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