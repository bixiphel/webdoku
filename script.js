const board = document.getElementById('sudoku-board');

function createBoard() {
    for (let i = 0; i < 81; i++) {
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.setAttribute('maxlength', '1');

        input.addEventListener('input', () => {
            const val = input.value;
            if (!/^[1-9]?$/.test(val)) {
                input.value = '';
            }
        });

        board.appendChild(input);
    }
}

createBoard();
