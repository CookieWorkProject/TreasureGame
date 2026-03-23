const Player = {
  xPos: 0,
  yPos : 0,
  input : "",
  moveLeft : function() {
    this.xPos = this.xPos-1;
  },
  moveRight : function() {
    this.xPos = this.xPos+1;
  },
  moveUp : function() {
    this.yPos = this.yPos-1;
  },
  moveDown : function() {
    this.yPos = this.yPos+1;
  },
  stepAction : function() {
    if (this.input ==="u") this.moveUp(); 
    if (this.input ==="d") this.moveDown(); 
    if (this.input ==="l") this.moveLeft(); 
    if (this.input ==="r") this.moveRight(); 
    if (this.input ==="w") console.log("X: "+this.xPos+" Y:"+this.yPos); 
  }
};

module.exports = Player;