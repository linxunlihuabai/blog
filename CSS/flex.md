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