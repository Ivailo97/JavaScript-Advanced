const { assert, expect } = require('chai')
const PaymentPackage = require('../tasks/paymentPackage')

describe('PaymentPackage', () => {

    describe('constructor check', () => {

        it('without params', () => {
            let actual = () => new PaymentPackage();
            assert.throws(actual, 'Name must be a non-empty string')
        })

        it('with one param', () => {
            let actual = () => new PaymentPackage('name')
            assert.throws(actual, 'Value must be a non-negative number')
        })

        it('with all params', () => {
            let actual = new PaymentPackage('name', 420)
            let expected = `Package: name\n- Value (excl. VAT): 420\n- Value (VAT 20%): ${420 * (1 + 20 / 100)}`
            assert.equal(actual.toString(), expected)
            assert.isTrue(actual.active)
            assert.equal(actual.VAT, 20)
        })
    })

    describe('accessors check', () => {

        describe('setter and getter for VAT', () => {

            it('sets and gets correctly with valid value', () => {

                let paymentPackage = new PaymentPackage('name', 420)

                paymentPackage.VAT = 100
                let actual = paymentPackage.VAT;

                assert.equal(actual, 100)
            })

            it('throws when setting non number', () => {

                let paymentPackage = new PaymentPackage('name', 420)
                let actual = () => paymentPackage.VAT = {};
                assert.throws(actual, 'VAT must be a non-negative number')
            })

            it('throws when setting negative value', () => {
                let paymentPackage = new PaymentPackage('name', 420)
                let actual = () => paymentPackage.VAT = -10;
                assert.throws(actual, 'VAT must be a non-negative number')
            })

        })

        describe('setter and getter for active', () => {

            it('sets and gets correctly with valid value', () => {

                let paymentPackage = new PaymentPackage('name', 420)

                paymentPackage.active = false
                let actual = paymentPackage.active;

                assert.isFalse(actual)
            })

            it('throws when setting non boolean', () => {

                let paymentPackage = new PaymentPackage('name', 420)
                let actual = () => paymentPackage.active = null;
                assert.throws(actual, 'Active status must be a boolean')
            })
        })
    })


    describe('toString()', () => {

        it('should append "innactive" when not active', () => {

            let actual = new PaymentPackage('name', 420)
            actual.active = false;

            let expected = `Package: name (inactive)\n- Value (excl. VAT): 420\n- Value (VAT 20%): ${420 * (1 + 20 / 100)}`
            assert.equal(actual.toString(), expected)
            assert.isFalse(actual.active)
        })
    })

    describe('PaymentPackage', () => {

        describe('constructor check', () => {

            it('without params', () => {
                let actual = () => new PaymentPackage();
                assert.throws(actual, 'Name must be a non-empty string')
            })

            it('with one param', () => {
                let actual = () => new PaymentPackage('name')
                assert.throws(actual, 'Value must be a non-negative number')
            })

            it('with all params', () => {
                let actual = new PaymentPackage('name', 420)
                let expected = `Package: name\n- Value (excl. VAT): 420\n- Value (VAT 20%): ${420 * (1 + 20 / 100)}`
                assert.equal(actual.toString(), expected)
                assert.isTrue(actual.active)
                assert.equal(actual.VAT, 20)
            })
        })


        describe('accessors check', () => {

            describe('setter and getter for VAT', () => {

                it('sets and gets correctly with valid value', () => {

                    let paymentPackage = new PaymentPackage('name', 420)

                    paymentPackage.VAT = 100
                    let actual = paymentPackage.VAT;

                    assert.equal(actual, 100)
                })

                it('throws when setting non number', () => {

                    let paymentPackage = new PaymentPackage('name', 420)
                    let actual = () => paymentPackage.VAT = {};
                    assert.throws(actual, 'VAT must be a non-negative number')
                })

                it('throws when setting negative value', () => {
                    let paymentPackage = new PaymentPackage('name', 420)
                    let actual = () => paymentPackage.VAT = -10;
                    assert.throws(actual, 'VAT must be a non-negative number')
                })

            })

            describe('setter and getter for active', () => {

                it('sets and gets correctly with valid value', () => {

                    let paymentPackage = new PaymentPackage('name', 420)

                    paymentPackage.active = false
                    let actual = paymentPackage.active;

                    assert.isFalse(actual)
                })

                it('throws when setting non boolean', () => {

                    let paymentPackage = new PaymentPackage('name', 420)
                    let actual = () => paymentPackage.active = null;
                    assert.throws(actual, 'Active status must be a boolean')
                })
            })
        })


        describe('toString()', () => {

            it('should append "innactive" when not active', () => {

                let actual = new PaymentPackage('name', 420)
                actual.active = false;

                let expected = `Package: name (inactive)\n- Value (excl. VAT): 420\n- Value (VAT 20%): ${420 * (1 + 20 / 100)}`
                assert.equal(actual.toString(), expected)
                assert.isFalse(actual.active)
            })

            it("should return correct value for ('testing', 0) inactive", function() {
                let p = new PaymentPackage("testing", 0);
                let expectedText = [
                    `Package: ${p.name}`,
                    `- Value (excl. VAT): ${p.value}`,
                    `- Value (VAT ${p.VAT}%): ${p.value * (1 + p.VAT / 100)}`
                ].join("\n");
                let actualText = p.toString();

                expect(actualText).to.be.equal(expectedText);
            });
        })
    })
})