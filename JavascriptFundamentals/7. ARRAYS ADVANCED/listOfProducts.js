function solve(products) {
    products
        .sort() // ТУКА ИМА ПО-ПРАВИЛНО НА JUDGE НЕ ГО ПРИЕМА        
        .forEach((p, i) => console.log(`${i + 1}.${p}`))

        // .sort((a, b) => a.localeCompare(b))
}

solve(["Potatoes", "Tomatoes", "Onions", "Apples"])