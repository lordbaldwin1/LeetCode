class Solution {
public:
    bool canJump(vector<int>& nums) {
        // array index = max jump length
        // can jump less
        // can you make it to last index?
        int health = 0;
        for (int i = 0; i < nums.size(); i++) {
            if (health < 0) {
                return false;
            } else if (nums[i] > health) {
                health = nums[i];
            }
            health--;

        }
        return true;
    }
};