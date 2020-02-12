const { expect } = require('chai')
const mathEnforcer = require('../tasks/mathEnforcer')

describe('mathEnforcer)', function() {

    describe('addFive(num)', function() {

        describe('invalid cases', function() {

            it('should return undefined for ({})', function() {
                expect(mathEnforcer.addFive({})).to.equal(undefined)
            })

            it('should return undefined for ()', function() {
                expect(mathEnforcer.addFive()).to.equal(undefined)
            })
        })

        describe('valid cases', function() {

            it('should return 10 for (5)', function() {
                expect(mathEnforcer.addFive(5)).to.equal(10)
            })

            it('should return 0 for (-5)', function() {
                expect(mathEnforcer.addFive(-5)).to.equal(0)
            })

            it('should return 8.5 for (3.51)', function() {
                expect(mathEnforcer.addFive(3.51)).closeTo(8.5, 0.01);
            })
        })
    })

    describe('subtractTen(num)', function() {

        describe('invalid cases', function() {

            it('should return undefined for ({})', function() {
                expect(mathEnforcer.subtractTen({})).to.equal(undefined)
            })

            it('should return undefined for ()', function() {
                expect(mathEnforcer.subtractTen()).to.equal(undefined)
            })
        })

        describe('valid cases', function() {

            it('should return 0 for (10)', function() {
                expect(mathEnforcer.subtractTen(10)).to.equal(0)
            })

            it('should return -25 for (-15)', function() {
                expect(mathEnforcer.subtractTen(-15)).to.equal(-25)
            })

            it('should return 15.5 for (25.5)', function() {
                expect(mathEnforcer.subtractTen(25.5)).closeTo(15.5, 0.01);
            })
        })
    })

    describe('sum(num1,num2)', function() {

        describe('invalid cases', function() {

            it('should return undefined for ()', function() {
                expect(mathEnforcer.sum()).to.equal(undefined)
            })

            it('should return undefined for ({},{})', function() {
                expect(mathEnforcer.sum({}, {})).to.equal(undefined)
            })

            it('should return undefined for (1,{})', function() {
                expect(mathEnforcer.sum(1, {})).to.equal(undefined)
            })

            it('should return undefined for ({},1)', function() {
                expect(mathEnforcer.sum({}, 1)).to.equal(undefined)
            })

        })

        describe('valid cases', function() {
            it('should return 2 for (1,1)', function() {
                expect(mathEnforcer.sum(1, 1)).to.equal(2)
            })

            it('should return 2.2 for (1.1,1.1)', function() {
                expect(mathEnforcer.sum(1.1, 1.1)).closeTo(2.2, 0.01)
            })

            it('should return -2 for (-1,-1)', function() {
                expect(mathEnforcer.sum(-1, -1)).to.equal(-2)
            })
        })
    })
})