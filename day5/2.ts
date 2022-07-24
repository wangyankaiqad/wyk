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

//     }
// }

// // 用ts来进行封装
// /**
//  * 思路：1，有三个参数  用interface
//  *       2.有两个枚举值，所以用enum
//  *       3.放在一个函数里面 进行接口和参数的校验
//  *         3.1 函数需要传参 且 参数是对象
//  */

// // 定义参数类型
// interface Iparams {
//     methods: string,
//     url: string,
//     data?: string
// }
// // 定义枚举值
// enum Status {
//     Success = 200,
//     readyState = 4,
// }

// function getAjax(params: Iparams) {
//     // 定义请求
//     let ajax = new XMLHttpRequest()
//     // 请求方式 和地址
//     ajax.open(params.methods, params.url)

//     ajax.send(params.data)

//     ajax.onreadystatechange = function () {
//         if (ajax.status == Status.Success && ajax.readyState == Status.readyState) {
//             console.log('我们可以用了');

//         }
//     }

// }

/**
 * interface 和type的区别
 *
 * 不同点 ：
 *   1.type是赋值，进行别名的修改
 *   2.interface 是声明的一个类型  只能声明对象
 *   3.type可以声明基础类型数据
 *   4.interface可以使用extends进行继承 但是type不可以 因为是类型别名  属于复制的一种
 *   5.interface 可以重复声明 自动合并在一起
 *   6.type不可以重复声明
 *
 * 相同点：
 *   type和interface都可以声明对象和类型
 *
 *
 */


/**用type定义的http请求数据 */
// 用type定义参数类型
// type Iparams = {
//     methods: string,
//     url: string,
//     data?: string
// }
// // 定义枚举值
// enum Status {
//     Success = 200,
//     readyState = 4,
// }

// function getAjax(params: Iparams) {
//     // 定义请求
//     let ajax = new XMLHttpRequest()
//     // 请求方式 和地址
//     ajax.open(params.methods, params.url)

//     ajax.send(params.data)

//     ajax.onreadystatechange = function () {
//         if (ajax.status == Status.Success && ajax.readyState == Status.readyState) {
//             console.log('我们可以用了');

//         }
//     }

// }

// -------错误的写法
// number”仅表示类型，但在此处却作为值使用
//错误    interface users:number


//  用type来声明基础类型
// type user = string;

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

// let array = [1, 2, 3, 4, 5]

// let a = [...array]

// console.log(a);

//  const add = (x: number, y: number = 2) => {
//     return x + y;
//   };

//   let result = add()










