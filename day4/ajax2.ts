
// 定义ajax
let ajax = new XMLHttpRequest()
// 发送方式和地址
ajax.open('get', 'https://baidu.com')
// 发送请求
ajax.send()
// 接受
ajax.onreadystatechange = function () {
    if (ajax.status === 200 && ajax.readyState == 4) {
        console.log(ajax.response);

    }
}
// 定义数据类型
interface Iparame {
    meth: string,
    url: string,
    data?: any
}
// 状态码
enum Status {
    a = 200,
    b = 4
}

function getAjaxRes(parames: Iparame) {
    // 定义ajax
    let ajax = new XMLHttpRequest()
    //    获取地址  和请求方式
    ajax.open(parames.meth, parames.url)
    //   发送请求数据
    ajax.send(parames.data)


    ajax.onreadystatechange = function () {
        if (ajax.status == Status.a && ajax.readyState == Status.b) {
            console.log('我是成功的');
        }
    }
}
const parames = { meth: 'get', url: 'https://baidu.com' }

getAjaxRes({ meth: parames.meth, url: parames.url })
