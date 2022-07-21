// js的数据类型

// 在数组类型  Number  但是在ts中的数字类型 number   在js中第一个字母是大写 在  ts中第一个字母是小写


// 正常情况
let num1 = 1
let num2 = 2
let sum = num1 + num2
console.log(sum);


// 在js中的情况  num3的全局变量是可以使用的  但是在ts中是不能有同名的变量存在   js中 sun的值会是字符串相加
// let num3 = 3
// let num4 = 4
// num3="3"
// let sun = num3 + num4

// number定义数值类型
// 十进制 
let decLiteral: number = 6
// 十六进制
let hexLiteral: number = 0xf00d
// ES6中的二进制
let binaryLiteral: number = 0b1010
// ES6中的八进制表示法
let octalLiteral: number = 0o744;

let notANumber: number = NaN;
/**无穷大*/
let infinityNumber: number = Infinity;

// 当定义完为数字类型的数据的时候,在定义为str
// let num: number = 1,
//     num = "2222" // Error: 不能将"string"类型赋值给"number"

// 布尔值类型 boolean

// 布尔值是最基本的数据类型 在ts中 使用Boolean定义布尔值类型

let isDone: boolean = false
let isDone1: boolean = true

// 字符串类型   string

let myname: string = '小王'
let myAge: number = 12

// 造句
let sentence = `my name is ${myname},my age is ${myAge}`
// 可以在浏览器页面显示
document.body.innerHTML = sentence


// 数组Array
// js中定义的数组  []
// 第二种 new Array  
var array = new Array();
array.push(1, 2);
console.log(array);
// 但是在ts中 也是有两种方式可以定义数组
/* 
第一种 可以在元素类型后面接上[] 表示由此类型元素组成的一个数组
*/
// 这是定义一个数字类型的数组  如果里面不是数字类型的话 会直接报错  以此类推 在前面 
let list: number[] = [1, 2, 4]
// 这个是字符串的额数组  里面的东西只能是字符串
let liststring: string[] = ['1', '2']

// 第二种方式是使用数组泛型 Array<元素类型>
/* 
数组
数字类型
 number[]
 Array<number>
字符串类型
 string[]
  Array<string>
*/


// undefined 和 null 类型
/* 
null和undefined有一些共同的特点 他们共同的特点是 因为在js中  他们两个基本数据类型 在ts中 这两者都有各自的类型  也就是说 他们既是实际的值 也是类型

*/
let u: undefined = undefined
let n: null = null


/*
对象 object
定义对象的方法 
let obj={}

let obj=new obj()

字面量方法

let obj={name:'张'，age:20}

工厂模式创建对象

构造函数创建对象

object 表示非原始类型 也就是除了 数字 字符串 布尔 symbol null 或者undefined之外的类型
*/

/* 
数组 合并了相同类型的对象  长度不限制
元组 Tuple 合并了不同类型的长度 已知长度
*/
let tom1: [name: string, age: number, xieli: string, sex: boolean] = ['王彦凯', 18, '初中', true]
tom1.push(40)
console.log(tom1[0], tom1[1], tom1[2], tom1[3]);



/* 
enum  枚举
他是一个对js标准数据类型的一个补充 是用枚举类型可以为一组数组富裕友好的名字
当定义的变量越多 我们单独封装 我们单独封装 会约好维护以后的项目 方便项目的查看     定义的名字 和里面的属性名 第一个首字母要大写  不是硬性要求 只是程序员默认的写法
*/

enum Color {
  /**红色 */
  Red = 1,
  /**蓝色 */
  Blue = 2,
  /**绿色 */
  Green = 3
}
let c: Color = Color.Blue;
console.log(c) // 3

// Any  定义了这个玩意 就相当于是和js一样了 所以 我们不简易使用这个  因为使用这个的话 就是去了ts的意义了  如下面  给vlaue定义这个后  我们可以给他赋值  任何类型的值都可以

let value: any;
value = 123
value = '123',
  value = false

// void 类型
/* 
void 和any相反 any是表示任何任意类型 ervoid是表示没有任意类型 就是什么类型都不是 这在我们定义函数  函数没有返回值的时候使用

*/


/**
 * void类型
 */
function alertName(): void {
  console.log('My name ');
}
/**
* 如果有返回值,那么就要根据返回值进行定义,就不能定义成为void
*/
function alertNames(): string {
  console.log('My');
  return 'My Name is string'
}

// never 类型
/* 
这个类型表示的是永远不存在的值得类型 例如 这个类型是那些总是会抛出异常或者根本就不会有返回值的函数表达式或者箭头函数便是的返回值类型 变量也可能是never类型 当他们背用不为真的额类型保护所约束
   简单来说就是抛错的  
*/

// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}


/* 交叉类型 && */

interface use {
  name: string,
  age: number
}
interface per {
  sex: number
}
type allT = use & per

let persion: allT = { name: 'Wang', age: 1, sex: 1 }

/* 
就像上面的  两个对象并集  要写属性值的话 必须要满足两个对象的要求
*/

// 联合类型 
/* 
只是吧上面的&符号改为|  或的意思   就是两个数组 或这对象 只要满足其中的一个要求就行
*/

/**
    * 联合类型
    */
let allType: number | string
allType = 1;
allType = "eddd"
// 不能将类型“boolean”分配给类型“string | number”。
//  allType = false


//  3. 类型断言

//   有时候一个数据的值是多变的,并不是单一,这个时候我们就要告诉编译器,我知道我要什么,我自己检查了,不需要你检查.我自己定义他的类型   

/* 
类型断言有两种写法

其一是尖括号写法
*/
let someValue: any;
someValue = 123;
someValue = "dddd";
let someValueLength = (<string>someValue).length


// 2. as写法


/**
 * 第二种 作为as进行编写   我们一般使用这种方法
*/
let someName: any;
someName = 123
someName = '123'
let someNameValueLength = (someName as string).length




// 知识总结   
/* 
今天讲了一下 js数据类型和ts数据类型的区别  语法  还有几个js中没有的几个属性


了解了一下ts 
优点  增加了代码的可读性和可维护性  非常包容  拥有活跃的社区  兼容性很强在写代码的时候  会实时报错  


*/