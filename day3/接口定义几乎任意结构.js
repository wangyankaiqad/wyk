/*
总结一下
1，interface
2，可选属性 ？
3，[prop:string]:any
4,多余属性的检查
*/
var getVegetables = function (_a) {
    var type = _a.type;
    return "A ".concat(type);
};
var option = { type: "tomato", size: 12 };
getVegetables(option);
var role = {
    0: 'super_admin',
    1: 'admin'
};
role[1] = '我是快乐的'; // 无法分配到 "1" ，因为它是只读属性
/**
 * const 和 readonly  对比
 */
var NAME = "帅字辈";
// NAME = "抬头" // 无法分配到 "NAME" ，因为它是常数。
var obj = {
    name: '帅字辈'
};
obj.name = "包胜利";
var info = {
    name: '帅字辈'
};
info['name'] = "包胜利"; // 无法分配到 "name" ，因为它是只读属性
var add = function (n1, n2) { return n1 + n2; };
var join = function (n1, n2) { return "".concat(n1, " ").concat(n2); }; // 不能将类型'string'分配给类型'number'
add("a", 2); // 类型'string'的参数不能赋给类型'number'的参数
