(function() {

    String.prototype.ensureStart = function(str) {

        if (!this.startsWith(str)) {
            return `${str}${this}`;
        };

        return this.toString();
    }

    String.prototype.ensureEnd = function(str) {

        if (!this.endsWith(str)) {
            return `${this}${str}`;
        };

        return this.toString();
    }

    String.prototype.isEmpty = function() {

        return this.toString().length === 0;
    }

    String.prototype.truncate = function(n) {

        if (n < 4) {
            return '.'.repeat(n);
        }

        if (n >= this.toString().length) {
            return this.toString();
        }

        if (n < this.toString().length) {

            let indexOfLastSpace = this.substr(0, n - 2).lastIndexOf(' ');

            if (indexOfLastSpace !== -1) {
                return this.substr(0, indexOfLastSpace).concat('...');
            } else {
                return this.substr(0, n - 3).concat('...');
            }
        }
    }

    String.format = function(str, ...params) {

        return params.reduce((acc, x, i) => {
            acc = acc.replace(`{${i}}`, x)
            return acc;
        }, str)
    }

}())