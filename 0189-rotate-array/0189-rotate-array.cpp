class Solution {
public:
    void rotate(vector<int>& nums, int k) {
        // use remainder because if k > size of nums, this is more efficient
        // say nums, n = 7 and k = 9, you only actually need to rotate 2 times
        // 9 % 7 = 2
        k = k % nums.size();
        vector<int> final_array(nums.size());

        // for sake of ease
        int n = nums.size();
        for(int i = 0; i < n; ++i) {
            // nums[i + k] will not account for indices > n
            // use remainder again nums[i + k] % n
            // example: n = 7, i = 5, k = 3
            // i + k = 8 (! out of bounds !)
            // (i + k) % 7 = 1
            final_array[(i + k) % n] = nums[i];
        }

        // loop through and overwrite nums with the rotated array
        for(int i = 0; i < n; ++i) {
            nums[i] = final_array[i];
        }


    }
};