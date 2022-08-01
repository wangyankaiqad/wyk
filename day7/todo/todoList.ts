

// 数组中包含的内容
interface ArrahItem {
    checked: boolean,
    id: number,
    value: string
}
// 数组类型赋值 别名
type TodoListArray = Array<ArrahItem>
// 获取ul标签 
let ul: HTMLUListElement = document.getElementsByTagName('ul')[0]
//获取底部按钮
let completed_order: HTMLElement | null = document.getElementById("completed_order")
let allinfo: HTMLElement | null = document.getElementById("allinfo")
let completed_todo: HTMLElement | null = document.getElementById("completed_todo")
let clear_completed: HTMLElement | null = document.getElementById("clear_completed")

// 定义新增数组
let todoArray: TodoListArray = []

// 获取新增数据内容
function addTodoList(event: { keyCode: number }) {
    if (!event || event.keyCode === 13) {
        //@ts-ignore
        // 获取到内容
        let inputValue = document.getElementsByClassName('input-todoList')[0].value
        if (inputValue) {
            circulation(inputValue)
            //@ts-ignore
            document.getElementsByClassName('input-todoList')[0].value = ''
        }
    }
}
// 定义一个变量 为id初始值
let nextId: number = 1

// 新增数据  并且保证数据id唯一性

function circulation(inputValue: string) {
    if (todoArray.length > 0) {
        nextId++
    }
    // 定义一个对像 里面写上相对应的属性和值
    let addItemValue: ArrahItem = {
        checked: false,
        id: nextId,
        value: inputValue,
    }
    todoArray.push(addItemValue)

    // console.log(todoArray);
    // 调用生成页面的函数
    circulationHtml(todoArray)
}

// 根据数组的变化进行生成html
function circulationHtml(data: TodoListArray, checkId?: number) {
    //   清空原来的元素
    ul.innerHTML = ''

    data.forEach(item => {
        // 创建li标签
        let li: HTMLLIElement = document.createElement('li')
        if (item.id == checkId && item.checked) {
            li.className = 'completed'
        } else if (item.checked) {
            li.className = 'need-completed'
        } else {
            li.className = ''
        }
        li.id = `${item.id}`
        li.innerHTML = `
        <div class="li-style-div">
        <input type="checkbox" class="checkbox" id=${item.id} ${item.checked ? "checked" : null
            } onchange="changeCheckboxDate(this)"></input>
        <p class="li-style-div-content">${item.value}</p>
         </div>
           <button class= ${item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close"}  id=${item.id}  onclick=deleteDate(this)>X</button>
        `
        ul.append(li)
    })
    // 生成的条数
    changeLeftItem(data)
}


// 删除
function deleteDate(ele: ArrahItem) {
    todoArray = todoArray.filter(item => item.id != ele.id)
    circulationHtml(todoArray)
    console.log(ele);
}
// 选中的时候改变数据结构 并添加样式

function changeCheckboxDate(ele) {
    todoArray.forEach(item => {
        if (item.id == ele.id) {
            item.checked = !item.checked
        }
    })
    circulationHtml(todoArray, ele.id)
}

// 左下角条数的变化
function changeLeftItem(data: TodoListArray) {
    let docuemnt: HTMLElement | null = document.getElementById('item-current')

    if (docuemnt) {
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项'
    }

}


// 查看所有
function ViewAllInfo() {
    circulationHtml(todoArray)
    footerButton('allinfo')
}

// 清空所有

function clearAll() {
    todoArray = []
    ul.innerHTML = ''
    footerButton('clear_completed')
}

// 待完成的事项  获取待办事件  并从新更新视图

function toBeCompleted() {
    let result: ArrahItem[] = todoArray.filter(item => !item.checked)
    circulationHtml(result)
    footerButton('completed_todo')
}
// 已完成
function completed() {
    let result: ArrahItem[] = todoArray.filter((item: ArrahItem) => item.checked)
    circulationHtml(result)
    footerButton('completed_order')
}


// 定义底部按钮接口类型
interface ButtonArry {
    name: HTMLElement | null
    key: string
}

// 底部元素新增样式
function footerButton(className: string): void {
    const ButtonArry: Array<ButtonArry> = [
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
    ]

    ButtonArry.forEach(item => {
        if (item && item.key == className) {
            //@ts-ignore
            item.name.classList.add('clickButton')
        } else {
            //@ts-ignore
            item.name.classList.remove('clickButton')
        }
    })
}

