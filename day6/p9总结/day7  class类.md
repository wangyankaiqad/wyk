

# 类

传统的JavaScript程序使用函数和基于原型的继承来创建可重用的组件，但对于熟悉使用面向对象方式的程序员来讲就有些棘手，因为他们用的是基于类的继承并且对象是由类构建出来的。 从ECMAScript 2015，也就是ECMAScript 6开始，JavaScript程序员将能够使用基于类的面向对象的方式。 使用TypeScript，我们允许开发者现在就使用这些特性，并且编译后的JavaScript可以在所有主流浏览器和平台上运行，而不需要等到下个JavaScript版本。

1. ES6中类的定义

   ```
   // 声明人的类
   class People {
   						// 类的属性
               constructor(name, age) { // 构造器，实例化方法的时候触发
                   this.name = name
                   this.age = age
               }
               // 类的方法
               sport(){
                   return this.name + '会运动'
               }
    }
   ```

   对类进行实例化

   ```
   let p = new People('小明',18)
   ```

   调用类的方法

   ```
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```
   console.log(p.age); // 18
   ```

   

2. TS中类的定义

   ```
   class People {
       name: string
       age: number
       constructor(name:string,age){
           this.name = name
           this.age = age
       }
       sport():string{
           return `${this.name}会运动`
       }
   }
   ```

   **注意在声明类的时候，需要对类的属性的数据类型进行约束**

   对类进行实例化

   ```
   let p = new People('小明',18)
   // 注意声明类的时候约束name属性为string类型，age属性为数字类型；实例化的时候要严格按照类型传参
   ```

   调用类的方法

   ```
   console.log(p.sport()); //小明会运动
   ```

   获取类的属性

   ```
   console.log(p.age); // 18
   ```



#### 1.2 类的继承

1. ES5中的继承

   在ES5中继承可以通过原型链来实现继承

   声明一个动物的构造函数

   ```
   function Animal(name){
        this.name = name
        this.run = ()=>{
           console.log(this.name + '会跑步');
        }
   }
   // 构造函数原型链上添加方法
   Animal.prototype.song = function(){
        console.log(`${this.name}会唱歌`);
   }
   ```

   - 原型链继承

     ```
     function Dog(name){
     
     }
     Dog.prototype = Animal.prototype
     
     let d = new Dog('哈哈')
     d.song() // undefined会唱歌
     ```

   - 原型链加冒充对象的继承方式

     ```
     function Dog(name){
        Animal.call(this,name)
     }
     
     let d = new Dog('哈士奇')
     
     console.log(d.name); // 哈士奇
     console.log(d.run()); // 哈士奇会跑步
     console.log(d.song()); // 报错： d.song is not a function
     // 不能继承原型链上的方法
     ```

   - 组合继承

     ```
      function Dog(name){
         Animal.call(this,name)
      }
     Dog.prototype = Animal.prototype
     
     let d = new Dog('哈士奇')
     
     console.log(d.name);// 哈士奇
     d.run()// 哈士奇会跑步
     d.song()// 哈士奇会唱歌
     
     // 由于调用了两次父类，所以产生了两份实例
     ```

2. ES6中的继承

   声明一个动物的类

   ```
   class Animal {
      constructor(name){
         this.name = name
      }
      run(){
         console.log(`${this.name}会跑步`);
      }
   }
   ```

   声明 狗 类 继承动物类

   ```
   class Dog extends Animal {
       constructor(name){
                   super(name)
       }
   }
   
   
   let d = new Dog('哈士奇')
   console.log(d.name); // 哈士奇
   d.run(); // 哈士奇会跑步
   ```

3. TS中类的继承

   和ES6中的继承一样，只是添加了属性的数据类型

   ```
   class Animal {
       name: string
       constructor(name){
           this.name = name
       }
       getName():string{
           return this.name
       }
   }
   
   class Dog extends Animal {
       constructor(name){
           super(name)
       }
   }
   
   let d = new Dog('哈士奇')
   console.log(d.name); // 哈士奇
   console.log(d.getName());// 哈士奇
   ```

#### 12.1.3 类的修饰符





### 修饰符

在 ES6 标准类的定义中，默认情况下，定义在实例的属性和方法会在创建实例后添加到实例上；而如果是定义在类里没有定义在 this 上的方法，实例可以继承这个方法；而如果使用 static 修饰符定义的属性和方法，是静态属性和静态方法，实例是没法访问和继承到的；我们还通过一些手段，实现了私有方法，但是私有属性的实现还不好实现。

接下来我们来看下 TS 中的公共、私有和受保护的修饰符：

#### (1) public

`public`表示公共的，用来指定在创建实例后可以通过实例访问的，也就是类定义的外部可以访问的属性和方法。默认是 public，但是 TSLint 可能会要求你必须用修饰符来表明这个属性或方法是什么类型的。



#### (2) private

`private`修饰符表示私有的，它修饰的属性在类的定义外面是没法访问的：

#### (3) protected

`protected`修饰符是受保护修饰符，和`private`有些相似，但有一点不同，`protected`修饰的成员在继承该类的子类中可以访问

`protected`还能用来修饰 constructor 构造函数，加了`protected`修饰符之后，这个类就不能再用来创建实例，只能被子类继承，这个需求我们在讲 ES6 的类的时候讲过，需要用`new.target`来自行判断，而 TS 则只需用 protected 修饰符即可：

```typescript
class Parent {
  protected constructor() {
    //
  }
}
const p = new Parent(); // error 类“Parent”的构造函数是受保护的，仅可在类声明中访问
class Child extends Parent {
  constructor() {
    super();
  }
}
const c = new Child();
```



###  readonly 修饰符

在类里可以使用`readonly`关键字将属性设置为只读。

```typescript
class UserInfo {
  readonly name: string;
  constructor(name: string) {
    this.name = name;
  }
}
const user = new UserInfo("Lison");
user.name = "haha"; // error Cannot assign to 'name' because it is a read-only property
```

设置为只读的属性，实例只能读取这个属性值，但不能修改。



###  静态属性

和 ES6 的类一样，在 TS 中一样使用`static`关键字来指定属性或方法是静态的，实例将不会添加这个静态属性，也不会继承这个静态方法，你可以使用修饰符和 static 关键字来指定一个属性或方法：

```typescript

  }
  constructor() {
    //
  }
}
const p = new Parent();
console.log(p.age); // error Property 'age' is a static member of type 'Parent'
console.log(Parent.age); // 18

```

如果使用了 private 修饰道理和之前的一样：

```typescript
class Parent {
  public static getAge() {
    return Parent.age;
  }
  private static age: number = 18;
  constructor() {
    //
  }
}
const p = new Parent();
console.log(p.age); // error Property 'age' is a static member of type 'Parent'
console.log(Parent.age); // error 属性“age”为私有属性，只能在类“Parent”中访问。

```

####  多态的定义

父类定义一个方法不去实现，让继承他的子类去实现，每一个子类有不同的表现

#### 12.2.2 多态的实现

1. 首先声明一个父类，父类中声明一个方法，不去实现

   ```
   class Animal {
       name:string
       constructor(name:string){
           this.name = name
       }
       // 父类定义了一个方法，不去实现
       eat(){}
   }
   ```

2. 声明一个类继承父类，并且实现 eat 方法

   ```
   class Dog extends Animal{
       constructor(name:string){
           super(name)
       }
       eat():void{
           console.log(`${this.name}吃骨头`);
           
       }
   }
   ```

3. 再声明一个类继承父类，并且实现 eat 方法

   ```
   class Cat extends Animal{
       constructor(name:string){
           super(name)
       }
       eat():void{
           console.log(`${this.name}吃鱼`);
           
       }
   }
   ```

   我们可以看到，父类 Animal 内声明了 eat 方法；但是没有去实现，而是有继承他的子类 Dog 和 Cat 去实现，每个子类有不同的表现，这就是多态的实现



###  可选类属性

TS 在 2.0 版本，支持可选类属性，也是使用`?`符号来标记，来看例子：

```typescript
class Info {
  name: string;
  age?: number;
  constructor(name: string, age?: number, public sex?: string) {
    this.name = name;
    this.age = age;
  }
}
const info1 = new Info("lison");
const info2 = new Info("lison", 18);
const info3 = new Info("lison", 18, "man");

```



### 抽象类

抽象类一般用来被其他类继承，而不直接用它创建实例。抽象类和类内部定义抽象方法，使用`abstract`关键字，我们先来看个例子：

```typescript
abstract class People {
  constructor(public name: string) {}
  abstract printName(): void;
}
class Man extends People {
  constructor(name: string) {
    super(name);
    this.name = name;
  }
  printName() {
    console.log(this.name);
  }
}
const m = new Man(); // error 应有 1 个参数，但获得 0 个
const man = new Man("lison");
man.printName(); // 'lison'
const p = new People("lison"); // error 无法创建抽象类的实例

```

上面例子中我们定义了一个抽象类 People，在抽象类里我们定义 constructor 方法必须传入一个字符串类型参数，并把这个 name 参数值绑定在创建的实例上；使用`abstract`关键字定义一个抽象方法 printName，这个定义可以指定参数，指定参数类型，指定返回类型。当我们直接使用抽象类 People 实例化的时候，就会报错，我们只能创建一个继承抽象类的子类，使用子类来实例化。

我们再来看个例子：

```typescript
abstract class People {
  constructor(public name: string) {}
  abstract printName(): void;
}
class Man extends People {
  // error 非抽象类“Man”不会实现继承自“People”类的抽象成员"printName"
  constructor(name: string) {
    super(name);
    this.name = name;
  }
}
const m = new Man("lison");
m.printName(); // error m.printName is not a function

```

通过上面的例子我们可以看到，在抽象类里定义的抽象方法，在子类中是不会继承的，所以在子类中必须实现该方法的定义。

2.0 版本开始，`abstract`关键字不仅可以标记类和类里面的方法，还可以标记类中定义的属性和存取器：

```typescript
abstract class People {
  abstract _name: string;
  abstract get insideName(): string;
  abstract set insideName(value: string);
}
class Pp extends People {
  _name: string;
  insideName: string;
}

```

> 抽象方法和抽象存取器都不能包含实际的代码块。



###  实例类型

当我们定义一个类，并创建实例后，这个实例的类型就是创建他的类：

```typescript
class People {
  constructor(public name: string) {}
}
let p: People = new People("lison");

```

当然了，创建实例的时候这指定 p 的类型为 People 并不是必须的，TS 会推断出他的类型。虽然指定了类型，但是当我们再定义一个和 People 类同样实现的类 Animal，并且创建实例赋值给 p 的时候，是没有问题的：

```typescript
class Animal {
  constructor(public name: string) {}
}
let p = new Animal("lark");

```

所以，如果你想实现对创建实例的类的判断，还是需要用到`instanceof`关键字。



#### (1) 类类型接口

使用接口可以强制一个类的定义必须包含某些内容，先来看个例子：

```typescript
interface FoodInterface {
  type: string;
}
class FoodClass implements FoodInterface {
  // error Property 'type' is missing in type 'FoodClass' but required in type 'FoodInterface'
  static type: string;
  constructor() {}
}

```

上面接口 FoodInterface 要求使用该接口的值必须有一个 type 属性，定义的类 FoodClass 要使用接口，需要使用关键字`implements`。**implements**关键字用来指定一个类要继承的接口，如果是接口和接口、类和类直接的继承，使用extends，如果是类继承接口，则用implements。

有一点需要注意，**接口检测的是使用该接口定义的类创建的实例**，所以上面例子中虽然定义了静态属性 type，但静态属性不会添加到实例上，所以还是报错，所以我们可以这样改：

```typescript
interface FoodInterface {
  type: string;
}
class FoodClass implements FoodInterface {
  constructor(public type: string) {}
}

```

当然这个需求你也可以使用本节课学习的抽象类实现：

```typescript
abstract class FoodAbstractClass {
  abstract type: string;
}
class Food extends FoodAbstractClass {
  constructor(public type: string) {
    super();
  }
}

```

#### (2) 接口继承类

接口可以继承一个类，当接口继承了该类后，会继承类的成员，但是不包括其实现，也就是只继承成员以及成员类型。接口还会继承类的`private`和`protected`修饰的成员，当接口继承的这个类中包含这两个修饰符修饰的成员时，这个接口只可被这个类或他的子类实现。

```typescript
class A {
  protected name: string;
}
interface I extends A {}
class B implements I {} // error Property 'name' is missing in type 'B' but required in type 'I'
class C implements I {
  // error 属性“name”受保护，但类型“C”并不是从“A”派生的类
  name: string;
}
class D extends A implements I {
  getName() {
    return this.name;
  }
}

```

#### (3) 在泛型中使用类类型

这里我们先来看个例子：

```typescript
const create = <T>(c: { new (): T }): T => {
  return new c();
};
class Info {
  age: number;
}
create(Info).age;
create(Info).name; // error 类型“Info”上不存在属性“name”

```

在这个例子里，我们创建了一个一个 create 函数，传入的参数是一个类，返回的是一个类创建的实例，这里有几个点要讲：

- 参数 c 的类型定义中，new()代表调用类的构造函数，他的类型也就是类创建实例后的实例的类型。
- return new c()这里使用传进来的类 c 创建一个实例并返回，返回的实例类型也就是函数的返回值类型。

所以通过这个定义，TS 就知道，调用 create 函数，传入的和返回的值都应该是同一个类类型。



- public：公有属性方法修饰符，这是默认修饰符；
- private：私有修饰符，它修饰的属性在类的定义外面无法访问；
- protected：和private相似，区别在于他修饰的成员在继承该类的子类中可以访问。
- readonly: 只读修饰符
- abstract: 关键字修饰类定义,抽象类一般用来被其他类继承,而不是直接用它创建实例

类既是值，也是类型，当我们使用类创建一个实例的时候，这个实例的类型也就是这个创建这个实例的类。

### TS中的类和ES6中的类的相同点和不同点

1. 都是采用extends语法进行继承

2. 在constructor中都需要首先使用super(xxx)调用父类构造函数，然后才能给this进行赋值

3. supper作为方法时指向父类构造函数，而作为对象且在普通方法中时指向父类的原型，在静态方法中时指向父类。

   不同点

   

   1. TypeScript提供抽象类，抽象方法，和接口继承，具体使用请参考TypeScript官方文档。

4. TypeScript可以对类中属性或方法使用访问限定符。

**总结: 就是对封装和修饰符有了一定的区别,继承之类的和js是相同的**


