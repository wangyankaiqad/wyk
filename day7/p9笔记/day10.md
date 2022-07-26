# 声明的合并

​     声明合并是指 TypeScript 编译器会将名字相同的多个声明合并为一个声明，合并后的声明同时拥有多个声明的特性。我们知道在 JavaScrip 中，使用var关键字定义变量时，定义相同名字的变量，后面的会覆盖前面的值。使用let 定义变量和使用 const 定义常量时，不允许名字重复。在 TypeScript 中，接口、命名空间是可以多次声明的，最后 TypeScript 会将多个同名声明合并为一个。我们下来看个简单的例子：

interface声明可以被覆盖   也就是说 interfae相同的名字可以重复定义  

type只能声明一次 并不能被覆盖   type相同的名字只能定义一次

### 总结

TypeScript的所有声明概括起来，会创建这三种实体之一：**命名空间、类型**和**值**：

- 命名空间的创建实际是创建一个对象，对象的属性是在命名空间里export导出的内容；
- 类型的声明是创建一个类型并赋给一个名字；
- 值的声明就是创建一个在JavaScript中可以使用的值。

下面这个表格会清晰的告诉你，每一种声明类型会创建这三种实体中的哪种，先来说明一下，第一列是指声明的内容，每一行包含4列，表明这一行中，第一列的声明类型创建了后面三列哪种实体，打钩即表示创建了该实体：

| 声明类型           | 创建了命名空间 | 创建了类型 | 创建了值 |
| :----------------- | :------------- | :--------- | :------- |
| Namespace          | √              |            | √        |
| Class              |                | √          | √        |
| Enum               |                | √          | √        |
| Interface          |                | √          |          |
| Type Alias类型别名 |                | √          |          |
| Function           |                |            | √        |
| Variable           |                |            | √        |

可以看到，只要命名空间创建了命名空间这种实体。Class、Enum两个，Class即是实际的值也作为类使用，Enum编译为JavaScript后也是实际值，而且我们讲过，一定条件下，它的成员可以作为类型使用；Interface和类型别名是纯粹的类型；而Funciton和Variable只是创建了JavaScript中可用的值，不能作为类型使用，注意这里Variable是变量，不是常量，常量是可以作为类型使用的。