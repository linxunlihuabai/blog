# Redux和Mobx原理区别

在 Redux 中，实现了一个发布订阅，组件去监听 store 变化，一旦 store 变化，就会通知组件重新渲染。但是 Redux 不会根据组件使用的状态来定向通知，它会粗暴地通知所有 connect 过的组件。然后所有组件都需要通过检查数据是否变化来决定要不要re-render，整体性能损耗严重。（connect高阶组件通过setState(newState)更新组件）

在 Mobx 中，将状态变成可观察数据，通过数据劫持，拦截其 get 来做依赖收集，知道每个组件依赖哪个状态。在状态的 set 阶段，只会通知依赖的对应的组件重新渲染，做到了精准更新。（通过forceUpdate强制更新，其实就是setState([])。）