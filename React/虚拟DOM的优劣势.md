# 虚拟DOM的优劣势

优势

1. 保证性能下限。虚拟dom可以通过diff找到最小差异，然后批量patch。这种操作虽然比不上手动优化，但是比粗暴的修改dom的性能要好很多。所以保证了性能下限。
2. 无需手动操作dom：虚拟dom的diff和patch都是在一次更新后自动完成的，无需手动操作，提高开发效率。
3. 跨平台：虚拟dom的本质是一个js对象，因此可以更方便的跨平台。

劣势

1. 无法进行极致的优化，无法对虚拟dom进行针对性的极致优化。

# 虚拟dom的实现原理

1. 虚拟dom本质上就是一个js对象
2. 当状态变更时，记录新树和旧树的差异
3. 最后把差异更新到真实dom上