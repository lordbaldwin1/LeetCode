func longestConsecutive(nums []int) int {
    // make map int -> int
    // loop through build map with num -> bool (exists)
    // a sequence starts if no numSet[key - 1]
    // a sequence continues until there is no numSet[key]
    numSet := make(map[int]bool)
    for _, num := range nums {
        numSet[num] = true
    }

    longest := 0
    for num := range numSet {
        if !numSet[num - 1] {
            streak := 1

            for numSet[num + streak] {
                streak++
            }

            if streak > longest {
                longest = streak
            }
        }
    }
    return longest
}