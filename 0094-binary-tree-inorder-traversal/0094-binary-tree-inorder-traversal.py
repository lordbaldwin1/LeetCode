# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        result = []
        def inorder(root):
            if not root:
                return []
            # IN ORDER ALL THE WAY LEFT
            # POP UP, GO RIGHT, ALL THE WAY LEFT AGAIN
            inorder(root.left)
            result.append(root.val)
            inorder(root.right)

            return result

        temp = inorder(root)
        return temp
        
 
        