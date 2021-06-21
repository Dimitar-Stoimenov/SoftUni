function solve(input) {
	let step = Number(input.pop())

	for (let index = 0; index < input.length; index += step) {
		console.log(input[index])
	}
}

function solve(input, step) {
	let result = [];

	for (let index = 0; index < input.length; index += step) {
		result.push(input[index]);
	}

	return result;	
}