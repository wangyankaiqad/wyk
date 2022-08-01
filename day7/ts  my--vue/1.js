var data = [
    {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
    },
    {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
    },
    {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
    },
    {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
    },
    {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
    },
    {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
    },
    {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
    },
    {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
    },
    {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
    },
    {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
    }
];
// 获取数据  渲染页面
getlist(data);
function getlist(res) {
    var tbody = document.querySelector('tbody');
    // 清空tbody的内容
    tbody.innerHTML = '';
    for (var a = 0; a < res.length; a++) {
        // 创建tr标签
        var tr = document.createElement('tr');
        tr.innerHTML = "\n            <td>".concat(res[a].id, "</td>\n            <td>").concat(res[a].goods_name, "</td>\n            <td>").concat(res[a].price, "</td>\n            ");
        // 添加进tbody里
        tbody.append(tr);
    }
}
// 点击事件   id
var flag = false;
function dian1() {
    var kong = [];
    if (flag == false) {
        kong = data.sort(function (a, b) {
            return b.id - a.id;
        });
        getlist(kong);
        flag = !flag;
    }
    else {
        kong = data.sort(function (a, b) {
            return a.id - b.id;
        });
        getlist(kong);
        flag = !flag;
    }
}
// 点击 排序
function dian2() {
    var kong = [];
    if (flag == false) {
        kong = data.sort(function (a, b) {
            return b.price - a.price;
        });
        getlist(kong);
        flag = !flag;
    }
    else {
        kong = data.sort(function (a, b) {
            return a.price - b.price;
        });
        getlist(kong);
        flag = !flag;
    }
}
//   搜索
function dian3() {
    //@ts-ignore
    // 获取input框的数据
    var inputValue = document.getElementsByClassName('input-value')[0].value;
    console.log(inputValue);
    var kong = [];
    if (inputValue) {
        kong = data.filter(function (item) {
            return item.goods_name.includes(inputValue);
        });
    }
    getlist(kong);
}
// 
function dian4(event) {
    var num = event.target.value;
    var kong = [];
    // 截取长度  从新赋值
    kong = data.slice(0, num);
    getlist(kong);
}
