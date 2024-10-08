class Solution {
public:
    void merge(vector<int>& nums1, int m, vector<int>& nums2, int n) {
        //nums1 length = m + n (n elements = 0)
        //nums2 length = n
        int nums1length = m + n;
        int nums2x = 0;
        int nums1x = m;
        while(nums2x < n) {
            nums1[nums1x] = nums2[nums2x];
            ++nums1x;
            ++nums2x;
        }
        //alternative solution using C++ standard library
        // copy(nums2.begin(), nums2.end(), nums1.begin() + m);

        //sort
        /*
        int temp = 0;

        for(int k = 0; k < nums1length; ++k) {
            for(int l = k + 1; l < nums1length; ++l) {
                if(nums1[l] < nums1[k]) {
                    temp = nums1[k];
                    nums1[k] = nums1[l];
                    nums1[l] = temp;
                }
            }
        }
        */
        sort(nums1.begin(), nums1.end());

    }
};