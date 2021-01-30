function discountPrices (prices, discount){
    const discounted = [];
    const finalPrice= 0;

    for(let i = 0; i<prices.length; i++){
        const discountedPrices = prices[i]* (1-discount);
        /*finalPrice = Math.round(discountedPrices*100)/100;*/
        discounted.push(finalPrice)
    }

    console.log(i);
    console.log(discountedPrices);
    console.log(finalPrice);

    return discounted;
}
console.log(discountPrices([100, 200, 300], .5))

