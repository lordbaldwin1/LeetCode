func twoSum(nums []int, target int) []int {
    numIdx := make(map[int]int)
    for i, num := range nums {
        diff := target - num
        if idx, found := numIdx[diff]; found {
            return []int{idx, i}
        }
        numIdx[num] = i
    }
    return nil
}