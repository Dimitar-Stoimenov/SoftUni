function solve(input) {

    let elements = input.split(' ').map(ele => ele.toLowerCase())

    let uniqueElements = []

    elements.forEach(ele => {
        if (!uniqueElements.includes(ele)) {
            uniqueElements.push(ele)
        } 
    })
   
    let obj = {}

    uniqueElements.forEach(ele => {
        obj[ele] = 0
    })   
    
    elements.forEach(ele => {
        obj[ele]++
    })

    let outputArr = []

    for (const key in obj) {
        if (obj[key] % 2 !== 0) {
            outputArr.push(key)
        }
    }

    console.log(outputArr.join(' '))
}

solve(
    'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'
)