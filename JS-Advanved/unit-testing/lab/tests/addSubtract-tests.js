const { expect } = require('chai')
const createCalculator = require('../tasks/addSubtract')

let calculator;

beforeEach('creates the calculator', function() {
    calculator = createCalculator();
})

describe('createCalculator()', function() {

    describe('get', function() {
        it('should get current initial value', function() {
            expect(calculator.get()).to.equal(0)
        })
    })

    describe('add', function() {
        it('should add value to the current one', function() {
            expect(calculator.add(10)).to.equal(undefined)
            expect(calculator.get()).to.equal(10)
            expect(calculator.add(-10)).to.equal(undefined)
            expect(calculator.get()).to.equal(0)
        })

        it('should return NaN when no params', function() {
            expect(calculator.add()).to.equal(undefined)
            expect(isNaN(calculator.get())).to.equal(true)
        })

        it("should return NaN for add('x')", function() {
            expect(isNaN(calculator.add("x"))).to.equal(true)
        })
    })

    describe('subtract', function() {
        it('should subtract value from the current one', function() {
            expect(calculator.subtract(10)).to.equal(undefined)
            expect(calculator.get()).to.equal(-10)
            expect(calculator.subtract(-10)).to.equal(undefined)
            expect(calculator.get()).to.equal(0)
        })

        it('should return NaN when no params', function() {
            expect(calculator.subtract()).to.equal(undefined)
            expect(isNaN(calculator.get())).to.equal(true)
        })

        it("should return NaN for subtract('x')", function() {
            expect(isNaN(calculator.subtract("x"))).to.equal(true)
        })
    })

    describe('add and subtract then get', function() {

        it('should add 10 then subtract 7 and return 3', function() {
            expect(calculator.add('10')).to.equal(undefined)
            expect(calculator.get()).to.equal(10)
            expect(calculator.subtract('7')).to.equal(undefined)
            expect(calculator.get()).to.equal(3)
        })
    })
})