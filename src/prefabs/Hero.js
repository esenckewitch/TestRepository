
// You can write more code here

/* START OF COMPILED CODE */

class Hero extends Phaser.Physics.Arcade.Sprite {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 555, y ?? 297, texture || "Fall", frame);

		scene.physics.add.existing(this, false);
		this.body.setSize(32, 32, false);

		/* START-USER-CTR-CODE */
		// Write your code here.

		this.addControl(scene);

		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	right() {
		this.setVelocityX(100);
	}

	left() {
		this.setVelocityX(-100);
	}

	jump() {
		if (this) {
			this.setVelocityY(-300);
		}
	}

	addControl(scene) {
		scene.addControl("Space", "down", this.jump.bind(this));
		scene.addControl("A", "down", this.left.bind(this));
		scene.addControl("D", "down", this.right.bind(this));
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
