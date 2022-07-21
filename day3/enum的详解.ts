/* 
enum的详情
1，总结  每次手动添加索引的时候 下面的数据如果不是手动添加的索引 将会以递增的方式 吧索引展示出来
2，数字类型 我们可以像访问对象一样使用‘，’和'[]'两种方式访问里面的值
3，字符串枚举的特点  含字符串值成员的枚举不允许使用计算值  枚举成员必须具有初始化表达式
*/


/* 
数字类型的定义
1,语法使用的是es6的语法  Uploading:Uploading
2,自动添加指定索引符号
3，使用‘，’和'[]'两种方式访问里面的值
*/

// enum Status{
//     Uploading,
//     Success,
//     Falied
// }
// 默认的索引值 就是下标
// console.log(Status.Uploading);//0
// console.log(Status['Falied']);//1
// console.log(Status.Success);//2

// 指定索引值 
// 总结  每次手动添加索引值的时候  下面的数据如果不是手动添加的索引  将会以递增的方式 吧索引展示出来

// enum Anmimal {
//     Pig = 200,
//     Dog,
//     Cat = 300,
//     Snake
// }

// console.log(Anmimal.Cat);
// console.log(Anmimal['Dog']);
// console.log(Anmimal.Snake);
// console.log(Anmimal.Pig);



// // 计算值-------------------------
// // const getvalue = () => {
// //     return 1
// // }
// // 计算值和常量
// // enum Constant{
// //     a=getvalue(),
// //     //枚举的成员必须具有初始化表达式   如果不写就会报错
// //     b,
// //     c
// // }


// /* 反向映射 */
// enum Statuss {
//     Uploading = 200,
//     NotFound = 404,
//     Error = 500

// }
// console.log(Statuss.Error);
// console.log(Statuss[404]);
// console.log(Statuss.NotFound);



// // 字符串枚举


// const getvalue = () => {
//     return 1
// }
// const names = '小明'
// enum Message {
//     Error = 'error message',

//     SuccessError = 200,
//     ClientError = names
// }

// console.log(Message.SuccessError, 'SuccessError');
// console.log(Message, Error);
// console.log(Message['ClientError']);


// // 异构枚举
// enum Result {
//     Faild = 0,
//     Success = "Success"
// }

// // 枚举成员类型
// enum Animal {
//     Dog = 1,
//     Cat = 2,
// }
// // 狗
// interface Dog {
//     type: Animal.Dog
// }
// // 猫
// interface Cat {
//     type: Animal.Cat
// }

// // let catl: Cat = {
// //     // type: Animal.Dog
// //     // error[ts]不能讲类型‘Animal.Dog’分配给类型“Animal.Cat”
// // }
// let dog: Dog = {
//     type: Animal.Dog
// }

// // 联合类型

// enum Keys {
//     Off,
//     On
// }
// interface Light {
//     status: Keys
// }
// let light: Light = {
//     status: Keys.Off
// }

// // 运行时对象
// enum E {
//     A,
//     B,
//     C
// }
// const getIndex = (enumObj: { C: number }): number => {
//     return enumObj.C
// }
// console.log(getIndex(E));
// // 类型“typeof E”的参数不能赋给类型“{ C: number; }”的参数。
// //   类型 "typeof E" 中缺少属性 "C"，但类型 "{ C: number; }" 中需要该属性
// // const enum

// enum Animal{
//     Rabbit,
//     Pig
// }
// const enum Light90{
//     Off,
//     On
// }
// const Status45=Animal.Pig
// const Status57=Light90.Off
// console.log(Status45,Status57);
