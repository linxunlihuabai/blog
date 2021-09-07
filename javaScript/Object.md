# Object

API

1. Object.assign(target, ...sources) - 用于将所有可枚举属性的值从一个或多个源对象分配到目标对象。它将返回目标对象。
2. Object.create(proto，[propertiesObject]) - 创建一个新对象，使用现有的对象来提供新创建的对象的__proto__(原型)。
3. Object.is(value1, value2) - 判断两个值是否相等，类似于严格等于，不会进行类型转换，但是NaN等于NaN，+0不等于-0。
4. Object.keys() - 返回自身可枚举属性的key组成的数组，不包括原型上的属性。
5. Object.values() - 返回自身可枚举属性的value组成的数组，不包括原型上的
6. Object.entries(obj) - 返回一个给定对象自身可枚举属性的键值对数组，不会读取原型链的属性（for in 会获取原型链的属性）
7. Object.fromEntries() - 把键值对列表转换为一个对象，和entries刚好相反
8. Object.getPrototypeOf() - 返回对象的原型
9. Object.setPrototypeOf() - 设置对象的原型
10. Object.getOwnPropertyNames() - 返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
11. Object.getOwnPropertySymbols() - 返回一个给定对象自身的所有 Symbol 属性的数组。
12. Object.prototype.isPrototypeOf(obj) - 判断一个对象是否在obj的原型链上。