function speak() {
    return this
}

let context = speak()

console.log(context === global)