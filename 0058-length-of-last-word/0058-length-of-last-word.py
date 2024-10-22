class Solution:
    def lengthOfLastWord(self, s: str) -> int:
        s = s.strip()
        n = len(s) - 1
        count = 0
        while n >= 0:
            if s[n] == ' ':
                return count
            else:
                count += 1
            n -= 1
        return count


