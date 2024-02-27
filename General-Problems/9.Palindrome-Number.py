class Solution(object):
    def isPalindrome(self, x):
        x = str(x)
        if x == x[::-1]:
            return True
        else:
            return False

# 34ms beats 82.56%
# 11.65mb beats 61.47%