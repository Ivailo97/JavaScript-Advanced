function add(n) {

    let sum = function(y) {
        return add(n + y);
    }

    sum.valueOf = function() {
        return n;
    }

    return sum;
}