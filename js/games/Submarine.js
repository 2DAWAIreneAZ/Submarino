class Submarine {
    constructor() {
        this.x = 0;
        this.y = 0;

        console.log("El submarino se ha creado");
    }

    init(size) {
        this.x = Math.floor(Math.random() * (size-1));
        this.y = Math.floor(Math.random() * (size-1));
				
				console.log(this.x, this.y)
    }

    move(neighbours) {
        const neighbour =  neighbours[Math.floor(Math.random() * neighbours.length)];

        this.x = neighbour.x;
        this.y = neighbour.y;
    }
}

export{ Submarine }