class GameName extends Phaser.Game {
    constructor(width, height, suffix, strSuffix) {
        super(width, height, Phaser.CANVAS, "", {
            preload: () => {
                let scriptsArray = [
                    {key: "boot", path: "src/states/boot.js"},
                    {key: "preload", path: "src/states/preload.js"},
                    {key: "game", path: "src/states/game.js"}
                ];
                this.loadScripts(scriptsArray);
            },

            create: () => {
                this.displaySuffix = suffix;
                this.strDisplaySuffix = strSuffix;
                this.state.add("boot", Boot);
                this.state.add("preload", Preload);
                this.state.add("game", Game);

                this.state.start("boot");
            },
        });
    }

    getImagePathWithSuffix(path, extension) {
        return path + this.strDisplaySuffix + extension;
    }

    loadAssets(assets) {
        for (let asset of assets) {
            this.load[asset.type](asset.cache, asset.path, asset.path2);
        }
    }

    loadScripts(scripts) {
        for (let script of scripts) {
            this.load.script(script.key, script.path);
        }
    }
}

(function() {
    let windowWidth = window.innerWidth * window.devicePixelRatio;
    let windowHeight = window.innerHeight * window.devicePixelRatio;

    const DIMENSION = {
        HEIGHT: 480,
        WIDTH: 320,
    };

    let displaySuffix = 1;
    let strDisplaySuffix = "";

    if (windowWidth > DIMENSION.width || window.height > DIMENSION.height) {
        displaySuffix = 2;
        strDisplaySuffix = "@2x"
    }

    let gameWidth = DIMENSION.WIDTH * displaySuffix;
    let gameHeight = DIMENSION.HEIGHT * displaySuffix;


    PIXI.DisplayObject.prototype.setPosition = function(x, y) {
        this.x = game.displaySuffix === 2 ? x * 2 : x;
        this.y = game.displaySuffix === 2 ? y * 2 : y;
    };

    PIXI.DisplayObject.prototype.tryDrag = function() {
        if (this.game.dragMode === true) {
            this.inputEnabled = true;
            this.input.enableDrag();
            this.events.onDragStop.add(function(sprite, pointer) {
                    var x = game.displaySuffix === 2 ? sprite.x * 0.5 : sprite.x;
                    var y = game.displaySuffix === 2 ? sprite.y * 0.5 : sprite.y;
            }, this);
        }
    };
    
    let game = new GameName(gameWidth, gameHeight, displaySuffix, strDisplaySuffix);
})();
