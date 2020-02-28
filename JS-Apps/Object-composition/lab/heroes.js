function solve() {

    function hero(name) {

        return {
            name,
            health: 100
        }
    }

    function fight() {
        console.log(`${this.name} slashes at the foe!`)
        this.stamina--;
    }

    function cast(spell) {
        console.log(`${this.name} cast ${spell}`)
        this.mana--;
    }

    return {
        mage: (name) => Object.assign(hero(name), { mana: 100 }, { cast }),
        fighter: (name) => Object.assign(hero(name), { stamina: 100 }, { fight }),
    }
}