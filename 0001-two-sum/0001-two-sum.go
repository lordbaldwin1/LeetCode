func twoSum(nums []int, target int) []int {
    idxMap := make(map[int]int)
    for i, num := range nums {
        diff := target - num
        if index, found := idxMap[diff]; found {
            return []int{index, i}
        }
        idxMap[num] = i
    }
    return nil
}