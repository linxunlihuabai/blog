# 使用setTimeout实现setInterval

```js
function mySetInterval(callback, wait){
    let result = {};

    function fn(){
        callback();
        result.timer = setTimeout(()=>{
            fn();
        }, wait)
    }

    result.timer = setTimeout(()=>{
        fn();
    }, wait);
    
    return result
}

function clearMySetInterval(timer){
    clearTimeout(timer.timer)
}
```