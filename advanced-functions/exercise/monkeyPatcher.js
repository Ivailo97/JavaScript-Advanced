function solution(command) {

    const thereIsNoMajority = () => (this.upvotes / (this.upvotes + this.downvotes)) * 100 <= 66 &&
        (this.downvotes / (this.upvotes + this.downvotes)) * 100 <= 66;

    const eitherVotesAreMoreThan100 = () => this.upvotes > 100 || this.downvotes > 100;

    let commands = {

        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {

            let score = [this.upvotes, this.downvotes]

            if (this.upvotes + this.downvotes > 50) {
                let number = Math.ceil(0.25 * Math.max(this.upvotes, this.downvotes))
                score = score.map(x => x + number)
            }

            let balance = this.upvotes - this.downvotes;

            score.push(balance)

            let rating;

            let upvotesPercents = (this.upvotes / (this.upvotes + this.downvotes)) * 100

            if (this.upvotes + this.downvotes < 10) {
                rating = 'new'
            } else if (balance > 0 && upvotesPercents > 66) {
                rating = 'hot';
            } else if (thereIsNoMajority() && balance >= 0 && eitherVotesAreMoreThan100()) {
                rating = 'controversial';
            } else if (balance < 0) {
                rating = 'unpopular';
            } else {
                rating = 'new'
            }

            score.push(rating)

            return score;
        }
    }

    return commands[command]();
}

let data = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
}

solution.call(data, 'upvote');
solution.call(data, 'downvote');

for (let i = 0; i < 50; i++) {
    solution.call(data, 'downvote');
}

console.log(solution.call(data, 'score'));