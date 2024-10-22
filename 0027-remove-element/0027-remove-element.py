class Solution:
    def removeElement(self, nums: List[int], val: int) -> int:
        count = 0
        for i in range(len(nums)):
            if (val == nums[i]):
                nums[i] = 0
            else:
                count += 1
        nums.sort()
        nums.reverse()
        return count

