class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        dictionary = {}

        majority = 0
        temp = 0
        for i in nums:
            dictionary[i] = 1 + dictionary.get(i, 0)
            if dictionary[i] > majority:
                temp = i
                majority = dictionary[i]
        
        return temp
