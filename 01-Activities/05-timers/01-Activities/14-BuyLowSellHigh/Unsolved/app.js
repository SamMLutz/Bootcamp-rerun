
// Buy Low, Sell High -- Starter Code


// Stock Prices
var stockPrices = [1.32, 1.14, 1.45, 1.20, 1.34, 1.74, 1.18, 1.90, 1.1];

const sortedPrices = stockPrices.sort(function(a,b) {
    return a -b
})

console.log(sortedPrices)
// Your Biggest Profit function
var biggestProfit = function(stockArray, sharesBought) {
    const profitMargin = stockPrices[stockPrices.length -1] - stockPrices[0];
    console.log(profitMargin)
    biggestProfit = profitMargin * sharesBought
    console.log(Math.round(biggestProfit))
};

// A Call to your Biggest Profit function.
biggestProfit(stockPrices, 10000);

// NOTE: This should return 7600,
// because you could have bought it at 1.14 per share
// and then sold it at 1.90 per share.
// 1.90 - 1.14 = 0.76. 0.76 * 10000 is 7600.
