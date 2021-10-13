class CreateScene extends Phaser.scene {
    constructor() {
        super({key: 'fight'});
    }


    preload() {
        this.load.image('battle_background', 'assets/battle_background.png');
        this.load.image('bow_ability_icon', 'assets/bow_icon.png');
        this.load.image('archer_head', 'assets/archer_head.svg');
        this.load.image('archer_body', 'assets/archer_body.svg');
        this.load.image('archer_legs', 'assets/archer_legs.svg');
    }

    create() {
        var battleSceneBackground;
        battleSceneBackground = this.add.image(511.5, 383, 'battle_background');

        var playerBattleSceneHealth = this.add.text(10, 5, '100/100', {
            fontFamily: 'GlueGun-GW8Z',
            fontSize: '50px',
            fill: '#000'
        });
        var enemyBattleSceneHealth = this.add.text(846, 5, '100/100', {
            fontFamily: 'GlueGun-GW8Z',
            fontSize: '50px',
            fill: '#000'
        });

        var ability1, ability2, ability3, ability4;
        ability1 = this.add.image(373, 720, 'bow_ability_icon');
        ability1.setScale(0.35);
        ability2 = this.add.image(463, 720, 'bow_ability_icon');
        ability2.setScale(0.35);
        ability3 = this.add.image(553, 720, 'bow_ability_icon');
        ability3.setScale(0.35);
        ability4 = this.add.image(643, 720, 'bow_ability_icon');
        ability4.setScale(0.35);

        var playerLegs = this.add.image(this.cameras.main.width / 4, 490, 'archer_legs');
        var playerBody = this.add.image(this.cameras.main.width / 4, 440, 'archer_body');
        var playerHead = this.add.image(this.cameras.main.width / 4, 330, 'archer_head');

        var enemyLegs;
        enemyLegs = this.add.image((this.cameras.main.width / 4) * 3, 490, 'archer_legs');
        enemyLegs.flipX = true;
        var enemyBody;
        enemyBody = this.add.image((this.cameras.main.width / 4) * 3, 440, 'archer_body');
        enemyBody.flipX = true;
        var enemyHead;
        enemyHead = this.add.image((this.cameras.main.width / 4) * 3, 330, 'archer_head');
        enemyHead.flipX = true;
    }
}

export default new FightScene();