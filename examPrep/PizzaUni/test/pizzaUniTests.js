const assert = require('chai').assert;
const PizzUni = require('../PizzUni');

describe('PizzaUni', function() {

    let pizzaUni;

    beforeEach('init', function() {
        pizzaUni = new PizzUni();
    })

    describe('constructor', function() {

        it('should create with empty constuctor', function() {

            let expected = JSON.stringify({
                registeredUsers: [],
                availableProducts: {
                    pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                    drinks: ['Coca-Cola', 'Fanta', 'Water']
                },
                orders: [],
            });

            let actual = JSON.stringify(pizzaUni);
            assert.equal(expected, actual);
        });
    })

    describe('registerUser(email)', function() {

        it('should register for registerUser("testEmail")', function() {
            let expected = JSON.stringify({ email: 'testEmail', orderHistory: [] });
            let actual = JSON.stringify(pizzaUni.registerUser('testEmail'));
            assert.equal(expected, actual);
        })

        it('should throw when email exist for register("testEmail")', function() {
            pizzaUni.registerUser('testEmail');
            let actual = () => pizzaUni.registerUser('testEmail');
            assert.throws(actual, 'This email address (testEmail) is already being used!')
        })
    })

    describe('makeAnOrder(email,orderedPizza,orderedDrink)', function() {

        it('should make an order with valid data for makeAnOrder("testEmail","Italian Style","Coca-Cola")', function() {
            pizzaUni.registerUser('testEmail');
            let actual = pizzaUni.makeAnOrder("testEmail", "Italian Style", "Coca-Cola");
            assert.equal(0, actual)
        })

        it('should throw when pizza not included in menu for makeAnOrder("testEmail","Black","Coca-Cola"', function() {
            pizzaUni.registerUser('testEmail');
            let actual = () => pizzaUni.makeAnOrder("testEmail", "Black", "Coca-Cola");
            assert.throws(actual, "You must order at least 1 Pizza to finish the order.");
        })

        it('should make order for makeAnOrder("testEmail","Italian Style","Coca-Cola"', function() {
            let user = pizzaUni.registerUser('testEmail');
            pizzaUni.makeAnOrder("testEmail", "Italian Style", "Coca-Cola");
            let actual = JSON.stringify(user);
            let expected = JSON.stringify({ email: 'testEmail', orderHistory: [{ orderedPizza: 'Italian Style', orderedDrink: 'Coca-Cola' }] });
            assert.equal(expected, actual);
        })

        it('should make order for makeAnOrder("testEmail","Italian Style","Coca-Cola"', function() {
            pizzaUni.registerUser('testEmail');
            pizzaUni.makeAnOrder("testEmail", "Italian Style", "Coca-Cola");
            let actual = JSON.stringify(pizzaUni);
            let expected = JSON.stringify({
                registeredUsers: [{ email: 'testEmail', orderHistory: [{ orderedPizza: 'Italian Style', orderedDrink: 'Coca-Cola' }] }],
                availableProducts: {
                    pizzas: ['Italian Style', 'Barbeque Classic', 'Classic Margherita'],
                    drinks: ['Coca-Cola', 'Fanta', 'Water']
                },
                orders: [{ orderedPizza: 'Italian Style', orderedDrink: 'Coca-Cola', email: 'testEmail', status: 'pending' }],
            });
            assert.equal(expected, actual);
        })
    })

    describe('detailsAboutMyOrder(id)', function() {

        it('should return details about existing order for detailsAboutMyOrder(0)', function() {
            pizzaUni.registerUser('testEmail');
            pizzaUni.makeAnOrder("testEmail", "Italian Style", "Coca-Cola");
            let actual = pizzaUni.detailsAboutMyOrder(0);
            let expected = 'Status of your order: pending';
            assert.equal(expected, actual);
        })

        it('should return undefined about not existing order for detailsAboutMyOrder(0)', function() {
            pizzaUni.registerUser('testEmail');
            let actual = pizzaUni.detailsAboutMyOrder(0);
            let expected = undefined;
            assert.equal(expected, actual);
        })
    })

    describe('completeOrder()', function() {

        it('should return the first pending order with complete status', function() {
            pizzaUni.registerUser('testEmail');
            pizzaUni.makeAnOrder("testEmail", "Italian Style", "Coca-Cola");
            let expected = JSON.stringify({ orderedPizza: 'Italian Style', orderedDrink: 'Coca-Cola', email: 'testEmail', status: 'completed' })
            let actual = JSON.stringify(pizzaUni.completeOrder());
            assert.equal(expected, actual);
        })
    })
})