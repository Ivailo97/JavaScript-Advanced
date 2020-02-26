class Stringer {

    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }

    increase(value) {
        this.innerLength += value;
    }

    decrease(value) {
        this.innerLength = Math.max(0, this.innerLength - value)
    }

    toString() {

        let result;

        if (this.innerLength === 0) {
            result = '...';
        } else if (this.innerString.length > this.innerLength) {
            result = this.innerString.substring(0, this.innerLength) + '...'
        } else {
            result = this.innerString;
        }

        return result;
    }
}

let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...