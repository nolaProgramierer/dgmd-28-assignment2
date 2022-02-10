var player = [1, 0, 2];
var board1 = [2, 5, 0];
var board2 = [2, 1, 0];

const isWinner = board2.every(element => {
    return player.includes(element);
})


if (player.includes(board2[0]) && player.includes(board2[1]) && player.includes(board2[2])) {
    console.log("Yeah!")
}