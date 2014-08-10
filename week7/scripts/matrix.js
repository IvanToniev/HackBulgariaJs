'use strict';

//get rows and cols
define(function() {
  function Matrix (N, M) {
    if(!(this instanceof Matrix)) {
      return new Matrix(N, M);
    }

    var matrix = [[]];

    this.getN = function() {
      return N;
    };

    this.getM = function() {
      return M;
    };

    this.getRow = function(index) {
      var row = [],
          i = 0;

      for(i = 0; i < this.getM(); i++) {
        row.push(matrix[index][i]);
      }

      return row;
    };

    this.getCol = function(index) {
      var col = [],
          i = 0;

      for(i = 0; i < this.getN(); i++) {
        col.push(matrix[i][index]);
      }

      return col;
    }

    this.setRow = function(index, row) {
      if(row.length === this.getM()){
        if(index <= this.getN()) {
          matrix[index] = row;
        } else if(index === this.getN() + 1) {
          N = index;
          matrix[index] = row;
        }
      }
    };

    this.setCol = function(index, col) {
      var i = 0;
      for(i; i<this.getN(); i++) {
        matrix[i][index] = col[i];
      }
    };

    this.getData = function () {
      return matrix;
    };

    this.getAt = function(i, j) {
      return matrix[i][j];
    };

    this.setAt = function(i, j, value) {
      var copy = matrix;
      copy[i][j] = value;
      matrix = copy;
    };

    this.toString = function() {
      var i = 0,
          j = 0,
          printable = '';

      for(i = 0; i < this.getM(); i++) {
        var row = [];
        for(j = 0; j < this.getN(); j++) {
          row.push(matrix[i][j]);
        }
        printable += (row.join(' ')) + '\n';
      }

      return printable.trim();
    };
  }

  return Matrix;
});
