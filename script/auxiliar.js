function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function clearScreen() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function moveSnake() {
    snake.x += snake.dx;
    snake.y += snake.dy;

    snake.tail.unshift({x: snake.x, y: snake.y});
    if(snake.tail.length > snake.maxTail) {
        snake.tail.pop();
    }
}

function drawFood() {
    if(points == 9)
        context.fillStyle = "pink";
    else
        context.fillStyle = "red";
    context.beginPath();
    context.arc(food.x, food.y, food.radius, 0, 2 * Math.PI, false);
    context.closePath();
    context.fill();
}

function drawSnake() {
    context.fillStyle = "white";
    snake.tail.forEach((cell, index) => {

        // Draw snake.
        context.fillRect(cell.x, cell.y, TILE_SIZE - 1, TILE_SIZE - 1);

        // Check if the food has been eaten.
        if(eatenFood()) {
            foodEat.play();
            snake.maxTail++;

            food.x = getRandom(2 * food.radius, canvas.width - 2 * food.radius);
            food.y = getRandom(2 * food.radius, canvas.height - 2 * food.radius);

            pointsHTML.innerHTML = ++points;
            if(points == 10) 
                maximumCharge.play();
            speed++;
        }

        // Check collisions.
        if(collisionCanvas() || collisionTail()) {
            snake.alive = false; 
            bg_sound.stop(); 
            deadID = deadSound.play();
           // deadSound.seek(16, deadID);
        }
            
    });
}

function collisionCanvas() {
    return snake.x >= canvas.width || snake.x < 0 || snake.y >= canvas.height || snake.y < 0;
}

function collisionTail() {
    for (let i = 4; i < snake.tail.length; i++) {
        if(snake.tail[i].x === snake.x && snake.tail[i].y === snake.y)
            return true;
    }
    return false;
}

function eatenFood() {
    return overlap(food.x, snake.x) && overlap(food.y, snake.y);
}

function overlap(foodPosition, snakePosition) {
    return (snakePosition <= foodPosition - TILE_SIZE &&
        snakePosition >= foodPosition + TILE_SIZE) ||
        (snakePosition <= foodPosition + TILE_SIZE &&
        snakePosition >= foodPosition -TILE_SIZE);
} 

function moveObstacles() {
    if(obstacle[0].direction == "up") {
        obstacle[0].y -= TILE_SIZE;
        if(obstacle[0].y < 0)
            obstacle[0].direction == "down"
    }
    else {
        obstacle[0].y += TILE_SIZE;
        if(obstacle[0].y >= canvas.height)
            obstacle[0].direction == "up"
    }
    
    if(obstacle[1].direction == "left") {
        obstacle[0].x -= TILE_SIZE;
        if(obstacle[0].x < 0)
            obstacle[0].direction == "right"
    }
    else {
        obstacle[0].x += TILE_SIZE;
        if(obstacle[0].x >= canvas.width)
            obstacle[0].direction == "left"
    }
}

function drawObstacles() {
    for(let i = 0; i < 4; i++) {
        context.fillStyle = "brown";
        context.fillRect(obstacle[0].x + TILE_SIZE * i, obstacle[0].y, TILE_SIZE - 1, TILE_SIZE - 1);
        context.fillRect(obstacle[1].x, obstacle[1] + TILE_SIZE * i, TILE_SIZE - 1, TILE_SIZE - 1);
    }
}