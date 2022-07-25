/**
*  new Array(),创建数组的长度
* .fill,填充数组的方法,将数据填充到其中,分别以不同的数据类型进行填充
**/
var getArray = function (value, tiems) {
    return new Array(tiems).fill(value);
};
// console.log(getArray([1],5).length);
// 这个函数接受两个参数 第一个参数为任意类型的值  第二个是数值类型的值
// 默认为5  可以自动填充5个一数组
// getArray([1], 2).forEach(item => {
//     console.log(item.length);
// })
getArray(1, 2).forEach(function (item) {
    console.log(item.length);
});
