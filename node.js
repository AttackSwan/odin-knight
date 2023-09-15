class Node {
	constructor(row, col, parent = null) {
		this.row = row;
		this.col = col;
		this.parent = parent;
	}
}

module.exports = Node;
