// // new 新的http请求
// let ajax = new XMLHttpRequest()
// // 请求方式和发送请求
// ajax.open('get', 'http://baidu.com')
// // 发送请求
// ajax.send()
// //接受返回值 判断是否返回成功
// ajax.onreadystatechange = function () {
//     if (ajax.status === 200 && ajax.readyState === 4) {
//         console.log('我是返回的成功的值');
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // 接收一个字符串的类型的数据 返回一个user类型（字符串类型）的数据
// function Input(str: user): user {
//     return str.slice(0, 2)
// }
// // 把返回结果赋值给userInput
// let userInput = Input('hello')
// // 重新给其赋值一个字符串类型的值 没有报错 说明用type声明的字符串类型生效
// userInput = 'new'
/**
 * 第一点：type声明值类型 做类型判断
 *    let names：string 赋值
 * 所以 不能在函数参数上面直接限制
 *
 * 第二点：interface 只能声明对象 不能声明基础类型 所以校验的函数参数只能是对象
 */
/**
 * interface继承   extends
 */
// 扩展接口
// 定义一个属性  为name 
// interface Animate {
//     name: string
// }
// // 让Bear继承Animate的属性
// interface Bear extends Animate {
//     color: boolean
// }
// const bear: Bear = {
//     name: 'ha',
//     color: false
// }
// console.log(bear.color);
// console.log(bear.name);
/**
 * type不能使用extends来进行继承
 */
// type Animate = {
//     name: number
// }
// type Bear = {
//     color: boolean
// }
// // 声明一个类型为Bear类型的对象  要求机油那么 也要有honey 说明extends扩展接口成功
// const bear: Bear = {
//     color: false
// }
/**
 * interface 可以继承type类型
 * type吧不可以继承interface
 */
// interface Animate {
//     name: string
// }
// type Bera = {
//     honey: boolean
// }
// interface Animate extends Bera {
//     color: string
// }
// const Bera: Animate = {
//     name: 'wine',
//     color: 'red',
//     honey: true
// }
/**
 * interface可以重复定义
 * type 不能重复定义  第一个会覆盖下面定义的
 */
// interface Animate {
//     color: string
// }
// interface Animate {
//     name: number
// }
// const bera: Animate = {
//     color: '6',
//     name: 4
// }
// /**
//  * 完成的定义一个函数类型
//  */
// let add: (x: number, y: number) => number;
// /**
//  * 正确的  上面定义了是number类型  所以必须都是number类型
//  */
// add = (arg1: number, arg2: number): number => arg1 + arg2
// /**
//  * 错误示范   不能将类型“(arg1: string, arg2: string) => string”分配给类型“(x: number, y: number) => number”。
//   参数“arg1”和“x” 的类型不兼容。
//     不能将类型“number”分配给类型“string”
//  */
// // add = (arg1: string, arg2: string): string => arg1 + arg2
// /**使用接口定义函数类型 */
// interface Add{
//     (x:number,y:number):number
// }
// /**
//  * 
//  * @param arg1 不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
//   参数“arg1”和“x” 的类型不兼容。
//     不能将类型“number”分配给类型“string”
//  * @param arg2 
//  * @returns 
//  */
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2
/**
 * 类型别名
 */
// type Add = (x: number, y: number) => number
//  /**
// //  * 
// //  * @param arg1 不能将类型“(arg1: string, arg2: string) => string”分配给类型“Add”。
// //   参数“arg1”和“x” 的类型不兼容。
// //     不能将类型“number”分配给类型“string”
// //  * @param arg2 
// //  * @returns 
// //  */
// let add:Add=(arg1:string,arg2:string):string=>arg1+arg2
/**
 * 可选参数？是在对象中使用 接口声明和类型别名----重点！！！
 */
//  type Add = (x: number, y: number) => number;
//  let add: Add = (arg1: string, arg2: string): string => arg1 + arg2;
//  add(1, 2); // right
//  add(1, 2, 3); // error 应有 2 个参数，但获得 3 个
//  add(1); // error 应有 2 个参数，但获得 1 个
/**
 * type Add = (x?: number, y: number) => number; // error 必选参数不能位于可选参数后。
 * interface Add {
        * x?: number,
        * y: number
 * }
 */
/**
 * JS里面的东西
 */
//  const count = 0;
//  const countUp = (step = 1) => {
//    count += step;
//  };
var array = [1, 2, 3, 4, 5];
var a = __spreadArray([], array, true);
console.log(a);
var add = function (arr1, arr2) { return arr1 + arr2; };
console.log(add(1, 10));
