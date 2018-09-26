var TILE_SIZE = 15;
var speed = 15;
var points = 0;

// Defining the Snake.
var snake = {
    x: 300,
    y: 400,
    direction: "stall",
    dx: 0,
    dy: 0,
    tail: [],
    maxTail: 4,
    alive: true
};

// Defining the food.
var food = {
    x: 420,
    y: 420,
    radius: 7,
};

// Defining the obstacles.
var obstacle = [{
    x: 400,
    y: 400,
    direction: "up"
}, {
    x: 700,
    y: 500,
    direction: "right"
}];

// FPS limiter.
var FPSLimiter = 0;

// Movement locker: it prevents the player to press two movement keys in rapid succession
movementLock = false;

// Listener.
document.addEventListener("keydown", e => {
    let key = e.which || e.keyCode;
    if(snake.direction != "right" && key === 37 && !movementLock) // Left. 
        snake.direction = "left";        
    else if(snake.direction != "down" && key === 38 && !movementLock) // Up. 
        snake.direction = "up";
    else if(snake.direction != "left" && key === 39 && !movementLock) // Right.
        snake.direction = "right";
    else if(snake.direction != "up" && key === 40 && !movementLock) // Down.
        snake.direction = "down";

    updateDirection();
    movementLock = true;
});

function updateDirection() {
    switch(snake.direction) {
        case "up":
            snake.dx = 0;
            snake.dy = -TILE_SIZE;
            break;
        case "down":
            snake.dx = 0;
            snake.dy = TILE_SIZE;
            break;
        case "left":
            snake.dx = -TILE_SIZE;
            snake.dy = 0;
            break;
        case "right":
            snake.dx = TILE_SIZE;
            snake.dy = 0;
            break;
        default:
            snake.dx = 0;
            snake.dy = 0;
    }
}