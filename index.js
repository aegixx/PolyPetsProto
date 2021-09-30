import fight_scene from './fight_scene.js';
import create_scene from './create_scene.js';

var config = {
    type: Phaser.AUTO,
    width: 1023,
    height: 766,
    scene: create_scene, fight_scene
};

var game = new Phaser.Game(config);