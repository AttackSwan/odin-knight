class Board {
	constructor(boardSize = 8, knightSymbol = "K") {
		this.boardSize = boardSize; // Standard 8x8 chessboard
		this.knightSymbol = knightSymbol;
		this.emptySquareSymbol = 0;
		this.board = this.initialiseBoard();
	}

	initialiseBoard() {
		const board = [];

		for (let row = 0; row < this.boardSize; row++) {
			const rowArray = [];
			for (let col = 0; col < this.boardSize; col++) {
				rowArray.push(0); // Empty square
			}
			board.push(rowArray);
		}

		return board;
	}

	isValidPosition(row, col) {
		return (
			row >= 0 && row < this.boardSize && col >= 0 && col < this.boardSize
		);
	}

	hasKnight(row, col) {
		if (this.isValidPosition(row, col)) {
			return this.board[row][col] === this.knightSymbol;
		}
		return false;
	}

	placeKnight(row, col) {
		if (this.isValidPosition(row, col) && !this.hasKnight(row, col)) {
			this.board[row][col] = this.knightSymbol;
		}
	}
}

module.exports = Board;
