function Board(board) {

	this.currentArray = board;
	
	this.cell = function(row, column) {
		return board[row].charAt(column);
	};
	
	this.setCell = function(row, column, char) {
		var str = board[row];
		board[row] = str.substr(0, column) + char + str.substr(column+char.length);
	};

	this.next = function() {
		var newBoard = _.map(_.range(board.length), function(row) {
			var rowStr = "";
			_.each(_.range(board[row].length), function(column) {
				count = Board.countLiveNeighbours(board, row, column);
				char = board[row].charAt(column);
				rowStr += Board.newChar(char,count);
			});
			return rowStr;
		});
		return new Board(newBoard);
	};

};

Board.countLiveNeighbours = function(board, row, column) {
	var count = 0;
	var maxRow = board.length;
	var maxCol = board[0].length;
	var allowedRow = _.intersection([ row - 1, row, row + 1 ], _.range(maxRow));
	var allowedCol = _.intersection([ column - 1, column, column + 1 ], _.range(maxCol));
	var temp = _.map(allowedRow, function(r) {
		_.map(allowedCol, function(c) {
			if (!(r == row && c == column)) {
				cell = board[r].charAt(c);
				if (cell == "*") {
					count = count + 1;
				}
				return cell;
			}
			return "-";
		});
	});
	return count;
};

Board.newChar = function(char, count){
	newchar = "";
	// tu preksztalcenia
	if (char == "*") {
		if (count < 2) {
			return ".";
		}
		if (count > 3) {
			return ".";
		}
		return "*";
	} 
	if (count == 3) {
		return "*";
	} 
	return ".";
	
}
