class Solution:
    def truncateSentence(self, s: str, k: int) -> str:
        words = s.split()

        truncated = []

        n = 0

        while n < k:
            truncated.append(words[n])
            n += 1

        new_str = ''
        for i in truncated:
            new_str = new_str + i + ' '

        return new_str[0:-1]