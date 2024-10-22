class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        n = len(s) - 1

        while s[n] == ' ':
            n -= 1
        
        i = n

        while i >= 0 and s[i] != ' ':
            i -= 1
        
        return n - i


