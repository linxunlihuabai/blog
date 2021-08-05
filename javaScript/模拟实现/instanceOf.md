# 模拟实现 instanceof

instanceof的原理是看对象的原型链上有没有该构造函数的prototype，如果有就返回true，没有返回false

```js
function instanceOf(obj, constructor){
    if(typeof obj !== 'object' || obj === null){
        return false 
    }
    
    const proto = Object.getPrototypeOf(obj);

    return proto === constructor.prototype ? true :  instanceOf(proto, constructor)
}
```

还有一个简单写法（a.isPrototypeOf(b)用来判断a对象是否在b对象的原型链上）
```js
function instanceOf(obj, constructor){
    return constructor.prototype.isPrototypeOf(obj)
}
```