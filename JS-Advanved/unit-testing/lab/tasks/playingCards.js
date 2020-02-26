function createCard(face, suit) {

    let validFaces = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K', 'A'];

    let validSuits = {
        'S': '\u2660',
        'H': '\u2665',
        'D': '\u2666',
        'C': '\u2663'
    }

    class Card {

        constructor(face, suit) {
            this.setFace(face);
            this.setSuit(suit);
        }

        setFace(face) {

            if (!validFaces.includes(face)) {
                throw new Error('Invalid face')
            }
            this.face = face;
        }

        setSuit(suit) {

            if (!validSuits.hasOwnProperty(suit)) {
                throw new Error('Invalid suit')
            }
            this.suit = validSuits[suit]
        }

        toString() {
            return `${this.face}${this.suit}`
        }
    }

    return new Card(face, suit);
}

console.log(createCard('J', 'D').toString())