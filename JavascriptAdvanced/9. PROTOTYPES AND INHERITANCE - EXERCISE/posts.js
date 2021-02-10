function result() {
    class Post {
        constructor(title, content) {
            this.title = title,
                this.content = content
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
                this.likes = Number(likes);
                this.dislikes = Number(dislikes);
                this.comments = [];
        }

        toString() {
            let baseStr = super.toString()

            if (this.comments.length > 0) {
                let commentsOutput = this.comments.map(x => ` * ${x}`).join('\n');
                return baseStr + `\nRating: ${this.likes - this.dislikes}\nComments:\n${commentsOutput}`;
            } else {
                return baseStr + `\nRating: ${this.likes - this.dislikes}`;
            }
        }
    }

        SocialMediaPost.prototype.addComment = function (comment) {
        this.comments.push(comment);
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views++;
            return this;
        }

        toString() {
            let baseStr = super.toString();

            return baseStr + `\nViews: ${this.views}`;
        }
    }

    return { Post, SocialMediaPost, BlogPost};
}

let app = result()

let post = new app.Post("Post", "Content");
console.log(post.toString());

// Post: Post
// Content: Content

let scm = new app.SocialMediaPost("TestTitle", "TestContent", 25, 30);

scm.addComment("Good post");
scm.addComment("Very good post");
scm.addComment("Wow!");

console.log(scm.toString());

// Post: TestTitle
// Content: TestContent
// Rating: -5
// Comments:
//  * Good post
//  * Very good post
//  * Wow!

