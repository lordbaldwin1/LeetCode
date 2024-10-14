class Solution {
public:
    int hIndex(vector<int>& citations) {
        // [3,0,6,1,5]
        // [0,1,3,5,6]

        sort(citations.begin(), citations.end());
        int n = citations.size();
        int h = 0;
        // loop through whole array
        for (int i = 0; i < n; i++) {
            // if citations at loop index is greater than or equal size - i
            // update
            if (citations[i] >= n - i) {
                h = max(h, n - i);
            }
        }
        return h;
    }
};