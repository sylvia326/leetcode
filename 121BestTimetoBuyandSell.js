var maxProfit = function(prices) {
  if(prices.length === 0){
      return 0;
  }
  let minPrice = prices[0], maxProfit = 0;
  for(let i = 0; i<prices.length; i++){
      if(prices[i]<minPrice){
          minPrice = prices[i];
      } else if((prices[i] - minPrice)>maxProfit){
          maxProfit = prices[i] - minPrice;
      }
  }
  return maxProfit;
}
console.log(maxProfit([7,6,4,3,1]));

/*
1. 初始化最低价格和最高利润；
2. 遍历价格，如果价格比最低价格低，更新minprice。（此时不用处理maxprofit因为股票呈下跌趋势）
3. 如果价格比最低价格高， 看看是否需要更新maxprofit
 */
