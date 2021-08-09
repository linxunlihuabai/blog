# Hooks的优缺点

优点

1. 写起来简洁明了，没有那么多api
2. 更容易复用代码，代码量更少。用class组件可能一份代码得在好几个生命周期中写，不利于维护和迭代。（比如一个请求，你可能得在componentDidMount和componentDidUpdate中都写。用hooks的话，都写在useEffect就行了。）
3. 不用考虑this的指向问题

缺点

1. 闭包陷阱，你可能拿到旧的props和state
2. 每次render都会重新创建函数，不利于React.memo进行性能优化。