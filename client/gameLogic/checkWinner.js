function checkWinnerHorizontal(id, grid, currentValue) {
  console.log('function checkHorizontal - grid', grid);
  let winner = false;
  let x = id.x
  let y = id.y
  let currentVal = currentValue;
  let maxEqualinRow = 0;
  //console.log(x);
  for(let i = x - 4; i <= x + 4; i++) {
    let objKey = 'x' + i + 'y' + y;
    console.log(objKey);
    try {
      let gridElemVal = _.find(grid, (elem) => {
      //  console.log('elemidkey', elem.id.key);
           return  elem.id.key === objKey
      }).val
      //console.log(gridElemVal);
      //console.log('before ',currentVal === gridElemVal);
      if(currentVal === gridElemVal) {
        maxEqualinRow++
        //console.log('equal', maxEqualinRow);
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

function checkWinnerVertical(id, grid, currentValue) {
  let winner = false;
  let x = id.x
  let y = id.y
  let currentVal = currentValue;
  let maxEqualinRow = 0;

  for(let i = y - 4; i <= y + 4; i++) {
    let objKey = 'x' + x + 'y' + i;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.id.key === objKey
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


function checkWinnerDiagonalLeftTop(id, grid, currentValue) {
  let winner = false;
  let x = id.x
  let y = id.y
  let currentVal = currentValue;
  let maxEqualinRow = 0;

  let xo = x - 4;
  let yo = +y - 4;
  for(let i = 0; i < 9; i++) {

    let objKey = 'x' + xo + 'y' + yo;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.id.key === objKey
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


 function checkWinnerDiagonalLeftBottom(id, grid, currentValue) {
  let winner = false;
  let x = id.x
  let y = id.y
  let currentVal = currentValue;
  let maxEqualinRow = 0;
  let xo = +x - 4;
  let yo = +y + 4;
  for(let i = 0; i < 9; i++) {
    let objKey = 'x' + xo + 'y' + yo;
    try {
      let gridElemVal = _.find(grid, (elem) => {
           return  elem.id.key === objKey
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

function checkWinner(id, grid, currentValue) {
  return checkWinnerHorizontal(id, grid, currentValue) ||
         checkWinnerVertical(id, grid, currentValue) ||
         checkWinnerDiagonalLeftBottom(id, grid, currentValue) ||
         checkWinnerDiagonalLeftTop(id, grid, currentValue)
}

export default checkWinner
