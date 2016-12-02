/** Enemy class constructor
    Creates a new bug starting to the left of the game board
    with random y placement centering within the block rows
    and with a random speed
**/

var Enemy = function(x,y,speed) {
    this.x = -101;
    this.y = Math.floor((Math.random() * 3) + 1) * 70;
    this.speed = Math.floor((Math.random() * 3) + 1) * 100;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
    if (this.x >= 505) {
        this.x = 0;
    };
    this.checkCollision();
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//using the axis-aligned bounding box algorithm modified
//with the actual start locations and width/heights for
//the bug(enemy) and cat(player) within their image files
Enemy.prototype.checkCollision = function() {
    if (this.x < player.x + 50 &&
        this.x + 50 > player.x &&
        this.y < player.y + 80 &&
        this.y + 80 > player.y) {
        alert("Oh no, collision!");
        document.location.reload();
    };
}; 

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 202;
    this.y = 415;
 };

Player.prototype.update = function() {
    if (this.y<2) {
        alert("You Won!");
        document.location.reload();
    }
    if (this.y>415) {
        this.y=415;
    }
    if (this.x>400) {
        this.x = 400;
    }
    if (this.x<1) {
        this.x=1;
    }
};

Player.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};


Player.prototype.handleInput = function (direction) {
    if (direction === 'left') {
        this.x -= 20;
    }
    if (direction === 'up') {
        this.y -= 20;
    }
    if (direction === 'right') {
        this.x += 20;
    } 
    if (direction === 'down') {
        this.y += 20;
    }
};

var allEnemies = [];

for (var i = 0; i<3; i++) {
    allEnemies[i] = new Enemy();
}

var player = new Player();


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
