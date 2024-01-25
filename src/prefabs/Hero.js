
// You can write more code here

/* START OF COMPILED CODE */

class Hero extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 555, y ?? 297, texture || "Fall", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 32, false);

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.body.maxSpeed = 200;
		console.log(this.controller);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	right() {
		this.setAccelerationX(150);
	}

	left() {
		this.setAccelerationX(-150);
	}

	jump() {
		console.log(this.body.velocity.x);
		this.setVelocity(this.body.velocity.x, -300);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
