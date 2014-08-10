require(['matrix'], function(Matrix){
  var matrix = new Matrix(4, 4);

  matrix.setRow(0, [1, 1, 1, 1]);
  matrix.setRow(1, [2, 2, 2, 2]);
  matrix.setRow(2, [3, 3, 3, 3]);
  matrix.setRow(3, [4, 4, 4, 4]);
  //matrix.setCol(2, [5, 5, 5, 5]);
  console.log(matrix.getData());
  console.log(matrix.getRow(1));
  console.log(matrix.getCol(1));
  console.log(matrix.getAt(3, 3));
  matrix.setAt(2, 2, 1);
  console.log(matrix.getAt(2, 2));
  console.log(matrix.toString());
});
