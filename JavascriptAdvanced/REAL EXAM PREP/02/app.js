class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = []
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator == username) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    dislike(username) {
        if (this._likes.includes(username)) {
            this._likes = this._likes.filter(x => x != username);
            return `${username} disliked ${this.title}`;
        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(username, content, id) {
        if (id == undefined || this._comments[(id - 1)] == undefined) {
            id = this._comments.length + 1;
        }

        if (this._comments.length < id) {
            this._comments.push({ id, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        } else {
            let replyId = this._comments[(id - 1)].replies.length + 1;
            this._comments[(id - 1)].replies.push({ id: replyId, username, content });
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        let output = `Title: ${this.title}
Creator: ${this.creator}
Likes: ${this._likes.length}
Comments:`;
        switch (sortingType) {
            case 'asc':
                let asc = this._comments.sort((a, b) => a.id - b.id);
                asc.forEach(x => {
                    output += `\n-- ${x.id}. ${x.username}: ${x.content}`;

                    if (x.replies.length > 0) {
                        let replies = x.replies.sort((a, b) => a.id - b.id);
                        replies.forEach(y => output += `\n--- ${x.id}.${y.id}. ${y.username}: ${y.content}`);
                    }
                });
                break;

            case 'desc':
                let desc = this._comments.sort((a, b) => b.id - a.id);
                desc.forEach(x => {
                    output += `\n-- ${x.id}. ${x.username}: ${x.content}`;

                    if (x.replies.length > 0) {
                        let repliesDesc = x.replies.sort((a, b) => b.id - a.id);
                        repliesDesc.forEach(y => output += `\n--- ${x.id}.${y.id}. ${y.username}: ${y.content}`);
                    }
                });
                break;
            case 'username':
                let user = this._comments.sort((a, b) => a.username.localeCompare(b.username));
                user.forEach(x => {
                    output += `\n-- ${x.id}. ${x.username}: ${x.content}`;

                    if (x.replies.length > 0) {
                        let repliesDesc = x.replies.sort((a, b) => a.username.localeCompare(b.username));
                        repliesDesc.forEach(y => output += `\n--- ${x.id}.${y.id}. ${y.username}: ${y.content}`);
                    }
                });
                break;
        }

        return output;
    }
}