// ВСИЧКИ ТЕЗИ IF-OВЕ ТРЯБВАШЕ ДА СА В САМИТЕ ФУНКЦИИ... НО МЕ МЪРЗЕШЕ ДА ГИ ПРЕПРАВЯМ.

function solution(inputArray) {
    let target = inputArray.shift()

    for (let i = 0; i < inputArray.length; i++) {
        let size = inputArray[i]
        console.log(`Processing chunk ${size} microns`)
        let sizeAfterCutting
        let sizeAfterLapping
        let sizeAfterGrinding
        let sizeAfterEtching

        if ((size / 4) < target) {
            sizeAfterCutting = size
        } else {
            sizeAfterCutting = cutting(target, size)
        }

        if ((sizeAfterCutting * 0.8) < target) {
            sizeAfterLapping = sizeAfterCutting
        } else {
            sizeAfterLapping = lapping(target, sizeAfterCutting)
        }

        if ((sizeAfterLapping - 20) < target) {
            sizeAfterGrinding = sizeAfterLapping
        } else {
            sizeAfterGrinding = grinding(target, sizeAfterLapping)
        }

        if ((sizeAfterGrinding - 1) < target) {
            sizeAfterEtching = sizeAfterGrinding
        } else {
            sizeAfterEtching = etching(target, sizeAfterGrinding)
        }

        let sizeAfterXRay = xRay(target, sizeAfterEtching)

        console.log(`Finished crystal ${sizeAfterXRay} microns`)
    }

    function cutting(target, size) {
        let cutCounter = 0

        while ((size / 4) >= target) {
            cutCounter++
            size /= 4
        }

        console.log(`Cut x${cutCounter}`)
        size = transporting(size)
        return size

    }

    function transporting(currentSize) {
        currentSize = Math.floor(currentSize)
        console.log(`Transporting and washing`)
        return currentSize
    }

    function lapping(target, size) {
        let lapCounter = 0

        while ((size * 0.8) >= target) {
            lapCounter++
            size *= 0.8
        }

        console.log(`Lap x${lapCounter}`)
        size = transporting(size)
        return size

    }

    function grinding(target, size) {
        let grindCounter = 0

        while ((size - 20) >= target) {
            grindCounter++
            size -= 20
        }

        console.log(`Grind x${grindCounter}`)
        size = transporting(size)
        return size

    }

    function etching(target, size) {
        let etchCounter = 0

        while (size - 1 >= target) {
            etchCounter++
            size -= 2
        }

        console.log(`Etch x${etchCounter}`)
        size = transporting(size)
        return size

    }

    function xRay(target, size) {
        if ((size + 1) === target) {
            size += 1
            console.log(`X-ray x1`)
        }
        return size
    }
}

solution([1375, 50000])