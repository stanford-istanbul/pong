

function Pong() {
  this.__ball = $('#ball');
  this.__field = $('#field');
  this.__paddle1 = $('#paddle-1');
  this.__paddle2 = $('#paddle-2');
  this.__score1 = 0;
  this.__score2 = 0;
  this.__vx = 10;
  this.__vy = 10;

  // set ball to middle of the field
  this.__ball.css({'top': this.__field.height()/2, 'left': this.__field.width()/2});
}

Pong.prototype.beginGame = function() {
  var obj = this;
  //setInterval(function() { obj.moveBall() }, 100);
}

Pong.prototype.moveBall = function() {

  var currPosition = this.__ball.position();

  console.log("--checking--", currPosition);
  // check ball bounds and reverse as necessary
  if (currPosition.top <= 0 || currPosition.top >= this.__field.height() - this.__ball.height()) {
    this.__vy = -this.__vy;
  }

  if (currPosition.left <= 0 || currPosition.left >= this.__field.width() - this.__ball.width()) {
    this.__vx = -this.__vx;
  }

  this.__ball.css({'top': currPosition.top + this.__vy, 'left': currPosition.left + this.__vx});
}
