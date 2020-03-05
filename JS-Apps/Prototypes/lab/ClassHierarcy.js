function solve() {
    class Figure {

        units = {
            m: 0.01,
            cm: 1,
            mm: 10
        }

        constructor(unit = 'cm') {
            this.defaultUnit = unit;
        }

        changeUnits(unit) {
            this.defaultUnit = unit;
        }

        get area() {

        }
    }


    class Rectangle extends Figure {

        constructor(width, height, unit) {
            super(unit);
            this.width = width;
            this.height = height;
        }

        get area() {
            return this.width * this.units[this.defaultUnit] * this.height * this.units[this.defaultUnit];
        }

        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - width: ${this.width * this.units[this.defaultUnit]}, height: ${this.height * this.units[this.defaultUnit]}`
        }

    }

    class Circle extends Figure {

        constructor(r, unit) {
            super(unit);
            this.radius = r;
        }

        get area() {
            return Math.PI * this.radius * this.units[this.defaultUnit] * this.radius * this.units[this.defaultUnit];
        }

        toString() {
            return `Figures units: ${this.defaultUnit} Area: ${this.area} - radius: ${this.radius * this.units[this.defaultUnit]}`;
        }
    }

    return {
        Figure,
        Circle,
        Rectangle
    }
}

solve();