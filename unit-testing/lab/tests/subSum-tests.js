const { expect } = require('chai')
const sum = require('../tasks/subSum')

describe('Sub sum lab task', () => {

    it('Sub sum is a function', () => {

        expect(typeof sum).to.equal("function")
    });

    it('Sub sum computes [1,1] => 2', () => {

        expect(sum([1, 1])).to.equal(2)
    });

    it('Sub sum starting from index 1 computes [1,1,1]  => 2', () => {

        expect(sum([1, 1, 1], 1)).to.equal(2)
    });

    it('Sub sum starting from index 1, ends at index 2 inclusive computes [1,1,1,1]  => 2', () => {

        expect(sum([1, 1, 1, 1], 1, 2)).to.equal(2)
    });

    it('Sub sum starting from index -1, ends at index 1 inclusive computes [1,1,1,1]  => 2', () => {

        expect(sum([1, 1, 1, 1], -1, 1)).to.equal(2)
    });

    it('Sub sum starting from index -1, ends at index 1 inclusive computes non array  => NaN', () => {

        expect(isNaN(sum(1, -1, 1))).to.equal(true)
    });

    it('Sub sum computes [10, 20, 30, 40, 50, 60], 3, 300 => 150', () => {

        expect(sum([10, 20, 30, 40, 50, 60], 3, 300)).to.equal(150)
    });

    it('Sub sum computes [1.1, 2.2, 3.3, 4.4, 5.5], -3 , 1  => 3.3', () => {

        expect(sum([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)).to.equal(3.3000000000000003)
    });

    it('Sub sum computes [10, twenty, 30, 40], 0, 2 => NaN', () => {

        expect(isNaN(sum([10, 'twenty', 30, 40], 0, 2))).to.equal(true)
    });

    it('Sub sum computes [], 1, 2 => 0', () => {

        expect(sum([], 1, 2)).to.equal(0)
    });

    it('Sub sum computes text, 0, 2 => NaN', () => {

        expect(isNaN(sum('text', 0, 2))).to.equal(true)
    });
})