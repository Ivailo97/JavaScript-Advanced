const { expect } = require('chai')
const rgbToHexColor = require('../tasks/rgbToHex')

let invalidColorTests = [

    [{}, 1, 1],
    [1, {}, 1],
    [1, 1, {}],

    [-1, 1, 1]
    [1, -1, 1],
    [1, 1, -1],

    [256, 1, 1],
    [1, 256, 1],
    [1, 1, 256],
]

describe('rgbToHexColor(red, green, blue)', function() {

    describe('Special cases(invalid input', function() {

        it("should return undefined when invalid color", function() {
            invalidColorTests.forEach(x => expect(rgbToHexColor(x[0], x[1], x[2])).to.equal(undefined))
        })

        it('should return undefined for ()', function() {
            expect(rgbToHexColor()).to.be.equal(undefined)
        })
    })

    describe('Nominal cases(valid input)', function() {

        it("should return #000000 for (0, 0, 0)", function() {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
        })

        it("should return #FFFFFF for (255, 255, 255)", function() {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
        })
    })
})