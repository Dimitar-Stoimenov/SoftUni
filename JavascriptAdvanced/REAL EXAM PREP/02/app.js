class Story {
    constructor(title, creator) {
        this.title = title,
            this.creator = creator,
            this.comments = [],
            this.likeList = []
    }

    like(username) {
        if (this.likeList.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (this.creator == username) {
            throw new Error("You can't like your own story!");
        } else {
            this.likeList.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    get likes() {
        if (this.likeList.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this.likeList.length == 1) {
            return `${this.likeList[0]} likes this story!`;
        } else {
            return `${this.likeList[0]} and ${this.likeList.length - 1} others like this story!`;
        }
    }

    dislike(username) {
        if (this.likeList.includes(username)) {
            this.likeList = this.likeList.filter(x => x != username);
            return `${username} disliked ${this.title}`;
        } else {
            throw new Error("You can't dislike this story!");
        }
    }

    comment(username, content, id) {
        if (id == undefined) {
            id = this.comments.length + 1;
        }

        let i = this.comments.findIndex(x => x.id == id)

        if (i == -1) {
            this.comments.push({ id, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        } else {
            let replyId = this.comments[i].replies.length + 1;
            this.comments[i].replies.push({ id: replyId, username, content });
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        let output = `Title: ${this.title}
Creator: ${this.creator}
Likes: ${this.likeList.length}
Comments:`;
        switch (sortingType) {
            case 'asc':
                let asc = this.comments.sort((a, b) => a.id - b.id);
                asc.forEach(x => {
                    output += `\n-- ${x.id}. ${x.username}: ${x.content}`;

                    if (x.replies.length > 0) {
                        let replies = x.replies.sort((a, b) => a.id - b.id);
                        replies.forEach(y => output += `\n--- ${x.id}.${y.id}. ${y.username}: ${y.content}`);
                    }
                });
                break;

            case 'desc':
                let desc = this.comments.sort((a, b) => b.id - a.id);
                desc.forEach(x => {
                    output += `\n-- ${x.id}. ${x.username}: ${x.content}`;

                    if (x.replies.length > 0) {
                        let repliesDesc = x.replies.sort((a, b) => b.id - a.id);
                        repliesDesc.forEach(y => output += `\n--- ${x.id}.${y.id}. ${y.username}: ${y.content}`);
                    }
                });
                break;
            case 'username':
                let user = this.comments.sort((a, b) => a.username.localeCompare(b.username));
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

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));