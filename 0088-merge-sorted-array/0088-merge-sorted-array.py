class Solution:
    def merge(self, nums1: List[int], m: int, nums2: List[int], n: int) -> None:
        """
        Do not return anything, modify nums1 in-place instead.
        """
        k = m
        i = 0
        while k < m + n:
            nums1[k] = nums2[i]
            k += 1
            i += 1
        nums1.sort()      