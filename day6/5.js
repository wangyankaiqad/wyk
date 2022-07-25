// const getArray = (value: any, times: number = 5): any[] => {
//     return new Array(times).fill(value)
// }
// let result = getArray([1], 2)
// result.forEach(item => {
//     console.log(item.length);
// })
// let result1 = getArray(1, 2)
// result1.forEach(item => {
//     console.log(item.length);
// })
// 泛型的使用
// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value)
// }
// getArray<number[]>([1, 2], 3).forEach(item => {
//     console.log(item.length);
// })
// getArray<number>(1, 2).forEach(item => {
//     console.log(item.length);
//     // 类型“number”上不存在属性“length”。
// })
// const getArray = <T, U>(param1: T, param2: U, times: number): [T, U][] => {
//     return new Array(times).fill([param1, param2])
// }
// getArray(1, 'a', 3).forEach(item => {
//     console.log(item[0].length);
//     // 类型“number”上不存在属性“length”
//     console.log(item[1].toFixed(2));
//     // 属性“toFixed”在类型“string”上不存在
// })
// 简单定义
// const getArray: <T>(arg: T, times: number) => T[] = (arg, times) => {
//     return new Array(times).fill(arg)
// }
// // 使用类型别名
// type GetArray = <T>(arg: T, times: number) => T[]
// const getArray: GetArray = <T>(arg: T, times: number): T[] => {
//     return new Array(times).fill(arg)
// }
// function Aamitn(name) {
//     this.name = name;
//     this.ha = function () {
//         console.log('汪汪');
//     };
// }
// Aamitn.prototype.age = '12';
// Aamitn.prototype.Task = function () {
//     console.log('哈哈');
// };
// var cat = new Aamitn('Cat');
// console.log(cat.name);
// console.log(cat.ha);
// console.log(cat.age);
// console.log(cat.Task);


// es6
// class penpor {
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     SaiHi() {
//         return this.name
//     }
// }
// let p=new penpor('小明',12)
// console.log(p);
// console.log(p.name);
// console.log(p.age);


/**
 * es6的继承    用super来接受父类的全部
 */
class Anmial {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    run() {
        console.log('我在跑');
    }
}

class Dog extends Anmial {
    constructor(props) {
        super(props)
    }
}
let d = new Dog('哈士奇')
console.log(d.name);//哈士奇
d.run()// 我在跑