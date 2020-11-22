function solve(inputArray) {
    let cats = []

    class Cat{
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }

        constructor(name, age) {
            this.name = name
            this.age = age
        }
    }

    for (let catData of inputArray) {        
        catData = catData.split(' ')
        let name = catData[0]
        let age = Number(catData[1])

        let newCat = new Cat(name, age)
        
        cats.push(newCat)     
    }

    for (const cat of cats) {        
        cat.meow()
    }
}

solve(['Mellow 2', 'Tom 5'])