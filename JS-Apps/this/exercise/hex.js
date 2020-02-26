class Hex {

    constructor(value) {
        this._value = value;
    }

    valueOf() {
        return this._value;
    }

    toString() {
        let hexValue = this._value.toString(16).toUpperCase();
        return `0x${hexValue}`
    }

    plus(number) {

        let type = typeof number;
        let newValue = 0;

        if (type === 'number') {
            newValue = number;
        } else if (type === 'object') {
            newValue = number.valueOf();
        }
        return new Hex(this.valueOf() + newValue);
    }

    minus(number) {

        let type = typeof number;
        let newValue = 0;

        if (type === 'number') {
            newValue = number;
        } else if (type === 'object') {
            newValue = number.valueOf();
        }

        return new Hex(this.valueOf() - newValue);
    }

    parse(string) {
        return parseInt(string, 16);
    }
}