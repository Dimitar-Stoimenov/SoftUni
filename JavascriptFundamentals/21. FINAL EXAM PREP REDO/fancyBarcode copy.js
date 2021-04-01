function solve(input) {
	let barcodeCount = Number(input.shift())

	for (let index = 0; index < input.length; index++){
		let line = input[index]
		let validityPattern = /^@#+[A-Z][A-Za-z0-9]{4,}[A-Z]@#+$/g;

		if (validityPattern.test(line)) {
			let productCode = ''
			let digitCheck = /[0-9]/g
			
			if (digitCheck.test(line)) {
				
				let x = line.match(digitCheck)

				for (let el of x) {
					el = el[0]
					productCode += el
				}

			} else {
				productCode = '00'
			}
			
			console.log(`Product group: ${productCode}`)
		} else {
			console.log(`Invalid barcode`)
		}
	}
}

solve(
    [
        '6',
        '@###Val1d1teM@###',
        '@#ValidIteM@#',
        '##InvaliDiteM##',
        '@InvalidIteM@',
        '@#Invalid_IteM@#',
        '@#ValiditeM@#'
      ]      
)