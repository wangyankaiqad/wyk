# typescript

# 复习

#### 1、js中的数据类型

基本数据类型: Number,String,Object,Null,Undefind,Symbol,BigInt
  复杂数据类型: Object[function,array,date...]

# 一、什么是ts

 * ts可以理解为JavaScript的超集，它是由微软公司开发的一种编程语言，可以运行在任何浏览器还有操作系统

# 二、TypeScript的发展优缺点

* 优点：
  * 增加了代码的可读性和可维护性
  * 非常包容（可以定义所有类型）
  * 拥有活跃的社区
  * 兼容性强
  * 有最新的ECMAScript标准，与时俱进
  * TypeScript 的编译步骤可以输出运行之前的错误.
* 缺点：
  * 不利于前端工程师上手，需要理解接口，枚举等类型的概念，需要多写一些类型的定义，工作量大，和一些库不能完美结合

### 三、类型系统的介绍

##### 	1、分为静态语言和动态语言

   * 类型系统按照<span style="color:red">**类型检查的时机**</span>来分类
   * 动态类型就是在运行时才会报错，javascript是解释型的语言，没有编译阶段，所以属于动态类型
   * 静态类型是在编译阶段就能确定每个变量的类型，如果类型不对就会直接报错，ts的话在编译阶段就会检查每个类型属于静态类型

##### 2、如何理解强类型和弱类型的语言

强类型和弱类型语言的主要区别就是靠是否能隐式转换来分类的，ts和jacascript都属于弱类型

# 四、TS安装

全局安装

``` js
npm install -g typescript
```

检测是否安装成功命令：

``` js
tsc -v  // Version 版本号 证明安装成功
```

#### 构建第一个TypeScript文件

1、创建一个js文件

2、在文件内输入内容

3、编译代码

``` js
tsc 文件名.ts
```

#### 自动编译配置

``` js
tsc --init  // 在文件夹下自动生成一个 tsconfig.json 文件
```

# 五、ts的数据类型

### 1、数字类型

	语法： let num: number = 5      
	十进制： let decLiteral: number = 6
	十六进制： let hexLiteral: number = 0xf00d
	es6的二进制：  let binaryLiteral: number = 0b1010
	es6的八进制表示法： let octalLiteral: number = 0o744
	无穷大：  let infinityNumber: number = Infinity
	无穷小：  let infinityNumber: number = -Infinity
### 2.布尔类型

``` js
语法： let isDone: boolean = false(true)
```

### 3.字符串类型

``` js
语法：  let myName: string = '啦啦啦'
用法： let myAge: number = 20
let sentence = `My name is ${myName}, My age is ${myAge}`
在浏览器页面显示： docment.body.innerHTML = sentence
```

### 4.数组类型

``` js
*1.语法： let array: number[] = [1,2,3,4]    let arratString: string[]  = ['1','2','3']
*2.数组泛型的语法：  let arrayList: Array<number> = [1,2,3,4]  let listString: Array<list> = ['1','2','3']
```

### 5、未定义和空类型

``` js
*1.未定义语法： let a : undefined = undefined   
*2.空类型： let b: null = null
```

### 6、 对象类型

``` js
*语法： let obj: {name: string, age: number}
	   let obj2: {name: string, age: number}
       obj = {name: '易烊千玺', age: 20}
       let info = 'My name is ${obj.name}, age is ${obj.age}'
```

### 7、元组类型

``` js
 *1.语法： 
 	let tom: [string, number] = ['Tom', 25];
 *2.赋值或访问已知索引元素： 
 	let tom: [string, number];
    tom[0] = 'Tom';
    tom[1] = 25;		                             tom[0].slice(1); 
    tom[1].toFixed(2)
```

### 8、枚举

``` js
语法：enum Color {
       		Red = 1,
    		Blue = 3,
   		    Yellow = 4
	}
	let c: Color = Color.Red
	console.log(c);
```

### 9、any可以赋任何值

``` js
语法：let value: any;
	 value = 123;
	 value = "abc";
     value = false;
```

### 10、 void类型

``` js
*1.不用return返回： function noReturn(): void {
   			        console.log('My name is void');
			       }
*2.需要return返回：function haveReturn(): string {
    			  return '55'
			      }
```

### 11、never类型

``` js
*1. 返回never的函数： function error(message: string): never {
    			      throw new Error(message);
			        }
	*2.推断： function fail() {
   			   return error("Something failed");
		     }
```



