func twoSum(nums []int, target int) []int {
    numIdx := make(map[int]int)
    for i := 0; i < len(nums); i++ {
        diff := target - nums[i]
        idx, ok := numIdx[diff]
        if !ok {
            numIdx[nums[i]] = i
            continue
        }
        if idx != i {
            return []int{idx, i}
        }
    }
    return []int{}
}