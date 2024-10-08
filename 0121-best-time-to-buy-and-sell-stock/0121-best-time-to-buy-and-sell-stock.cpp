class Solution {
public:
    int maxProfit(vector<int>& prices) {
        /*
        // want the largest difference between buy and sell
        // where buy index < sell index
        //
        // find minimum, find max after that index
        // calc profit and hold it
        // find next lowest minimum, find max after that index
        // calc profit and hold it
        // repeat until array is traversed
        // if profit <= 0, return 0;
        int profit = -1;
        int n = prices.size();
        // what if we just calc max profit for each index?
        // traverse entire array once
        // traverse rest of array for each index
        // profit calculation = sell price - buy price
        // if new profit > profit, replace and continue
        for(int i = 0; i < n; ++i) {
            for (int k = i; k < n; ++k) {
                if((prices[k] - prices[i]) > profit) {
                    profit = prices[k] - prices[i];
                }
            }
        }

        if(profit <= 0) {
            return 0;
        }
        else {
            return profit;
        }
        */ // MY SLOW SOLUTION ^^
        int buy = prices[0];
        int profit = 0;
        int n = prices.size();

        for(int i = 1; i < n; ++i) {
            if(buy > prices[i]) {
                buy = prices[i];
            }
            profit = max(profit, prices[i] - buy);
        }
        return profit;
    }
};