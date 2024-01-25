
// You can write more code here

/* START OF COMPILED CODE */

class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// prefab
		const prefab = new Prefab(this, 859, 165);
		this.add.existing(prefab);

		// colide
		const colide = new Colide(this, 729, 554);
		this.add.existing(colide);
		colide.body.allowGravity = false;
		colide.body.immovable = false;

		// fall
		const fall = this.add.image(1142, -11, "Fall");
		fall.scaleX = 10;
		fall.scaleY = 10;

		// prefab_1
		const prefab_1 = new Prefab(this, 1126, 308);
		this.add.existing(prefab_1);

		// hero
		const hero = new Hero(this, 395, 481);
		this.add.existing(hero);
		hero.scaleX = 11;
		hero.scaleY = 11;
		hero.body.collideWorldBounds = true;

		// lists
		const colliders = [colide];
		const players = [prefab, prefab_1];

		this.prefab_1 = prefab_1;
		this.hero = hero;
		this.colliders = colliders;
		this.players = players;

		this.events.emit("scene-awake");
	}

	/** @type {Prefab} */
	prefab_1;
	/** @type {Hero} */
	hero;
	/** @type {Colide[]} */
	colliders;
	/** @type {Prefab[]} */
	players;

	/* START-USER-CODE */

	// Write your code here

	create() {
		this.editorCreate();
		this.physics.add.collider(this.players, this.colliders);
		let camera = this.cameras.main;

		// camera.setViewport(0, 0, 1280, 720);
		// camera.startFollow(this.hero);
		// camera.setPostPipeline()
	}


	/**
	 * Добавляет элемент управления
	 *
	 * @param {"up" or "down"} state Состояние кнопки.
	 */
	addControl(key, state, func) {
		this.input.keyboard.addKey(key).on(state, func);
	}

	update(){
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
