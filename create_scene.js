export default {
    preload: preload,
    create: create,
    update: update
    key: 'create';
};

function preload() {
    this.load.image('create_background', 'assets/create_background.png');
    this.load.image('create_scene_arrow', 'assets/create_scene_arrow.png')
    this.load.image('fight_button', 'assets/fight_button.png');
    this.load.image('archer_head', 'assets/archer_head.svg');
    this.load.image('archer_body', 'assets/archer_body.svg');
    this.load.image('archer_legs', 'assets/archer_legs.svg');
}

function create() {
    this.cameras.main.setBackgroundColor(0xA3817A)
    var createSceneBackground;
    createSceneBackground = this.add.image(511.5, 383, 'create_background');

    var createSceneText;
    createSceneText = this.add.text(319, 97.5, 'CREATE', { fontFamily: 'GlueGun-GW8Z', fontSize: '100px', fill: '#000'});

    var createSceneArrowLeft1;
    createSceneArrowLeft1 = this.add.image(this.cameras.main.width / 4, 300, 'create_scene_arrow');
    createSceneArrowLeft1.setScale(0.40);
    var createSceneArrowLeft2;
    createSceneArrowLeft2 = this.add.image(this.cameras.main.width / 4, 440, 'create_scene_arrow');
    createSceneArrowLeft2.setScale(0.40);
    var createSceneArrowLeft3;
    createSceneArrowLeft3 = this.add.image(this.cameras.main.width / 4, 580, 'create_scene_arrow');
    createSceneArrowLeft3.setScale(0.40);

    var createSceneArrowRight1;
    createSceneArrowRight1 = this.add.image((this.cameras.main.width / 4) * 3, 300, 'create_scene_arrow');
    createSceneArrowRight1.setScale(0.40);
    createSceneArrowRight1.flipX = true;
    var createSceneArrowRight2;
    createSceneArrowRight2 = this.add.image((this.cameras.main.width / 4) * 3, 440, 'create_scene_arrow');
    createSceneArrowRight2.setScale(0.40);
    createSceneArrowRight2.flipX = true;
    var createSceneArrowRight3;
    createSceneArrowRight3 = this.add.image((this.cameras.main.width / 4) * 3, 580, 'create_scene_arrow');
    createSceneArrowRight3.setScale(0.40);
    createSceneArrowRight3.flipX = true;

    let fightButton = this.add.image(this.cameras.main.width / 2, 675, 'fight_button');
    fightButton
        .setScale(0.25)
        .setInteractive({cursor: 'pointer'})
        .on("pointerup", () => {
            this.scene.start('fight', this.selected)
        });

    var archerHead;
    archerHead = this.add.image(this.cameras.main.width / 2, 300, 'archer_head');
    var archerBody;
    archerBody = this.add.image(this.cameras.main.width / 2, 440, 'archer_body');
    var archerLegs;
    archerLegs = this.add.image(this.cameras.main.width / 2, 580, 'archer_legs');
}

function update() {
    
}