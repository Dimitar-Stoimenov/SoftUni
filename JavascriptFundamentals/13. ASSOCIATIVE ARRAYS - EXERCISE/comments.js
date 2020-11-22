function solve(lines) {
    let obj = {}
    let userList = new Set()

    lines.forEach(line => {
        if (line.includes('article ')) {
            let [blank, article] = line.split(' ')

            if (!obj[article]) {
                obj[article] = {}
            }

        } else if (line.includes(' posts on ')) {
            let [firstPart, secondPart] = line.split(': ')
            let [username, article] = firstPart.split(' posts on ')
            let [title, comment] = secondPart.split(', ')

            if (obj[article]) {
                if (userList.has(username)) {
                    if (!obj[article][username]) {
                        obj[article][username] = [{ title: title, content: comment }]
                    } else {
                        obj[article][username].push({ title: title, content: comment })
                    }
                }
            }

        } else {
            let [blank, user] = line.split(' ')
            userList.add(user)
        }

    })

    let sortedArticleArr = Object.entries(obj).sort((a, b) => {
        let commentCountA = 0
        let commentCountB = 0

        Object.entries(a[1]).forEach(miniLine => {
            miniLine[1].forEach(y => commentCountA++)
        })

        Object.entries(b[1]).forEach(miniLine => {
            miniLine[1].forEach(y => commentCountB++)
        })

        return commentCountB - commentCountA
    })

    sortedArticleArr.forEach(x => {
        let newLine = Object.entries(x[1]).sort((a, b) => a[0].localeCompare(b[0]))

        x[1] = newLine
    })

    sortedArticleArr.forEach(line => {
        console.log(`Comments on ${line[0]}`)
        line[1].forEach(line2 => {

            line2[1].forEach(x => {
                let [title, comment] = Object.entries(x)
                title = title[1]
                comment = comment[1]

                console.log(`--- From user ${line2[0]}: ${title} - ${comment}`)
            })
        })
    })
}

solve([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
])

