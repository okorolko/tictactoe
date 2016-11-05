class Grid {
  constructor(size) {
    this.size = size;
    this.gridObj = {
      lastMove: '',
      winner: '',
      winElements: [],
      grid: [],
    };
  }

  createGrid() {
    for (let i = 0; i < this.size; i++) {
      const y = i + 1;

      for (let b = 0; b < this.size; b++) {
        const x = b + 1;
        const key = `x${x}y${y}`;

        const id = {
          key,
          x,
          y,
        };

        this.gridObj.grid.push({
          id,
          x,
          y,
          val: '',
        });
      }
    }
    return this.gridObj;
  }
}

export default Grid;
