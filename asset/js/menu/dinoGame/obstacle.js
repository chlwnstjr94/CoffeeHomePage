class Obstacle {

    set_constants() {
        // 장애물 크기
        Obstacle.prototype.WIDTH = 60;
        Obstacle.prototype.HEIGHT = 100;
        // 장애물 이동
        Obstacle.prototype.SLIDE_SPEED = 3;
        Obstacle.prototype.CYCLE = 1;
        // 장애물 위치
        Obstacle.prototype.FIRST_X = 2000;
        Obstacle.prototype.FIRST_HIGH_Y = 260;
        Obstacle.prototype.FIRST_LOW_Y = 460;
    }

    init() {
        this.now_x = this.FIRST_X;
    }

    constructor(is_high) {
        this.set_constants();
        
        this.date_obj = new Date();

        if (is_high) {
            this.first_y = this.FIRST_HIGH_Y;
        } else {
            this.first_y = this.FIRST_LOW_Y;
        }

        // 초기화
        this.init();
        
        // 장애물 존재
        this.is_exist = false;

        this.canvasLeftPos = ctx.canvas.offsetLeft - 600;
    }
    // 그림
    draw(is_new) {
        // 기존 그림 삭제
        ctx.clearRect(this.now_x, this.first_y, this.WIDTH, this.HEIGHT);
        // 신규 그림 생성
        if(!is_new) {
            this.now_x -= this.SLIDE_SPEED;
        }
        ctx.fillStyle = 'green';
        ctx.fillRect(this.now_x, this.first_y, this.WIDTH, this.HEIGHT);
        // if (110 === this.now_x) {
        //     alert("hi~~~~~");
        //     console.log("hi~~~~");
        // }
        // console.log(this.now_x+" / "+ this.first_y+" / "+this.WIDTH+" / "+this.HEIGHT) -> 260 ~ 360
    }
    // 동작
    move(self) {
        // 삭제
        if (self.is_exist && self.now_x < self.canvasLeftPos) {
            // if문의 self.is_exist가 true라 false로 삭제
            self.is_exist = false;
            // 기존 그림 삭제
            ctx.clearRect(this.now_x, this.first_y, this.WIDTH, this.HEIGHT);
        }
        // 이동
        // self.is_exist가 생성에서 true되어 넘어와서 존재하는 채로 이동.
        else if (self.is_exist) {
            self.draw(false);
        } 
        // 생성
        else if(!self.is_exist && self.date_obj.getSeconds() % self.CYCLE === 0) {
            self.init();
            // if문의 !self.is_exist가 false라 true로 추가
            self.is_exist = true;
            self.draw(true);
        }
    }

    run() {
        let self = this;
        return setInterval(function() {
            self.move(self);
        }, 1)
    }
}

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