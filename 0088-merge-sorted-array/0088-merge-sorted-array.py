class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        # n is number of elements in nums2
        k = m
        for i in nums2:
            nums1[k] = i
            k += 1
        nums1.sort()
        return


