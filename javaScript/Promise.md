# Promise的诞生背景

Promise是一种异步解决方案，它的出现解决了之前回调函数无限嵌套导致难以阅读和理解的问题。（回调地狱）

# Promise的api

1. Promise.all([...promise]) - Promise.all接受一个promise数组，并返回一个新的promise。只有当promise数组的所有成员都settled（完成）后，新的promise才会resolve，返回的结果是所有promise返回结果的数组(数组元素的顺序和其源promise是一样的，即使它最后完成)。如果有一个promise被reject，新的promise就会立即reject，reject的值就是第一个被reject的promise的值。但是剩下的promise仍然会执行，但是结果会被忽略！
2. Promise.allSettled([...promise]) - 和Promise.all一样接受一个promise数组，并返回一个新的promise。但是它会等待所有的promise都被settled，无论是这些promise的结果是什么。最后的结果数组里是{status: "fulfilled", value: result}和{status: "rejected", value: error}的(成功or失败的)对象。
3. Promise.race([...promise]) - 接受一个promise数组，并返回一个新的promise。只要有一个promise被resolve或reject了，返回的promise就会resolve或reject那个promise的结果。
4. Promise.resolve(value) - 创建一个结果为value的resolved的promise, 相当于 new Promise(resolve => resolve(value))。
5. Promise.reject(error) - 创建一个结果为error的rejected的promise, 相当于 new Promise((resolve, reject) => reject(error))。

可以简单的实现Promise.allSettled

```js
Promise.allSettled2 = function(promises){
    const resolveHandler = value => ({status: 'fulfilled', value }); 
    const rejectHandler = reason => ({status: 'rejected', reason }); 

    cosnt tempPromises = promises.map(p => return Promise.resolve(p).then(resolveHandler, rejectHandler));
    return Promise.all(tempPromises);
}
```