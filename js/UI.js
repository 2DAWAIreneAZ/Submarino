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
    },

    start(game) {
        UI.game = game;
        UI.control.status.textContent = "Juego iniciado";
				this.createBoard();
    },

    changeStatus(newStatus) {
        UI.control.status.textContent = newStatus;
    },

		createBoard() {
			this.control.board.style.gridTemplateColumns = `repeat(${this.control.size}, 1fr)`;

			const template = this.control.board.querySelector("#cell-template");

			Array.from({ length: this.control.size*this.control.size }, (_, i) => {
				const clon = template.content.cloneNode(true);
				const cell = clon.querySelector('.cell')
				cell.textContent = ` ${Math.floor(i/this.control.size)}, ${(i%this.control.size)}`;
				cell.addEventListener('click', (event) => {
					if(UI.game.shot(cell.dataset.row, cell.dataset.column)) {
						window.alert("You win!")
					}
				});

			cell.dataset.row = Math.floor(i/this.control.size);
			cell.dataset.column = i%this.control.size;
			this.control.board.appendChild(clon);
		});
		}

}