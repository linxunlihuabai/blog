// 寄生组合式继承
// 通过Object.create,让子类的原型间接的访问到父类的原型。
// 优点：
// 1. 解决了组合式继承，调用两次父类构造函数的问题，避免在Child.prototype上创建不必要的属性
function Parent(name){
    this.name = name;
    this.skill = ['read'];
}

Parent.prototype.getName =function(){
    return this.name;
}

function Child(){
    Parent.apply(this,arguments);
}

function objectCreate(o){
    function F(){};
    F.prototype = o;
    return new F();
}

function prototype(parent,child) {
    var proto = objectCreate(parent.prototype);
    proto.constructor = child;
    child.prototype = proto;
}

prototype(Parent, Child);

var child1 = new Child('child');
var child2 = new Child('child2');

console.log(child1.name,child1.skill,child1.getName()); //child [ 'read' ] child
child1.name = 'child1';
child1.skill.push('read');
console.log(child1.name,child1.skill,child1.getName()); // child1 [ 'read', 'read' ] child1
console.log(child2.name,child2.skill,child2.getName()); // child2 [ 'read' ] child2
console.log(child1 instanceof Child,child1 instanceof Parent); // true true
console.log(child2, Child.prototype) // Child { name: 'child2', skill: [ 'read' ] } Parent { constructor: [Function: Child] }


