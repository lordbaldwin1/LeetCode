class Solution:
    def areSentencesSimilar(self, sentence1: str, sentence2: str) -> bool:
        s1 = sentence1.split()
        s2 = sentence2.split()

        if len(s1) < len(s2):
            temp = s1
            s1 = s2
            s2 = temp
        
        start, end = 0, 0
        n1, n2 = len(s1), len(s2)

        while start < n2 and s1[start] == s2[start]:
            start += 1

        while end < n2 and s1[n1 - end - 1] == s2[n2 - end - 1]:
            end += 1

        return start + end >= n2