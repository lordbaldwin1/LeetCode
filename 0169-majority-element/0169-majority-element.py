class Solution:
    def majorityElement(self, nums: List[int]) -> int:
        d = {}
        maj = 0
        count = 0

        for i in nums:
            if i in d:
                d[i] += 1
            else:
                d[i] = 1
            if d[i] > count:
                count = d[i]
                maj = i
        return maj

