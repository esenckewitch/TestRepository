
// You can write more code here

/* START OF COMPILED CODE */

class Prefab extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 340, y ?? 296, texture || "dino", frame);

		scene.physics.add.existing(this, false);
		this.body.setOffset(-3, 3);
		this.body.setSize(256, 238, false);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
