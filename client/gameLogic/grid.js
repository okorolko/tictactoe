
class Grid {
  constructor(size) {
    this.size = size;
    this.gridObj = {
      lastMove: '',
      winner: '',
      grid: []};
  }

  createGrid() {
    //iterate over all vertical lines
    for(let i = 0; i < this.size; i++) {
      let x = i + 1;

      //iterate over all horizontal lines
      for(let b = 0; b < this.size; b++) {
        let y = b + 1;
        let key = 'x' + y + 'y' + x;

        this.gridObj.grid.push({
          key: key,
          x: x,
          y: y,
          val: ''
        })
      }
    }
    // this.gridObj.grid[5].val = 'x'
    // this.gridObj.grid[10].val = 'x'
    // this.gridObj.grid[15].val = 'x'
    // this.gridObj.grid[20].val = 'x'
    // this.gridObj.grid[30].val = 'x'

    // this.gridObj.grid[2].val = 'x'
    // console.log(this.gridObj);

    return this.gridObj
  }

}

// const newGridYo = new Grid(5).createGrid();



//del
// function checkWinnerDiagonalLeftBottom(clicked, grid, currentV) {
//  let winner = false;
//  let x = clicked.slice(1,2);
//  let y = clicked.slice(3,4);
//  let currentVal = currentV;
//  let maxEqualinRow = 0;
//  let xo = +x - 2;
//  let yo = +y + 2;
//  for(let i = 0; i < 5; i++) {
//    let objKey = 'x' + xo + 'y' + yo;
//    try {
//      let gridElemVal = _.find(grid, (elem) => {
//           return  elem.key === objKey
//      }).val
//
//      if(currentVal === gridElemVal) {
//        maxEqualinRow++
//      } else {
//        maxEqualinRow = 0;
//      }
//      if(maxEqualinRow === 3) {
//        winner = true;
//        console.log('WINNER!');
//      }
//    } catch(err) {}
//    xo++
//    yo--
//  }
//  return winner
//
// }
//del






// function checkWinnerHorizontal(clicked, grid, currentV) {
//   let winner = false;
//   let x = clicked.slice(1,2);
//   let y = clicked.slice(3,4);
//   let currentVal = currentV;
//   let maxEqualinRow = 0;
//
//   for(let i = x - 2; i < x + 2; i++) {
//     let objKey = 'x' + i + 'y' + y;
//     try {
//       let gridElemVal = _.find(grid, (elem) => {
//            return  elem.key === objKey
//       }).val
//       if(currentVal === gridElemVal) {
//         maxEqualinRow++
//       } else {
//         maxEqualinRow = 0;
//       }
//       if(maxEqualinRow === 3) {
//         winner = true;
//         console.log('WINNER!');
//       }
//     } catch(err) {}
//   }
//   return winner
// }
//
// function checkWinnerVertical(clicked, grid, currentV) {
//   let winner = false;
//   let x = clicked.slice(1,2);
//   let y = clicked.slice(3,4);
//   let currentVal = currentV;
//   let maxEqualinRow = 0;
//
//   for(let i = y - 2; i < y + 2; i++) {
//     let objKey = 'x' + x + 'y' + i;
//     try {
//       let gridElemVal = _.find(grid, (elem) => {
//            return  elem.key === objKey
//       }).val
//       if(currentVal === gridElemVal) {
//         maxEqualinRow++
//       } else {
//         maxEqualinRow = 0;
//       }
//       if(maxEqualinRow === 3) {
//         winner = true;
//         console.log('WINNER!');
//       }
//     } catch(err) {}
//   }
//   return winner
// }
//
//
// function checkWinnerDiagonalLeftTop(clicked, grid, currentV) {
//   let winner = false;
//   let x = clicked.slice(1,2);
//   let y = clicked.slice(3,4);
//   let currentVal = currentV;
//   let maxEqualinRow = 0;
//
//   let xo = x - 2;
//   let yo = +y - 2;
//   for(let i = 0; i < 5; i++) {
//
//     let objKey = 'x' + xo + 'y' + yo;
//     try {
//       let gridElemVal = _.find(grid, (elem) => {
//            return  elem.key === objKey
//       }).val
//       if(currentVal === gridElemVal) {
//         maxEqualinRow++
//       } else {
//         maxEqualinRow = 0;
//       }
//       if(maxEqualinRow === 3) {
//         winner = true;
//         console.log('WINNER!');
//       }
//     } catch(err) {}
//     xo++
//     yo++
//   }
//   return winner
// }
//
//
//  function checkWinnerDiagonalLeftBottom(clicked, grid, currentV) {
//   let winner = false;
//   let x = clicked.slice(1,2);
//   let y = clicked.slice(3,4);
//   let currentVal = currentV;
//   let maxEqualinRow = 0;
//   let xo = +x - 2;
//   let yo = +y + 2;
//   for(let i = 0; i < 5; i++) {
//     let objKey = 'x' + xo + 'y' + yo;
//     try {
//       let gridElemVal = _.find(grid, (elem) => {
//            return  elem.key === objKey
//       }).val
//
//       if(currentVal === gridElemVal) {
//         maxEqualinRow++
//       } else {
//         maxEqualinRow = 0;
//       }
//       if(maxEqualinRow === 3) {
//         winner = true;
//         console.log('WINNER!');
//       }
//     } catch(err) {}
//     xo++
//     yo--
//   }
//   return winner
//
// }
//
//
//
//
// function checkWinner(clicked, grid, currentV) {
//   return checkWinnerDiagonalLeftBottom(clicked, grid, currentV) ||
//          checkWinnerHorizontal(clicked, grid, currentV) ||
//          checkWinnerVertical(clicked, grid, currentV) ||
//          checkWinnerDiagonalLeftTop(clicked, grid, currentV)
// }

// newGridYo.grid[0].val = 'x'
// newGridYo.grid[1].val = 'x'
// newGridYo.grid[2].val = 'x'

// class checkLineWinner {
//   constructor() {
//     this.winner = false;
//     this.maxEqualinRow = 0;
//   }
//   checkHorizontal(clicked, grid, currentValue) {
//     let x = clicked.slice(1,2);
//     let y = clicked.slice(3,4);
//     let currentVal = currentValue;
//
//     for(let i = this.x - 2; i < this.x + 2; i++) {
//       let objKey = 'x' + i + 'y' + this.y;
//       this.compare()
//       console.log(this.maxEqualinRow);
//     }
//   }
//
//   compare() {
//     try {
//       let gridElemVal = _.find(grid, (elem) => {
//            return  elem.key === objKey
//       }).val
//
//       if(currentVal === gridElemVal) {
//         maxEqualinRow++
//       } else {
//         maxEqualinRow = 0;
//       }
//       if(maxEqualinRow === 3) {
//         winner = true;
//         console.log('WINNER!');
//       }
//     } catch(err) {}
//   }
// }
//
// let checker = new checkLineWinner()
// checker.checkHorizontal('x1y1', newGridYo, 'x')

export default Grid
