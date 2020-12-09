function solve(input) {
	let number = 1
	let array = []
	
	for (let line of input) {
		if (line === 'add') {
			array.push(number)
		} else {
			array.pop()
		}
		
		number++
	}

	if (array.length < 1) {
		console.log(`Empty`)
	} else {
		console.log(array.join('\n'))
	}
}