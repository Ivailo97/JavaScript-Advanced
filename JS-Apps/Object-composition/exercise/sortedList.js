function SortedList() {

    return {

        elements: [],
        size: 0,

        add: function(element) {
            this.elements.push(element);
            this.elements.sort((a, b) => a - b);
            this.size++;
        },
        remove: function(index) {

            if (index < 0 || index >= this.size) {
                throw new Error('Invallid index');
            }

            this.elements.splice(index, 1);
            this.size--;
        },
        get: function(index) {

            if (index < 0 || index >= this.size) {
                throw new Error('Invallid index');
            }

            return this.elements[index];
        }
    }
}