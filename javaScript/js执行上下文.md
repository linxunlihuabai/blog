# js执行上下文

js代码在执行之前需要进行一些准备工作，那就是创建对应的执行上下文。

执行上下文分为3类：全局执行上下文、函数执行上下文、eval执行上下文。

负责管理这些上下文的是执行栈（调用栈），他是一个先进后出的结构。Js代码首次执行之前，都会创建一个全局执行上下文压入栈中，之后如果遇到了函数调用，就会创建新的函数执行上下文压入栈中。当函数执行完毕后，就会把对应的函数执行上下文出栈。一旦所有js代码都执行完，就把全局执行上下文出栈。

# 执行上下文中发生了什么

执行上下文可以分为两个阶段：创建阶段和执行阶段

在创建阶段会创建两个状态组件：词法环境组件和变量环境组件，这两个组件的结构是一样的，都是环境记录，环境记录中保存了对应环境内部的标识符绑定和指向外部环境记录的指针outerEnv(如果是全局环境记录，那么就为null)。它们的区别就是词法环境组件中保存的是let/const或者函数声明的绑定，变量环境中保存的是var的绑定。子函数能访问外部变量的原因就是因为这个outerEnv指向了外部环境记录，当js碰到函数内部的变量时，它会首先在该函数的环境记录中找，如果没找到，就会去其外部环境记录中找，直到找到全局环境记录。这个查找过程也叫作用域链。这也是出现闭包现象的底层原理。（因为虽然外部函数被销毁了，但是返回的函数通过这个指针，依然保存着作用域链，所以依然可以访问到外部函数中的变量）

同时在创建阶段，let/const声明的变量会被定义为未初始化（uninitialized），var声明的变量会被赋值为undefined，声明式创建的函数会直接被赋值。这就是为什么let/const会有暂时性死区，var会被提升且赋值前的值时undefined，声明式函数会被提升且可以提前调用，这些现象的原因。

伪代码

```js
GlobalExecutionContext = {
    LexicalEnvironment : {
      EnvironmentRecord : {
        DeclarativeEnvironmentRecord : {
          input: <uninitialized>,
          broadcast: function broadcast(message) {
            return `${name} says ${message}`;
          },
        }, // Bindings of identifier to variables (`let` and `const`) and identifier to function objects
        OuterEnv : < null >, // ref. to parent env. record (null in here since global has no parent execution context)
      }, 
    },
    VariableEnvironment : {
      EnvironmentRecord : {
        DeclarativeEnvironmentRecord : {
          name: undefined,
        }, // Bindings of identifier to variables (`var`)
      },
    },
  }
```

执行阶段的话就没啥的，就是一些变量赋值、函数调用等操作了。

