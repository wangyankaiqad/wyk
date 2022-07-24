// 数组中包含的内容
// 获取ul标签
var ul = document.getElementsByTagName('ul')[0];
//获取底部按钮
var completed_order = document.getElementById("completed_order");
var allinfo = document.getElementById("allinfo");
var completed_todo = document.getElementById("completed_todo");
var clear_completed = document.getElementById("clear_completed");
// 定义新增数组
var todoArray = [];
// 定义数组自增id
var nextId = 1;
// 获取新增数据内容
function addTodoList(event) {
    if (!event || event.keyCode === 13) {
        //@ts-ignore
        var inputValue = document.getElementsByClassName('input-todoList')[0].value;
        if (inputValue) {
            //@ts-ignore
            circulation(inputValue);
            //@ts-ignore
            document.getElementsByClassName("input-todoList")[0].value = '';
        }
    }
}
// 新增数据  并且保证数据id分唯一性
function circulation(inputValue) {
    // 首先获取ul标签
    // 存储数据 li标签的循环
    // 判断数组的长度大于零的话  那就id加一
    if (todoArray.length > 0) {
        nextId++;
    }
    // 定义一个对象
    var addItemValue = {
        checked: false,
        id: nextId,
        value: inputValue
    };
    // 吧对象添加到这个数组当中
    todoArray.push(addItemValue);
    circulationHtml(todoArray);
}
// 根据数据的变化进行生成html
function circulationHtml(data, checkId) {
    // 清空原来的元素
    ul.innerHTML = '';
    data.forEach(function (item) {
        // 创建里标签
        var li = document.createElement('li');
        //  如果这个id和传过来的id相同 并且他是选中的话
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
        if (item.id == checkId && item.checked) { }
        li.innerHTML = " \n            <div class=\"li-style-div\">\n                <input type=\"checkbox\" class=\"checkbox\" id=".concat(item.id, " ").concat(item.checked ? "checked" : null, " onchange=\"changeCheckboxDate(this)\"></input>\n                <p class=\"li-style-div-content\">").concat(item.value, "</p>\n            </div>\n            <button class= ").concat(item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close", "  id=").concat(item.id, "  onclick=deleteDate(this)>X</button>\n          ");
        ul.append(li);
    });
    changeLeftItem(data);
}
// 删除
function deleteDate(ele) {
    // ele表示这个li标签的内容
    todoArray = todoArray.filter(function (item) { return item.id != ele.id; });
    // 从新调用
    circulationHtml(todoArray);
    console.log(ele);
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
    var docuemnt = document.getElementById('item-current');
    if (docuemnt) {
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项';
    }
}
/**
 * 查看所有
 */
function viewAllInfo() {
    circulationHtml(todoArray);
    footerButton('allinfo');
}
// 清空所有
function clearAll() {
    // 让数组为空
    todoArray = [];
    // ul的内容清空
    ul.innerHTML = '';
    // 样式赋值
    footerButton('clear_completed');
}
/**
 * 待完成的事项
 * 获取待办事件,并且更新视图
 */
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
