class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buy = prices[0]
        let profit = 0;

        for(const price of prices){
            if(buy > price){
                buy = price;
            }

            profit = Math.max(profit, price - buy);
        }

        return profit;
    }
}
