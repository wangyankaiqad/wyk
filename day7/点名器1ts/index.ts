


// 定义学生数据
const dataList = [
    {
        "id": 1,
        "name": "王帅琦",
        "sex": 0,
        "checked": false
    },
    {
        "id": 2,
        "name": "包胜利",
        "sex": 0,
        "checked": false
    },
    {
        "id": 3,
        "name": "郭俊",
        "sex": 0,
        "checked": false
    },
    {
        "id": 4,
        "name": "张嘉宁",
        "sex": 1,
        "checked": false
    },
    {
        "id": 5,
        "name": "李吉森",
        "sex": 0,
        "checked": false
    },
    {
        "id": 6,
        "name": "陈芸",
        "sex": 1,
        "checked": false
    },
    {
        "id": 7,
        "name": "王彦凯",
        "sex": 0,
        "checked": false
    },
    {
        "id": 8,
        "name": "贾柏林",
        "sex": 0,
        "checked": false
    },
    {
        "id": 9,
        "name": "师福齐",
        "sex": 0,
        "checked": false
    },
    {
        "id": 10,
        "name": "杨佳润",
        "sex": 0,
        "checked": false
    },
    {
        "id": 11,
        "name": "步旭阳",
        "sex": 0,
        "checked": false
    },
    {
        "id": 12,
        "name": "郑国均",
        "sex": 0,
        "checked": false
    },
    {
        "id": 13,
        "name": "李思佳",
        "sex": 1,
        "checked": false
    },
    {
        "id": 14,
        "name": "张旭",
        "sex": 0,
        "checked": false
    },
    {
        "id": 15,
        "name": "党少龙",
        "sex": 0,
        "checked": false
    },
    {
        "id": 16,
        "name": "田海霖",
        "sex": 0,
        "checked": false
    },
    {
        "id": 17,
        "name": "刘集聚",
        "sex": 0,
        "checked": false
    }, {
        "id": 18,
        "name": "高双娇",
        "sex": 1,
        "checked": false
    }, {
        "id": 19,
        "name": "宁帅",
        "sex": 0,
        "checked": false
    }, {
        "id": 20,
        "name": "陈雯轩",
        "sex": 1,
        "checked": false
    }, {
        "id": 21,
        "name": "王帅林",
        "sex": 0,
        "checked": false
    }, {
        "id": 22,
        "name": "李沛沛",
        "sex": 1,
        "checked": false
    }, {
        "id": 23,
        "name": "李博",
        "sex": 0,
        "checked": false
    }, {
        "id": 24,
        "name": "崔宇彤",
        "sex": 1,
        "checked": false
    }, {
        "id": 25,
        "name": "颜帅",
        "sex": 0,
        "checked": false
    }, {
        "id": 26,
        "name": "李娅",
        "sex": 1,
        "checked": false
    },
    {
        "id": 27,
        "name": "文婷",
        "sex": 1,
        "checked": false
    },
    {
        "id": 28,
        "name": "何润浩",
        "sex": 0,
        "checked": false
    },
    {
        "id": 29,
        "name": "许永智",
        "sex": 0,
        "checked": false
    },
]

// 定义学生接口
interface Student {
    name: string,
    id: number,
    // 性别  0代表男   1代表女
    sex: number,
    checked: boolean
}
// 定义有对象的返回值
type BodyAndGirlIndex = {
    bodyIndex: number[],
    girlIndex: number[]
}
// 定义所有同学的名单

const allStudentList: Array<Student> = dataList


// 获取ul标签
let ul: HTMLUListElement = document.getElementsByTagName('ul')[0]
// 获取单人点击按钮
let oneButton: HTMLElement = document.getElementById('one')
// 获取双人点名按钮
let twoButton: HTMLElement = document.getElementById('two')
// 获取男生点击按钮
let bodyButton: HTMLElement = document.getElementById('three')
// 获取女生点击按钮
let girlButton: HTMLElement = document.getElementById('four')
// 获取存放名字的dom
let saveCheckedStudentDom: Element = document.getElementsByClassName('content_div')[0]
// 获取随机数后的添加名字
const saveSpan = document.getElementById('name')
saveSpan.style.backgroundImage = randomColor()



// 设置定时器
// @ts-ignore
let times: NodeJs.Timer

// 渲染数据  
function renderStudent(): void {
    ul.innerHTML = ''
    allStudentList.forEach(item => {
        //创建li标签
        let li = document.createElement('li')
        // 给li标签添加样式
        li.className = 'liColor'
        // 添加渐变色
        li.style.backgroundImage=randomColor()
        // 给li标签添加内容
        li.innerHTML = `<apan>${item.name}</apan>`
        // 讲li标签添加到ul中
        ul.appendChild(li)
    })
}
// 自调用  渲染页面的方法
renderStudent()


// 单人点名
function oneStudent(evevt: { target: { innerText: string } }): void {

    if (evevt.target.innerText.includes('停')) {
        oneButton.innerHTML = '单人点名'
        //    随机数据进行fuzhi
        let randoms = randomFc(allStudentList)
        let checkedStudents: Student = allStudentList[randoms]
        //   给随机的名字添加随机颜色
        saveSpan.style.backgroundImage = randomColor()
        // 给随机的地方添加名字
        saveSpan.innerText = checkedStudents.name
        // 讲名字添加到响应到额位置
        saveCheckedStudentDom.appendChild(saveSpan)
    } else {
        oneButton.innerText = '停止'
    }
}

// 点击两个人
function downStudent(event): void {
    clickChecked(event.target.innerText)
    if (event.target.innerText.includes('停')) {
        // 第一个随机数
        let randoms = randomFc(allStudentList)
        // 第二个人随机数
        let twoRandom = randomFc(allStudentList)
        // 分别获取两个随机数的名字
        const firstRandomStudent: Student = allStudentList[randoms]
        const secondRandomStudent: Student = allStudentList[twoRandom]
        saveSpan.style.backgroundImage = randomColor()
        saveSpan.innerText = `${firstRandomStudent.name},${secondRandomStudent.name}`
        saveCheckedStudentDom.appendChild(saveSpan)
        twoButton.innerText = "双人点名"
    } else {
        twoButton.innerText = '停止'
    }
}

// 男女生点名下标获取
function paceageBody(): BodyAndGirlIndex {
    // 男生下标存放
    let bodyIndex: number[] = []
    // 女生下标存放
    let girlIndex: number[] = []
    allStudentList.forEach((item, index) => {
        if (item.sex === 0) {
            bodyIndex.push(index)
        } else {
            girlIndex.push(index)
        }
    })
    return {
        bodyIndex,
        girlIndex
    }
}
// 男生或女生点名

function bodyOrGrilStudent(sex: number, event: { target: { innerText: string } }): void {
    clickChecked(event.target.innerText)
    if (event.target.innerText.includes('停')) {
        if (sex === 0) {
            bodyButton.innerText = '男生点名'
        } else {
            girlButton.innerText = '女生点名'
        }
        // 分别获取不同的下标
        let result: BodyAndGirlIndex = paceageBody()
        //分别获取不同的数组
        let { bodyIndex, girlIndex } = result
        // 根据参数判断是女生还是男生
        let bodyOrgril = sex === 0 ? bodyIndex : girlIndex
        //获取到数组的下标
        let bodyorGirlRandomIndex = randomFc(bodyOrgril)
        //获取body的index
        let checkedBody: Student = allStudentList[bodyOrgril[bodyorGirlRandomIndex]]
        saveSpan.style.backgroundImage = randomColor()
        saveSpan.innerText = checkedBody.name
        saveCheckedStudentDom.appendChild(saveSpan)
    } else {
        if (sex === 0) {
            bodyButton.innerText = '停止'
        } else {
            girlButton.innerText = '停止'
        }
    }

}


// 封装获取随机数的函数

// 封装获取随机数的函数
function randomFc(array: Student[] | number[]): number {
    // 获取随机数的最大值
    let maxs: number = array.length - 1
    // 获取随机数的最小值
    let mins: number = 0
    // 生成随机数
    let randoms: number = Math.floor(Math.random() * (maxs - mins) + mins)
    return randoms
}
// rgb颜色随机数
function randomParams() {
    return Math.floor(Math.random() * 256)
}

// 渐变颜色随机数
function randomColor() {
   
    const start = randomParams()
    const end = randomParams()
    const color = `linear-gradient(to right, rgb(${start},${randomParams()},${randomParams()}), rgb(${end},${randomParams()},${randomParams()}))`
    return color
}

getCurrentTime()
setInterval(() => {
    getCurrentTime()
}, 1000)



// 获取当前时间
function getCurrentTime():void{
    // 格式化年月日
    const times=dateFormat()
    // 渲染到页面
    let timesHtml=document.getElementsByClassName('currentTime')[0] as HTMLBodyElement
    timesHtml.innerText = `时间: ${times}`
}



// 封装日期的函数 
function dateFormat(): string {
    const dt = new Date()
    const y = dt.getFullYear()
    const m = (dt.getMonth() + 1 + '').padStart(2, '0')
    const d = (dt.getDate() + '').padStart(2, '0')
    const hh = (dt.getHours() + '').padStart(2, '0')
    const mm = (dt.getMinutes() + '').padStart(2, '0')
    const ss = (dt.getSeconds() + '').padStart(2, '0')
    // yy-mm-dd hh:mm:ss
    // 可以根据需要输出相对应的时间格式
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

// 定时器动态修改渲染同学背景颜色
function clickChecked(value:string):void{
    if (value.includes('停')) {
        clearInterval(times)
    }else{
        times=setInterval(()=>{
            console.log('走进来')
            renderStudent()
        },100)
    }
}