class Article {

    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {

        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        }

        if (this._likes.length === 1) {
            return `${this._likes[0]} likes this article!`;
        }

        return `${this._likes[0]} and ${this._likes.length - 1} others like this article!`
    }

    like(username) {

        if (this._likes.includes(username)) {
            throw new Error("You can't like the same article twice!");
        }

        if (this.creator === username) {
            throw new Error("You can't like your own articles!");
        }

        this._likes.push(username);

        return `${username} liked ${this.title}!`;
    }

    dislike(username) {

        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this article!")
        }

        this._likes = this._likes.filter(x => x !== username);

        return `${username} disliked ${this.title}`;
    }

    comment(username, content, id) {

        if (id === undefined || this._comments.filter(x => x.Id === id).length === 0) {

            let comment;

            if (this._comments.length === 0) {

                comment = {
                    Id: 1,
                    Username: username,
                    Content: content,
                    Replies: [],
                }
            } else {

                comment = {
                    Id: this._comments.length + 1,
                    Username: username,
                    Content: content,
                    Replies: [],
                }
            }

            this._comments.push(comment);

            return `${username} commented on ${this.title}`;

        } else if (this._comments.filter(x => x.Id === id).length !== 0) {

            let comment = this._comments.find(x => x.Id === id);

            let reply = {
                Id: Number(comment.Id) + Number(`0.${comment.Replies.length + 1}`),
                Username: username,
                Content: content,
                Replies: []
            }

            comment.Replies.push(reply);
            return "You replied successfully"
        }
    }

    toString(sortType) {

        let sortMap = {
            'asc': (a, b) => Number(a.Id) - Number(b.Id),
            'desc': (a, b) => Number(b.Id) - Number(a.Id),
            'username': (a, b) => a.Username.localeCompare(b.Username),
        }

        let result = `Title: ${this.title}\nCreator: ${this.creator}\nLikes: ${this._likes.length}\nComments:\n`;

        for (const c of this._comments.sort(sortMap[sortType])) {

            result += `-- ${c.Id}. ${c.Username}: ${c.Content}\n`

            for (const r of c.Replies.sort(sortMap[sortType])) {
                result += `--- ${r.Id}. ${r.Username}: ${r.Content}\n`
            }
        }

        return result.trim();
    }
}

let art = new Article("My Article", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log(art.toString('username'));
art.like("Zane");
console.log(art.toString('desc'));