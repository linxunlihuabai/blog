# 模拟实现Object.create

Object.create会创建一个新对象，这个新对象的原型是传入的对象

```js
function create(o){
    function F(){};
    F.prototype = o;
    return new F();
}
```