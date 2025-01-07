import Board from './board'
import Game from './game'
import Player from './player'



const board = new Board()
const game = new Game(board)
game.addPlayer(new Player(1, 'Player 1'))
game.addPlayer(new Player(2, 'Player 2'))
game.play()