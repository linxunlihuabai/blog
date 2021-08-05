# this

this是当前执行上下文（全局代码、函数、eval中会创建执行上下文）中的一个属性，this的指向可以分为以下情况：

1. 直接调用函数：this指向全局对象（非严格模式）|指向undefined（严格模式）
2. 函数作为对象的属性调用：this指向该对象
3. 函数作为构造函数调用：this指向该实例
4. apply/call/bind: this指向显示传入的参数
5. 箭头函数：箭头函数的this比较特殊，它的this是在定义时就确定了，是它父级上下文中的this。无法通过apply、call直接改变箭头函数的this。