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
    }
  }

  return Matrix;
});
