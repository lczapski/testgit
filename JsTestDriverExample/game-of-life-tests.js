'use strict';

describe('Life game', function() {
	describe('Get cell value', function() {
		var board = new Board(["........",
		                        "....*...",
		                        "...**...",
		                        "........"]);
		it('corner start from 0 index', function() {
			expect(".").toEqual(board.cell(0,0));
		});
		
		it('should be * for 2,3', function() {
			expect("*").toEqual(board.cell(2,3));
		});
		it('testing setCell with 9', function() {
			board.setCell(2,3, "9");
			expect("9").toEqual(board.cell(2,3));
		});
	});
	describe('Generating next version ', function() {
		var board = new Board([ "........",
		                        "....*...",
		                        "...**...",
		                        "........"]);
		it('Should be live cell in 2,3', function() {
			var it = board.next();
			var cos = it.cell(2,3);
			expect("*").toEqual(cos);
			jstestdriver.console.log(board.currentArray);
		});
	});
	describe('Generating next version, other', function() {
		var board = new Board([ "........",
		                        "..***...",
		                        "..***...",
		                        "..***..."]);
		it('Should be dead cell in 2,3', function() {
			var it = board.next();
			var cos = it.cell(2,3);
			jstestdriver.console.log(it.currentArray);
			expect(".").toEqual(cos);
		});
	});
	describe('Computin neighbours', function() {
		var arr = ["........",
                   "....*...",
                   "...**...",
                   "........"];
		var board = new Board(arr);
		it('Should be 2 for 2,3', function() {
			var cos = Board.countLiveNeighbours(arr,2,3);
			expect(2).toEqual(cos);
		});
		it('Should be 0 for 0,0', function() {
			var cos = Board.countLiveNeighbours(arr,0,0);
			expect(0).toEqual(cos);
		});
		it('Should be 0 for 4,4', function() {
			var cos = Board.countLiveNeighbours(arr,4,4);
			expect(0).toEqual(cos);
		});
	});
	describe('Computin neighbours, other', function() {
		var arr = [ "........",
                    "..***...",
                    "..***...",
                    "..***..."];
		var board = new Board(arr);
		it('Should be 8 for 2,3', function() {
			var cos = Board.countLiveNeighbours(arr,2,3);
			expect(8).toEqual(cos);
		});
		it('Should be 0 for 0,0', function() {
			var cos = Board.countLiveNeighbours(arr,0,0);
			expect(0).toEqual(cos);
		});
	});
});