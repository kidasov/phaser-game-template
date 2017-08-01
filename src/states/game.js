class Game extends Phaser.State {
    init() {
    }

    preload() {
    }

    create() {
        this.background = this.game.add.sprite(0, 0, "game_bg");
        this.background.anchor.set(0.5);
        this.background.setPosition(160, 240);

        this.ball = this.game.add.image(0, 0, "spritesheet", "ball.png");
        this.ball.anchor.set(0.5);
        this.ball.scale.set(0.5);
        this.ball.setPosition(160, 240);
    }

    update() {
        this.ball.rotation += 0.1;
    }
}
