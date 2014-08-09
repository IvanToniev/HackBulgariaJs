require(['matrix'], function(Matrix){
  var matrix = new Matrix(3, 4);

  matrix.setRow(0, [1, 1, 1, 1]);
  matrix.setRow(1, [2, 2, 2, 2]);
  matrix.setRow(2, [3, 3, 3, 3]);
  matrix.setCol(2, [5, 5, 5]);
  console.log(matrix.getData());
});
