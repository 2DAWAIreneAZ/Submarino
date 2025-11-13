export const UI = {
    game: null,
    control: {
			board: null,
			status: null,
			size: null
    },

    init: (domControl, game) => {
        UI.control.board = document.getElementById(domControl.board);
        UI.control.status = document.getElementById(domControl.status);
        UI.control.size = domControl.size;
	UI.createBoard();
    },

    start(game) {
        UI.game = game;
        UI.control.status.textContent = "Juego iniciado";
    },

    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    },

		createBoard() {
			UI.control.board.style.gridTemplateColumns = `repeat(${this.control.size}, 1fr)`;

			const template = UI.control.board.querySelector("#cell-template");

			Array.from({ length: UI.control.size*UI.control.size }, (_, i) => {
				const clon = template.content.cloneNode(true);
				const cell = clon.querySelector('.cell')
				cell.textContent = ` ${Math.floor(i/UI.control.size)}, ${(i%this.control.size)}`;
				cell.addEventListener('click', (event) => {
					if(UI.game.shot(cell.dataset.row, cell.dataset.column)) {
						window.alert("You win!")
						UI.game.start()
					} else {
						UI.changeStatus(`Disparo fallado (${cell.dataset.row},${cell.dataset.column})`);
					}
				});

			cell.dataset.row = Math.floor(i/UI.control.size);
			cell.dataset.column = i%UI.control.size;
			UI.control.board.appendChild(clon);
		});
		}

}
