function loop() {

    // Sound loop.
    if(bg_sound.seek(id) >= 66)
        bg_sound.seek(55, id);

    // if(deadSound.seek() >= 19)
    //     deadSound.seek(16, deadID);

    // Slow game to 60/2 = 30 FPS. 
    requestAnimationFrame(loop);
    if(FPSLimiter < 2) {
        FPSLimiter = FPSLimiter + 1;    
        return;
    }
    FPSLimiter = (speed - 15) * 0.2;

    if(snake.alive) {
        clearScreen();
        
        moveSnake();
        drawFood();
        drawSnake();
    }

    if(points >= 10) {
        moveObstacles();
        drawObstacles();
    }
    movementLock = false;
}