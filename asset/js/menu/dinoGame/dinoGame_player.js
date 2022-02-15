class Player {

    set_constants_variables() {
        Player.prototype.JUMP_HEIGHT = 200;
        Player.prototype.JUMP_SPEED = 1;
        Player.prototype.WIDTH = 60;
        Player.prototype.HEIGHT = 60;
        Player.prototype.FIRST_X = 50;
        Player.prototype.FIRST_Y = 500;
    } 

    constructor() {
        this.set_constants_variables();
        
        this.jump_direction = true;
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

        let speed;
        if (self.jump_direction) {
            speed = self.JUMP_SPEED * -1;
        } else {
            speed = self.JUMP_SPEED;
        }

        self.draw(speed);

        if (self.now_y === self.JUMP_HEIGHT) {
            self.jump_direction = false;
        } else if (self.now_y === self.FIRST_Y && !self.jump_direction) {
            self.jump_direction = true;
            clearInterval(self.interval);
        }
    }

    jump() {
        let self = this;
        self.interval = setInterval(function() {
            self.jump_draw(self);
        }, 1);
    }
}