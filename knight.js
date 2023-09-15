const Board = require("./board.js");
const Node = require("./node.js");

function knightMoves(start, end) {
	const board = new Board();
	const visited = new Set();
	const moves = [
		[-2, -1],
		[-2, 1],
		[-1, -2],
		[-1, 2],
		[1, -2],
		[1, 2],
		[2, -1],
		[2, 1],
	];
	let targetReached = false;
	let shortestPath = [];

	console.log(`Finding path for ${start} to ${end}`);
	// Input validation
	if (
		!board.isValidPosition(start[0], start[1]) ||
		!board.isValidPosition(end[0], end[1])
	) {
		console.log("Error, invalid coordinate used");
		return;
	}

	const rootNode = new Node(start[0], start[1]);
	const queue = [rootNode];
	visited.add(rootNode.row + "-" + rootNode.col); // Initialise visited with the starting position

	while (queue.length > 0) {
		const currentNode = queue.shift();
		const currentRow = currentNode.row;
		const currentCol = currentNode.col;

		if (currentRow === end[0] && currentCol === end[1]) {
			targetReached = true;
			let node = currentNode;

			// Reconstruct the shortest path
			while (node !== null) {
				shortestPath.unshift([node.row, node.col]);
				node = node.parent;
			}
			break;
		}

		for (const [dr, dc] of moves) {
			const newRow = currentRow + dr;
			const newCol = currentCol + dc;
			const newPosition = newRow + "-" + newCol;

			if (
				board.isValidPosition(newRow, newCol) &&
				!visited.has(newPosition)
			) {
				visited.add(newPosition);
				const childNode = new Node(newRow, newCol, currentNode);
				queue.push(childNode);
			}
		}
	}

	if (targetReached) {
		console.log(
			`You made it in ${shortestPath.length - 1} moves! Here's your path:`
		);
		for (const position of shortestPath) {
			console.log(position);
		}
	} else {
		console.log("No path found to the target position.");
	}
}

//Testing
knightMoves([3, 3], [4, 3]);
knightMoves([0, 0], [7, 6]);
knightMoves([3, 3], [7, 6]);
knightMoves([0, 0], [7, 7]);
knightMoves([-1, 0], [50, 7]);
