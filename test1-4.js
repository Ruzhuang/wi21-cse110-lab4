function discountPrices (prices, discount){
    var discounted = [];
    var finalPrice= 0;

    for(var i = 0; i<prices.length; i++){
        var discountedPrices = prices[i]* (1-discount);
        finalPrice = Math.round(discountedPrices*100)/100;
        discounted.push(finalPrice)
    }

    console.log(i);
    console.log(discountedPrices);
    console.log(finalPrice);

    return discounted;
}
console.log(discountPrices([100, 200, 300], .5))

