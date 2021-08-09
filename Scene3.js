class Scene3 extends Phaser.Scene {
    constructor() {
        super("showScores");
    }

    create() {
        Scene2.setVisible = false;
        this.add.text(20,20,"High Scores:")

    }
   
}
