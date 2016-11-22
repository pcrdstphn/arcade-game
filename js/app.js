/// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    this.x =x;
    this.y = y;
    this.speed = speed;
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    this.x += this.speed*dt;
//    checkCollision(x,y);
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
/**Enemy.prototype.checkCollision = function(x,y) {
    
    if (enemy.x < player.x + 90 &&
        enemy.x + 101 > player.x + 10 &&
        enemy.y + 70 < player.y + 140 &&
        enemy.y + 150 > player.y + 60) {
        alert("Game Over");
        document.location.reload();
    };
}; **/

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function () {
    this.sprite = 'images/char-cat-girl.png';
    this.x=202;
    this.y=415;
 };

//stepsize = 20;

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

//
Player.prototype.handleInput = function (direction) {
    if (direction ==='left'/** && x>80 **/) {
        this.x -= 10;
    }
    if (direction ==='up' /*&& y>80**/) {
        this.y -= 10;
    }
    if (direction === 'right'/* && x<425*/) {
        this.x += 10;
    } 
    if (direction === 'down'/** && y<418 **/) {
        this.y += 10;
    }
};

var enemy = new Enemy(0, Math.random()*165+83, Math.random()*1000);

var allEnemies = [];

allEnemies[0] = enemy;
allEnemies[1] = enemy;
allEnemies[2] = enemy;

/** var addEnemies = function () {
    var enemycount = 6;
    for (var i=0; i < enemycount; i++) {
        allEnemies.push(enemy);
    };
}; **/

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
