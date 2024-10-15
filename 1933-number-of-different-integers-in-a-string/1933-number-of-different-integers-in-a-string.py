class Solution:
    def numDifferentIntegers(self, word: str) -> int:
        for char in word:
            if not (char.isdigit()):
                word = word.replace(char, ' ')
        
        numbers = word.split()

        # sets in python only hold uniques
        unique_int = set(int(num) for num in numbers)

        return len(unique_int)
        