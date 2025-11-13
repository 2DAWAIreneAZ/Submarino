const Neighbour = {
    TOP: 0,
    BOTTOM: 1,
    LEFT: 2,
    RIGHT: 3
}

class Cell {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.neighbours = [null, null, null, null];
				// this.value = 0; PARA EL RASTRO NS
    }

    assignNeighbour(direction, cell) {
        this.neighbours[direction] = cell;
    }
}

export { Neighbour, Cell }
