function checkWinnerHorizontal(clicked, grid, currentValue) {
  // console.log('function checkHorizontal - grid', grid);
  let winner = false;
  let x = clicked.slice(1,2);
  let y = clicked.slice(3,4);
  let currentVal = currentValue;
  let maxEqualinRow = 0;
  for(let i = x - 4; i < x + 4; i++) {
    let objKey = 'x' + i + 'y' + y;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.key === objKey
      }).val
      if(currentVal === gridElemVal) {
        maxEqualinRow++
      } else {
        maxEqualinRow = 0;
      }
      if(maxEqualinRow === 5) {
        winner = true;
        console.log('WINNER Horizontal!');
      }
    } catch(err) {}
  }
  return winner
}

function checkWinnerVertical(clicked, grid, currentValue) {
  let winner = false;
  let x = clicked.slice(1,2);
  let y = clicked.slice(3,4);
  let currentVal = currentValue;
  let maxEqualinRow = 0;

  for(let i = y - 4; i < y + 4; i++) {
    let objKey = 'x' + x + 'y' + i;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.key === objKey
      }).val
      if(currentVal === gridElemVal) {
        maxEqualinRow++
      } else {
        maxEqualinRow = 0;
      }
      if(maxEqualinRow === 5) {
        winner = true;
        console.log('WINNER Vertical!');
      }
    } catch(err) {}
  }
  return winner
}


function checkWinnerDiagonalLeftTop(clicked, grid, currentValue) {
  let winner = false;
  let x = clicked.slice(1,2);
  let y = clicked.slice(3,4);
  let currentVal = currentValue;
  let maxEqualinRow = 0;

  let xo = x - 4;
  let yo = +y - 4;
  for(let i = 0; i < 9; i++) {

    let objKey = 'x' + xo + 'y' + yo;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.key === objKey
      }).val
      if(currentVal === gridElemVal) {
        maxEqualinRow++
      } else {
        maxEqualinRow = 0;
      }
      if(maxEqualinRow === 5) {
        winner = true;
        console.log('WINNER Left Top!');
      }
    } catch(err) {}
    xo++
    yo++
  }
  return winner
}


 function checkWinnerDiagonalLeftBottom(clicked, grid, currentValue) {
  let winner = false;
  let x = clicked.slice(1,2);
  let y = clicked.slice(3,4);
  let currentVal = currentValue;
  let maxEqualinRow = 0;
  let xo = +x - 4;
  let yo = +y + 4;
  for(let i = 0; i < 9; i++) {
    let objKey = 'x' + xo + 'y' + yo;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.key === objKey
      }).val
      if(currentVal === gridElemVal) {
        maxEqualinRow++
      } else {
        maxEqualinRow = 0;
      }
      if(maxEqualinRow === 5) {
        winner = true;
        console.log('WINNER Left Bottom!');
      }
    } catch(err) {}
    xo++
    yo--
  }
  return winner

}

function checkWinner(clicked, grid, currentValue) {
  // console.log(clicked, grid, currentValue);
  return checkWinnerDiagonalLeftBottom(clicked, grid, currentValue) ||
         checkWinnerHorizontal(clicked, grid, currentValue) ||
         checkWinnerVertical(clicked, grid, currentValue) ||
         checkWinnerDiagonalLeftTop(clicked, grid, currentValue)
}

export default checkWinner
