function discountPrices (prices, discount){
    let discounted = [];
    let finalPrice= 0;

    for(let i = 0; i<prices.length; i++){
        let discountedPrices = prices[i]* (1-discount);
        finalPrice = Math.round(discountedPrices*100)/100;
        discounted.push(finalPrice)
    }

    /*console.log(i);
    console.log(discountedPrices);*/
    console.log(finalPrice);

    return discounted;
}
console.log(discountPrices([100, 200, 300], .5))

