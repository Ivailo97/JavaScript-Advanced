let result = (function() {

    let Suits = {
        SPADES: '♠',
        HEARTS: '♥',
        DIAMONDS: '♦',
        CLUBS: '♣'
    }

    let validFaces = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

    class Card {

        constructor(face, suit) {

            if (!validFaces.includes(face)) {
                throw new Error()
            }

            this._face = face;

            if (!Object.values(Suits).find(x => x === suit)) {
                throw new Error();
            }

            this._suit = suit;
        }

        get face() {
            return this._face;
        }

        set face(face) {

            if (!validFaces.includes(face)) {
                throw new Error()
            }

            this._face = face;
        }

        get suit() {
            return this._suit;
        }

        set suit(suit) {

            if (!Object.values(Suits).find(x => x === suit)) {
                throw new Error();
            }

            this._suit = suit;
        }
    }


    return {
        Suits: Suits,
        Card: Card
    }

}())

let Card = result.Card;
let Suits = result.Suits;

let card = new Card('Q', Suits.CLUBS)
card.face = 'A'
card.suit = 'aaaa'
let card2 = new Card('1', Suits.DIAMONDS)