// 构造函数继承
// 优点：
// 1. 创建子类实例时可以向父类构造函数传参
// 2. 避免了实例共享引用类型属性
// 缺点：
// 1.方法都在构造函数中定义，每次创建实例都会创建一遍方法
// 2. 实例只是子类的实例，不是父类的实例
function Person(name,skill) {
    this.name = name;
    this.skill = skill;
    this.getName = function(){
        return this.name
    }
}

function Child() {
    Person.apply(this,arguments);
}

var child1 = new Child('child',['sing','game']);
var child2 = new Child('child2',['game']);

console.log(child1.name,child1.skill,child1.getName());
child1.name = 'child1';
child1.skill.push('read');
console.log(child1.name,child1.skill,child1.getName());
console.log(child2.name,child2.skill,child2.getName());
console.log(child1 instanceof Child,child1 instanceof Person)
