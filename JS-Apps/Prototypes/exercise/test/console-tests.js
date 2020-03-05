const Console = require('../console');
const { assert, expect } = require('../node_modules/chai');

describe('console', function() {

    const testData = { 'ivo': 23 };

    it('should return the right regex placeholder', function() {

        const expected = '/{\\d+}/g';
        const actual = Console.placeholder;
        assert.equal(actual, expected);
    })

    it('should return stringified object when writeLine(testData)', function() {

        const expected = JSON.stringify(testData);
        const actual = Console.writeLine(testData);
        assert.equal(actual, expected);
    })

    it('should return string when writeLine("something")', function() {

        const expected = "something";
        const actual = Console.writeLine("something");
        assert.equal(actual, expected);
    })

    it('should throw when writeLine(1,"lol")', function() {

        const actual = () => Console.writeLine(1, "lol");
        const expected = "No string format given!";
        expect(actual).to.throw(expected);
    })

    it('should throw when writeLine({1},2,3)', function() {

        const actual = () => Console.writeLine("{1}", 2, 3);
        const expected = "Incorrect amount of parameters given!";
        expect(actual).to.throw(expected);
    })

    it('should throw when writeLine({2},2,3)', function() {

        const actual = () => Console.writeLine("{2}", 2);
        const expected = "Incorrect placeholders given!";
        expect(actual).to.throw(expected);
    })

    it('should replace correct when writeLine("{0} {1}","i am","ivo")', function() {

        const actual = Console.writeLine("{0} {1}", "i am", "ivo")
        const expected = "i am ivo";
        assert.equal(actual, expected);
    })
})