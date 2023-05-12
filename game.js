class Demo1 extends AdventureScene {
    constructor() {
        super("demo1", "River Styx");
    }

    onEnter() {

        let ghost = this.add.text(this.w * 0.3, this.w * 0.3, "👻 Lost Soul")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => this.showMessage("A lost soul"))
            .on('pointerdown', () => {
                this.showMessage("They probably don't wanna talk.");
                this.tweens.add({
                    targets: ghost,
                    x: '+=' + this.s,
                    repeat: 2,
                    yoyo: true,
                    ease: 'Sine.inOut',
                    duration: 100
                });
            });

        let coin = this.add.text(this.w * 0.5, this.w * 0.1, "🪙 coin")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                this.showMessage("A coin someone left behind.")
            })
            .on('pointerdown', () => {
                this.showMessage("You pick up the coin.");
                this.gainItem('coin');
                this.tweens.add({
                    targets: coin,
                    y: `-=${2 * this.s}`,
                    alpha: { from: 1, to: 0 },
                    duration: 500,
                    onComplete: () => coin.destroy()
                });
            })

        let boat = this.add.text(this.w * 0.1, this.w * 0.15, "⛵ Ferryman")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("coin")) {
                    this.showMessage("You've got the money to board");
                } else {
                    this.showMessage("You need to pay to board.");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("coin")) {
                    this.loseItem("coin");
                    this.showMessage("*splash*");
                    boat.setText("⛵ On board");
                    this.gotoScene('demo2');
                }
            })

    }
}

class Demo2 extends AdventureScene {
    constructor() {
        super("demo2", "The second room has a long name (it truly does).");
    }
    onEnter() {
        let ghost = this.add.text(this.w * 0.3, this.w * 0.3, "👻 Lost Soul")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => this.showMessage("A lost soul"))
        .on('pointerdown', () => {
            this.showMessage("They probably don't wanna talk.");
            this.tweens.add({
                targets: ghost,
                x: '+=' + this.s,
                repeat: 2,
                yoyo: true,
                ease: 'Sine.inOut',
                duration: 100
            });
        });

        let sword = this.add.text(this.w * 0.5, this.w * 0.1, "🗡️ Sword")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("This could come in handy")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the sword.");
            this.gainItem('sword');
            this.tweens.add({
                targets: sword,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => sword.destroy()
            });
        })

        let demon = this.add.text(this.w * 0.1, this.w * 0.15, "Demon with a Key")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("sword")) {
                this.showMessage("You might be able to take it from them now.");
            } else {
                this.showMessage("Gonna need a weapon to beat them.");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("sword")) {
                this.loseItem("sword");
                this.showMessage("*stab*");
                demon.setText(" Defeated");
                this.gainItem('key');
            }
        })
        let Gate = this.add.text(this.w * 0.1, this.w * 0.25, " Gate")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
             if (this.hasItem("key")) {
                this.showMessage("you've got the key");
            } else {
                this.showMessage("You need a key to unlock.");
                }
        })
        .on('pointerdown', () => {
            if (this.hasItem("key")) {
                this.loseItem("key");
                this.showMessage("*Brrk*");
                Gate.setText(" Gate opens");
                this.gotoScene('Room3');
             }
        })

}
        
}
class Room3 extends AdventureScene {
    constructor() {
        super("Room3");
    }

    onEnter() {
        let rock = this.add.text(this.w * 0.5, this.w * 0.1, " 🪨  Rock")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            this.showMessage("This could come in handy")
        })
        .on('pointerdown', () => {
            this.showMessage("You pick up the rock.");
            this.gainItem('rock');
            this.tweens.add({
                targets: rock,
                y: `-=${2 * this.s}`,
                alpha: { from: 1, to: 0 },
                duration: 500,
                onComplete: () => rock.destroy()
            });
        })
        let skeleton = this.add.text(this.w * 0.1, this.w * 0.15, "skeleton")
        .setFontSize(this.s * 2)
        .setInteractive()
        .on('pointerover', () => {
            if (this.hasItem("rock")) {
                this.showMessage("Break off a bone with the rock.");
            } else {
                this.showMessage("Dogs Like Bones don't they?");
            }
        })
        .on('pointerdown', () => {
            if (this.hasItem("rock")) {
                this.loseItem("rock");
                this.showMessage("*crack*");
                skeleton.setText("salvaged bones ");
                this.gainItem('bones');
            }
        })
        let dogo = this.add.text(this.w * 0.3, this.w * 0.4, "⛵ Cerberus")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                if (this.hasItem("bones")) {
                    this.showMessage("Use the bones to distract Cerberus");
                } else {
                    this.showMessage("Looks Like Cerberus is guarding something");
                }
            })
            .on('pointerdown', () => {
                if (this.hasItem("bones")) {
                    this.loseItem("bones");
                    this.showMessage("*Cerberus moves away*");
                    dogo.setText("Hidden Door");
                    this.showMessage("Go through hidden Door")
                    //this.gotoScene('demo2');
                }
            })
        let Gate = this.add.text(this.w * 0.3, this.w * 0.4, " Gate")
            .setFontSize(this.s * 2)
            .setInteractive()
            .on('pointerover', () => {
                 if (this.hasItem("key")) {
                    this.showMessage("you've got the key");
                } else {
                    this.showMessage("You need a key to unlock.");
                    }
            })
            .on('pointerdown', () => {
                if (this.hasItem("key")) {
                    this.loseItem("key");
                    this.showMessage("*Brrk*");
                    Gate.setText(" Gate opens");
                    this.gotoScene('Room3');
                 }
            })
    }
}

class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    create() {
        this.add.text(50,50, "Time To Escape!").setFontSize(50);
        this.add.text(50,100, "Click to begin.").setFontSize(20);
        this.input.on('pointerdown', () => {
            this.cameras.main.fade(1000, 0,0,0);
            this.time.delayedCall(1000, () => this.scene.start('demo1'));
        });
    }
}

class Outro extends Phaser.Scene {
    constructor() {
        super('outro');
    }
    create() {
        this.add.text(50, 50, "That's all!").setFontSize(50);
        this.add.text(50, 100, "Click anywhere to restart.").setFontSize(20);
        this.input.on('pointerdown', () => this.scene.start('intro'));
    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 1920,
        height: 1080
    },
    scene: [Intro, Demo1, Demo2, Room3, Outro],
    title: "Adventure Game",
});

