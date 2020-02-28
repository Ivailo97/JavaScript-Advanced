function solve(arr) {

    function area() {
        return this.width * this.height;
    }

    function compareTo(other) {
        return other.area() - this.area() === 0 ?
            other.width - this.width :
            other.area() - this.area();
    }

    return arr.map(([width, height]) => Object.assign({ width, height }, { area, compareTo }))
        .sort((a, b) => a.compareTo(b))
}