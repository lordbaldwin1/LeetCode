class Solution:
    def strStr(self, haystack: str, needle: str) -> int:
        # sliding window
        if len(haystack) < len(needle):
            return -1

        # this is very cool
        # if haystack from i to i + len(needle) AKA the window
        # is equal to needle, return that starting index
        # otherwise move the window forward one index
        # AND CHECK AGAIN! GENIUS!
        for i in range(len(haystack)):
            if haystack[i:i + len(needle)] == needle:
                return i
        
        return -1



        