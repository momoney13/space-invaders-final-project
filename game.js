var gameSettings = {
    playerSpeed: 200
}
var config = {
    width: 1574,
    height: 956,
    //type:Phaser.AUTO,
    backgroundColor: 0x000000,
    // scale:{
    //     mode: Phaser.Scale.RESIZE,
    //     parent:'',
    //     autoCenter:Phaser.Scale.CENTER_BOTH,     
    //     width: '100%',
    //     height: '100%'
    // },
    scene: [Scene1, Scene2, Scene3],
    pixelArt: true,
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}

var game = new Phaser.Game(config);
