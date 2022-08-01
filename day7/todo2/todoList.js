/**
 * ul  li 渲染是通过数组来进行渲染的
 *    数组中是一个个对象  里面包含的属性有id值  内容  checked
 *
 *      往数组中添加这个一个个对象
 *          让id实现自增   定义一个全局id 每次添加的时候  让id自行加一
 *
 * 获取新增的内容    用e.targetvalue
 *
 * 删除  获取当前li标签的id  点击删除按钮的时候 要把id传回来  所以我们要在button按钮上添加id属性   然后通过filter筛选出来  再给数组从新赋值
 *
 *
 * 左边 未完成  从数组中选出checked为false的数组  获取长度  渲染
 * 全部  渲染数组
 * 完成的和未完成的  选出checked为TRUE 和false的数组长度 渲染
 * 清空  清空数组  并清空html 可以减少dome操作  提高性能
 *
 * 封装渲染html的函数
 *     先获取ul标签
 *         数组循环渲染li标签 生成内容
 *      在给li标签里面添加标签 内容
 *
 *      createElement('li)
 *      li.id=
 *      li.className-'ltem.checled'
 *      <li id="item.id">
 *      <div>
 *      <input type='checkecbox' id=''>
 *      <span></span>
 *      </div>
 *      <button onclick=''>删除</button>
 *      </li>
 */
// 定义一个数组
var todoArray = [];
// 获取标签
var ul = document.getElementsByTagName('ul')[0];
// 获取到底部按钮
var completed_todo = document.getElementById('completed_todo');
var allinfo = document.getElementById('allinfo');
var completed_order = document.getElementById('completed_order');
var clear_completed = document.getElementById('clear_completed');
// 获取的内容
function addTodoList(e) {
    if (!e || e.keyCode === 13) {
        // 获取input的内容并进行赋值
        //@ts-ignore
        var inputValue = document.getElementsByClassName('input-todoList')[0].value;
        if (inputValue) {
            circulation(inputValue);
            //@ts-ignore
            document.getElementsByClassName("input-todoList")[0].value = '';
        }
    }
}
var nextId = 1;
// 新增的数据 添加进数组
function circulation(inputValue) {
    if (todoArray.length > 0) {
        nextId++;
    }
    var addItemValue = {
        checked: false,
        id: nextId,
        value: inputValue
    };
    // 添加进数组中
    todoArray.push(addItemValue);
    console.log(todoArray);
    circulationHtml(todoArray);
}
//根据数据进行渲染页面
function circulationHtml(data, checkId) {
    ul.innerHTML = '';
    data.forEach(function (item) {
        // 创建li标签
        var li = document.createElement('li');
        if (item.id == checkId && item.checked) {
            li.className = 'completed';
        }
        else if (item.checked) {
            li.className = 'need-completed';
        }
        else {
            li.className = '';
        }
        li.id = "".concat(item.id);
        // 添加内容
        li.innerHTML = "\n        <div class=\"li-style-div\">\n        <input type=\"checkbox\" class=\"checkbox\" id=".concat(item.id, " ").concat(item.checked ? "checked" : null, " onchange=\"changeCheckboxDate(this)\"></input>\n           <p class=\"li-style-div-content\">").concat(item.value, "</p>\n           </div>\n           <button class= ").concat(item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close", "  id=").concat(item.id, "  onclick=deleteDate(this)>X</button>\n        ");
        ul.append(li);
    });
}
// 选中的时候改变数据结构 并且添加样式
function changeCheckboxDate(ele) {
    todoArray.forEach(function (item) {
        // 判断 id等于点击这条数据的id的话  
        if (item.id == ele.id) {
            // 就让他这个checked的值取反
            item.checked = !item.checked;
        }
    });
    circulationHtml(todoArray, ele.id);
}
/**
 * 左下角条数的变化
 */
function changeLeftItem(data) {
    // 获取到定义的值  
    var docuemnt = document.getElementById('item-current');
    // 判断这个值
    if (docuemnt) {
        // 如果它的值的长度小于等于0 显示无事项  否则就让它的长度加上事项
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项';
    }
}
// 删除
function deleteDate(ele) {
    console.log(ele);
    // 通过filter筛选来进行删除
    todoArray = todoArray.filter(function (item) { return item.id != ele.id; });
    circulationHtml(todoArray);
}
// 查看所有
function viewAllInfo() {
    circulationHtml(todoArray);
    footerButton('allinfo');
}
// 清空所有
function clearAll() {
    todoArray = [];
    ul.innerHTML = '';
    footerButton('clear_completed');
}
// 待完成的事项
function toBeCompleted() {
    var result = todoArray.filter(function (item) { return !item.checked; });
    circulationHtml(result);
    footerButton('completed_todo');
}
// 已完成
function completed() {
    var result = todoArray.filter(function (item) { return item.checked; });
    circulationHtml(result);
    footerButton('completed_order');
}
/**
 * 底部元素新增样式
 */
function footerButton(className) {
    var buttonArry = [
        {
            name: completed_order,
            key: "completed_order"
        },
        {
            name: allinfo,
            key: "allinfo"
        },
        {
            name: completed_todo,
            key: "completed_todo"
        },
        {
            name: clear_completed,
            key: "clear_completed"
        },
    ];
    buttonArry.forEach(function (item) {
        if (item && item.key === className) {
            //@ts-ignore
            item.name.classList.add('clickButton');
        }
        else {
            // @ts-ignore
            item.name.classList.remove('clickButton');
        }
    });
}
