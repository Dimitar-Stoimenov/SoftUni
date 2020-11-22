function solve(input) {
    let sum = 0
    let pattern = />>(?<name>\w+)<<(?<price>[\d]+[\.]?[\d]*[^\.])!(?<quantity>[1-9]+[\d]*)\b/g
    let arr = []
    input = input.join(' ')

    let searchedElement = pattern.exec(input)

    input = input.substring(0, input.indexOf('Purchase'))

    while (searchedElement) {
        arr.push(searchedElement)
        searchedElement = pattern.exec(input)
    }

    console.log(`Bought furniture:`)

    for (const product of arr) {
        let name = product.groups.name
        let price = Number(product.groups.price)
        let quantity = Number(product.groups.quantity)

        sum += price * quantity

        console.log(name)
    }

    console.log(`Total money spend: ${sum.toFixed(2)}`)
}

solve(
    [' >>Sofa<<312.23!3', ' >>TV<<300!5', '>Invalid<<!5', 'Purchase', '>>Purchase<<3252.23!1']
)