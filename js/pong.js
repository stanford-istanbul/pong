

function Pong() {
  this.__ball = $('#ball');
  this.__field = $('#field');
  this.__paddle1 = $('#paddle-1');
  this.__paddle2 = $('#paddle-2');
  this.__score1 = 0;
  this.__score2 = 0;

  // set ball to middle of the field
}

Pong.prototype.beginGame = function() {
  var obj = this;
  setInterval(function() { obj.moveBall() }, 100);
}

Pong.prototype.moveBall = function() {
  var vx = 10; // move vx px in the x direction
  var vy = 10; // move vy px in the y direction

  var currPosition = this.__ball.position();

  // check ball bounds and reverse as necessary

  this.__ball.css({'top': currPosition.top + vy, 'left': currPosition.left + vy});
}
