class Kitchen {

    constructor(budget) {
        this.budget = budget;
        this.productsInStock = {};
        this.actionsHistory = [];
        this.menu = {};
    }

    loadProducts(arr) {

        arr.map(x => x.split(' '))
            .forEach(([name, quantity, price]) => {

                if (this.budget >= Number(price)) {

                    if (!this.productsInStock.hasOwnProperty(name)) {
                        this.productsInStock[name] = 0
                    }

                    this.productsInStock[name] += Number(quantity)
                    this.budget -= Number(price)
                    this.actionsHistory.push(`Successfully loaded ${quantity} ${name}`)
                } else {
                    this.actionsHistory.push(`There was not enough money to load ${quantity} ${name}`)
                }
            })

        return this.actionsHistory.join('\n');
    }

    addToMenu(meal, neededProducts, price) {

        let actionResult;

        if (!this.menu.hasOwnProperty(meal)) {
            this.menu[meal] = { products: neededProducts, price: Number(price) };
            actionResult = `Great idea! Now with the ${meal} we have ${Object.keys(this.menu).length} meals in the menu, other ideas?`
        } else {
            actionResult = `The ${meal} is already in our menu, try something different.`;
        }

        return actionResult;
    }

    showTheMenu() {

        let actionResult;

        if (Object.keys(this.menu).length !== 0) {
            actionResult = Object.entries(this.menu).map(([key, value]) => `${key} - $ ${value.price}`)
                .join('\n').trim() + '\n'
        } else {
            actionResult = 'Our menu is not ready yet, please come later...'
        }

        return actionResult;
    }

    makeTheOrder(meal) {

        let actionResult;

        if (!this.menu.hasOwnProperty(meal)) {
            actionResult = `There is not ${meal} yet in our menu, do you want to order something else?`
        } else if (!this.hasTheNeededProducts(this.menu[meal].products)) {
            actionResult = `For the time being, we cannot complete your order (${meal}), we are very sorry...`
        } else {
            actionResult = `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            this.removeUsedProducts(this.menu[meal].products);
            this.budget += this.menu[meal].price;
        }

        return actionResult;
    }

    hasTheNeededProducts(productArr) {
        return productArr.map(x => x.split(' '))
            .reduce((a, b) => a && this.productsInStock[b[0]] &&
                this.productsInStock[b[0]] >= Number(b[1]), true)
    }

    removeUsedProducts(productArr) {
        productArr.map(x => x.split(' ')).forEach(x => this.productsInStock[x[0]] -= Number(x[1]));
    }
}