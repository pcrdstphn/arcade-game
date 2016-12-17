#Arcade-Game#
===============================

###Description##

This arcade-game is modeled on the old "frogger game" and is a project in Udacity's Front End Web Developer Nanodegree Program.  The idea is to get the player to the top of the playing field without colliding with bugs.

###How to Run###
Fork or clone this repository to your computer and double click the index.html file to start the game.

###How to Play###
Use the arrow keys to move the player around the game area.  Avoid bugs and get the player up into the water to win the game.  Winning the game or hitting a bug will cause the game to start over.

###Known Bugs###
Using the axis aligned bounding box algorithm, adjusting for the actual player and bug locations within their image files, allowed too much visual space at collision detection.  I used a trial and arrow method to get better real time images in collisions but it's still not perfect.