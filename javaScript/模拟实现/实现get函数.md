# 实现get函数

```js
function get(obj, path){
    let arr = path.replace(/\[(\d+)\]/,'.$1').split('.');
    let result = obj;
    for(const key of arr){
        result = Object(result)[key];
    }
    return result;
}
```