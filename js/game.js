import { UI } from "./UI.js";
import { GAMES, Game } from "./games/Game.js";

UI.init({
    board: 'game-board',
    status: 'game-status',
		size: 5
});

const gameInstance = Game(GAMES.Submarine, UI);


