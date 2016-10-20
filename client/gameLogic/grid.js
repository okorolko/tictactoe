
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
    //iterate over all vertical lines
    for(let i = 0; i < this.size; i++) {
      let y = i + 1;

      //iterate over all horizontal lines
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
    // this.gridObj.grid[21].val = 'x'
    // this.gridObj.grid[22].val = 'x'
    // this.gridObj.grid[23].val = 'x'
    // this.gridObj.grid[24].val = 'x'
    // this.gridObj.grid[30].val = 'x'

    //console.log(this.gridObj);
    return this.gridObj
  }

}

export default Grid
