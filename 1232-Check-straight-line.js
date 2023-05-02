var checkStraightLine = function (coordinates) {
  if (coordinates[0][0] === coordinates[1][0]) {
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][0] !== coordinates[0][0]) {
        return false;
      }
    }
  } else if (coordinates[0][1] === coordinates[1][1]) {
    for (let i = 2; i < coordinates.length; i++) {
      if (coordinates[i][1] !== coordinates[0][1]) {
        return false;
      }
    }
  } else {
    let expectedLine =
      (coordinates[1][1] - coordinates[0][1]) /
      (coordinates[1][0] - coordinates[0][0]);
    for (let i = 2; i < coordinates.length; i++) {
      let line =
        (coordinates[i][1] - coordinates[0][1]) /
        (coordinates[i][0] - coordinates[0][0]);

      if (line !== expectedLine) {
        return false;
      }
    }
  }
};
