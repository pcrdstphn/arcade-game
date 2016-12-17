/** 
* @description Represent an enemy bug starting to the left 
*   off the canvas in a random stone row with a random speed 
* @constructor
* @param {number} x - the horizontal position on the canvas
* @param {number} y - the vertical position on the canvas
* @param {number} speed - the left to right step size per dt
**/
var Enemy = function(x,y,speed) {
    this.x = -101;
    this.y = Math.floor((Math.random() * 3) + 1) * 70;
    this.speed = Math.floor((Math.random() * 3) + 1) * 100;
    this.sprite = 'images/enemy-bug.png';
};

/**
* @description Update the enemy bug's horizontal position, 
*   reset it to the left when it gets off canvas to the right, 
*   then check for collision with the player
* @param {number} dt - a time delta between ticks
**/
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x >= 505) {
        this.x = -101;
    };
    this.checkCollision();
};

/** 
* @description Draw the enemy bug on the screen
**/
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

/**
* @description Check for overlap of enemy bug and player sprites 
*   using axis-aligned bounding box algorithm, alert and reset
*   game if collision detected
**/
Enemy.prototype.checkCollision = function() {
    if (this.x < player.x + 50 &&
        this.x + 50 > player.x &&
        this.y < player.y + 70 &&
        this.y + 70 > player.y) {
        alert("Oh no, collision!");
        console.log(this.x, this.y);
        console.log(player.x, player.y);
        document.location.reload();
    };
}; 

/** 
* @description Represent a player starting on the
*   bottom grass row in the center of the canvas
* @constructor
**/
var Player = function () {
    this.sprite = 'images/char-cat-girl.png';
    this.x = 202;
    this.y = 415;
 };

/**
* @description Check for player location, keep
*   player on canvas and alert if into the water row
**/
Player.prototype.update = function() {
    if (this.y < 2 ) {
        alert("You Won!");
        document.location.reload();
    }
    if (this.y > 415) {
        this.y = 415;
    }
    if (this.x > 400) {
        this.x = 400;
    }
    if (this.x < 1) {
        this.x = 1;
    }
};


/** 
* @description Draw the player on the screen
**/
Player.prototype.render = function () {
   ctx.drawImage(Resources.get(this.sprite), this.x, this.y); 
};

/**
* @description Move the player around the canvas based
*  on keyboard intry
* @param {string} direction - keyboard arrow entry
**/
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

/**
* @description Instantiate 3 enemy bugs into an array
**/
var allEnemies = [];

for (var i = 0; i < 3; i++) {
    allEnemies[i] = new Enemy();
}

/**
*@description Instantiate a player
**/
var player = new Player();


/**
* @description Listen for key presses and send the keys to 
*   Player.handleInput() method. 
* @param {keyCode} keyup - the key that is released up
**/
document.addEventListener('keydown', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
