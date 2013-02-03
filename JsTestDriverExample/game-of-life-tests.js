'use strict';

describe('Life game', function() {
	describe('czy pobieranie poszczegolnej komorki dziala ', function() {
		var board = new Board(["........",
		                        "....*...",
		                        "...**...",
		                        "........"]);
		it('brzeg zaczynamy z indeksem od 0', function() {
			expect(".").toEqual(board.cell(0,0));
		});
		
		it('gwiazdka', function() {
			expect("*").toEqual(board.cell(2,3));
		});
		it('testing setCell with 9', function() {
			board.setCell(2,3, "9");
			expect("9").toEqual(board.cell(2,3));
		});
	});
	describe('czy pobieranie nastepnej wersj dziala ', function() {
		var board = new Board([ "........",
		                        "....*...",
		                        "...**...",
		                        "........"]);
		it('powinno byc zycie w nastepnej generacj', function() {
			var it = board.next();
			var cos = it.cell(2,3);
			expect("*").toEqual(cos);
			jstestdriver.console.log(board.currentArray);
		});
	});
	describe('czy pobieranie nastepnej wersj dziala ', function() {
		var board = new Board([ "........",
		                        "..***...",
		                        "..***...",
		                        "..***..."]);
		it('nnnn', function() {
			var it = board.next();
			var cos = it.cell(2,3);
			jstestdriver.console.log(it.currentArray);
			expect(".").toEqual(cos);
		});
	});
	describe('testowanie wylicania sasiedztwa', function() {
		var arr = ["........",
                   "....*...",
                   "...**...",
                   "........"];
		var board = new Board(arr);
		it('powinien dla 2,3 byc 2', function() {
			var cos = Board.countLiveNeighbours(arr,2,3);
			expect(2).toEqual(cos);
		});
		it('powinien dla 0,0 byc 0', function() {
			var cos = Board.countLiveNeighbours(arr,0,0);
			expect(0).toEqual(cos);
		});
		it('powinien dla 4,4 byc 0', function() {
			var cos = Board.countLiveNeighbours(arr,4,4);
			expect(0).toEqual(cos);
		});
	});
	describe('testowanie wylicania sasiedztwa33', function() {
		var arr = [ "........",
                    "..***...",
                    "..***...",
                    "..***..."];
		var board = new Board(arr);
		it('powinien dla 2,3 byc 8', function() {
			var cos = Board.countLiveNeighbours(arr,2,3);
			expect(8).toEqual(cos);
		});
		it('powinien dla 0,0 byc 0', function() {
			var cos = Board.countLiveNeighbours(arr,0,0);
			expect(0).toEqual(cos);
		});
	});
});