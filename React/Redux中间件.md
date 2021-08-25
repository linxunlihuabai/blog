# Redux中间件

Redux暴露了一个applyMiddleware的函数，通过这个函数可以对原本的dispatch函数进行封装。核心就是函数组合

中间件的基本结构

```js
(MiddlewareApi)=>(next)=>(action){
    // before next
    next(action);
    // after next
}
```

applyMiddleware会遍历执行中间件，返回下面这个结构的函数数组

```js
(next)=>(action){
    // before next
    next(action);
    // after next
}
```

然后再通过函数组合的方式返回一个新函数，再执行这个新函数，参数为store.dispatch，最后返回一个新的dispatch。

执行过程(A,B,C): 先执行A，然后碰到next就执行B...，C的next就是store.dispatch，执行完再进行回溯C->B->A。

A -> B -> C -> store.dispatch -> C -> B -> A。