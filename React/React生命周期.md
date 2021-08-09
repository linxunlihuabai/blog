# React生命周期

挂载阶段

1. construct：构造函数，最先被执行，通常会在构造函数中初始化State和给方法绑定this
2. getDerivedStatefromProps: 这是个静态方法，可以根据我们接收到的props修改state
3. render: 函数，返回我们需要渲染的东西
4. componentDidMount：组件挂载完以后调用，此时可以获取到Dom节点，请求和订阅都可以写在里面

更新阶段

1. getDerivedStatefromProps
2. shouldComponentUpdate 返回布尔值，控制组件是否更新
3. render
4. getSnapshotBeforeUpdate 这个函数在render之后componentDidUpdate之前调用，返回值会作为componentDidUpdate的参数
5. componentDidUpdate - 更新后调用该方法

卸载阶段

1. componentWillUnmount: 组件即将被卸载时调用，可以进行一些请求定时器、取消网络请求等必要的清理操作