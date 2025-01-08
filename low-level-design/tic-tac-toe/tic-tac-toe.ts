import Game from "./game";
import Player from "./player";

const game = new Game(new Player('player1', 'X'), new Player('player2', 'O'))
game.play()