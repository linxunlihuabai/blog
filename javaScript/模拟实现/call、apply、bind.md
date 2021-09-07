# call/apply/bind的区别

1. 首先它们都可以改变this指向
2. call改变this指向并立即执行，接收参数列表（函数的参数是一个个的传）
3. apply改变this指向并立即执行，接收参数数组（函数的参数通过数组传）
4. call改变this指向，但不会直接执行，而是返回一个新函数，接受参数列表（函数参数一个个传），其余参数作为新函数的参数。当新函数作为构造函数调用时，绑定的this无效，就像用原函数构造一样。

# 模拟实现call

ES5

```js
Function.prototype.call2=function(){
  var context = arguments[0];
  context.fn = this;
  var temp = [];
  for(var i=1;i<arguments.length;i++){
    temp.push('arguments['+i+']')
  }
  var result = eval('context.fn('+temp+')');
  delete context.fn;
  return result
}
```

ES6
```js
Function.prototype.call2=function(context,...args){
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result
}
```

# 模拟实现apply

ES5

```js
Function.prototype.apply2=function(){
  var context = arguments[0];
  context.fn = this;
  var args = arguments[1];
  var temp = [];
  for(var i=0;i<args.length;i++){
    temp.push('args['+i+']')
  }
  var result = eval('context.fn('+temp+')');
  delete context.fn;
  return result
}
```

ES6
```js
Function.prototype.apply2=function(context,args){
  context.fn = this;
  var result = context.fn(...args);
  delete context.fn;
  return result
}
```

# 模拟实现bind

ES5

```js
Function.prototype.bind2 =function(){
  var self = this;
  var args = Array.prototype.slice.call(arguments);
  var context = args.shift();
  var boundFn = function(){
    var newArgs = Array.prototype.slice.call(arguments);
    // 判断新函数的调用方式(直接调用or构造函数调用)
    // 如果返回的函数作为构造函数调用，则忽略bind的this，this执行构造函数的实例。
    return self.apply(this instanceof boundFn ?  this : context, args.concat(newArgs));
  }
  // 让实例可以取到原函数的原型上的属性
  function F(){};
  F.prototype = this.prototype;
  boundFn.prototype = new F();

  // 和上面三行效果一样
  // boundFn.prototype = Object.create(this.prototype);

  return boundFn;
}
```

ES6
```js
Function.prototype.bind2 =function(context,...args){
  var self = this;
  var boundFn = function(...newArgs){
    return self.apply(this instanceof boundFn ? this:context,[...args,...newArgs])
  }
  boundFn.prototype = Object.create(this.prototype);
  return boundFn;
}
```