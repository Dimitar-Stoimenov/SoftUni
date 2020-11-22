function fishTank(a, b, c, d){
    let length = Number(a)
    let width = Number(b)
    let height = Number(c)
    let percent = Number(d)*0.01

    let volumecbcm = length * width * height
    let liters = volumecbcm * 0.001
    let freeSpace = liters - (percent*liters)
    console.log(freeSpace)
}

fishTank('85', '75', '47', '17')