
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		this.holdButtons = {};
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// bg
		const bg = this.add.image(0, -100, "bg");
		bg.setOrigin(0, 0);

		// arcadeimage_1
		const arcadeimage_1 = this.physics.add.image(188, 513, "_MISSING");
		arcadeimage_1.body.allowGravity = false;
		arcadeimage_1.body.pushable = false;
		arcadeimage_1.body.immovable = true;
		arcadeimage_1.body.setOffset(-160, 119);
		arcadeimage_1.body.setSize(2781, 88, false);

		// hero
		const hero = new Hero(this, 135, 446);
		this.add.existing(hero);

		// platform
		const platform = new Platform(this, 816, 550);
		this.add.existing(platform);
		platform.scaleX = 0.3;
		platform.scaleY = 0.3;

		// lists
		const colliders = [arcadeimage_1, platform];
		const players = [hero];

		this.arcadeimage_1 = arcadeimage_1;
		this.colliders = colliders;
		this.players = players;

		this.events.emit("scene-awake");
	}

	/** @type {Phaser.Physics.Arcade.Image} */
	arcadeimage_1;
	/** @type {Array<Phaser.Physics.Arcade.Image|Platform>} */
	colliders;
	/** @type {Hero[]} */
	players;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.physics.add.collider(this.players, this.colliders);
		let camera = this.cameras.main;

		this.aKey = this.input.keyboard.addKey("A");
		this.dKey = this.input.keyboard.addKey("D");
		this.spKey = this.input.keyboard.addKey("Space");

		// camera.setViewport(0, 0, 1280, 720);
		// camera.startFollow(this.hero);
		// camera.setPostPipeline()
	}

	update() {
		if (this.aKey.isDown) {
			this.hero.left();
		}

		if (this.dKey.isDown) {
			this.hero.right();
		}

		if (this.spKey.isDown) {
			this.hero.jump();
		}
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
