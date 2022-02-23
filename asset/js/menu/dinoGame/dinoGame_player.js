class Player {

    set_constants_variables() {
        Player.prototype.JUMP_HEIGHT = 200;
        Player.prototype.JUMP_SPEED = 1;
        Player.prototype.WIDTH = 60;
        Player.prototype.HEIGHT = 60;
        Player.prototype.FIRST_X = 50;
        Player.prototype.FIRST_Y = 500;
    } 

    // 초기화 - 
    init() {
        this.jump_direction = true;
        this.jump_status = null;
    }

    constructor() {
        this.set_constants_variables();
        
        this.init();
        
        this.now_y = this.FIRST_Y;
    }

    draw(p_move_y) {
        // init draw
        ctx.clearRect(this.FIRST_X, this.now_y, this.WIDTH, this.HEIGHT);

        ctx.fillStyle = 'red';

        if (p_move_y) {
            this.now_y += p_move_y;
        }
        ctx.fillRect(this.FIRST_X, this.now_y, this.WIDTH, this.HEIGHT);
    }

    jump_draw(self) {

        // 위치 정보
        // console.log('first_x: ' + self.first_x + ' / first_y: ' + self.now_y);

        // 속도 + 방향인 속도
        let speed_direction;

        if (self.jump_direction) {
            speed_direction = self.JUMP_SPEED * -1;
        } else {
            speed_direction = self.JUMP_SPEED;
        }

        self.draw(speed_direction);

        if (self.now_y === self.JUMP_HEIGHT) {
            self.jump_direction = false;
        } else if (self.now_y === self.FIRST_Y && !self.jump_direction) {
            // 초기화를 밑에 둔 이유 : 초기화를 하고 clearInterval을 하면 interval 값이 null로 되어있기 때문에
            clearInterval(self.jump_status);
            // 초기화
            self.init();
        }
    }

    jump() {
        let self = this;
        // jump_status가 null이 아닐때 jump_status setInterval함수 실행
        if(!self.jump_status){
            self.jump_status = setInterval(function() {
                self.jump_draw(self);
            }, 1);
        }
    }
}