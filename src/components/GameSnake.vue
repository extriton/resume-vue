<template>
<div class="snake-wrapper">
    <!-- Game area -->
    <div class="game-area" :style="gameAreaStyle">
        <div v-if="isStarted">
            <!-- Stars -->
            <div v-for="(star, index) in game.starsHtml" :key="'st' + index"
                 class="star"
                 :class="star._class"
                 :style="star._style"
            >
                <i class="fa fa-apple"></i>
            </div>
            <!-- Snake -->
            <div v-for="(ball, index) in game.snake" :key="'sn' + index" class="snake" :style="ballStyle(ball)">
                <span v-show="ball.head"><i class="fa fa-meh-o"></i></span>
                <span v-show="!ball.head" class="ball-body"></span>
            </div>
        </div>
        <!-- Game over -->
        <div v-show="isGameOver" class="gameover">Game Over</div>
    </div>
    <!-- Game control -->
    <div class="game-control">
        <!-- Score -->
        <div class="score">
            <h1 class="green">
                <div class="icon"><i class="fa fa-apple"></i></div>
                <div class="value">{{ score.green }}</div>
            </h1>
            <h1 class="yellow">
                <div class="icon"><i class="fa fa-apple"></i></div>
                <div class="value">{{ score.yellow }}</div>
            </h1>
            <h1 class="red">
                <div class="icon"><i class="fa fa-apple"></i></div>
                <div class="value">{{ score.red }}</div>
            </h1>
            <br />
            <h1 class="total">
                <span>Total:</span>
                <span class="value">{{ score.total }}</span>
            </h1>
            <h1 class="total">
                <span>Level:</span>
                <span class="value">{{ score.level }}</span>
            </h1>
        </div>
        <!-- Buttons -->
        <div class="buttons">
            <div class="button" @click="onStart()">
                <span v-show="!isStarted">Start</span>
                <span v-show="isStarted">Restart</span>
                &nbsp;(R)
            </div>
            <div class="button" :class="{ disabled: !isStarted || isGameOver }" @click="onPause()">
                <span v-show="!isPaused || !isStarted ">Pause</span>
                <span v-show="isPaused">Continue</span>
                &nbsp;(P)
            </div>
            <div class="button" @click="onSettings()">Settings (S)</div>
        </div>
    </div>
    <!-- Modal: Game settings -->
    <div v-show="isShowModal" class="modal-wrapper" @click="hideModal()">
        <div class="modal-box" @click="(e) => { e.stopPropagation() }">
            <div class="game-settings">
                <div class="settings-wrapper">
                    <div class="game-size">
                        <h2>Game size</h2>
                        <div v-for="(item, index) in gameTypes" :key="'gt' + index">
                            <h3>
                                <input type="radio" :id="item.type" :value="index" v-model="settings.gameIndex">
                                <label :for="item.type">{{ item.desc }}</label>
                            </h3>
                        </div>
                    </div>
                    <div class="apple-count">
                        <h2>Apple count</h2>
                        <div v-for="(item, index) in starsCount" :key="'sc' + index">
                            <h3>
                                <input type="radio" :id="'sc' + index" :value="index" v-model="settings.starsIndex">
                                <label :for="'sc' + index">{{ item }}</label>
                            </h3>
                        </div>
                    </div>
                </div>
                <div class="clearfix"></div>
                <div class="button" @click="onOkSettings()">Ok</div>
                <div class="button" @click="onCancelSettings()">Cancel</div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
const KEY_CODE = { 
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    START: 82,
    PAUSE: 80,
    SETTINGS: 83
    }

export default {
    name: 'GameSnake',
    data() {
        return {
            gameTypes: [
                {
                    type: 'small',
                    w_size: 20,
                    h_size: 20,
                    desc: 'Small (20x20)'
                },
                {
                    type: 'medium',
                    w_size: 25,
                    h_size: 25,
                    desc: 'Medium (25x25)'
                },
                {
                    type: 'large',
                    w_size: 30,
                    h_size: 30,
                    desc: 'Large (30x30)'
                }
            ],
            starsCount: [10 , 15, 20],
            gameIndex: 0,
            starsIndex: 0,
            settings: {
                gameIndex: 0,
                starsIndex: 0
            },
            score: {
                green: 0,
                yellow: 0,
                red: 0,
                total: 0,
                level: 1
            },
            isStarted: false,
            isPaused: false,
            isGameOver: false,
            game: {
                nextStep: 1,
                direction: 'down',
                nextDirection: 'down',
                speed: 100,
                count: 0,
                stars: new Array(),
                starsHtml: new Array(),
                snake: new Array(),
                intervalId: null,
                starsGreen: 0,
                starsYellow: 0,
                starsRed: 0,
            },
            isShowModal: false
        }
    },
    computed: {
        gameAreaStyle () {
            return {
                width: 16 * this.gameTypes[this.gameIndex].w_size + 'px',
                height: 16 * this.gameTypes[this.gameIndex].h_size + 'px'
            }
        },
        H_SIZE () {
            return this.gameTypes[this.gameIndex].h_size
        },
        W_SIZE () {
            return this.gameTypes[this.gameIndex].w_size
        },
        STARS_CNT () {
            return this.starsCount[this.starsIndex]
        },
    },
    methods: {
        ballStyle (ball) {
            const res = {
                top: ball.y*16,
                left: ball.x*16,
                'transition-duration': this.game.speed / 1000 + 's',
                '-webkit-transition-duration': this.game.speed / 1000 + 's',
            }

            if (ball.x == ball.next_x) {
                if (ball.next_y > ball.y ) res.top += this.game.nextStep*4;
                else res.top -= this.game.nextStep*4;
            }
            if (ball.y == ball.next_y) {
                if (ball.next_x > ball.x ) res.left += this.game.nextStep*4;
                else res.left -=this.game.nextStep*4;
            }

            res.top += 'px'
            res.left += 'px'
            return res
        },
        onStart () {
            this.reset()
            this.start()
        },
        onPause () {
            if (this.isStarted && !this.isGameOver)
                this.isPaused = !this.isPaused
        },
        onSettings () {
            this.isPaused = true
            this.settings.gameIndex = this.gameIndex
            this.settings.starsIndex = this.starsIndex
            this.showModal()
        },
        reset () {
            // Reset flags
            this.isStarted = false
            this.isPaused = false
            this.isGameOver = false

            // Reset score params
            this.score.green = 0
            this.score.yellow = 0
            this.score.red = 0
            this.score.total = 0
            this.score.level = 1

            // Reset game params
            this.game.nextStep = 1
            this.game.direction = 'down'
            this.game.nextDirection = 'down'
            this.game.speed = 100
            this.game.count = 0
            this.game.stars = new Array()
            this.game.starsHtml = new Array()
            this.game.snake = new Array()

            if (this.intervalId !== null) {
                clearInterval(this.intervalId)
                this.intervalId = null
            }
        },
        start () {

            // Init stars array
            this.game.stars = new Array(this.H_SIZE)
            for (let i = 0; i < this.H_SIZE; i++) {
                this.game.stars[i] = new Array(this.W_SIZE)
                for (let j = 0; j < this.W_SIZE; j++)
                    this.game.stars[i][j] = 0
            }
            // Init stars count
            this.game.starsRed = Math.floor(0.1 * this.STARS_CNT + 0.5)
            this.game.starsYellow = 2 * this.game.starsRed
            this.game.starsGreen = this.STARS_CNT - (this.game.starsYellow + this.game.starsRed)
            // Init snake params
            this.game.snake = new Array()
            this.game.snake.push({ x: 1, y: 3, next_x: 1, next_y: 4, head: true })
            this.game.snake.push({ x: 1, y: 2, next_x: 1, next_y: 3, head: false })
            this.game.snake.push({ x: 1, y: 1, next_x: 1, next_y: 2, head: false })

            for (let i = 0; i < this.game.starsGreen; i++) this.addStar(1)
            for (let i = 0; i < this.game.starsYellow; i++) this.addStar(2)
            for (let i = 0; i < this.game.starsRed; i++) this.addStar(3)

            this.runInterval()

            this.isStarted = true
        },
        addStar (colorId) {
            let isBusy = true
            while (isBusy) {

                let i = this.random(0, this.H_SIZE - 1)
                let j = this.random(0, this.W_SIZE - 1)

                if (this.game.stars[i][j] != 0) continue
                if (this.game.snake[0].next_y == i && this.game.snake[0].next_x == j) continue

                isBusy = false
                for (let k = 0; k < this.game.snake.length; k++)
                    if (this.game.snake[k].y == i && this.game.snake[k].x == j) { 
                        isBusy = true
                        break
                    }

                if(!isBusy) {
                    let _style = { top: i*16 + 'px', left: j*16 + 'px' }
                    let _class = ''
                    if (colorId == 1) _class = { green: true }
                    if (colorId == 2) _class = { yellow: true }
                    if (colorId == 3) _class = { red: true }
                    
                    this.game.stars[i][j] = colorId
                    this.game.starsHtml.push({ y: i, x: j, colorId: colorId, _class: _class, _style: _style }) 
                    break
                }
            }
        },
        moveSnake () {
            
            if (this.game.nextStep == 1 && !this.checkCrash()) {
                this.isGameOver = true
                this.playSound(999)
            }

            if(this.game.nextStep == 4) this.checkStar()

            if (this.game.nextStep < 4) {
                this.game.nextStep += 1
            } else {

                for (let i = 0; i < this.game.snake.length; i++) {
                    this.game.snake[i].x = this.game.snake[i].next_x
                    this.game.snake[i].y = this.game.snake[i].next_y
                }

                this.game.direction = this.game.nextDirection

                switch(this.game.direction) {
                    case "left":
                        this.game.snake[0].next_x = this.game.snake[0].x - 1
                        break
                    case "right":
                        this.game.snake[0].next_x = this.game.snake[0].x + 1
                        break
                    case "up":
                        this.game.snake[0].next_y = this.game.snake[0].y - 1
                        break
                    case "down":
                        this.game.snake[0].next_y = this.game.snake[0].y + 1
                        break
                }

                for (let i = 1; i < this.game.snake.length; i++) {
                    this.game.snake[i].next_x = this.game.snake[i - 1].x
                    this.game.snake[i].next_y = this.game.snake[i - 1].y;
                }

                this.game.nextStep = 1
            }
        },
        runInterval () {
            this.intervalId = setInterval(() => {
                if (!this.isPaused && this.isStarted && !this.isGameOver) this.moveSnake()
            }, this.game.speed);
        },
        checkCrash () {
            // Check Crash wall
            switch (this.game.direction) {
                case "up":
                    if(this.game.snake[0].next_y < 0) return false
                    break
                case "down":
                    if(this.game.snake[0].next_y > this.H_SIZE - 1) return false
                    break
                case "left":
                    if(this.game.snake[0].next_x < 0) return false
                    break
                case "right":
                    if(this.game.snake[0].next_x > this.W_SIZE - 1) return false
                    break
            }
            // Check crash snake body
            for (let i = 1; i < this.game.snake.length; i++)
                if (this.game.snake[0].next_x == this.game.snake[i].x && this.game.snake[0].next_y == this.game.snake[i].y) return false

            return true
        },
        checkStar () {
            
            const i = this.game.snake[0].next_y
            const j = this.game.snake[0].next_x
            const colorId = this.game.stars[i][j]
            if (colorId == 0) return

            this.game.stars[i][j] = 0
            for (let k = 0; k < this.game.starsHtml.length; k++)
                if (this.game.starsHtml[k].y == i && this.game.starsHtml[k].x == j) {
                    this.game.starsHtml.splice(k, 1)
                    break
                }

            this.incScore(colorId)
            this.playSound(colorId)

            let tmpLength
            switch (colorId) {
                case 1:							// Add 1 ball
                    this.addBall()
                    break
                case 2:							// Add 2 ball
                    this.addBall()
                    this.addBall()
                    break
                case 3:							// Divide 2 ball
                    tmpLength = Math.floor(this.game.snake.length / 2 + 0.5)
                    if (tmpLength < 3) tmpLength = 3
                    this.game.snake.splice(tmpLength, this.game.snake.length - tmpLength)
                    break
            }

            this.addStar(colorId)

            // Increase game level and game speed
            if (this.score.total % 10 == 0) {
                this.score.level++
                if (this.game.speed > 30) this.game.speed -= 5
                if (this.intervalId !== null) {
                    clearInterval(this.intervalId)
                    this.intervalId = null
                }
                this.runInterval()
            }

        },
        incScore (colorId) {
            switch (colorId) {
                case 1:            // Green
                    this.score.green += 1
                    break
                case 2:            // Yellow
                    this.score.yellow += 1
                    break
                case 3:            // Red
                    this.score.red += 1
                    break
            }

            this.score.total += 1
        },
        addBall () {
            const lastBall = this.game.snake[this.game.snake.length - 1]
            let tmp_x, tmp_y

            if (lastBall.x == lastBall.next_x) {
                tmp_y = 2*lastBall.y - lastBall.next_y
                this.game.snake.push({
                    x: lastBall.x,
                    y: tmp_y,
                    next_x: lastBall.x,
                    next_y: lastBall.y,
                    head: false
                })
            }

            if(lastBall.y == lastBall.next_y) {
                tmp_x = 2*lastBall.x - lastBall.next_x
                this.game.snake.push({
                    x: tmp_x,
                    y: lastBall.y,
                    next_x: lastBall.x,
                    next_y: lastBall.y,
                    head: false
                })
            }
        },
        random (min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1)
            return Math.round(rand)
        },
        playSound (sndId) {
            
            const snd = new Audio()

            switch (sndId) {
                case 1:				// Green
                    snd.src = "/snake/snd/snd_eat.wav"
                    break
                case 2:				// Yellow
                    snd.src = "/snake/snd/snd_eat.wav"
                    break
                case 3:				// Red
                    snd.src = "/snake/snd/snd_eat.wav"
                    break
                case 999:			// Game Over
                    snd.src = "/snake/snd/snd_gameover.wav"
                    break
            }

            snd.volume = 0.4
            snd.autoplay = true
        },
        keyHandler (e) {

            if (e.keyCode !== KEY_CODE.START && 
                e.keyCode !== KEY_CODE.PAUSE && 
                e.keyCode !== KEY_CODE.SETTINGS &&
                e.keyCode !== KEY_CODE.LEFT &&
                e.keyCode !== KEY_CODE.UP &&
                e.keyCode !== KEY_CODE.RIGHT &&
                e.keyCode !== KEY_CODE.DOWN) return
            
            if (e.keyCode === KEY_CODE.START) this.onStart()
            if (e.keyCode === KEY_CODE.PAUSE) this.onPause()
            if (e.keyCode === KEY_CODE.SETTINGS) this.onSettings()

            if (!this.isStarted || this.isPpaused) return

            switch (e.keyCode) {
                case KEY_CODE.LEFT:
                    if (this.game.direction != "left" && this.game.direction != "right") this.game.nextDirection = "left"
                    break
                case KEY_CODE.UP:
                    if(this.game.direction != "up" && this.game.direction != "down") this.game.nextDirection = "up"
                    break
                case KEY_CODE.RIGHT:
                    if(this.game.direction != "left" && this.game.direction != "right") this.game.nextDirection = "right"
                    break
                case KEY_CODE.DOWN:
                    if(this.game.direction != "up" && this.game.direction != "down") this.game.nextDirection = "down"
                    break
            }
            
            e.preventDefault()
        },
        showModal () {
            this.isShowModal = true
        },
        hideModal () {
            this.isShowModal = false
        },
        onOkSettings () {
            if (this.settings.gameIndex != this.gameIndex || this.settings.starsIndex != this.starsIndex) {
                this.gameIndex = this.settings.gameIndex
                this.starsIndex = this.settings.starsIndex
                this.reset()
            }
            this.hideModal()
        },
        onCancelSettings () {
            this.hideModal()
        },
    },
    created () {
        window.addEventListener('keydown', this.keyHandler)
    },
    beforeDestroy() {
        window.removeEventListener('keydown', this.keyHandler)

        if (this.intervalId !== null) {
            clearInterval(this.intervalId)
            this.intervalId = null
        }

    }
}
</script>

<style lang="scss" scoped>
@import '../../public/snake/fonts/font-awesome-4.7.0/css/font-awesome.min.css';
.snake-wrapper {
    position: absolute;
    background: linear-gradient(to right, black -50%, rgb(17, 46, 61) 150%);
    padding: 20px 210px 20px 20px;
    border: 1px solid #000;
    border-radius: 10px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .game-area {
        position: relative;
        background-color: #000;
        border-radius: 10px;
        background: linear-gradient(to right, black -50%, rgb(175, 204, 219) 150%);
        .star {
            position: absolute;
            width: 16px;
            height: 16px;
            font-size: 16px;
            text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
            &.green {
                color: #0BF410;
            }
            &.yellow {
                color: #F1C40F;
            }
            &.red {
                color: #F80A0A;
            }
        }
        .snake {
            position: absolute;
            width: 16px;
            height: 16px;
            transition: all .1s linear;
            span {
                display: block;
                width: 16px;
                height: 16px;
                border-radius: 16px;
                font-size: 16px;
                color: black;
                background: linear-gradient(to right, rgb(100, 61, 3) -50%, rgb(230, 180, 17) 150%);
                background: linear-gradient(to right, rgb(88, 86, 235) -50%, rgb(21, 18, 170) 150%);
                &.ball-body {
                    width: 12px;
                    height: 12px;
                    margin: 2px;
                    background: linear-gradient(to right, rgb(88, 86, 235) -50%, rgb(21, 18, 170) 150%);
                    border-radius: 12px;
                }
            }
        }
        .gameover {
            width: 260px;
            padding: 10px 20px;
            font-family: "Comic Sans MS", sans;
            font-weight: bold;
            font-style: italic;
            font-size: 36px;
            color: red;
            border: 1px solid #000;
            border-radius: 8px;
            background-color: #444;
            position: absolute;
            text-align: center;
            text-shadow: 2px 2px 3px black;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    }
    .game-control {
        width: 160px;
        float: right;
        margin-left: 30px;
        position: absolute;
        top: 20px;
        right: 20px;
        bottom: 20px;
        .score {
            width: 100%;
            position: absolute;
            top: 0;
            text-shadow: 2px 4px 3px rgba(0, 0, 0, 0.3);
            h1 {
                width: 100%;
                border: 1px solid black;
                border-radius: 20px;
                padding: 5px 10px;
                text-align: right;
                margin-bottom: 5px;
                text-shadow: 2px 4px 3px rgba(0, 0, 0, 1.0);
                &.green {
                    color: #0BF410;
                }
                &.yellow {
                    color: #F1C40F;
                }
                &.red {
                    color: #F80A0A;
                }
                &.total {
                    text-align: left;
                    color: #3d4f61;
                    span {
                        display: inline-block;
                        width: 50%;
                    }
                    .value {
                        text-align: right;
                    }
                }
                .icon {
                    display: inline-block;
                    width: 20%;
                    text-align: left;
                }
                .value {
                    display: inline-block;
                    width: 80%;
                }
            }
        }
        .buttons {
            position: absolute;
            bottom: 0;
            width: 100%;
            .button {
                width: 100%;
                position: relative;
                color: #3d4f61;
                text-decoration: none;
                user-select: none;
                padding: 7px 5px;
                margin-bottom: 5px;
                outline: none;
                border-radius: 1px;
                background: linear-gradient(to left, rgba(0,0,0,.3), rgba(0,0,0,.0) 50%, rgba(0,0,0,.3)), linear-gradient(#3f2e21, #292522, #25180d);
                background-size: 100% 100%, auto;
                background-position: 50% 50%;
                box-shadow: inset #25241f 0 -1px 1px, inset 0 1px 1px #333331, #38332d 0 0 0 1px, #000 0 10px 15px -10px;
                transition: 0.2s;
                &:hover {
                    background-size: 140% 100%, auto;
                    cursor: pointer;
                }
                &.disabled {
                    opacity: 0.4;
                    &:hover {
                        cursor: default
                    }
                }
            }
        }
    }
    .modal-wrapper {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, .8);
        border-radius: 10px;
        &:hover {
            cursor: pointer;
        }
        .modal-box {
            width: 400px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(to right, rgb(7, 36, 51) -50%, rgb(17, 46, 61) 150%);
            border-radius: 5px;
            padding: 15px;
            border: 1px solid #333;
            box-shadow: #333 2px 2px 3px;
            &:hover {
                cursor: default;
            }
        }
    }
    .game-settings {
        width: 100%;
        text-align: left;
        h2 {
            color: brown;
            margin-bottom: 20px;
            font-size: 20px;
            border-bottom: 1px solid brown;
            text-shadow: 2px 2px 3px rgba(0, 0, 0, 1.0);
        }
        h3 {
            margin-bottom: 10px;
        }
        .game-size, .apple-count {
            width: 45%;
            label {
                margin-left: 8px;
                position: relative;
                top: 1px;
                color: #3d4f61;
                text-shadow: 2px 4px 3px rgba(0, 0, 0, 1.0);
            }
        }
        .game-size {
            float: left;
        }
        .apple-count {
            float: right;
        }
        .clearfix {
            clear: both;
        }
        .button {
            display: inline-block;
            width: 30%;
            position: relative;
            color: #3d4f61;
            text-decoration: none;
            user-select: none;
            text-align: center;
            padding: 7px 5px;
            margin: 30px 10% 15px 10%;
            outline: none;
            border-radius: 1px;
            background: linear-gradient(to left, rgba(0,0,0,.3), rgba(0,0,0,.0) 50%, rgba(0,0,0,.3)), linear-gradient(#3f2e21, #292522, #25180d);
            background-size: 100% 100%, auto;
            background-position: 50% 50%;
            box-shadow: inset #25241f 0 -1px 1px, inset 0 1px 1px #333331, #38332d 0 0 0 1px, #000 0 10px 15px -10px;
            transition: 0.2s;
            &:hover {
                background-size: 140% 100%, auto;
                cursor: pointer;
            }
            &.disabled {
                opacity: 0.4;
                &:hover {
                    cursor: default
                }
            }
        }
    }
}
</style>
