function solve() {

    class Melon {

        constructor(weight, melonSort) {
            if (new.target === Melon) {
                throw new Error('Abstract class cannot be instantiated directly');
            }
            this.weight = weight;
            this.melonSort = melonSort;
            this.elementIndex = this.weight * this.melonSort.length;
        }

        getElementIndex() {
            return this.elementIndex;
        }

        toString() {
            return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.getElementIndex()}`
        }
    }

    class Watermelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Water';
        }
    }

    class Firemelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Fire';
        }
    }

    class Earthmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Earth';
        }
    }

    class Airmelon extends Melon {
        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = 'Airmelon';
        }
    }

    class Melolemonmelon extends Firemelon {

        elements = ['Water', 'Fire', 'Earth', 'Air'];


        constructor(weight, melonSort) {
            super(weight, melonSort);
            this.element = this.elements[0];
        }

        morph() {

            this.elements.push(this.elements.shift());
            this.element = this.elements[0];
        }
    }

    return {
        Melon,
        Watermelon,
        Firemelon,
        Earthmelon,
        Airmelon,
        Melolemonmelon
    }
}


solve();