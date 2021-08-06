var gameSettings = {
    playerSpeed: 200
}
var config = {
    backgroundColor: 0x000000,
    scale:{
        mode: Phaser.Scale.FIT,
        autoCenter:Phaser.Scale.CENTER_BOTH,
        width: '100%',
        height: '100%'
    },
    scene: [Scene1, Scene2],
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

var game = new Phaser.Game(config);