func isValid(s string) bool {
    // "()[]{}"
    // "([])"

    stack := []rune{}
    closeToOpen := map[rune]rune{
        ')': '(',
        '}': '{',
        ']': '[',
    }

    for _, char := range s {
        // check if closing bracket
        if _, exists := closeToOpen[char]; exists {
            if len(stack) > 0 && stack[len(stack)-1] == closeToOpen[char] {
                stack = stack[:len(stack)-1]
            } else {
                return false
            }
        } else {
            stack = append(stack, char)
        }
    }
    return len(stack) == 0
}