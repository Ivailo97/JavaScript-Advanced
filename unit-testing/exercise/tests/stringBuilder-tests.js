const { expect } = require('chai')
const StringBuilder = require('../tasks/string-builder')

let sb;

describe('StringBuilder', function() {

    beforeEach('init the object', function() {
        sb = new StringBuilder();
    })

    it('Simple input test', function() {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        str.remove(6, 3);

        expect(str.toString()).equal('User,w hello, there');
    })

    describe('_vrfyParam(param)', function() {
        it('should throw TypeError for _vrfyParam({})', function() {
            expect(() => StringBuilder._vrfyParam({})).to.throw(TypeError, 'Argument must be string')
        })

        it('should return undefined for _vrfyParam("something")', function() {
            expect(StringBuilder._vrfyParam("something")).to.equal(undefined)
        })
    })

    describe('toString()', function() {
        it('should return empty string initially', function() {
            expect(sb.toString()).to.equal('')
        })
    })

    describe('append(string)', function() {
        it('should return undefined and append "start" to inner string', function() {
            expect(sb.append('start')).to.equal(undefined);
            expect(sb.toString()).to.equal("start")
        })

        it('should throw TypeError for ({})', function() {
            expect(() => sb.append({})).to.throw()
        })

        it('should throw TypeError for ()', function() {
            expect(() => sb.append()).to.throw()
        })
    })

    describe('prepend(string)', function() {
        it('should return undefined and prepend "pre" to inner string', function() {
            expect(sb.append('start')).to.equal(undefined)
            expect(sb.prepend('pre')).to.equal(undefined)
            expect(sb.toString()).to.equal('prestart')
        })

        it('should throw TypeError for ()', function() {
            expect(() => sb.prepend()).to.throw()
        })

        it('should throw TypeError for ({})', function() {
            expect(() => sb.prepend({})).to.throw()
        })
    })

    describe('insertAt(string,startIndex)', function() {
        it('should throw TypeError for ({},1)', function() {
            expect(() => sb.append({}, 1)).to.throw()
        })

        it('should throw TypeError for ()', function() {
            expect(() => sb.append()).to.throw()
        })

        it('should insert at 1 index "inserted" for ("inserted",1)', function() {
            expect(sb.append('start')).to.equal(undefined)
            expect(sb.insertAt('inserted', 1)).to.equal(undefined)
            expect(sb.toString()).to.equal('sinsertedtart')
        })
    })

    describe('remove(startIndex,length)', function() {
        it('should remove 3 chars from index 2', function() {
            expect(sb.append('start')).to.equal(undefined)
            expect(sb.remove(2, 3)).to.equal(undefined)
            expect(sb.toString()).to.equal('st')
        })

        it('should remove 0 chars from index 2', function() {
            expect(sb.append('start')).to.equal(undefined)
            expect(sb.remove(2, 0)).to.equal(undefined)
            expect(sb.toString()).to.equal('start')
        })
    })

    describe('constructor', function() {

        describe('constructor with initial value', function() {

            beforeEach(() => sb = new StringBuilder('start'))

            it('should create StringBuilder with inner value => "start"', function() {
                expect(sb.toString()).to.equal('start')
            })
        })

        describe('constructor with non string param', function() {

            it('should throw TypeError for ({})', function() {
                expect(() => new StringBuilder(2)).to.throw()
            })
        })
    })
})

// version 2

describe('StringBuilder', function() {
    it('Simple input test', function() {
        let str = new StringBuilder('hello');
        str.append(', there');
        str.prepend('User, ');
        str.insertAt('woop', 5);
        str.remove(6, 3);

        expect(str.toString()).equal('User,w hello, there');
    })

    it('Should throw error if not string input', function() {
        expect(() => new StringBuilder(2)).to.throw();
        let str = new StringBuilder('asd');
        expect(() => str.append(234)).to.throw();
    })

    it('Should have instance type', function() {
        expect(StringBuilder.prototype).to.have.property('append');
        expect(StringBuilder.prototype).to.have.property('prepend');
        expect(StringBuilder.prototype).to.have.property('insertAt');
        expect(StringBuilder.prototype).to.have.property('remove');
        expect(StringBuilder.prototype).to.have.property('toString');
    })
})