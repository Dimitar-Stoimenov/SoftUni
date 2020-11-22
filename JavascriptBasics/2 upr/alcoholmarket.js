function alcoholMarket(a, b, c, d, e) {
    let whiskeyPrice = Number(a);
    let beerQuantity = Number(b);
    let wineQuantity = Number(c);
    let rakiyaQuantity = Number(d);
    let whiskeyQuantity = Number(e);


    let rakiyaPrice = (0.5 * whiskeyPrice);
    let winePrice = rakiyaPrice - (0.4 * rakiyaPrice);
    let beerPrice = rakiyaPrice - (0.8 * rakiyaPrice);


    let rakiyaSum = rakiyaQuantity * rakiyaPrice;
    let wineSum = wineQuantity * winePrice;
    let beerSum = beerQuantity * beerPrice;
    let whiskeySum = whiskeyQuantity * whiskeyPrice;


    let result = (rakiyaSum + wineSum + beerSum + whiskeySum);

    console.log(result.toFixed(2));
}

alcoholMarket(1, 2, 3, 4, 5)