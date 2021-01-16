function solution(command) {
    let commands = {
        upvote: () => this.upvotes++,
        downvote: () => this.downvotes++,
        score: () => {
            let totalVotes = this.upvotes + this.downvotes;
            let rating = '';
            let obfuscateValue = Math.ceil(Math.max(this.upvotes, this.downvotes) * 0.25);

            if (totalVotes <= 50) {
                obfuscateValue = 0;
            };

            if (totalVotes < 10) {
                rating = 'new';
                return [this.upvotes, this.downvotes, this.upvotes - this.downvotes, rating]
            } else if (this.upvotes / totalVotes > 0.66) {
                rating = 'hot';
                return [this.upvotes + obfuscateValue, this.downvotes + obfuscateValue, (this.upvotes + obfuscateValue) - (this.downvotes + obfuscateValue), rating]
            } else if (this.upvotes >= this.downvotes && (this.upvotes > 100 || this.downvotes > 100)) {
                rating = 'controversial';
                return [this.upvotes + obfuscateValue, this.downvotes + obfuscateValue, (this.upvotes + obfuscateValue) - (this.downvotes + obfuscateValue), rating]
            } else if (this.downvotes > this.upvotes) {
                rating = 'unpopular';
                return [this.upvotes + obfuscateValue, this.downvotes + obfuscateValue, (this.upvotes + obfuscateValue) - (this.downvotes + obfuscateValue), rating]
            } else {
                rating = 'new';
                return [this.upvotes, this.downvotes, this.upvotes - this.downvotes, rating]
            }
        }
    }

    return commands[command]()
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 100,
    downvotes: 100
};
solution.call(post, 'upvote');
solution.call(post, 'downvote');
let score = solution.call(post, 'score'); // [127, 127, 0, 'controversial']
solution.call(post, 'downvote');       // (executed 50 times)
score = solution.call(post, 'score');     // [139, 189, -50, 'unpopular']