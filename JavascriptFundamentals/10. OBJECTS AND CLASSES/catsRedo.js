function solve(inputArray) {

    class Cat{
        meow(){
            console.log(`${this.name}, age ${this.age} says Meow`);            
        }

        constructor(name, age) {
            this.name = name
            this.age = age
        }
    }

    let catArray = inputArray.map(x => {
        let cats = x.split(' ')
        let [name, age] = cats

        let cat = new Cat(name, age)
        return cat
    })

    catArray.forEach(x => x.meow())
}

solve(['Mellow 2', 'Tom 5'])