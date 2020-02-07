const { expect } = require('chai')
const isSymmetric = require('../tasks/checkForSymmetry')

describe('is symmetric tests suit', () => {

    it('is function', () => {
        expect(typeof isSymmetric).to.equal('function')
    })

    it('computes [1,1,1] => true', () => {
        expect(isSymmetric([1, 1, 1])).to.equal(true)
    })

    it('computes [0,1] => false', () => {
        expect(isSymmetric([0, 1])).to.equal(false)
    })

    it('coputes {} => false', () => {
        expect(isSymmetric({})).to.equal(false)
    })

    it('computes [] => true', () => {
        expect(isSymmetric([])).to.equal(true)
    })

    it('computes [1] => true', () => {
        expect(isSymmetric([1])).to.equal(true)
    })

    it("computes ['i','s','i'] => true", () => {
        expect(isSymmetric(['i', 's', 'i'])).to.equal(true)
    })

    it('computes [1,2,3,4,3,1,1] => false', () => {
        expect(isSymmetric([1, 2, 3, 4, 3, 1, 1])).to.equal(false)
    })

    it("should return false for [1,'bye',{y:5},new Date(),{x:5},'bye',1]", function() {
        let symmetric = isSymmetric([1, 'bye', { y: 5 }, new Date(), { x: 5 }, 'bye', 1]);
        expect(symmetric).to.be.false;
    });

    it("should return true for [1,'bye',{x:5},new Date(),{x:5},'bye',1]", function() {
        let symmetric = isSymmetric([1, 'bye', { x: 5 }, new Date(), { x: 5 }, 'bye', 1]);
        expect(symmetric).to.be.true;
    });
})