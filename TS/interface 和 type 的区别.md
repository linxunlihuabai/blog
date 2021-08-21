# interface 和 type 的区别

（1）type可以声明 基本类型，联合类型，元组 的别名，interface不行

```js
type S = string
```

（2）type 语句中可以使用 typeof 获取类型实例

```js
let a: string = 'a';

type S = typeof a; // S = string
```

（3）type 支持类型映射，interface不支持

```js
type A = 'name' | 'age';
type S = {
    [key in A]: string
} 
// type S = {
//     name: string;
//     age: string;
// }
```

（4）interface可以重复声明且能够声明合并，type不能重复声明

```js
interface A {
    name: string;
};
interface A {
    age: number;
};

// interface A {
//     name: string;
//     age: number;
// };
```