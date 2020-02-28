(function() {

    Array.prototype.last = function() {
        return this[this.length - 1];
    }

    Array.prototype.skip = function(n) {

        let result = new Array(this.length - n);

        for (let i = n, k = 0; i < this.length; i++, k++) {

            result[k] = this[i];
        }

        return result;
    }

    Array.prototype.take = function(n) {

        let result = new Array(n);

        for (let i = 0; i < n; i++) {

            result[i] = this[i];
        }

        return result;
    }

    Array.prototype.sum = function() {

        let sum = 0;

        for (let i = 0; i < this.length; i++) {

            sum += this[i];
        }

        return sum;
    }

    Array.prototype.average = function() {

        let sum = 0;

        for (let i = 0; i < this.length; i++) {

            sum += this[i];
        }

        return sum / this.length;
    }

}())

console.log([1, 2, 3].average());