# Space Invaders

A JavaScript built game with some basic HTML and CSS.

# HOW TO PLAY

Advance through the levels using the arrow keys for movement and the spacebar to shoot the alien invaders. Also, don't let them escape, because they are headed to destroy planet earth. 

## Start Up Screen:
![game-img](https://github.com/JesseJJensen/jessejjensen.github.io/blob/main/space-invaders/SpaceInvaderImages/space-invader-screen.png?raw=true)

# HOW TO INSTALL
Play it live here: https://jessejjensen.github.io/space-invaders


# HOW IT WORKS

The game is built using several methods and will continue to use more as I keep adding to this game.

• setInterval()
• clearInterval()
• push()
• indexOf()
• includes()
• classList
• querySelector()
• addEventListener()
• Switch cases
• keyCodes

for loop
```javaScript
 // will add divs now instead of listing them all
    for (let i = 0; i < squareTotal; i++) {
        const square = document.createElement('div')
        grid.appendChild(square)
      }
```

Array
```javaScript
const enemyInvaders = [
        0,2,4,6,   10,12,14,16, 
        // 20,22,24,26,   30,32,34,36,
        //30,32,34,36,  48,50,52,54,
        //   60,62,64,66,   70,72,74,   78,80,82,84,
        //   90,92,94,96,   100,102,104,   108,110,112,114
    ]
```
```javaScript
function movePlayerOne(e) {
            boxes[playerOneLocation].classList.remove('shooter') // This is removing shooters old location 
            switch(e.keyCode) { // using switch to assign keys to player movement
                case 37: //if the players current index is divisible by the width and leaves a remainder its allowed to move left
                    if(playerOneLocation % screenWidth !== 0) playerOneLocation -=1 // move left: 
                    break
                case 39: // if player index is divisible by width and # is less width -1 ===> then you can move right
                    if(playerOneLocation % screenWidth < screenWidth -1) playerOneLocation +=1// move right
                    break
                case 38: // need to create max top and bottom movements for player
                    if(playerOneLocation > screenWidth ) playerOneLocation -= screenWidth
                    break
                case 40:
                    if (playerOneLocation < squareTotal - screenWidth) playerOneLocation += screenWidth
                    break
                }
                boxes[playerOneLocation].classList.add('shooter')
            }
            document.addEventListener('keydown', movePlayerOne)
```

```javaScript
// if shooter touches invader it will end game
                if(boxes[playerOneLocation].classList.contains('invader', 'shooter')) {
                    level.textContent = 'Game Over'
                    boxes[playerOneLocation].classList.add('boom')
                    const audio = new Audio("sound/sfx-ohno.m4a");
                    audio.play();
                    clearInterval(invaderId)
                }
                // if enemyInvader touches last div(bottom of screen) it will end game
                for (let i = 0; i <= enemyInvaders.length -1; i++) {
                    if(enemyInvaders[i] > (boxes.length - (screenWidth-1))) {
                        level.textContent = 'Game Over'
                        const audio = new Audio("sound/sfx-boom.m4a");
                        audio.play();
                        clearInterval(invaderId)
                    }
                }

                // if you kill all invaders you win
                if (enemysKilled.length === enemyInvaders.length) {
                    level.textContent = 'Nice Work!'
                    clearInterval(invaderId)
```



# FUTURE CONSIDERATIONS

The goal is to add several games to this screen making an arcade of games. I will use these games for reference in the future and set-up practice folders so I can practice building these games without any references.


## Initial Wireframe

![wf1](https://github.com/JesseJJensen/jessejjensen.github.io/blob/main/space-invaders/docs/Screen%20Shot%202021-04-26%20at%208.32.53%20AM.png?raw=true)

![wf2](https://github.com/JesseJJensen/jessejjensen.github.io/blob/main/space-invaders/docs/Screen%20Shot%202021-04-26%20at%208.33.05%20AM.png?raw=true)

![wf3](https://github.com/JesseJJensen/jessejjensen.github.io/blob/main/space-invaders/docs/Screen%20Shot%202021-04-26%20at%208.33.14%20AM.png?raw=true)

