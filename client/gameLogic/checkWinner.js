function Winner(id, grid, currentValue) {
  this.x = id.x
  this.y = id.y
  this.grid = grid
  this.currentVal = currentValue;
  this.maxEqualinRow = 0;
  this.winner = false;  
}

Winner.prototype.checkWin = function() {
  this.checkHorizontal();
  this.checkVertical();
  this.checkDiagonalLeftBottom();
  this.checkDiagonalLeftTop();
  return this.winner
}

Winner.prototype.checkHorizontal = function() {
   for(let i = this.x - 4; i <= this.x + 4; i++) {
    this.objKey = 'x' + i + 'y' + this.y; 
    this.helper();
    }
}

Winner.prototype.checkVertical = function() {
  for(let i = this.y - 4; i <= this.y + 4; i++) {
    let objKey = 'x' + this.x + 'y' + i;
    this.helper();
  }
}

Winner.prototype.checkDiagonalLeftBottom = function() {
  this.xo = +this.x - 4;
  this.yo = +this.y + 4;
  for(let i = 0; i < 9; i++) {
    this.objKey = 'x' + this.xo + 'y' + this.yo;
    this.helper();
  }  
}

Winner.prototype.checkDiagonalLeftTop = function() {
  this.xo = +this.x - 4;
  this.yo = +this.y - 4;
  for(let i = 0; i < 9; i++) {
    this.objKey = 'x' + this.xo + 'y' + this.yo;
    this.helper();
  }  
}

Winner.prototype.helper = function() {
    try {
      this.gridElemVal = _.find(this.grid, (elem) => {
           return  elem.id.key === this.objKey
      }).val
   
      if(this.currentVal === this.gridElemVal) {
        this.maxEqualinRow++
      } else {
        this.maxEqualinRow = 0;
      }

      if(this.maxEqualinRow === 5) {
        this.winner = true;
      }
      
    } catch(err) {}
}

function checkWinner(id, grid, currentValue) {
  const win = new Winner(id, grid, currentValue)
  return win.checkWin();
}

export default checkWinner
