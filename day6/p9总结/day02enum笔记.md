# day02 enum

### 一、vue3是为了适应ts产生的

### 二、所有枚举

###### 1、基本枚举

数字枚举和字符串枚举：

###### 1.1、主要区别

 *枚举成员值得的类型

*数字枚举成员的值必须是数值类型

 *字符串枚举成员的值必须是字符串

###### 2、基本枚举

不可以将枚举看成对象，因为他是块级。运行时的枚举是一个对象  字符串枚举 数字枚举  嵌入式枚举  联合式枚举   成员枚举   反向映射  异构枚举  运行时枚举  指定索引值  const enum

（注：const枚举  一般不会用）

### 三、枚举类型

##### 1、数字枚举

 (1)、在定义值得时候可以用计算机值和常量

(2)、注意：如果一个值使用了计算值和常量，那么就要给每一个进行赋值

特点：递增

​	#定义：

​      *语法使用的es6的语法，Uploading: Uploading

​     \*  自动添加指定索引符合

​     *我们可以访问对象一样使用‘，’和‘[]’两种方式访问里面的值    

```js
enum Status {
    Uploading,
    Success,
    Faild
}
// 像访问对象一样使用','
console.log(Status.Faild);
console.log(Status['Faild']);
console.log(Status.Success);
```

##### 2、指定索引值

每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来

``` js
enum Anmine {
    Pig = 200,
    Dog,
    Cat = 300,
    Snake
}
console.log(Anmine.Cat);
console.log(Anmine['Dog']);
console.log(Anmine.Snake);

```

##### 3、计算值和常量

``` js
// ----------计算值
const ass = () => {
    return 200
}
// 3、计算值和常量
enum yuansuan {
    a = ass(),
    b = 200, //第一个是计算后面跟着的第一个必须是常量，枚举成员必须具有初始化表达式
    c
}
```

##### 4、反向映射

（1）、定义一个枚举值的时候，可以用Enum['key']或者Enum.key的方法获取到value值

（2）、注意只能是数字枚举可以使用，字符枚举不能使用

``` js
enum Statuss {
    Success = 200,
    NotFound = 404,
    Error = 500
}
console.log(Statuss.Error);
console.log(Statuss[404]);
console.log(Statuss.NotFound);
```

##### 5、字符串枚举

（1）、在定义值得时候都是字符串

（2）、且不能使用计算值和常量

``` js
const getValue = () => {
    return 0
}
const names = "小明"
enum Message {
    /**错误信息 */
    Error = "error message",
    /**
     * 成功的错误信息
     * 枚举成员必须具有初始化表达式
     */
    SuccessEroor = 200,
    /**
     * 含字符串值成员的枚举中不允许使用计算值
     */
    ClientError = names
}
console.log(Message.SuccessEroor,'SuccessEroor');
console.log(Message.Error);
console.log(Message['ClientError']);
```

##### 6、异构枚举

枚举值的类型中既有字符串又有数值

``` js
enum Result {
    Faild = 0,
    Success = "Success"
}
```

##### 7、枚举成员类型

可以把符合条件的成员作为枚举值来进行使用

``` js
enum Animal {
    /***狗 */
    Dog = 1,
    /***猫 */
    Cat = 2,
}
/**
 * 狗
 */
interface Dog {
    type:Animal.Dog
}
/**
 * 猫
 */
interface Cat {
    type:Animal.Cat
}
let cat1: Cat= {
    type: Animal.Dog  //error [ts] 不能将类型“Animal.Dog”分配给类型“Animal.Cat”
}
let cat2: Dog= {
    type: Animal.Dog
}
```

##### 8、联合类型

当枚举值符合条件的时候，这个成员可以看作是包含所有成员的联合类型

``` js
enum Keys {
    // 关闭
    Off,
    On
}
interface Light {
    status: Keys
}
let light: Light = {
    status: Keys.Off
}
```

##### 9、运行时的枚举

枚举在编译后的值实际是一个对象

``` js'
enum E {
    A,
    B
}
const getIndex = (enumObj: { C: number }): number => {
    return enumObj.C
}
console.log(getIndex(E));
```

##### 10、const enum

定义枚举值后   编译成js代码会创建一个对应的对象   这个对象在程序运行时用   

如果我们使用枚举只是为了程序可读性好{可读性：一眼便能看出来这行代码什么意思}

并不需要编译后的对象  这样只会增加代码量    所以产生了const   enum   

定义枚举之前加上const关键字   这样的编译   之后不会创建这个对象   只是从枚举里拿到相应的

值替换而已  

``` js
enum Animal {
    Robbit,
    Pig
}
const enum Light90 {
    Off,
    On
}
const status45 = Animal.Pig
const status57 = Light90.Off
console.log(status45,status57);
```

### 四、enum详解

1、总结：每次手动添加索引的时候，下面数据如果不是手动添加的索引，将会以递增的方式，把索引展示出来

 \* 2、数字类型，我们可以向访问对象一样使用‘，’和‘[]’两种方式访问里面的值

 \* 3、字符串枚举的特点：含字符串值成员的枚举中不允许使用计算值

 \*      枚举成员必须具有初始化表达式

