document.addEventListener("DOMContentLoaded", function() {
  
    // On button click make new board
    document.querySelector("#board-button").addEventListener("click", function () {
        makeBoard();
    });
    // Reload page
    document.querySelector("#clear-board").addEventListener("click", function () {
        location.reload();
    });

    // 9 squares added to grid container w/ event listener on each square
    function makeBoard() {
        // Attributes of empty TTT board
        var board = [];
        var numSquares = 9;

        var turns = 0;
        
        for (let i = 0; i < numSquares; i++) {
            // Create board
            let newSquare = document.createElement("div");
            newSquare.classList.add("ttt-square");
            const boardDiv = document.getElementById("board-container");
            boardDiv.appendChild(newSquare);
            // Board square numbers in an array
            board.push(i + 1);
           
            // Set data attribute to number of square created
            newSquare.setAttribute("data-square-num", (i + 1));
            // Set eventlistener for each square for game play
            // Event will fire only once
            (function (i) {
                newSquare.addEventListener("click", function() {
                    playGame(this, board);
                }, {once: true});
            })(i);
            console.log("Making square number " + (i + 1));
            // Add checkerboard effect
            checkerBoard(i, newSquare);
        }// End for loop
    }// End makeBoard function

    
    
    // add X's and 0's to board
    var turn = 0;
    var player1 = [];
    var player2 = [];
    function playGame(newSquare, board) {
        if (turn % 2 == 0) {
            player1.push(parseInt(newSquare.dataset.squareNum));
            newSquare.classList.add("board-marks");
            newSquare.innerHTML =  "X";
            if (isWinner(player1, board)) {        
                console.log("X player won!");
               
            }
        } else {
            player2.push(parseInt(newSquare.dataset.squareNum));
            newSquare.classList.add("board-marks");
            newSquare.innerHTML =  "O";
            if (isWinner(player2, board)) {
                
                console.log("O player won!");
                
            }
        }
        // Add conditional for no winner here
        // Use # of turns to decide if a draw
        turn ++;
    }


    // Test for winning combination of squares
    function isWinner(player, board) {
        if (player.includes(board[0]) && player.includes(board[1]) && player.includes(board[2]) ||
            player.includes(board[3]) && player.includes(board[4]) && player.includes(board[5]) ||
            player.includes(board[6]) && player.includes(board[7]) && player.includes(board[8]) ||
            player.includes(board[0]) && player.includes(board[3]) && player.includes(board[6]) ||
            player.includes(board[1]) && player.includes(board[4]) && player.includes(board[7]) ||
            player.includes(board[2]) && player.includes(board[5]) && player.includes(board[8]) ||
            player.includes(board[0]) && player.includes(board[4]) && player.includes(board[8]) ||
            player.includes(board[2]) && player.includes(board[4]) && player.includes(board[6]))
            {
                console.log("Winner");
                return true;
            } else {
                console.log("No winner");
                return false;
            }
     }
    
    // Change background color of square if for loop index is odd
    function checkerBoard(index, el) {
        if (index % 2 != 0) {
            el.style.backgroundColor = "white";
        }
    }// End checkerBoard

    // On winner remove event listener to continue play
    
    console.log("DOM content parsed and loaded.");
});//End DOMContentLoaded