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

    obstacle.draw();

    // click 이벤트
    canvas.addEventListener('click', function() {
        player.jump();
    });
};

init();

/* 장애물 1(땅 장애물)
- 너비 : 고정
- 높이 : 고정
- 처음 x위치 : 고정
- 현재 x위치 : 변수
- 마지막 x 위치 : 고정
- y위치 : 고정
- 이동속도 : 고정
- 생성 주기 : 고정

액션
- 나타나는 것
    if(초/생성주기의 나머지가 0일 때)
        처음 x위치 등장, 이동 속도 시작
- 이동
        이동 속도로 마지막 x위치까지 x위치 이동, 사라지는 것 함수 실행
- 사라지는 것
    장애물 삭제
*/

/* 장애물 2(공중 장애물)
- 너비 : 고정
- 높이 : 고정
- 처음 x위치 : 고정
- 현재 x위치 : 변수
- 마지막 x 위치 : 고정
- y위치 : 고정
- 이동속도 : 고정
- 생성 주기 : 고정

액션
- 나타나는 것
    if(초/생성주기의 나머지가 0일 때)
        처음 x위치 등장, 이동 속도 시작
- 이동
        이동 속도로 마지막 x위치까지 x위치 이동, 사라지는 것 함수 실행
- 사라지는 것
    장애물 삭제
*/

// 장애물
// class Obstacle {
//     constructor() {
//         this.location_x = 500;
//         this.location_y = 500;
//         this.width = 60;
//         this.height = 60;
//     }

//     draw() {
//         ctx.fillStyle = 'green';
//         ctx.fillRect(this.location_x, this.location_y, this.width, this.height);
//     }
// };

// let obstacle = new Obstacle();

// obstacle.draw();