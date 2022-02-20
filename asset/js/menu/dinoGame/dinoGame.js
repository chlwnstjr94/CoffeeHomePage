const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function init() {
    // player
    let player = new Player();

    player.draw();
    
    // 장애물
    let obstacle = new Obstacle();

    obstacle.slide();

    // click 이벤트
    canvas.addEventListener('click', function() {
        player.jump();
    });
};

init();