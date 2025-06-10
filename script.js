var numSelected = null;
var tileSelected = null;

var errors = 0;

window.onload = function() {
    setGame();
}

function setGame() {
    // Digits 1-9
    for(let i = 1; i <= 9; i++) {
        let number = document.createElement("div");
        number.id = i;
        number.innerText = i;
        number.classList.add("number");
        document.getElementById("digits").appendChild(number);
    }

    // Board 9x9
    for(let r = 0; r < 9; r++) {
        for(let c = 0; c < 9; c++) {
            let tile = document.createElement("div")
            tile.id = r.toString() + "-" + c.toString();
            tile.classList.add("tile");
            document.getElementById("board").append(tile);
        }
    }
}