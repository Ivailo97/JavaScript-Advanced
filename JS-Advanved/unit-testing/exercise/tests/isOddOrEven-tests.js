const { expect } = require('chai')
const isOddOrEven = require('../tasks/isOddOrEven')

describe('isOddOrEven(string)', function() {

    describe('valid cases', function() {

        it("should return true for ('test')", function() {
            expect(isOddOrEven('test')).to.equal('even')
        })

        it("should return false for ('not')", function() {
            expect(isOddOrEven('not')).to.equal('odd')
        })
    })

    describe('invalid cases', function() {

        it('should return undefined for ({})', function() {
            expect(isOddOrEven({})).to.equal(undefined)
        })

        it('should return undefined for ()', function() {
            expect(isOddOrEven()).to.equal(undefined)
        })
    })
})