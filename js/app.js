/// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt
    
    if (this.x >= 505) {
        x=0;
    }
};

checkCollision(this);

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x,y,){
    this.sprite = 'images/char-cat-girl.png';
    this.x=x
    this.y=y
 //need step size given interpret?

Player.prototype.update = function(x,y) {
    if (y<83) {
        player.reset();
    }
Player.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
}

//changes the x and y draw start coordinates of the player based
//on the input key while also not allowing coordinate change if
//off canvas
Player.prototype.handleInput = function (allowedKeys) {
    if (allowedKeys===37 and x>101) {
        x=x-101;
    } else if (allowedKeys===38 and y<415) {
        y=y+83;
    } else if (allowedKeys===39 and x<303) {
        x=x+101;
    } else if (allowedKeys===40 and y>83) {
        y=y-83;
    }
}

//congratulates the winner and re-initializes game
Player.prototype.reset = function () {
//ToDO    
}

enemy = new Enemy(0, Math.random()// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
