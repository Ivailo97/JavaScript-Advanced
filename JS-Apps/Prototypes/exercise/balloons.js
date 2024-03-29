function solve() {

    function Balloon(color, gasWeight) {
        this.color = color;
        this.gasWeight = gasWeight;
    }

    function PartyBalloon(color, gasWeight, ribbonColor, ribbonLength) {
        Balloon.call(this, color, gasWeight);
        this.ribbonColor = ribbonColor;
        this.ribbonLength = ribbonLength;

        Object.defineProperty(this, "ribbon", {
            get: function() {
                return { color: this.ribbonColor, length: this.ribbonLength }
            }
        })
    }

    // Object.setPrototypeOf(PartyBalloon, Balloon);  / for judge
    PartyBalloon.prototype = Object.create(Balloon);
    PartyBalloon.prototype.constructor = PartyBalloon;

    function BirthdayBalloon(color, gasWeight, ribbonColor, ribbonLength, text) {

        PartyBalloon.call(this, color, gasWeight, ribbonColor, ribbonLength);

        this._text = text;

        Object.defineProperty(this, 'text', {
            get: function() {
                return this._text;
            }
        })
    }

    //  Object.setPrototypeOf(BirthdayBalloon, PartyBalloon);  // for judge
    BirthdayBalloon.prototype = Object.create(PartyBalloon);
    BirthdayBalloon.prototype.constructor = BirthdayBalloon;

    return {
        Balloon,
        PartyBalloon,
        BirthdayBalloon
    }
}

solve();