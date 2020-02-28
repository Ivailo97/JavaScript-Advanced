function solve() {

    return {

        extend: function(template) {

            if (typeof template === 'function') {

                this.prototype.template = template;
            } else {

                Object.assign(this, template);
                Object.setPrototypeOf(this, template);
            }
        }
    }
}