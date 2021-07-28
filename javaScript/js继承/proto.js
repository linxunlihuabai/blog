// 原型式继承
// 就是 ES5 Object.create的模拟实现，将传入的对象作为实例的原型
// 缺点：
// 1. 和原型继承一样的缺点，实例会共享引用类型属性
function createObj(o) {
    function F(){};
    F.prototype = o;
    return new F();
}

var person = {
    name: 'kevin',
    friends: ['daisy', 'kelly']
}

var person1 = createObj(person);
var person2 = createObj(person);

person1.name = 'person1';
console.log(person2.name,person2.friends); // kevin ["daisy", "kelly"]

person1.friends.push('taylor');
console.log(person2.name,person2.friends); // kevin ["daisy", "kelly", "taylor"]
