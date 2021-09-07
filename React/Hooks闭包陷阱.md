# Hooks的闭包陷阱

原因： hooks是函数组件，如果其内部的某些函数只创建了一次，自然会存在闭包问题。

```js
function App(){
    const [count, setCount] = useState(1);
    useEffect(()=>{
        setInterval(()=>{
            console.log(count)
        }, 1000)
    }, [])
    //...
}
```

如上，setInterval中的回调函数只在count为1的时候创建了，所以就算count发生变化了；setInterval的回调函数的作用域链中的count还是1。

解决办法：

1. 正确加入依赖数组
2. setState使用函数式写法
3. 使用useRef