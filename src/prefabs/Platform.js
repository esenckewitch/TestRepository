
// You can write more code here

/* START OF COMPILED CODE */

class Platform extends Phaser.Physics.Arcade.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 478, y ?? 212, texture || "platform", frame);

		scene.physics.add.existing(this, false);
		this.body.allowGravity = false;
		this.body.setSize(508, 105, false);

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
