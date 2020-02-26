const { assert, expect } = require('chai')
const Warehouse = require('../tasks/warehouse')

describe('Warehouse', function() {

    let warehouse;
    beforeEach(function() {
        warehouse = new Warehouse(20);
    });

    it('Test valid constructor', function() {
        expect(warehouse.capacity).to.equal(20);
    })
    it('Test invalid constructor', function() {
        expect(() => new Warehouse(-20)).to.throw();
        expect(() => new Warehouse(0)).to.throw();
        expect(() => new Warehouse('s')).to.throw();
    })

    it('Test revision functionality', function() {
        expect(warehouse.revision()).to.be.equal('The warehouse is empty');
        warehouse.addProduct('Food', 'bread', 5);
        warehouse.addProduct('Drink', 'coke', 6);
        warehouse.addProduct('Food', 'meat', 7);
        const check = 'Product type - [Food]\n' +
            '- bread 5\n' +
            '- meat 7\n' +
            'Product type - [Drink]\n' +
            '- coke 6';
        const otput = warehouse.revision();
        expect(otput).to.equal(check);
    })
    it("Throw error if product is not found", function() {
        expect(() => warehouse.scrapeAProduct('coke', 15)).to.throw('coke do not exists');
    })
});

describe('Add and Sort Warehouse', function() {
    it('Test sort functionality', function() {
        const house = new Warehouse(20);
        house.addProduct('Food', 'bread', 5);
        house.addProduct('Drink', 'coke', 6);
        house.addProduct('Food', 'meat', 7);
        const sorted = Object.keys(house.orderProducts('Food'));
        expect(sorted[0]).to.equal('meat');
        expect(sorted[1]).to.equal('bread');
    })
    it('Test add functionality', function() {
        const house = new Warehouse(20);
        const currentHouse = house.addProduct('Food', 'bread', 20);
        expect(currentHouse['bread']).to.equal(20);
        expect(house.occupiedCapacity()).to.equal(20);
        expect(() => house.addProduct('Food', 'bread', 15)).to.throw();
    })
});