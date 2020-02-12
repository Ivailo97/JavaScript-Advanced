const { expect } = require('chai')
const lookupChar = require('../tasks/charLookup')

describe('lookupChar(string,index)', function() {

    describe('invalid cases', function() {

        describe('invalid types', function() {

            it('should return undefined for ({},0)', function() {
                expect(lookupChar({}, 0)).to.equal(undefined)
            })

            it("should return undefined for ('name',{})", function() {
                expect(lookupChar('name', {})).to.equal(undefined)
            })

            it('should return undefined for ("name",1.7)', function() {
                expect(lookupChar('name', 3.14)).to.equal(undefined)
            })
        })

        describe('invalid parameter count', function() {
            it('should return undefined for (1)', function() {
                expect(lookupChar(1)).to.equal(undefined)
            })

            it('should return undefined for ()', function() {
                expect(lookupChar()).to.equal(undefined)
            })
        })

        describe('invalid index range', function() {

            it("should return Incorrect index for ('name',5)", function() {
                expect(lookupChar('name', 5)).to.equal('Incorrect index')
            })

            it("should return Incorrect index  for ('name',-1)", function() {
                expect(lookupChar('name', -1)).to.equal('Incorrect index')
            })
        })
    })

    describe('valid cases', function() {

        it("should return a for ('name',1)", function() {
            expect(lookupChar('name', 1)).to.equal('a')
        })

        it("should return m for ('name',2)", function() {
            expect(lookupChar('name', 2)).to.equal('m')
        })
    })
})