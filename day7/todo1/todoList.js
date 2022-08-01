// 获取ul标签 
var ul = document.getElementsByTagName('ul')[0];
//获取底部按钮
var completed_order = document.getElementById("completed_order");
var allinfo = document.getElementById("allinfo");
var completed_todo = document.getElementById("completed_todo");
var clear_completed = document.getElementById("clear_completed");
// 定义新增数组
var todoArray = [];
// 获取新增数据内容
function addTodoList(event) {
    if (!event || event.keyCode === 13) {
        //@ts-ignore
        // 获取到内容
        var inputValue = document.getElementsByClassName('input-todoList')[0].value;
        if (inputValue) {
            circulation(inputValue);
            //@ts-ignore
            document.getElementsByClassName('input-todoList')[0].value = '';
        }
    }
}
// 定义一个变量 为id初始值
var nextId = 1;
// 新增数据  并且保证数据id唯一性
function circulation(inputValue) {
    if (todoArray.length > 0) {
        nextId++;
    }
    // 定义一个对像 里面写上相对应的属性和值
    var addItemValue = {
        checked: false,
        id: nextId,
        value: inputValue
    };
    todoArray.push(addItemValue);
    // console.log(todoArray);
    // 调用生成页面的函数
    circulationHtml(todoArray);
}
// 根据数组的变化进行生成html
function circulationHtml(data, checkId) {
    //   清空原来的元素
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
        li.innerHTML = "\n        <div class=\"li-style-div\">\n        <input type=\"checkbox\" class=\"checkbox\" id=".concat(item.id, " ").concat(item.checked ? "checked" : null, " onchange=\"changeCheckboxDate(this)\"></input>\n        <p class=\"li-style-div-content\">").concat(item.value, "</p>\n         </div>\n           <button class= ").concat(item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close", "  id=").concat(item.id, "  onclick=deleteDate(this)>X</button>\n        ");
        ul.append(li);
    });
    // 生成的条数
    changeLeftItem(data);
}
// 删除
function deleteDate(ele) {
    todoArray = todoArray.filter(function (item) { return item.id != ele.id; });
    circulationHtml(todoArray);
    console.log(ele);
}
// 选中的时候改变数据结构 并添加样式
function changeCheckboxDate(ele) {
    todoArray.forEach(function (item) {
        if (item.id == ele.id) {
            item.checked = !item.checked;
        }
    });
    circulationHtml(todoArray, ele.id);
}
// 左下角条数的变化
function changeLeftItem(data) {
    var docuemnt = document.getElementById('item-current');
    if (docuemnt) {
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项';
    }
}
// 查看所有
function ViewAllInfo() {
    circulationHtml(todoArray);
    footerButton('allinfo');
}
// 清空所有
var num = [];
function clearAll() {
    todoArray = [];
    ul.innerHTML = '';
    footerButton('clear_completed');
    changeLeftItem(num);
}
// 待完成的事项  获取待办事件  并从新更新视图
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
// 底部元素新增样式
function footerButton(className) {
    var ButtonArry = [
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
    ButtonArry.forEach(function (item) {
        if (item && item.key == className) {
            //@ts-ignore
            item.name.classList.add('clickButton');
        }
        else {
            //@ts-ignore
            item.name.classList.remove('clickButton');
        }
    });
}
