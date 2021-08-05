# new 的过程发生了什么？

1. 创建一个对象
2. 将该对象的原型（\_\_proto\_\_）指向构造函数的原型对象（prototype）
3. 利用apply将构造函数的this指向该对象，完成赋值操作
4. 判断构造函数返回的是不是对象，如果是对象则返回该对象，如果不是则返回上面创建的对象。

# 模拟实现一个new

```js
function New(construct,...args){
  var obj = {};
  obj.__proto__ = construct.prototype;

  // or
  // var obj = {};
  // Object.setPrototypeOf(obj,construct.prototype);

  // or
  // var obj = Object.create(construct.prototype);
  var res = construct.apply(obj,args);
  return typeof res === 'object' ? res:obj;
}
```

