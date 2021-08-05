1. 介绍一下标准的CSS的盒子模型？与低版本IE的盒子模型有什么不同的？

标准盒模型 = 内容(content)+ padding + border + margin;
IE盒模型 = 内容(content+ padding + border) + margin;

2. box-sizing属性？
box-sizing有content-box和border-box两个属性；
content-box是标准盒模型，width和height只包括了content，
border-box是IE盒模型，width和height包括了content + padding + border。

3. CSS选择器有哪些？哪些属性可以继承？

CSS选择器： 
- 标签选择器（p）
- class选择器(.mian)
- id选择器 (#main)
- 属性选择器(a[id^="main"])
- 相邻选择器(p + a)
- 同级选择器(p ~ a)
- 子代选择器(p > a)
- 后代选择器(p a)
- 通配符选择器(*)

可继承属性： font-size,color,font-family
不可继承属性： padding, margin, border

4. CSS优先级算法如何计算？

tag: 1
class: 10
id: 100
行内样式: 1000
!important 最高优先级
再多的tag优先级相加也不会超过class
同等优先级，越靠后的优先级越高

5. CSS3新增伪类有那些?

- :first-of-type 匹配到第一个类型为的x的元素
- :last-of-type 匹配到最后一个类型为的x的元素
- :only-of-type 匹配到类型为的x且没有同类型兄弟元素的元素
- :first-child 匹配到第一个且类型为的x的子元素
- :last-child 匹配到最后一个且类型为的x的子元素
- :nth-child(n) 匹配到第n个且类型为的x的子元素

6. 伪类和伪元素的区别？

    1. 伪类是单冒号，伪元素是双冒号
    2. 伪类是用来获取一些不存在于dom结构上(或者不能被常规css选择器)的信息，比如 :hover,伪元素是用来创建一些不存在于dom上的抽象元素，比如 ::before ::after

7. 如何水平垂直居中一个div？
    1. 使用absolute绝对定位 加反向偏移（margin or transform: translate）
    宽高已知
    ```
    div {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }
    // 或者
    div {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 -100px;
    }
    ```
    宽高未知
    ```
    div {
        position: absolute;
        width: 200px;
        height: 200px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    ```

    2. 使用flex布局
    ```
    .container {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    ```

    3. 使用Grid布局
    ```
    .container {
        display: grid;
    }

    div {
        justify-self: center;
        align-self: center;
    }
    ```

8. display有哪些值？说明他们的作用?

inline（内联显示）、block（块级显示）、inline-block（行内块元素）、none（隐藏）、flex（弹性布局）、grid（网格布局）

9. position有哪些值？说明他们的作用?

static(默认，按照默认的文档流排列)、
relative（相对定位、相对自己的原本位置进行偏移，原本位置会留下空白）
absolute（绝对定位、脱离文档流，相对最近一个非static的祖先元素进行偏移）
fixed（固定定位、脱离文档流，相对于可视窗口进行偏移）
sticky（粘性定位、类似于相对定位和固定定位的结合，在跨越特定阈值之前表现为相对定位，跨越特点阈值后表现为fixed固定定位）

10. CSS3有哪些新特性？

box-shadow 盒阴影
text-shadow 文字阴影
border-radius 圆角边框
opacity 透明度
transform 变换效果
animation 动画效果
transition 过渡效果
RGBA 带透明度的颜色

11. 用css画一个三角形

宽高都设为0，利用border实现
```
div {
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-right: 20px solid transparent;
    border-left: 20px solid transparent;
    border-bottom: 20px solid #000;
}
```

12. 为什么要初始化CSS样式

    因为不同浏览器的某些标签的默认展示是不一样的，为了能在所有浏览器上正确展示，最好初始化css样式。

13. display:none、visibility：hidden、opacity: 0的区别？

    opacity:0 是将元素的透明度置为0，但元素依然占据文档流，事件绑定依然可以触发, 会触发重绘。如果利用transition或transform: translateZ(0)将它提升到合成层，这样就不会重绘了。
    visibility:hidden 元素依然占据文档流，事件绑定不可以触发，子元素可以通过设置visibility：visible显示出来。会触发重绘
    display:none 元素不占据文档流了，事件绑定不可以触发,会触发回流和重绘

14. 回流和重绘

    回流：当渲染树的节点尺寸、位置、布局等发生变化时，会触发回流
    重绘：当渲染树的节点颜色等外观信息发生变化时，会触发重绘
    回流一定会触发重绘，重绘不一定触发回流

    如何减少回流和重绘

    1. 浏览器自身的优化，浏览器自身会维护一个队列，把所有的回流和重绘的操作都放入这个队列，然后等到一定数量或者时间，进行一次批处理，将多次回流和重绘的操作变成一次
    2. 不要经常访问元素的布局属性，因为每次访问都会触发重排，最好缓存起来。
    3. 不要一条一条的修改dom的样式，可以使用class一次性修改。
    4. 频繁触发回流和重绘的元素，最好用绝对定位或者固定定位，让他们脱离文档流，减少对其他元素的影响。
    5. 使用文档片段操作dom，最后一次性推入文档。
    6. 开启GPU加速，形成合成层，这样重绘的时候就不会影响到其他层,同时GPU的处理速度比cpu快（比如：利用transform 代替 top/margin等位移属性（因为会开启GPU加速，形成合成层））

15. 浮动

    浮动的优缺点？

    优点：

    1. 可以实现文字环绕元素的效果
    2. 可以解决行框排列时的空隙问题
    3. 横向排列时可以灵活控制方向

    缺点：

    1. 浮动元素会脱离文档流，导致父元素高度塌陷

    清除浮动的方式：

    1. 将父元素创建为BFC（比如给父元素设置 overflow: hidden;）
    2. 增加一个额外的设置了clear 属性的块级标签
    3. 通过创建伪元素，清除浮动（原理和第二点一样，推荐使用）
    ```
    ::after {
        display: block;
        content: "";
        height: 0;
        visibility: hidden;
        clear: both;
    }
    ```

16. BFC

    什么是BFC？
    BFC是块格式化上下文，它决定了其子元素的布局规则，以及和其他元素的关系。

    BFC的特点：

     1. 属于同一个BFC的两个相邻的box的margin会发生重叠
     2. BFC区域不会和浮动元素box发生重叠
     3. BFC是一个独立的容器，内部的元素不会影响容器外部的元素，反之同样
     4. 计算高度时，会把浮动元素也计算在内
    
    当一个元素满足以下条件时就会形成BFC

     1. 根元素
     2. float的值不为none
     3. 绝对定位和固定定位
     4. 非块级盒子的块级容器：比如行内块元素（inline-block）、表格元素（table）、flex布局（flex）、grid布局（grid）
     5. overflow不为visible的元素
     

     BFC的应用场景

     1. 解决浮动元素导致的父元素高度塌陷的问题
     2. 解决外边距重叠的问题

17. 外边距重叠

    只有同一个BFC中会发生外边距重叠，有以下三种情况：

    1. 相邻的兄弟元素
    2. 没有内容（padding、border或者元素）将父元素和后代元素隔开，就会发生margin重叠，重叠部分会溢出到父元素上。
    3. 空的块级标签：当一个块元素上边界margin-top 直接贴到元素下边界margin-bottom时也会发生边界折叠

    解决办法：在重叠元素外层包裹一层BFC容器。

18. 浏览器是怎样解析CSS选择器的？

    CSS解析是从右往左解析，因为从左往右解析的话，如果发现匹配失败了，需要进行回溯，会消耗大量的性能。如果从右往左解析，就能在最开始就排除掉很多不匹配的节点，性能比从左往右好。

19. 内联元素之间有空隙？

    原因：行内元素标签之间有空格和换行符导致的

    解决办法：

    1. 删除标签之间的空格和换行符，让他们首尾相连
    2. 设置父元素的font-size: 0;
    3. 使用别的方式布局：比如float;

20. 内联元素的padding和margin能设置上吗？

    只能设置水平上的padding和margin。

21. 图片下面有一条空白的缝隙？

    因为img的vertical-align的默认值是baseline，所以img的底部默认与baseline对齐了。

    解决办法：

    1. 更改img的vertical-align的值
    2. 父元素的font-size设为0
    3. 父元素的line-height设为0

21. 能不能讲一讲Flex布局，以及常用的属性？

    flex布局是弹性布局，通过设置display: flex;可以将元素变成弹性盒子。它的属性可以分为容器和项目属性。

    容器属性：

    1. flex-direction: 定义了主轴的方向（也就是项目的排列方向）。row(默认值，起点在左端) | row-reverse（起点在右端） | column（起点在上端） | column-reverse（起点在下端）。
    2. flex-wrap: 定义了如何换行。nowrap(默认值，不换行) | wrap（换行） | wrap-reverse（换行，但是第一行在最下端）。
    3. flex-flow: flex-direction和flex-wrap的简写，默认值为 row nowrap。
    4. justify-content: 定义了项目在主轴上的对齐方式。flex-start(默认值，左对齐) | flex-end（右对齐） | center（居中） | space-between（两端对齐，项目之间的间隔相等） | space-around （项目之间的间隔是相等的，首尾项目和边框间隔是项目之间间隔的一半） | space-evenly（每个项目两侧的间隔相等）
    5. align-items: 定义了项目在交叉轴上的对齐方式。flex-start(顶部对齐) | flex-end（底部对齐） | center（居中） | base-line（项目第一行文字的基线对齐） | stretch （默认值，如果项目未设置高度或为auto，则占满整个容器的高度）
    6. align-content: 定义了多根轴线的对齐方式,如果只有一根轴线则该属性无效。flex-start(与交叉轴起点对齐) | flex-end（与交叉轴终点对齐） | center（与交叉轴中点） | space-between（与交叉轴两端对齐）| space-around （交叉轴方向，项目之间的间隔是相等的，首尾项目和边框间隔是项目之间间隔的一半） | space-evenly（交叉轴方向每个项目两侧的间隔相等） | stretch （默认值，会拉伸每个项目的空间，填充方式是给每个项目下面增加空白）

    项目属性：

    1. order：项目的排列顺序，数值越小越靠前
    2. flex-grow: 项目的放大比例，默认为0（有剩余空间也不会放大）
    3. flex-shrink: 项目的缩小比例，默认为1（如果空间不足，该项目会缩小）。如果为0，即使空间不够也不会缩小
    4. flex-basis: 定义了分配多余空间前项目的基础空间（最后该项目的空间是基础空间加分配的剩余空间）
    5. flex: flex-grow、flex-shrink、flex-basis的缩写。默认值为 0 1 auto。该属性有两个快捷值 auto（1 1 auto）和none（0 0 auto）
    6. align-self: 该属性允许单个项目有不同的交叉轴对齐方式，会覆盖 align-items属性




