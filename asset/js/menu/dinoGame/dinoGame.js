const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let g_game_status = false;
let g_obstacle_interval = null;

function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    console.log("x: "+x+" y: "+y);
}

function init() {
    // player
    let player = new Player();

    player.draw();
    
    // 장애물
    let high_obstacle = new Obstacle(true);

    let low_obstacle = new Obstacle(false);

    g_obstacle_interval = setInterval(function() {
        high_obstacle.run(high_obstacle);
        low_obstacle.run(low_obstacle);
    }, 1)

    if(g_game_status) {
        clearInterval(g_obstacle_interval);
    }

    // click 이벤트
    canvas.addEventListener('click', function(event) {
        player.jump();
        showCoords(event);
    });
};

init();