class List {

    constructor() {
        this.elements = [];
        this.size = 0;
    }

    add(element) {
        this.elements.push(element)
        this.elements = this.elements.sort((a, b) => a - b)
        this.size++;
    }

    remove(index) {

        if (index >= this.elements.length || index < 0) {
            throw new Error();
        }

        this.elements.splice(index, 1)
        this.elements = this.elements.sort((a, b) => a - b)
        this.size--;
    }

    get(index) {

        if (index >= this.elements.length || index < 0) {
            throw new Error();
        }

        return this.elements[index];
    }

    getSize() {
        return this.size
    }

    setSize(size) {
        this.size = size
    }
}

let list = new List();
list.add(5);

list.add(6)

list.remove(0)


console.log(list.get(0))