# 实现一个简单的promise

```js
function promise(executor) {
  // 收集then里的回调函数
  this.cbs = [];

  const resolve = (value) => {
    // setTimeout让then里的操作变成异步的
    setTimeout(() => {
      this.cbs.forEach(cb=>{
        cb(value)
      })
    });
  }

  // 暴露resolve
  executor(resolve)
}


promise.prototype.then = function (onFulfilled) {
  // then会返回一个新的promise
  return new promise((resolve)=>{
    // 每次调用then方法，都会往该promise的回调函数队列中加一个回调函数
    this.cbs.push((value)=>{
      const p = onFulfilled(value);
      // 判断then里面返回的是不是promise，如果是的话就等待这个promise的settled再resolve这个promise的结果
      if(p instanceof promise){
        p.then(resolve)
      }else{
        // 如果是普通值，直接resolve
        resolve(p)
      }
    })
  })
}
```

# 模拟实现 all

```js
Promise.all2 = (promises) => {
    return new Promise((resolve, reject) => {
        let result = [];
        let num = 0;
        promises.forEach((promise, index) => {
            promise.then((value) => {
                result[index] = value;
                num++;
                if (num === promises.length) {
                    resolve(result);
                }
            }, (reason) => {
                reject(reason);
            })
        })
    })
}
```

# 模拟实现 race

```js
Promise.race2 = (promises) => {
    return new Promise((resolve, reject) => {
        promises.forEach((promise, index) => {
            promise.then((value) => {
              resolve(value);
            }, (reason) => {
                reject(reason);
            })
        })
    })
}
```

# 模拟实现 allSettled

```js
Promise.allSettled2 = (promises) => {
  const resolveHandler = (value) => ({status: 'fulfilled',value});
  const rejectHandler = (reason) => ({status: 'rejected',reason});
  
  const temp = promises.map(promise=>promise.then(resolveHandler, rejectHandler));
    return Promise.all(temp);
}
```