import { Submarine } from "./Submarine.js";

export class GameSubmarine {
	constructor(UIControl) {
		this.UIControl = UIControl;
		this.UIControl.start(this);
		this.submarine = new Submarine();
		this.submarine.init(UIControl.control.size);
	}

	shot(x, y) {

		if(this.submarine.x == x && this.submarine.y == y) {
			return true;
		}

		//let celda = this.tablero.find((item) => item.x == this.submarine.x && item.y == this.submarine.y);
		// this.submarine.mover(celda.vecinos.filter((item) => item!=null));
		return false;
	}




}