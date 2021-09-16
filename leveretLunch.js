function cellCheck(field, row, column) {
  if (field[row][column] != undefined) {
    return field[row][column];
  } else return undefined;
}
//array listing neighbors WNES
function neighbors(field, row, column) {
  return [
    cellCheck(field, row, column - 1),
    cellCheck(field, row - 1, column),
    cellCheck(field, row, column + 1),
    cellCheck(field, row + 1, column),
  ];
}

function findNeighborsMax(neighborsArray, row, column) {
  let max = 0;
  let maxIndex = new Array(2);
  for (let i = 0; i < neighborsArray.length; i++) {
    if (
      neighborsArray[neighbors] != undefined &&
      neighborsArray[neighbors] > max
    ) {
      max = neighborsArray[neighbors];
      switch (i) {
        case 0:
          maxIndex = [row, column - 1];
          return maxIndex;
          break;
        case 1:
          maxIndex = [row - 1, column];
          return maxIndex;
          break;
        case 2:
          maxIndex = [row, column + 1];
          return maxIndex;
          break;
        case 3:
          maxIndex = [row + 1, column];
          return maxIndex;
          break;
        default:
          return maxIndex;
          break;
      }
    }
  }
  return maxIndex;
}

function findCenter(field) {
  let row = 0;
  let column = 0;
  let numRows = field.length;
  let numColumns = field[0].length;
  //console.log(numRows);
  //console.log(numColumns);
  if (numRows % 2 === 1 && numColumns % 2 === 1) {
    row = (numRows - 1) / 2;
    column = (numColumns - 1) / 2;
    return [row, column];
  }
  if (numRows % 2 === 1 && numColumns % 2 === 0) {
    row = (numRows - 1) / 2;
    column =
      field[row][Math.floor(numColumns - 1) / 2] > field[row][numColumns / 2]
        ? Math.floor((numColumns - 1) / 2)
        : numColumns / 2;
    return [row, column];
  }
  if (numRows % 2 === 0 && numColumns % 2 === 1) {
    console.log("entered right");
    column = (numColumns - 1) / 2;
    console.log(field[0][column]);
    row =
      field[Math.floor((numRows - 1) / 2)][column] > field[numRows / 2][column]
        ? Math.floor((numRows - 1) / 2)
        : numRows / 2;
    return [row, column];
  }
  if (numRows % 2 === 0 && numColumns % 2 === 0) {
    let leftUp,
      rightUp,
      leftDown,
      rightDown = 0;
    leftUp =
      field[Math.floor((numRows - 1) / 2)][Math.floor((numColumns - 1) / 2)];
    rightUp = field[Math.floor((numRows - 1) / 2)][numColumns / 2];
    rightDown = field[numRows / 2][numColumns / 2];
    leftDown = field[numRows / 2][Math.floor((numColumns - 1) / 2)];
    const arr = [leftUp, rightUp, rightDown, leftDown];
    let ind = arr.indexOf(Math.max(...arr));
    switch (ind) {
      case 0:
        return [
          Math.floor((numRows - 1) / 2),
          Math.floor((numColumns - 1) / 2),
        ];

        break;
      case 1:
        return [Math.floor((numRows - 1) / 2), numColumns / 2];

        break;
      case 2:
        return [numRows / 2, numColumns / 2];

        break;
      case 3:
        return [numRows / 2, Math.floor((numColumns - 1) / 2)];

        break;
      default:
        return [undefined, undefined];
        break;
    }
  }
  return [row, column];
}

function leveretLunch(field) {
  let totalEaten = 0;

  return totalEaten;
}
const garden = [
  [9, 9, 9, 9],
  [9, 2, 5, 0],
  [9, 6, 3, 2],
  [9, 9, 1, 0],
];
leveretLunch(garden);
