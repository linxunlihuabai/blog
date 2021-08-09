# 防抖

防抖是用来控制频繁触发的事件的频率，一种优化手段。持续触发事件时，只有等事件停止触发n秒后，才会执行。

```js
function deboundce(fn, wait, immediate) {
  let timer;

  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }

    if (immediate) {
      if (!timer) {
        fn.apply(this, args);
      }
      timer = setTimeout(() => {
        timer = null;
      }, wait)
    } else {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, wait)
    }
  }
}
```