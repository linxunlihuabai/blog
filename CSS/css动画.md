# css动画

## transition 过渡效果

1. transition的属性分别是属性名(property)、动画时长(duration)、过渡方式（timing-function）、延迟（delay）


## animation 配合 @keyframes 

1. animation的属性分别是动画名(也就是@keyframes 后面的名称 name)、动画时长(during)、过渡方式(timing-function)、延迟(delay)、重复次数(iteration-count)、动画方向(direction)、填充模式(fill-mode)、是否暂停(play-state)
2. @keyframes 定义动画的关键帧，控制动画的中间步骤。语法如下：

用百分比表示关键帧的时间点，from 等价于0%，to 等价于100%

```js
@keyframes annimationName {
    from {/*css*/}
    50% {/*css*/}
    to {/*css*/}
}
```


## transition和animation的区别

1. transition是样式变化的过程，只有开始和结束；animation配合@keyframe关键帧可以设置很多个中间态
2. transition的动画启动需要被触发，比如hover或者js；animation可以自动执行，不需要触发