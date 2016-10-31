function Winner(id, grid, currentValue) {
  this.x = id.x;
  this.y = id.y;
  this.grid = grid;
  this.currentVal = currentValue;
  this.maxEqualinRow = 0;
  this.winnerElemArray = [];
  this.winner = {
    win: false,
    winElements: this.winnerElemArray
  };  
}

Winner.prototype.checkWin = function() {
  this.checkHorizontal();
  this.checkVertical();
  this.checkDiagonalLeftBottom();
  this.checkDiagonalLeftTop();
  return this.winner
}

Winner.prototype.checkHorizontal = function() {
  this.maxEqualinRow = 0;
  for(let i = this.x - 4; i <= this.x + 4; i++) {
    this.objKey = 'x' + i + 'y' + this.y; 
    this.helper();
  }
}

Winner.prototype.checkVertical = function() {
  this.maxEqualinRow = 0;
  for(let i = this.y - 4; i <= this.y + 4; i++) {
    this.objKey = 'x' + this.x + 'y' + i;
    this.helper();
  }
}

Winner.prototype.checkDiagonalLeftBottom = function() {
  this.maxEqualinRow = 0;
  this.xo = +this.x - 4;
  this.yo = +this.y + 4;
  for(let i = 0; i < 9; i++) {
    this.objKey = 'x' + this.xo + 'y' + this.yo;
    this.helper();
    this.xo++
    this.yo--
  }  
}

Winner.prototype.checkDiagonalLeftTop = function() {
  this.maxEqualinRow = 0;
  this.xo = +this.x - 4;
  this.yo = +this.y - 4;
  for(let i = 0; i < 9; i++) {
    this.objKey = 'x' + this.xo + 'y' + this.yo;
    this.helper();
    this.xo++
    this.yo++
  }  
}

Winner.prototype.helper = function() {
    try {
      this.gridElemVal = _.find(this.grid, (elem) => {
           return  elem.id.key === this.objKey
      }).val
   
      if(this.currentVal === this.gridElemVal) {
        this.maxEqualinRow++
        if(this.winnerElemArray.length < 5) this.winnerElemArray.push(this.objKey)
      } else {
        this.maxEqualinRow = 0;
        if(this.winnerElemArray.length != 5) this.winnerElemArray = [];
      }

      if(this.maxEqualinRow === 5) {
        this.winner.win = true;
      }
    } catch(err) {}

  return this.winner
}

function checkWinner(id, grid, currentValue) {
  const win = new Winner(id, grid, currentValue)
  return win.checkWin();
}

export default checkWinner
