// /* 
// enum的详情
// 1，总结  每次手动添加索引的时候 下面的数据如果不是手动添加的索引 将会以递增的方式 吧索引展示出来
// 2，数字类型 我们可以像访问对象一样使用‘，’和'[]'两种方式访问里面的值
// 3，字符串枚举的特点  含字符串值成员的枚举不允许使用计算值  枚举成员必须具有初始化表达式
// */


// /* 
// 数字类型的定义
// 1,语法使用的是es6的语法  Uploading:Uploading
// 2,自动添加指定索引符号
// 3，使用‘，’和'[]'两种方式访问里面的值
// */

// // enum Status{
// //     Uploading,
// //     Success,
// //     Falied
// // }
// // 默认的索引值 就是下标
// // console.log(Status.Uploading);//0
// // console.log(Status['Falied']);//1
// // console.log(Status.Success);//2

// // 指定索引值 
// // 总结  每次手动添加索引值的时候  下面的数据如果不是手动添加的索引  将会以递增的方式 吧索引展示出来

// // enum Anmimal {
// //     Pig = 200,
// //     Dog,
// //     Cat = 300,
// //     Snake
// // }

// // console.log(Anmimal.Cat);
// // console.log(Anmimal['Dog']);
// // console.log(Anmimal.Snake);
// // console.log(Anmimal.Pig);



// // // 计算值-------------------------
// // // const getvalue = () => {
// // //     return 1
// // // }
// // // 计算值和常量
// // // enum Constant{
// // //     a=getvalue(),
// // //     //枚举的成员必须具有初始化表达式   如果不写就会报错
// // //     b,
// // //     c
// // // }


// // /* 反向映射 */
// // enum Statuss {
// //     Uploading = 200,
// //     NotFound = 404,
// //     Error = 500

// // }
// // console.log(Statuss.Error);
// // console.log(Statuss[404]);
// // console.log(Statuss.NotFound);



// // // 字符串枚举


// // const getvalue = () => {
// //     return 1
// // }
// // const names = '小明'
// // enum Message {
// //     Error = 'error message',

// //     SuccessError = 200,
// //     ClientError = names
// // }

// // console.log(Message.SuccessError, 'SuccessError');
// // console.log(Message, Error);
// // console.log(Message['ClientError']);


// // // 异构枚举
// // enum Result {
// //     Faild = 0,
// //     Success = "Success"
// // }

// // // 枚举成员类型
// // enum Animal {
// //     Dog = 1,
// //     Cat = 2,
// // }
// // // 狗
// // interface Dog {
// //     type: Animal.Dog
// // }
// // // 猫
// // interface Cat {
// //     type: Animal.Cat
// // }

// // // let catl: Cat = {
// // //     // type: Animal.Dog
// // //     // error[ts]不能讲类型‘Animal.Dog’分配给类型“Animal.Cat”
// // // }
// // let dog: Dog = {
// //     type: Animal.Dog
// // }

// // // 联合类型

// // enum Keys {
// //     Off,
// //     On
// // }
// // interface Light {
// //     status: Keys
// // }
// // let light: Light = {
// //     status: Keys.Off
// // }

// // // 运行时对象
// // enum E {
// //     A,
// //     B,
// //     C
// // }
// // const getIndex = (enumObj: { C: number }): number => {
// //     return enumObj.C
// // }
// // console.log(getIndex(E));
// // // 类型“typeof E”的参数不能赋给类型“{ C: number; }”的参数。
// // //   类型 "typeof E" 中缺少属性 "C"，但类型 "{ C: number; }" 中需要该属性
// // // const enum

// // enum Animal{
// //     Rabbit,
// //     Pig
// // }
// // const enum Light90{
// //     Off,
// //     On
// // }
// // const Status45=Animal.Pig
// // const Status57=Light90.Off
// // console.log(Status45,Status57);


// */








// /* 
// 总结一下
// 1，interface
// 2，可选属性 ？
// 3，[prop:string]:any
// 4,多余属性的检查
// */

// /* 
// interface
// 我们需要定义这样一个函数 参数是一个对象
// 里面包含两个字段 ：firstName 和lastName 也就是英文的名字和姓氏
// 然后返回一个拼接后的完整名字
// */

// interface Perdion {
//     firdtName: string,
//     lastName: string,
//     age: number,
//     sex: boolean
// }

// // function getFullName({ firdtName, lastName, age, sex }: Perdion): string {
// //     return `My name ${lastName} ${firdtName},My age is ${age},like smoke, ${sex}`
// // }

// /* 
// 第一种： 什么参数都不传-----应有1个参数  但获得0个
// 地二种 ：我们传递错误参数 ----对象文字可以只指定已知属性 并且“age”不在类型{ firdtName：string, lastName：string }中
// 第三种：{ firdtName：string, lastName：string }缺少类型"Persion" 中的一下属性

// */

// // let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false})
// //document.body.innerHTML = result
// //console.log(result);


// // interface Persion {
// //     firstName?: string, 
// //     lastName: string,
// //     age: number,
// //     sex: boolean,
// //     colors?: string,
// //     [prop: string]: any
// //  }

// //  let result = getFullName({firstName: '三', lastName: '张', age: 20, sex:false, height: 123})



//  /**
//   * 绕开多余属性的检查,类型断言  !!!!!
//   * 1. 类型断言 as <>
//   * 2. [props: string]: any
//   */

// // interface Vegetables{
// //    color?: string,
// //    type: string
// // }

// // const getVegetables = ({color, type}: Vegetables) : string => {
// //    return  `A ${color? color + "" : " "}${type}`
// // }

// // getVegetables({
// //    type: "tomato",
// //    size: 12,
// //    price: 1.2
// //  } as Vegetables);
// interface Vegetables{
//     color?: string,
//     type: string,
//     [props: string]: any
//  }



//  // const getVegetables = ({color, type}: Vegetables) : string => {
// //    return  `A ${color? color + "" : " "}${type}`
// // }

// // getVegetables({
// //    type: "tomato",
// //    size: 12,
// //    price: 1.2
// //  });




// interface Vegetables {
//     type: string;
//   }
//   const getVegetables = ({ type }: Vegetables) => {
//     return `A ${type}`;
//   };
  
//   const option = { type: "tomato", size: 12 };
//   getVegetables(option);



  
//  /**
//   * 只读属性
//   * readonly
//   */

//  interface Role {
//     readonly 0: string;
//     readonly 1: string;
//   }
 
//   const role: Role = {
//     0: 'super_admin',
//     1: 'admin'
//   }
 
//   role[1] = '我是快乐的';// 无法分配到 "1" ，因为它是只读属性
 
//   /**
//    * const 和 readonly  对比
//    */
 
//   const NAME: string = "帅字辈";
//  // NAME = "抬头" // 无法分配到 "NAME" ，因为它是常数。
 
 
//  const obj = {
//     name: '帅字辈'
//  }
//  obj.name = "包胜利"
 
//  interface Info {
//     readonly name: string
//  }
 
//  const info: Info = {
//     name: '帅字辈'
//  }
//  info['name'] = "包胜利" // 无法分配到 "name" ，因为它是只读属性
 
//  /**
//   * 类型别名
//   */
 
//  interface AddFunc {
//     (num1: number, num2: number) : number
//  }
//  const add: AddFunc = (n1, n2) => n1 + n2;
//  const join: AddFunc = (n1, n2) => `${n1} ${n2}`; // 不能将类型'string'分配给类型'number'
//  add("a", 2); // 类型'string'的参数不能赋给类型'number'的参数
 
 






