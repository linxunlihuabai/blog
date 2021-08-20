# 实现一个promise超时重试

```js
function retry(fn, times, interval) {
    return new Promise((reslove, reject) => {
        function help() {
            fn().then(reslove).catch(() => {
                if (times) {
                    setTimeout(() => {
                        help();
                        times--;
                    }, interval)
                } else {
                    reject('error times none')
                }
            })
        }
        help();
    })
}
```