# React工作流程

1. 首次执行ReactDOM.render会创建fiberRootNode（源码中叫fiberRoot）和rootFiber。其中fiberRootNode是整个应用的根节点，rootFiber是<App/>所在组件树的根节点。
2. 然后进去render阶段，根据current Fiber和返回的jsx对象进行diff，创建一份workInProgress Fiber树。
3. 再把构建完的workInProgress Fiber树交给commit阶段进行渲染，同时将fiberRootNode的current指针指向workInProgress Fiber树使其变为current Fiber 树。

# React 流程

React整体可以分为3部分

调度器(Scheduler) - 调度任务的优先级，优先级高的任务先进入Reconciler协调器
协调器(Reconciler) - 负责找出变化的组件（diff），对应render阶段
渲染器(Renderer) - 将变化的组件渲染到页面上（react-dom），对应commit阶段


# render阶段

render阶段主要分为两部分“递”和“归”；beginWork和completeWork，它会从根节点开始深度优先遍历每一个节点调用beginWork，这个beginWork的功能主要就是进行虚拟dom的diff，如果没有子节点了，就会去进行completeWork，这个completeWork的主要功能就是收集存在节点变化的effectList，执行完completeWork会检查是否有兄弟节点，如果有就进行兄弟节点的“递”阶段（beginWork），如果没有兄弟节点，就继续其父节点的 completeWork。一直到rootFiber节点结束。

# commit阶段

commit阶段主要分为before mutation阶段（执行dom操作前）、mutation阶段（执行dom操作）、layout阶段（执行dom操作后）。

before mutation阶段主要是遍历effectList，同时处理DOM节点渲染/删除后的 autoFocus、blur 逻辑、调用 getSnapshotBeforeUpdate 生命周期钩子、调度useEffect

mutation阶段主要是遍历effectList, 同时根据effectTag进行真实的dom操作；还会执行useLayoutEffect hook的销毁函数

layout阶段会遍历effectList，依次执行commitLayoutEffects。该方法的主要工作为“根据effectTag调用不同的处理函数处理Fiber并更新ref。对于ClassComponent，他会通过current === null?区分是mount还是update，调用componentDidMount或componentDidUpdate。对于FunctionComponent，他会调用useLayoutEffect hook的回调函数，调度useEffect的销毁与回调函数.



















从Reactv16开始，componentWillXXX钩子前增加了UNSAFE_前缀。废弃的原因，是在React16的Fiber架构中，调和过程会多次执行will周期，不再是一次执行，失去了原有的意义。此外，多次执行，在周期中如果有setState或dom操作，会触发多次重绘，影响性能，也会导致数据错乱。

究其原因，是因为Stack Reconciler重构为Fiber Reconciler后，render阶段的任务可能中断/重新开始，对应的组件在render阶段的生命周期钩子（即componentWillXXX）可能触发多次。这种行为和Reactv15不一致，所以标记为UNSAFE_。
为此，React提供了替代的生命周期钩子getSnapshotBeforeUpdate。getSnapshotBeforeUpdate是在commit阶段内的before mutation阶段调用的，由于commit阶段是同步的，所以不会遇到多次调用的问题。

