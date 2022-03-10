class DinoGame {

    constructor(level) {
        this.player = new Player();
        this.score = 0;
        this.obstacle_list = [];
        this.interval_list = [];
        // 난이도 하 -> 장애물 하나
        if (!level) {
            this.obstacle_list.push(
                new Obstacle(false)
            );
        } 
        // 난이도 상 -> 장애물 둘
        else {
            this.obstacle_list.push(
                new Obstacle(false)
            );
            this.obstacle_list.push(
                new Obstacle(true)
            );
        }
    }

    end() {
        if(this.player.jump_status) {
            clearInterval(this.player.jump_status);
        }

        for (let i=0; i < this.interval_list.length; i++) {
            clearInterval(this.interval_list[i]);
        }

        setTimeout(() => alert(this.score), 0);
    }

    get_player_position() {
        this.player_top = this.player.now_y;
        this.player_bottom = this.player.now_y + this.player.HEIGHT;
        this.player_right = this.player.FIRST_X + this.player.WIDTH;
        this.player_left = this.player.FIRST_X;
    }

    get_obstacle_position(obstacle) {
        this.obstacle_top = obstacle.first_y;
        this.obstacle_bottom = obstacle.first_y + obstacle.HEIGHT;
        this.obstacle_right = obstacle.now_x + obstacle.WIDTH;
        this.obstacle_left = obstacle.now_x;
    }

    crash_width() {
        let result = false;
        // 조건
        if( (this.obstacle_left < this.player_right) && (this.player_left <= this.obstacle_right) ) {
            result = true;
        }

        return result;
    }

    crash_height() {
        let result = false;
        // 조건
        if((this.player_bottom >= this.obstacle_top) && (this.obstacle_bottom >= this.player_top)) {
            result = true;
        }

        return result;
    }

    crash(self) {
        
        // 충돌
        self.get_player_position();
        
        for (let i=0; i < self.obstacle_list.length; i++) {
            self.get_obstacle_position(self.obstacle_list[i]);

            let crash_width = self.crash_width();
            let crash_height = self.crash_height();
            console.log(crash_width +' / '+ crash_height);

            if (crash_width &&  crash_height ) {
                // 충돌 시 끝!
                self.end();
            }
        }
    }


    start() {
        let self = this;

        // 사용자
        self.player.draw();
        canvas.addEventListener('click', function() {
            self.player.jump();
        });
        // 장애물
        for(let i=0; i < self.obstacle_list.length; i++) {
            self.interval_list.push(
                self.obstacle_list[i].run()
            )
        }
        // 충돌/스코어
        self.interval_list.push(
            setInterval(function() {
                self.crash(self);
                self.score++;
            }, 1)
        )

    }

}