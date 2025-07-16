# Study Notes for NeetCode 150 Problems

## Contains Duplicate
- hash map
- iterate nums, flag map[num] or just make count, check if map[num] is defined
- return true if map[num] !== undefined

## Valid Anagram
- sort both, easy method
- hash map (optimal): check length, make count hash map of both
- iterate over one hash map's keys and check if map[key] === map2[key]
- for (const key in map)!!!!

## Two Sum
- hash map
- iterate through array
- calc diff between target and current number
- check if it exists and is not the current index
- return diff's index and current index

## Group Anagrams
- **First Method** Sorting
- hash map
- iterate through array of strings
- sort, push original string to map at sorted index
- return Object.values(map)
- **Optimal Method** Char Count
- hash map
- iterate through array of strings
- make array new array len 26 fill 0
- iterate through chars, fill char count "c.charCodeAt(0)"
- so same thing, joined char count array is key
- push og string to map
- return Object.values(map)

  ## Top K Frequent Elements
  - **Easy Method** Sorting w/ hash map
  - Make hash map with count
  - Turn map into array where each element is array with num and count
  - Sort array by count
  - return array of top k elements
 
  ## Longest Consecutive Sequence
  - Set
  - iterate set
  - if no num - 1, thats a set
  - continue while(num[n + streak))
  - keep track of longest

<!---LeetCode Topics Start-->
# LeetCode Topics
## Array
|  |
| ------- |
| [0001-two-sum](https://github.com/lordbaldwin1/LeetCode/tree/master/0001-two-sum) |
## Hash Table
|  |
| ------- |
| [0001-two-sum](https://github.com/lordbaldwin1/LeetCode/tree/master/0001-two-sum) |
<!---LeetCode Topics End-->