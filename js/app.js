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
    this.x += this.speed*dt;
    checkCollision(x,y);
    if (this.x >= 505) {
        x=0;
    };
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};


//using the axis-aligned bounding box algorithm modified
//with the actual start locations and width/heights for
//the bug(enemy) and cat(player) within their image files
Enemy.prototype.checkCollision = function(x,y) {
    
    if (enemy.x < player.x + 90 &&
        enemy.x + 101 > player.x + 10 &&
        enemy.y + 70 < player.y + 140 &&
        enemy.y + 150 > player.y + 60) {
        alert("Game Over");
        document.location.reload();
    };
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function (x, y, stepsize) {
    this.sprite = 'images/char-cat-girl.png';
    this.x=x;
    this.y=y;
    this.stepsize = stepsize;
 };

Player.prototype.update = function() {
    stepsize = 20;
    handleInput(allowedKeys, stepsize);
    if (y<3) {
        alert("You Won!");
        document.location.reload();
    };
};

Player.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};

//
Player.prototype.handleInput = function (allowedKeys, stepsize) {
    if (allowedKeys ='left' && x>80) {
        x -= stepsize;
    }
    if (allowedKeys ='up' && y>80) {
        y -= stepsize;
    } 
    if (allowedKeys = 'right' && x<425) {
        x += stepsize;
    } 
    if (allowedKeys = 'down' && y<418) {
        y += stepsize;
    }
};

var enemy = new Enemy(0, Math.random()*165+83, Math.random()*1000);

var allEnemies = [enemy];

/**var multEnemies = function() {
    var enemycount = 6;
    for (i=0, i < enemycount + 1, i++) {
        enemy();
        allEnemies.protoptype.push(enemy);
    };
}; 
**/


var player = new Player(202,415);


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
