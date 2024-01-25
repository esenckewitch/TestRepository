
// You can write more code here

/* START OF COMPILED CODE */

class Hero extends Phaser.GameObjects.Container {

	constructor(scene, x, y) {
		super(scene, x ?? 555, y ?? 297);

		// spinegameobject_1
		/** @type {spine.SpineGameObject & { body: Phaser.Physics.Arcade.Body }} */
		const spinegameobject_1 = scene.add.spine(-245, -2, "dog", "dog-atlas");
		spinegameobject_1.skeleton.setSkinByName("default");
		scene.physics.add.existing(spinegameobject_1, false);
		spinegameobject_1.body.setSize(193.11641404372344, 189.56380885575527, false);
		this.add(spinegameobject_1);

		this.spinegameobject_1 = spinegameobject_1;

		/* START-USER-CTR-CODE */
		// Write your code here.

		console.log(this.controller);

		/* END-USER-CTR-CODE */
	}

	/** @type {spine.SpineGameObject & { body: Phaser.Physics.Arcade.Body }} */
	spinegameobject_1;

	/* START-USER-CODE */

	right() {
		this.body.setVelocity(150);
	}

	left() {
		this.body.setVelocity(-150);
	}

	jump() {
		this.body.setVelocity(this.body.velocity.x, -300);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
