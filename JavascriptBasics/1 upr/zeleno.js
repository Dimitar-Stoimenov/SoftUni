function ozeleniavane(a){  
    let price = 7.61
    let metri = Number(a)
    let originalPrice = metri * price
    let finalPrice = originalPrice * 0.82
    let discount = originalPrice * 0.18

    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`)
    console.log(`The discount is: ${discount.toFixed(2)} lv.`)
}

ozeleniavane('135')