# React错误边界

错误边界是一种React组件，它能捕获到子组件中发生的js错误，然后显示降级UI或者打印错误信息。

static getDerivedStateFromError() 和 componentDidCatch()只要使用了其中一个或两个，那么这个组件就是错误边界。

static getDerivedStateFromError()用来渲染备用UI，componentDidCatch()用来打印错误信息。

注意

错误边界无法捕获以下场景中产生的错误：

1. 事件处理（例如 onClick中的错误）
2. 异步代码（例如 setTimeout 或 requestAnimationFrame 回调函数）
3. 服务端渲染
4. 它自身抛出来的错误（并非它的子组件）