# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        output = []

        self.inorder(root, output)

        for i in range(1, len(output)):
            if output[i] <= output [i -1]:
                return False
        
        return True
    def inorder(self, root, output):
        if not root:
            return

        self.inorder(root.left, output)
        output.append(root.val)
        self.inorder(root.right, output)