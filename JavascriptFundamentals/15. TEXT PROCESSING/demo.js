let str = 'I am JavaScript developer'

console.log(str.indexOf('Java'))
console.log(str.indexOf('java'))

// substr + substring

// replace

let text = '.bgHello, john@softun.bg.bg.bg.cam.cim.bg'
text = text.replace('.bg', '.com') // това променя само първия .bg

while (text.indexOf('bg') >= 0) {
    text = text.replace('.bg', '.com')
}

console.log(text)

// repeat

let word = 'la'
let result = word.repeat(10)

console.log(result);

// trim(), trimStart(), trimEnd()

let text4e = '    tuka trebe da se trimva   '
console.log(text4e)
console.log(text4e.trimEnd())
console.log(text4e.trimStart())
console.log(text4e.trim())

// startsWith(), endsWith()

let texxt = 'ugabuga'
console.log(texxt.startsWith('ug'))
console.log(texxt.endsWith('uga'))
console.log(texxt.endsWith('nuga'))

// padStart(), padEnd()

console.log('5'.padStart(8, '0'))
console.log('555'.padStart(8, '0'))
console.log('55555'.padStart(8, '0'))
console.log('32623626265'.padStart(8, '0'))

