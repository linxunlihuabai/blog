# in、Object.keys和for...in的区别

1. in是用来判断属性是否在该对象或者原型链中，包括了symbol，不可枚举的，原型链上的属性
2. Object.Keys 返回对象自身可枚举的key，不包括symbol，不可枚举，原型上的属性
3. for...in是用来遍历对象除symbol以外的可枚举属性，不包括symbol和不可枚举的属性，包括了原型链上的属性