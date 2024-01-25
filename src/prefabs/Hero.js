
// You can write more code here

/* START OF COMPILED CODE */

class Hero extends spine.SpineGameObject {

	constructor(scene, plugin, x, y, boundsProvider) {
		super(scene, plugin, x ?? 420, y ?? 201, "dog", "dog-atlas", boundsProvider ?? new spine.SkinsAndAnimationBoundsProvider(null, ["default"]));

		this.skeleton.setSkinByName("default");
		scene.physics.add.existing(this, false);
		this.body.setSize(193.11641404372344, 189.56380885575527, false);
		this.animationState.setAnimation(0, "move", true);
		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	right() {
		this.body.setVelocityX(150);
	}

	left() {
		this.body.setVelocityX(-150);
	}

	jump() {
		this.body.setVelocityY(this.body.velocity.x, -300);
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
