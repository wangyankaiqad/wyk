
/**
 * 思路  
 * ul li 渲染是通过数组渲染的
 * 数组中的内容  checked    id  和内容val
 * 然后往数组中添加数据
 *    实现id的自增  定义一个全局id 让每次添加的时候 让id自行加加
 * 
 * 获取新增的内容 e.target.value 
 * 删除  获取当前li标签的id    用this
 *        点击删除按钮的时候 吧id传回来  所以我们要在button按钮上添加id属性
 *          然后通过filter筛选出来 在给数组从新进行赋值 
 * 
 * 
 * 左边 未完成  从数组中选出checked为false的数组  获取长度 调用页面渲染方法
 *       全部  渲染数组  调用页面渲染方法
 *        完成的  和上面的未完成的逻辑相同  调用页面渲染方法
 * 
 *          清空  清空数组 并清空html 可以减少dom操作  提高性能 不用页面渲染方法
 * 
 * 
 * 封装渲染html的函数
 *     先获取ul标签
 *         数组循环渲染li标签 生成内容
 *      在给li标签里面添加标签 内容
 *         
 *      createElement('li)
 *       li.id=
 *        li.className-'ltem.checled'
 *         <li id="item.id">
 *         <div>
 *         <input type='checkecbox' id=''>
 *         <span></span>
 *          </div>
 *          <button onclick=''>删除</button>
 *          </li>
 */



// 数组中包含的内容

interface ArrayItem {
    checked: boolean,
    id: number,
    value: string
}
// 数组类型赋值 别名
type TodoListArray = Array<ArrayItem>
// 定义新增数组
let todoArray: TodoListArray = []



// 获取ul标签
let ul: HTMLUListElement = document.getElementsByTagName('ul')[0]
//获取底部按钮
let completed_order: HTMLElement | null = document.getElementById("completed_order")
let allinfo: HTMLElement | null = document.getElementById("allinfo")
let completed_todo: HTMLElement | null = document.getElementById("completed_todo")
let clear_completed: HTMLElement | null = document.getElementById("clear_completed")



// 定义数组自增id
let nextId: number = 1


// 获取新增数据内容
function addTodoList(event: { keyCode: number; }) {
    if (!event || event.keyCode === 13) {
        //@ts-ignore
        let inputValue: string = document.getElementsByClassName('input-todoList')[0].value
        if (inputValue) {
            // @ts-ignore
            circulation(inputValue)
            //@ts-ignore
            // “ getElementsByClassName( ):获取指定类名的所有元素”
            document.getElementsByClassName("input-todoList")[0].value = ''
        }
    }
}

// 新增数据  并且保证数据id分唯一性
function circulation(inputValue: string) {
    // 首先获取ul标签
    // 存储数据 li标签的循环
    // 判断数组的长度大于零的话  那就id加一
    if (todoArray.length > 0) {
        nextId++
    }
    // 定义一个对象 里面写上相对应的属性和值
    let addItemValue: ArrayItem = {
        checked: false,
        id: nextId,
        value: inputValue
    }
    // 吧对象添加到这个数组当中
    todoArray.push(addItemValue)
    circulationHtml(todoArray)
}

// 根据数据的变化进行生成html
function circulationHtml(data: TodoListArray, checkId?: number) {
    // 清空原来的元素
    ul.innerHTML = ''
    data.forEach(item => {
        // 创建里标签
        let li: HTMLLIElement = document.createElement('li')
        //  如果这个id和传过来的id相同 并且他是选中的话  进行样式赋值
        if (item.id == checkId && item.checked) {
            li.className = 'completed'
        } else if (item.checked) {
            li.className = 'need-completed'
        } else {
            li.className = ''
        }
        // 给li标签添加一个id值 
        li.id = `${item.id}`
        // 给li标签里面添加内容
        li.innerHTML = ` 
            <div class="li-style-div">
                <input type="checkbox" class="checkbox" id=${item.id} ${item.checked ? "checked" : null
            } onchange="changeCheckboxDate(this)"></input>
                <p class="li-style-div-content">${item.value}</p>
            </div>
            <button class= ${item.id == checkId && item.checked ? ' completed ' : item.checked ? "need-completed button-close " : "button-close"}  id=${item.id}  onclick=deleteDate(this)>X</button>
          `;

        ul.append(li)
    })
    // 生成的条数
    changeLeftItem(data)
}

// 删除

function deleteDate(ele: ArrayItem) {
    // ele表示这个li标签的内容
    todoArray = todoArray.filter(item => item.id != ele.id)
    // 从新调用
    circulationHtml(todoArray)
    console.log(ele);

}

// 选中的时候改变数据结构 并且添加样式
function changeCheckboxDate(ele: ArrayItem) {
    todoArray.forEach(item => {
        // 判断 id等于点击这条数据的id的话  
        if (item.id == ele.id) {
            // 就让他这个checked的值取反
            item.checked = !item.checked
        }
    })
    circulationHtml(todoArray, ele.id)
}



/**
 * 左下角条数的变化
 */
function changeLeftItem(data: TodoListArray) {
    // 获取到定义的值  
    let docuemnt: HTMLElement | null = document.getElementById('item-current')
    // 判断这个值
    if (docuemnt) {
        // 如果它的值的长度小于等于0 显示无事项  否则就让它的长度加上事项
        docuemnt.innerText = data.length <= 0 ? '无事项' : data.length + '事项'
    }
}






/**
 * 查看所有
 */
function viewAllInfo() {
    circulationHtml(todoArray)
    footerButton('allinfo')
}
// 清空所有

function clearAll() {
    // 让数组为空
    todoArray = []
    // ul的内容清空
    ul.innerHTML = ''
    // 样式赋值
    footerButton('clear_completed')
}




/**
 * 待完成的事项
 * 获取待办事件,并且更新视图
 */
function toBeCompleted() {
    let result: ArrayItem[] = todoArray.filter(item => !item.checked)
    circulationHtml(result)
    footerButton('completed_todo')
}
// 已完成
function completed() {
    let result: ArrayItem[] = todoArray.filter((item: ArrayItem) => item.checked)
    circulationHtml(result)
    footerButton('completed_order')
}
/**
 * 定义底部按钮接口类型
 */
interface ButtonArry {
    name: HTMLElement | null,
    key: string
}





/**
 * 底部元素新增样式
 */

function footerButton(className: string): void {
    const buttonArry: Array<ButtonArry> = [
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
    buttonArry.forEach(item => {
        if (item && item.key === className) {
            //@ts-ignore
            item.name.classList.add('clickButton')
        } else {
            // @ts-ignore
            item.name.classList.remove('clickButton')
        }
    })
}
