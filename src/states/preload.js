import Phaser from 'phaser';

class Preload extends Phaser.State {
    init() {
    }

    preload() {
        let assets = [
            {type: 'image', cache: 'game_bg', path: `assets/backgrounds/game_bg${this.game.strDisplaySuffix}.jpg`},
            {
                type: 'atlasJSONHash',
                cache: 'spritesheet',
                path: `assets/spritesheets/spritesheet${this.game.strDisplaySuffix}.png`,
                path2: `assets/spritesheets/spritesheet${this.game.strDisplaySuffix}.json`
            }
        ];

        this.game.loadAssets(assets);
    }

    create() {
        // console.log('in preload state');
        this.game.state.start('game');
    }
}

export default Preload;
