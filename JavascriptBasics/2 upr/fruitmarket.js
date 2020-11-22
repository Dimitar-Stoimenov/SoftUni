function fruitMarket(a, b, c, d, e){
    let cenaQgodi = Number(a);
    let bananiKg = Number(b);
    let portokaliKg = Number(c);
    let maliniKg = Number(d);
    let qgodiKg = Number(e);

    let cenaMalini = cenaQgodi / 2
    let cenaPortokali = cenaMalini - (cenaMalini * 0.4)        
    let cenaBanani = cenaMalini * 0.2

    let pariQgodi = cenaQgodi * qgodiKg
    let pariMalini = cenaMalini * maliniKg
    let pariPortokali = cenaPortokali * portokaliKg
    let pariBanani = cenaBanani * bananiKg

    let sum = pariBanani + pariMalini + pariQgodi + pariPortokali
    console.log(sum)
}

fruitMarket('48', '10', '3.3', '6.5', '1.7')