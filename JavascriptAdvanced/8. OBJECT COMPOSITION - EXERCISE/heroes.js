function solve() {
    const fighter = function (name) {
        [this.name, this.stamina, this.health] = [name, 100, 100];
        // this.name = name;        // this.stamina = 100;        // this.health = 100;

        this.fight = () => {
            this.stamina--;
            console.log(`${this.name} slashes at the foe!`);
        }
    }

    const mage = function (name) {
        [this.name, this.mana, this.health] = [name, 100, 100];

        this.cast = spell => {
            this.mana--;
            console.log(`${this.name} cast ${spell}`);
        }
    }

    return {
        fighter: (name = '') => new fighter(name),
        mage: (name = '') => new mage(name),
    };
}

let create = solve();

create.fighter('Gosho')
const scorcher = create.mage("Scorcher");
scorcher.cast("fireball")
scorcher.cast("thunder")
scorcher.cast("light")

const warrior = create.fighter("Warrior");
warrior.fight()

console.log(warrior.stamina);
console.log(scorcher.mana);