// 定义学生数据
var dataList = [
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
];
// 定义所有同学的名单
var allStudentList = dataList;
// 获取ul标签
var ul = document.getElementsByTagName('ul')[0];
// 获取单人点击按钮
var oneButton = document.getElementById('one');
// 获取双人点名按钮
var twoButton = document.getElementById('two');
// 获取男生点击按钮
var bodyButton = document.getElementById('three');
// 获取女生点击按钮
var girlButton = document.getElementById('four');
// 获取存放名字的dom
var saveCheckedStudentDom = document.getElementsByClassName('content_div')[0];
// 获取随机数后的添加名字
var saveSpan = document.getElementById('name');
saveSpan.style.backgroundImage = randomColor();
// 设置定时器
// @ts-ignore
var times;
// 渲染数据  
function renderStudent() {
    ul.innerHTML = '';
    allStudentList.forEach(function (item) {
        //创建li标签
        var li = document.createElement('li');
        // 给li标签添加样式
        li.className = 'liColor';
        // 添加渐变色
        li.style.backgroundImage = randomColor();
        // 给li标签添加内容
        li.innerHTML = "<apan>".concat(item.name, "</apan>");
        // 讲li标签添加到ul中
        ul.appendChild(li);
    });
}
// 自调用  渲染页面的方法
renderStudent();
// 单人点名
function oneStudent(evevt) {
    if (evevt.target.innerText.includes('停')) {
        oneButton.innerHTML = '单人点名';
        //    随机数据进行fuzhi
        var randoms = randomFc(allStudentList);
        var checkedStudents = allStudentList[randoms];
        //   给随机的名字添加随机颜色
        saveSpan.style.backgroundImage = randomColor();
        // 给随机的地方添加名字
        saveSpan.innerText = checkedStudents.name;
        // 讲名字添加到响应到额位置
        saveCheckedStudentDom.appendChild(saveSpan);
    }
    else {
        oneButton.innerText = '停止';
    }
}
// 点击两个人
function downStudent(event) {
    clickChecked(event.target.innerText);
    if (event.target.innerText.includes('停')) {
        // 第一个随机数
        var randoms = randomFc(allStudentList);
        // 第二个人随机数
        var twoRandom = randomFc(allStudentList);
        // 分别获取两个随机数的名字
        var firstRandomStudent = allStudentList[randoms];
        var secondRandomStudent = allStudentList[twoRandom];
        saveSpan.style.backgroundImage = randomColor();
        saveSpan.innerText = "".concat(firstRandomStudent.name, ",").concat(secondRandomStudent.name);
        saveCheckedStudentDom.appendChild(saveSpan);
        twoButton.innerText = "双人点名";
    }
    else {
        twoButton.innerText = '停止';
    }
}
// 男女生点名下标获取
function paceageBody() {
    // 男生下标存放
    var bodyIndex = [];
    // 女生下标存放
    var girlIndex = [];
    allStudentList.forEach(function (item, index) {
        if (item.sex === 0) {
            bodyIndex.push(index);
        }
        else {
            girlIndex.push(index);
        }
    });
    return {
        bodyIndex: bodyIndex,
        girlIndex: girlIndex
    };
}
// 男生或女生点名
function bodyOrGrilStudent(sex, event) {
    clickChecked(event.target.innerText);
    if (event.target.innerText.includes('停')) {
        if (sex === 0) {
            bodyButton.innerText = '男生点名';
        }
        else {
            girlButton.innerText = '女生点名';
        }
        // 分别获取不同的下标
        var result = paceageBody();
        //分别获取不同的数组
        var bodyIndex = result.bodyIndex, girlIndex = result.girlIndex;
        // 根据参数判断是女生还是男生
        var bodyOrgril = sex === 0 ? bodyIndex : girlIndex;
        //获取到数组的下标
        var bodyorGirlRandomIndex = randomFc(bodyOrgril);
        //获取body的index
        var checkedBody = allStudentList[bodyOrgril[bodyorGirlRandomIndex]];
        saveSpan.style.backgroundImage = randomColor();
        saveSpan.innerText = checkedBody.name;
        saveCheckedStudentDom.appendChild(saveSpan);
    }
    else {
        if (sex === 0) {
            bodyButton.innerText = '停止';
        }
        else {
            girlButton.innerText = '停止';
        }
    }
}
// 封装获取随机数的函数
// 封装获取随机数的函数
function randomFc(array) {
    // 获取随机数的最大值
    var maxs = array.length - 1;
    // 获取随机数的最小值
    var mins = 0;
    // 生成随机数
    var randoms = Math.floor(Math.random() * (maxs - mins) + mins);
    return randoms;
}
// rgb颜色随机数
function randomParams() {
    return Math.floor(Math.random() * 256);
}
// 渐变颜色随机数
function randomColor() {
    var start = randomParams();
    var end = randomParams();
    var color = "linear-gradient(to right, rgb(".concat(start, ",").concat(randomParams(), ",").concat(randomParams(), "), rgb(").concat(end, ",").concat(randomParams(), ",").concat(randomParams(), "))");
    return color;
}
getCurrentTime();
setInterval(function () {
    getCurrentTime();
}, 1000);
// 获取当前时间
function getCurrentTime() {
    // 格式化年月日
    var times = dateFormat();
    // 渲染到页面
    var timesHtml = document.getElementsByClassName('currentTime')[0];
    timesHtml.innerText = "\u65F6\u95F4: ".concat(times);
}
// 封装日期的函数 
function dateFormat() {
    var dt = new Date();
    var y = dt.getFullYear();
    var m = (dt.getMonth() + 1 + '').padStart(2, '0');
    var d = (dt.getDate() + '').padStart(2, '0');
    var hh = (dt.getHours() + '').padStart(2, '0');
    var mm = (dt.getMinutes() + '').padStart(2, '0');
    var ss = (dt.getSeconds() + '').padStart(2, '0');
    // yy-mm-dd hh:mm:ss
    // 可以根据需要输出相对应的时间格式
    return "".concat(y, "-").concat(m, "-").concat(d, " ").concat(hh, ":").concat(mm, ":").concat(ss);
}
// 定时器动态修改渲染同学背景颜色
function clickChecked(value) {
    if (value.includes('停')) {
        clearInterval(times);
    }
    else {
        times = setInterval(function () {
            console.log('走进来');
            renderStudent();
        }, 100);
    }
}
