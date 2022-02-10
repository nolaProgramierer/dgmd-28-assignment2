document.addEventListener("DOMContentLoaded", function() {
  
    // On button click make new board
    document.querySelector("#board-button").addEventListener("click", function () {       
        makeBoard();
    });

    document.querySelector("#clear-board").addEventListener("click", function () {       
        location.reload();
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
                    playGame(this, board);
                });
            })(i);
            console.log("Making square number " + (i + 1));
            // Make checkerboard effect
            checkerBoard(i, newSquare);          
        }// End for loop      

    }// End makeBoard function

    
    
    // add X's and 0's
    var turn = 0;
    var player1 = [];
    var player2 = [];
    function playGame(newSquare, board) {     
        if (turn % 2 == 0) {      
            player1.push(parseInt(newSquare.dataset.squareNum));
            newSquare.innerHTML =  "<h1>X</h1>";
            if(isWinner(player1, board)) {
                console.log("I won!");
            };
        } else {
            player2.push(parseInt(newSquare.dataset.squareNum));
            newSquare.innerHTML =  "<h1>O</h1>";
            if(isWinner(player2, board)) {
                console.log("I won!");
            };
        }
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
        console.log("Background color of this square is white.")
    }
    console.log("DOM content parsed and loaded.");
});//End DOMContentLoaded