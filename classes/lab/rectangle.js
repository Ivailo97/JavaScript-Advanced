class Rectangle {

    constructor(width, height, color) {
        this._width = width;
        this._height = height;
        this._color = color;
    }

    get color() {
        return this._color;
    }

    set color(color) {
        this._color = color
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    set width(width) {
        this._width = width;
    }

    set height(height) {
        this._height = height;
    }

    calcArea() {
        return this._width * this._height
    }
}