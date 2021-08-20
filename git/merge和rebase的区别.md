# merge和rebase的区别

都可以用来合并代码

1. 通过merge合并分支会新增一个merge commit，然后将两个分支的历史联系起来。历史比较混乱
2. rebase会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交，主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 git merge所需的不必要的合并提交

# reset和revert的区别

都是用来版本回退的

1. reset是回到某次commit，后面的commit都会被退回
2. revert是生成一个新的commit来撤销某次commit。