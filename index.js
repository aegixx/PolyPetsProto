import fight_scene from './fight_scene';
import create_scene from './create_scene';

let config = {
    type: Phaser.AUTO,
    width: 1023,
    height: 766,
    scene: [create_scene, fight_scene]
};

let game = new Phaser.Game(config);