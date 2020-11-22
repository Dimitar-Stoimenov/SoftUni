let phoneBook = new Map()

phoneBook.set('John Smith', '+359415484')
phoneBook.set('Jane Doe', '+584484325')


if (phoneBook.has('Jane Doe')) {
    console.log(`Found her!`)
    console.log(phoneBook.get(`Jane Doe`))
}

phoneBook.delete('John Smith')

console.log(phoneBook)
