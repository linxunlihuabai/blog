# for...in和for...of的区别

for...in 是用来遍历对象除symbol以外的可枚举的属性,得到的是key
for...of 是用来遍历一个拥有迭代器属性的对象（Array、String、Set、Map和类数组对象），得到的是value
所以数组可以用for...in遍历，普通对象不能用for...of遍历

for...in也可以用来遍历数组，但最好不要这么做。因为：
1. 返回的index是字符串类型的
2. 无法保证顺序
3. 会遍历数组上所有可以枚举的属性，包括原型上的属性

```js
var arr = [1];
arr.name = 'arr'
for(const key in arr){
    console.log(key)
}
// "0"
// name
```
这样明显有问题，所以最好用for...of遍历数组而不是用for...in