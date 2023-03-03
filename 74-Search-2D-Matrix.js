var searchMatrix = function (matrix, target) {
  let rowCheck = 0;

  if (matrix.length > 1) {
    for (let i = 1; i < matrix.length; i++) {
      if (target < matrix[i][0]) {
        rowCheck = i - 1;
        break;
      } else {
        rowCheck = i;
      }
    }
  }

  console.log(matrix.length, rowCheck);

  for (let j = 0; j < matrix[rowCheck].length; j++) {
    if (matrix[rowCheck][j] === target) {
      return true;
    }
    console.log(matrix[rowCheck][j]);
  }

  return false;
};
