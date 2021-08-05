# 讲讲JS的数据类型？

JS的数据类型分为7种原始类型和一种引用类型

原始类型：

1. String
2. Boolean
3. Number
4. BigInt
5. null
6. undefined
7. symbol

引用类型：

1. Object

# 如何判断JS的数据类型？

1. typeof （注意：typeof null 得到的是object。这是js的早期错误，因为内部使用机器码的前三位进行判断，但是null和object的前三位都是000。所以为object）
2. Object.prototype.toString.call(type)


# 数据属性和访问器属性

js中的对象有数据属性和访问器属性。数据属性是一个包含value的属性，访问器属性是有getter和setter函数的属性。

数据属性：value(数据值)、writeable(能否改变value)、enumerate（能否被for in枚举）、configurable（能否删除该属性，并且如果为false的话除了value和writeable以外的特性都不能改变）
访问器属性：get、set、enumerate、configurable
