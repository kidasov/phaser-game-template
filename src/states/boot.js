class Boot extends Phaser.State {
    constructor() {
        super();
    }

    init() {
    }

    preload() {
    }

    create() {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.input.maxPointers = 1;
        this.game.state.start("preload");
    }
}
