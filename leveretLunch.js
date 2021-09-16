function cellCheck(field, row, column) {
  if (
    row <= field.length - 1 &&
    row >= 0 &&
    column >= 0 &&
    column <= field[0].length - 1
  ) {
    return field[row][column];
  } else return 0;
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
  let indexOfMax;
  console.log("neighbors array is", neighborsArray);
  indexOfMax = neighborsArray.indexOf(Math.max(...neighborsArray));

  if (neighborsArray[indexOfMax] == 0) {
    return [undefined, undefined];
  }
  console.log("index of Max is", indexOfMax);
  switch (indexOfMax) {
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
      return [undefined, undefined];
      break;
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
    column = (numColumns - 1) / 2;

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
  let rabbitPosition = new Array(2);
  rabbitPosition = findCenter(field);
  let neighborsArray = [];
  let nextNeighbor = [];
  totalEaten += field[rabbitPosition[0]][rabbitPosition[1]];
  field[rabbitPosition[0]][rabbitPosition[1]] = 0;
  console.log("total eaten is", totalEaten);
  while (true) {
    neighborsArray = neighbors(field, rabbitPosition[0], rabbitPosition[1]);
    nextNeighbor = findNeighborsMax(
      neighborsArray,
      rabbitPosition[0],
      rabbitPosition[1]
    );

    console.log("next neighbor is", nextNeighbor);
    if (nextNeighbor[0] == undefined) {
      return totalEaten;
    }
    rabbitPosition = nextNeighbor;
    totalEaten += field[rabbitPosition[0]][rabbitPosition[1]];
    console.log("total eaten is", totalEaten);
    field[rabbitPosition[0]][rabbitPosition[1]] = 0;
  }
  return totalEaten;
}
const garden = [
  [2, 3, 1, 4, 2, 2, 3],
  [2, 3, 0, 4, 0, 3, 0],
  [1, 7, 0, 2, 1, 2, 3],
  [9, 3, 0, 4, 2, 0, 3],
];
console.log(leveretLunch(garden));
