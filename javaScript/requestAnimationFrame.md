# requestAnimationFrame和requestIdleCallback

1. requestAnimationFrame(callback) - 在浏览器下一次重绘之前执行回调函数，只执行一次，通过cancelAnimationFrame取消
2. requestIdleCallback(callback,[options]) - 在浏览器空闲时执行回调函数，只执行一次，可以通过设置timeout，超时强制执行。通过cancelIdleCallback取消

一般屏幕为60帧，那么每一帧的时间大约为16ms，在这一帧的时间中浏览器需要完成用户交互、js执行、页面大小变化和滚动、requestAnimationFrame、layout（布局）、paint（绘制）这一系列操作。如果这些操作做完还有空余时间，就会执行requestIdleCallback的回调。如果一直没有空闲时间就一直不会执行requestIdleCallback的回调。除非设置了timeout