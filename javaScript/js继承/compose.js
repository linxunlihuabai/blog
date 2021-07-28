// 组合式继承
// 优点：
// 1. 融合了原型链继承和构造函数继承的优点
// 缺点：
// 1. 调用了两次父类构造函数，因此在实例和子类的prototype上会有重复的属性
function Person(name) {
    this.name = name;
    this.skill = ['sing','game'];
}

Person.prototype.getName = function(){
    return this.name
}

function Child() {
    Person.apply(this,arguments);
}

Child.prototype = new Person();
Child.prototype.constructor = Child;

var child1 = new Child('child');
var child2 = new Child('child2');

console.log(child1.name,child1.skill,child1.getName());
child1.name = 'child1';
child1.skill.push('read');
console.log(child1.name,child1.skill,child1.getName());
console.log(child2.name,child2.skill,child2.getName());
console.log(child1 instanceof Child,child1 instanceof Person);
// 因为父类构造函数被调用了两次，导致实例和子类的prototype上都有一样的属性
console.log(child2, Child.prototype) // Child { name: 'child2', skill: [ 'sing', 'game' ] } Person {name: undefined,skill: [ 'sing', 'game' ],constructor: [Function: Child]}
