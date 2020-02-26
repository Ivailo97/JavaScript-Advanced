class Rat {

    constructor(name) {
        this.name = name;
        this.unitedRats = [];
    }

    unite(otherRat) {

        if (otherRat instanceof Rat) {
            this.unitedRats.push(otherRat);
        }
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getRats() {
        return this.unitedRats;
    }

    toString() {

        return `${this.name}\n${this.unitedRats.map(x => x.name).join('##\n')}`
    }
}

let firstRat = new Rat("Peter");
console.log(firstRat.toString()); // Peter

console.log(firstRat.getRats()); // []

firstRat.unite(new Rat("George"));
firstRat.unite(new Rat("Alex"));
console.log(firstRat.getRats());