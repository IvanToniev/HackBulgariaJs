"use strict";
var prompt = require("sync-prompt").prompt;

function printBoard(board) {
  var
    i = 0,
    n = board.length;
  // keep in mind that this is poorly-written JavaScript code
  // we will learn not to use for loops in JavaScript
  for(i; i < n; i++) {
    console.log(board[i].join(""));
  }
}

function checkWin(board) {
  var
    pos1 = board[0][0],
    pos2 = board[0][1],
    pos3 = board[0][2],
    pos4 = board[1][0],
    pos5 = board[1][1],
    pos6 = board[1][2],
    pos7 = board[2][0],
    pos8 = board[2][1],
    pos9 = board[2][2],
    winner = 0;

  if (pos1 == pos2 && pos1 == pos3 && pos1 != '') {
    if(pos1 == 'X') {
      winner = 1;
    } else if(pos1 == 'O') {
      winner = -1;
    }
  }
  if (pos1 == pos2 && pos1 == pos3 && pos1 != '') {
    if(pos1 == 'X') {
      winner = 1;
    } else if(pos1 == 'O') {
      winner = -1;
    }
  }
  if (pos1 == pos4 && pos1 == pos7 && pos1 != '') {
    if(pos1 == 'X') {
      winner = 1;
    } else if(pos1 == 'O') {
      winner = -1;
    }
  }
  if (pos4 == pos5 && pos4 == pos6 && pos4 != '') {
    if(pos4 == 'X') {
      winner = 1;
    } else if(pos4 == 'O') {
      winner = -1;
    }
  }
  if (pos7 == pos8 && pos7 == pos9 && pos7 != '') {
    if(pos7 == 'X') {
      winner = 1;
    } else if(pos7 == 'O') {
      winner = -1;
    }
  }
  if (pos2 === pos5 && pos2 === pos8 && pos2 !== '') {
    if(pos2 === 'X') {
      winner = 1;
    } else if(pos2 === 'O') {
      winner = -1;
    }
  }
  if (pos3 == pos6 && pos3 == pos9 && pos3 != '') {
    if(pos3 == 'X') {
      winner = 1;
    } else if(pos3 == 'O') {
      winner = -1;
    }
  }
  if (pos1 == pos5 && pos1 == pos9 && pos1 != '') {
    if(pos1 == 'X') {
      winner = 1;
    } else if(pos1 == 'O') {
      winner = -1;
    }
  }
  if (pos3 == pos5 && pos7 == pos3 && pos3 != '') {
    if(pos3 == 'X') {
      winner = 1;
    } else if(pos3 == 'O') {
      winner = -1;
    }
  }

  return winner;
}

// entry point for the game
function gameLoop() {
  var
    board = [ ["*", "*", "*"],
              ["*", "*", "*"],
              ["*", "*", "*"] ],
    xTurn = true,
    position = null;

  while(true) {

    console.log("This is the current state of the board:");
    printBoard(board);

    if(xTurn) {
      console.log("Place for x");
    } else {
      console.log("Place for y");
    }

    position = prompt("x y>");
    console.log(position);

    var pos = position.split(' '),
        xcoord = pos[0],
        ycoord = pos[1];
    //validate move
    if(xcoord > 2 || ycoord > 2 || board[xcoord][ycoord] === "X" || board[xcoord][ycoord] === "Y") {

      console.log('Invalid position, enter again;');
      pos = [];
      position = prompt("x y>");
      pos = position.split(' ');
      continue;
    }

    if(xTurn) {
      board[xcoord][ycoord] = "X";
    } else {
      board[xcoord][ycoord] = "Y";
    }

    if(checkWin(board) === 1) {
      console.log('X wins');
      break;
    } else if(checkWin(board) === -1) {
      console.log('O wins');
      break;
    }

    xTurn = !xTurn;

  }
}

gameLoop();
