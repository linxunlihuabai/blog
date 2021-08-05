# Set和Map数据结构

# Set

Set是es6中的一个新数据结构，类似于数组，只不过它的成员的值是唯一的，不会重复。
Set实例的属性：size（成员数量）
Set实例的操作方法：add(value)（添加成员,返回实例本身）、delete(value)（删除成员，返回布尔值，表示是否删除成功）、has(value)（判断是否有该成员）、clear()（清除所有成员）
set实例的遍历方法：keys()（返回一个键名迭代器）、values()（返回一个键值迭代器）、entries()（返回一个键值对迭代器）、forEach（遍历每个成员，类似与数组的forEach）

# WeakSet

WeakSet和Set类似，也是不可重复值的集合。不过WeakSet的成员只能是对象，不能是其他类型的值。同时WeakSet中的对象成员都是弱引用，垃圾回收机制不会考虑它们，因此只要某个对象在其他地方没有引用了，该对象占用的内存就会回收，WeakSet中保存的这个成员也会自动消失，所以WeakSet适合用来临时存放一些对象。WeakSet中有多少成员是取决于垃圾回收机制有没有运行，但垃圾回收机制何时运行是不可预测的，所以规定WeakSet是不能遍历的。

# Map

Map是一个类似于对象的结构，只不过它的key更加灵活。对象的key只能是String或者Symbol，Map的key可以是任何类型的值。
Map实例的属性：size（成员数量）
Map实例的操作方法：set(key, value)（添加成员,返回实例本身）、get(key)（获取key对应的值）、delete(key)（删除成员，返回布尔值，表示是否删除成功）、has(key)（判断是否有该成员）、clear()（清除所有成员）
set实例的遍历方法：keys()（返回一个键名迭代器）、values()（返回一个键值迭代器）、entries()（返回一个键值对迭代器）、forEach（遍历每个成员，类似与数组的forEach）

# WeakMap

WeakMap和Map的结构类似，只不过WeakMap的key必须是对象，同时key也是弱引用，和WeakSet一样。对垃圾回收机制友好,可以防止内存泄露。

可迭代对象可以通过扩展运算符（...）或者Array.form转成数组