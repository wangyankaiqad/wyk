
/**
*  new Array(),创建数组的长度
* .fill,填充数组的方法,将数据填充到其中,分别以不同的数据类型进行填充
**/
// const getArray = (value: any, tiems: number): any[] => {
//     return new Array(tiems).fill(value)
// }

// console.log(getArray([1],5).length);

// 这个函数接受两个参数 第一个参数为任意类型的值  第二个是数值类型的值
// 默认为5  可以自动填充5个一数组

// getArray([1], 2).forEach(item => {
//     console.log(item.length);

// })
// getArray(1, 2).forEach(item => {
//     console.log(item.length);//undefined  报错  number属性里面没有length属性



// })

// 泛型  是指在定义函数 接口或者类的时候 不预先设定具体的类型
// 而在使用的时候在指定类型的一种特性 使用表示符号<T>  尖括号的内容可以是
// 任何字母 不一定是T  不过一般会写成T

// const getArray = <T>(value: T, times: number) => {
//     return new Array(times).fill(value)
// }
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
//     this.name = name
//     this.ha = function () {
//         console.log('汪汪');
//     }
// }
// Aamitn.prototype.age = '12'
// Aamitn.prototype.Task = function () {
//     console.log('哈哈');
// }
// let cat = new Aamitn('Cat')
// console.log(cat.name);
// console.log(cat.ha);
// console.log(cat.age);
// console.log(cat.Task);


// clas类   
// class Penpor {
//     name: string
//     age: number
//     constructor(name, age) {
//         this.name = name
//         this.age = age
//     }
//     sayHi(): string {
//         return this.name
//     }
// }
// let p1 = new Penpor('小明', 12)
// console.log(p1);



// 继承
// class People {
//     name: string
//     age: number
//     constructor(name, age) {
//         this.name = name
//         this, age = age
//     }
//     sayHi(): string {
//         return this.name
//     }
// }
// class Cat extends People {
//     constructor(name, age) {
//         super(name, age)
//     }
// }
// var e = new Cat('哈哈', 12)
// console.log(e.name);
// console.log(e.age);
// console.log(e.sayHi());



// interface IAniaml {
//     name: string
//     eat(): string
// }

// class Aniaml implements IAniaml{
//     name: string
//     age:string
//     constructor(name,age){
//         this.name=name
//         this.age=age
//     }
//     eat(): string {
//        return ''
//     }
// }
// let pd=new Aniaml('哈',12)

// protected  保护类型  类里面 子类可以访问 类外面不可以访问
// class Animal {
//     protected name: string
//     constructor(name) {
//         this.name = name
//     }
//     Age(): string {
//         return ''
//     }
// }

// class Dog1 extends Animal {
//     constructor(props) {
//         super(props)
//     }
// }
// let p=new Dog1('小明')
// 属性“name”受保护，只能在类“Animal”及其子类中访问
// console.log(p.name);


/**
 * 当我们吧泛型变量设置为某种类型的话  返回的值要考虑这个类型的值有没有这个属性  
 * 比如  number属性的话  没有length属性  这个时候 就会报错
 */
// const getArray = <T>(value: T, times: number = 5): T[] => {
//     return new Array(times).fill(value);
//   };

// getArray<number[]>([1, 2], 3).forEach(item => {
//     console.log(item.length);
//   });
//   getArray<number>(2, 3).forEach(item => {
//     console.log(item.length); // 类型“number”上不存在属性“length”
//   });


// private私有属性  只能类里面可以访问

// public   默认属性  公用的 类里面 子类 类外面都可以访问
// class Aniaml {
//     private name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     age(): string {
//         return this.name
//     }
// }
// class Dog2 extends Aniaml {
//     constructor(props: string) {
//         super(props)
//     }
// }
// let p = new Dog2('黑')
// 属性“name”为私有属性，只能在类“Aniaml”中访问
// console.log(p.name);


/**
 * 静态属性  static修饰符  就是继承的话 找不到 不存在这个属性
 */

// class Aniaml {
//     name: string
//     static prop: string = '1'
//     constructor(name: string) {
//         this.name = name
//     }
//     getName(): string {
//         return this.name
//     }
// }
// console.log(Aniaml.prop);
// let a = new Aniaml('小狗')
/**
 * 属性“prop”在类型“Aniaml”上不存在。你的意思是改为访问静态成员“Aniaml.prop”吗?
*/
// 静态属性不能在实例上实现
// console.log(a.prop);

// 静态方法  static

// class Aamitn {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     static sayHi(): string {
//         return 'hello'
//     }
// }
// console.log(Aamitn.name);
// console.log(Aamitn.sayHi());
// let a=new Aamitn('小狗')
// 属性“sayHi”在类型“Aamitn”上不存在
// console.log(a.sayHi());
// 静态方法不能在实例上获取

/**
 * 多态  父类定义一个方法不去实现  让继承他的子类去实现 每一个子类有不同的表现
 */

// class Animal {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     // 定义一个方法 不去实现
//     eat() { }
// }
// // 声明一个类继承父类 并且实现eat方法
// class Dog1 extends Animal {
//     constructor(prop: string) {
//         super(prop)
//     }
//     eat(): void {
//         console.log(`${this.name}吃骨头`);

//     }
// }
// let b = new Dog1('狗')

// class Cat extends Animal {
//     constructor(prop: string) {
//         super(prop)
//     }
//     eat(): void {
//         console.log(`${this.name}吃鱼`);

//     }
// }
// let a = new Cat('猫')



/**
 *抽象类   abstravt  就是能被继承 不能直接被实例化   

 */

// abstract class Aniaml {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     /**方法“getName”不能具有实现，因为它标记为抽象 */
//   abstract  getName(): string {
//         return this.name
//     }
// }
/**
 * 抽象类 abstravt 就是能被继承 不能直接被实例化
无法创建抽象类的实例
抽象的方法只能在抽象类中  平常定义的类中不能直接写抽象方法
抽象方法也不能直接被实例化  只能继承使用
 */
// let a = new Aniaml('小明')

// class a extends Aniaml{
//     constructor(prop){
//         super(prop)
//     }
//      eat():string{
//         return ''
//     }
// }
// console.log(a.name);


// class Aniaml{
//    name:string
//    constructor(name){
//     this.name=name
//    }
//    /**错误的方法   抽象方法只能出现在抽象类中 */
//    abstract eat():string
// }



// abstract class Aniaml {
//     name: string
//     constructor(name: string) {
//         this.name = name
//     }
//     abstract eat(): string
// }


// class Dog2 extends Aniaml {
//     constructor(name) {
//         super(name)
//     }
//     eat(): string {
//         return '肉'
//     }
// }

// let dog = new Dog2('小狗')
// console.log(dog.eat());


/**
 * 接口约束类  和抽象类很相似 是用来约束类的 也就是类中必须有哪些属性和方法
 *  
 * 
 */
// interface IAniaml{
//     name:string

//     eat():string
// }
// class Add implements IAniaml{
//     name: string
//     age:number
//     constructor(name:string){
//         this.name=name
//     }
//     eat(): string {
//         return ''
//     }
// }
// 使用了接口约束类的话  必须有约束了类的属性和方法   但是 类中也可以定义
// 约束中没有的属性  也不会报错


// // 接口继承的实现  接口也可以实现继承
// interface IAniaml {
//     name: string
// }
// interface Ipeople extends IAniaml {
//     work(): void
// }
// // 定义的属性必须有上面的两个  要不就会报错
// class Code implements Ipeople {
//     name: string
//     constructor(name) {
//         this.name = name
//     }
//     work(): void {

//     }
// }