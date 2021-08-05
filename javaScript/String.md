# slice/substr/substring的区别

1. slice接收两个参数start&end，返回从start开始到end前的字符串。start必须大于end，否则返回空串。可以为负值，会自动加上字符串长度。
2. substr接收两个参数start&length，返回从start开始长度为length的字符串。start可以为负值，会自动加上字符串长度，length为负值就是空串。
3. substring接收两个参数start & end，返回从start开始到end前的字符串。负值会自动变成0。如果start大于end会自动调换顺序

# 获取指定字符的方法

1. indexOf(str): 返回str的index，如果没有则返回 -1；
2. includes(str): 判断是否包含str，返回布尔值
3. startWith(str): 判断是否以str开头，返回布尔值 
4. endWith(str): 判断是否以str结尾，返回布尔值 