import { Submarine } from "./Submarine.js";
import { Cell } from "./Cell.js";
import { Neighbour } from "./Cell.js";

export class GameSubmarine {
	constructor(UIControl) {
		this.board = null;
		this.UIControl = UIControl;
		this.submarine = new Submarine();
	}

	shot(x, y) {
		if(this.submarine.x == x && this.submarine.y == y) {
			return true;
		}

		let cell = this.board.find((item) =>
			item.x == this.submarine.x && item.y == this.submarine.y
		);

		this.submarine.move(cell.neighbours.filter((item) => 
			item != null
		));

		console.log(this.submarine.x, this.submarine.y)

		return false;
	}

	start() {
		this.UIControl.start(this);
		this.submarine.init(this.UIControl.control.size);

		let size = this.UIControl.control.size;

		let mesh = Array.from({ length: size }, (_, row) => 
			Array.from({ length: size }, (_, column) => new Cell(row, column))
		);

		mesh.forEach((item, row) =>
			item.forEach((cell, column) => {
				// Añade los vecinos en caso de que no estén en los límites 
				if(row > 0) 
					cell.assignNeighbour(Neighbour.TOP, mesh[row - 1][column]);

				if(row < size - 1)
					cell.assignNeighbour(Neighbour.BOTTOM, mesh[row + 1][column]);

				if(column > 0)
					cell.assignNeighbour(Neighbour.LEFT, mesh[row][column - 1]);

				if(column < size - 1)
					cell.assignNeighbour(Neighbour.RIGHT, mesh[row][column + 1]);
			})
		);
		
		this.board = mesh.flat();
	}




}
