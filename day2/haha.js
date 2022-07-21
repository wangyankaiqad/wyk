function testing(a, b, c) {
    var o = new Object();
    o.a = a;
    o.b = b;
    o.c = c;
    o.hh = function () {
        console.log(this.a);
    }
    return o
}
var test = testing(1, 2, 3)

console.log(test.a, test.b, test.c);
test.hh()




// 构造函数
function res(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex
    this.sing = function (sing) {
        console.log(sing);
    }
}


var tony = new res('托尼', 24, '男')

console.log(tony.name);
console.log(tony['age']);
console.log(tony.sex);
tony.sing('唱歌')



// 改变
// 不会改变原来数组的有：

// concat()
// concat() 方法用于连接两个或多个字符串。

// 该方法没有改变原有字符串，但是会返回连接两个或多个字符串新字符串。

// every()
// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

// every() 方法使用指定函数检测数组中的所有元素：

// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
// 如果所有元素都满足条件，则返回 true。
// some()
// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

// some() 方法会依次执行数组的每个元素：

// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。
// 注意： some() 不会对空数组进行检测。

// 注意： some() 不会改变原始数组。

// filter()
// filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

// 注意： filter() 不会对空数组进行检测。

// 注意： filter() 不会改变原始数组。

// map()
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。

// map() 方法按照原始数组元素顺序依次处理元素。

// 注意： map() 不会对空数组进行检测。

// 注意： map() 不会改变原始数组。

// slice()
// slice() 方法可从已有的数组中返回选定的元素。

// slice()方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。

// 注意： slice() 方法不会改变原始数组。


// 二、会改变原来数组的有：

// pop()
// pop() 方法用于删除数组的最后一个元素并返回删除的元素。

// 注意：此方法改变数组的长度！

// 提示： 移除数组第一个元素，请使用 shift() 方法。

// push()
// push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。

// 注意： 新元素将添加在数组的末尾。

// 注意： 此方法改变数组的长度。

// 提示： 在数组起始位置添加元素请使用 unshift() 方法。

// shift()
// shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。

// 注意： 此方法改变数组的长度！

// 提示: 移除数组末尾的元素可以使用 pop() 方法。

// unshift()
// unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。

// 注意： 该方法将改变数组的数目。

// 提示: 将新项添加到数组末尾，请使用 push() 方法。

// reverse()
//    　　   reverse() 方法用于颠倒数组中元素的顺序。

//          6.sort()

// 　　      sort() 方法用于对数组的元素进行排序。

// 　　　  排序顺序可以是字母或数字，并按升序或降序。

// 　　　  默认排序顺序为按字母升序。

// 　　　  注意：当数字是按字母顺序排列时"40"将排在"5"前面。

// 　　　  使用数字排序，你必须通过一个函数作为参数来调用。

// 　　　  函数指定数字是按照升序还是降序排列。

// 　　　  这些说起来可能很难理解，你可以通过本页底部实例进一步了解它。

// 　　　  注意： 这种方法会改变原始数组！。

// 　　  7.splice()

// 　　　  splice() 方法用于添加或删除数组中的元素。

// 　　      注意：这种方法会改变原始数组。





// “多项式函数:常函数、一次函数、二次函数、三次函数、四次函数;基本初等函数包括幂函数、指数函数、
// 对数函数、三角函数、反三角函数和常数函数。 常用函数:实函数、
// 双曲函数、隐函数、多元函数,此外经常用到的函数还有高斯函数,阶梯函数和脉冲函数。”