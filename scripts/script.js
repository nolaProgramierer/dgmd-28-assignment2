document.addEventListener("DOMContentLoaded", function() {
  
    // On button click make new board
    document.querySelector("#board-button").addEventListener("click", function () {       
        console.log("'Show board' button clicked");
        makeBoard();
    });

    // 9 squares added to grid container
    function makeBoard() {
        // Attributes of empty TTT board
        var board = [];
        var numSquares = 9;

        var turns = 0;
        
        for (let i = 0; i < numSquares; i++) {
            let newSquare = document.createElement("div");
            newSquare.classList.add("ttt-square");
            const boardDiv = document.getElementById("board-container");
            boardDiv.appendChild(newSquare);
            // Board square numbers
            board.push(i + 1);   
           
            // Set data attribute to number of square created
            newSquare.setAttribute("data-square-num", (i + 1));
            // Set eventlistener for each square
            (function (i) {
                newSquare.addEventListener("click", function() {
                    playGame(this);
                });
            })(i);
            console.log("Making square number " + (i + 1));
            // Make checkerboard effect
            checkerBoard(i, newSquare);          
        }// End for loop      
        console.log(board);
    }// End makeBoard function

    // add X's and 0's
    var turn = 0;
    var player1 = [];
    var player2 = [];
    function playGame(newSquare) {     
        if (turn % 2 == 0) {      
            player1.push(newSquare.dataset.squareNum);
            newSquare.innerHTML =  "<h1>X</h1>";
        } else {
            player2.push(newSquare.dataset.squareNum);
            newSquare.innerHTML =  "<h1>O</h1>";
        }
        turn ++;
        console.log("Turn #:" + turn);
        console.log("Player1: " + player1);
        console.log("Player2: " + player2);
    }
   
   
    // Test for winning combination of squares
    function isWinner(player, board) {
        if (board[0] == player && board[1] == player % board[2] == player |
            board[3] == player && board[4] == player & board[5] == player |
            board[6] == player && board[7] == player & board[8] == player |
            board[0] == player && board[3] == player & board[6] == player |
            board[1] == player && board[4] == player & board[7] == player |
            board[2] == player && board[5] == player & board[8] == player |
            board[0] == player && board[4] == player & board[8] == player |
            board[2] == player && board[4] == player & board[6] == player)
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
        console.log("Background color of this square is white.")
    }
    console.log("DOM content parsed and loaded.");
});//End DOMContentLoaded