class Preload extends Phaser.State {
    init() {
        console.log("Init state");
    }

    preload() {
        console.log(this.game);

        let assets = [
            {type: "image", cache: "game_bg", path: "assets/backgrounds/game_bg" + this.game.strDisplaySuffix + ".jpg"},
            { type: "atlasJSONHash", cache: "spritesheet", path: "assets/spritesheets/spritesheet" + this.game.strDisplaySuffix + ".png",
            path2:  "assets/spritesheets/spritesheet" + this.game.strDisplaySuffix + ".json" },
        ];

        this.game.loadAssets(assets);
    }

    create() {
        this.game.state.start("game");
    }
}
