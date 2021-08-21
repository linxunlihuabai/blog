# 原型链继承
优点：
1. 能够访问到父类原型上的属性
缺点：
1. 实例共享原型上的引用属性
2. 创建子类实力时无法向父类构造函数传参

# 借用构造函数继承
优点：
1. 创建子类实例时可以向父类构造函数传参
2. 避免了实例共享引用类型属性
缺点：
1.方法都在构造函数中定义，每次创建实例都会创建一遍方法
2. 实例只是子类的实例，不是父类的实例

# 组合式继承
 优点：
 1. 融合了原型链继承和构造函数继承的优点
缺点：
 1. 调用了两次父类构造函数，因此在实例和子类的prototype上会有重复的属性

# 原型式继承
就是 ES5 Object.create的模拟实现，将传入的对象作为实例的原型
缺点：
1. 和原型继承一样的缺点，实例会共享引用类型属性

# 寄生式继承
创建一个封装继承过程的函数，该函数内部一某种形式进行增强对象，最后返回对象
缺点：
1. 拥有原型继承和构造函数继承的缺点，引用类型属性会共享且每次创建实例都会创建方法

# 寄生组合式继承
通过Object.create,让子类的原型间接的访问到父类的原型。
优点：
1. 解决了组合式继承，调用两次父类构造函数的问题，避免在Child.prototype上创建不必要的属性

```js
function Parent(name){
}

function Child(...args){
    Parent.apply(this, args);
}

function prototype(parent,child) {
    var proto = Object.create(parent.prototype);
    proto.constructor = child;
    child.prototype = proto;
}
```