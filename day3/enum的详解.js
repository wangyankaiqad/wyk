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
var Anmimal;
(function (Anmimal) {
    Anmimal[Anmimal["Pig"] = 200] = "Pig";
    Anmimal[Anmimal["Dog"] = 201] = "Dog";
    Anmimal[Anmimal["Cat"] = 300] = "Cat";
    Anmimal[Anmimal["Snake"] = 301] = "Snake";
})(Anmimal || (Anmimal = {}));
console.log(Anmimal.Cat);
console.log(Anmimal['Dog']);
console.log(Anmimal.Snake);
console.log(Anmimal.Pig);
// 计算值-------------------------
// const getvalue = () => {
//     return 1
// }
// 计算值和常量
// enum Constant{
//     a=getvalue(),
//     //枚举的成员必须具有初始化表达式   如果不写就会报错
//     b,
//     c
// }
/* 反向映射 */
var Statuss;
(function (Statuss) {
    Statuss[Statuss["Uploading"] = 200] = "Uploading";
    Statuss[Statuss["NotFound"] = 404] = "NotFound";
    Statuss[Statuss["Error"] = 500] = "Error";
})(Statuss || (Statuss = {}));
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);
// 字符串枚举
var getvalue = function () {
    return 1;
};
var names = '小明';
var Message;
(function (Message) {
    Message["Error"] = "error message";
    Message[Message["SuccessError"] = 200] = "SuccessError";
    Message[Message["ClientError"] = 0] = "ClientError";
})(Message || (Message = {}));
console.log(Message.SuccessError, 'SuccessError');
console.log(Message, Error);
console.log(Message['ClientError']);
// 异构枚举
var Result;
(function (Result) {
    Result[Result["Faild"] = 0] = "Faild";
    Result["Success"] = "Success";
})(Result || (Result = {}));
// 枚举成员类型
var Animal;
(function (Animal) {
    Animal[Animal["Dog"] = 1] = "Dog";
    Animal[Animal["Cat"] = 2] = "Cat";
})(Animal || (Animal = {}));
// let catl: Cat = {
//     // type: Animal.Dog
//     // error[ts]不能讲类型‘Animal.Dog’分配给类型“Animal.Cat”
// }
var dog = {
    type: Animal.Dog
};
// 联合类型
var Keys;
(function (Keys) {
    Keys[Keys["Off"] = 0] = "Off";
    Keys[Keys["On"] = 1] = "On";
})(Keys || (Keys = {}));
var light = {
    status: Keys.Off
};
// 运行时对象
var E;
(function (E) {
    E[E["A"] = 0] = "A";
    E[E["B"] = 1] = "B";
    E[E["C"] = 2] = "C";
})(E || (E = {}));
var getIndex = function (enumObj) {
    return enumObj.C;
};
console.log(getIndex(E));
// 类型“typeof E”的参数不能赋给类型“{ C: number; }”的参数。
//   类型 "typeof E" 中缺少属性 "C"，但类型 "{ C: number; }" 中需要该属性
// const enum
(function (Animal) {
    Animal[Animal["Rabbit"] = 0] = "Rabbit";
    Animal[Animal["Pig"] = 1] = "Pig";
})(Animal || (Animal = {}));
var Status45 = Animal.Pig;
var Status57 = 0 /* Light90.Off */;
console.log(Status45, Status57);
