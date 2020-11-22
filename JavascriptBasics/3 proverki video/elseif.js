function grade(a){
    let ocenka = Number(a)
    if (ocenka >= 5.5) {
        console.log('Отличен 6!')
    } else if (ocenka >= 4.5) {
        console.log('Много добър 5!')
    } else if (ocenka >= 3.5) {
        console.log('Добър 4!')
    } else if (ocenka >= 3.0) {
        console.log('Среден 3!')
    } else {
        console.log('Слаб 2!')
    } 
}


grade('3.9')