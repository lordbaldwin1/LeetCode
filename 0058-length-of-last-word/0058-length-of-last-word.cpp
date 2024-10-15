class Solution {
public:
    int lengthOfLastWord(string s) {
        int size = 0;
        int n = s.size() - 1;

        for (int i = n; i >= 0; i--) {
            if (isalpha(s[i])) {
                ++size;
            } else if (size > 0 && !isalpha(s[i])) {
                i = -1;
            }
        }
        return size;
    }
};