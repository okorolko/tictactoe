
class Grid {
  constructor(size) {
    this.size = size;
    this.gridObj = {
      lastMove: '',
      winner: '',
      grid: []
    };
  }

  createGrid() {
    for(let i = 0; i < this.size; i++) {
      let y = i + 1;

      for(let b = 0; b < this.size; b++) {
        let x = b + 1;
        let key = 'x' + x + 'y' + y;

        let id = {
          key: key,
          x: x,
          y: y
        }

        this.gridObj.grid.push({
          id: id,
          x: x,
          y: y,
          val: ''
        })
      }
    }
    // this.gridObj.grid.forEach(elem => {
    //   if(elem.x == 7 && elem.y == 7) elem.val = 'x'
    //   if(elem.x == 8 && elem.y == 8) elem.val = 'x'
    //   if(elem.x == 9 && elem.y == 9) elem.val = 'x'
    //   if(elem.x == 10 && elem.y == 10) elem.val = 'x'
    // })
    return this.gridObj
  }

}

export default Grid
