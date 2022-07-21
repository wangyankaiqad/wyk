// let ajax = new XMLHttpRequest()
// // 制定发送方式和地址
// ajax.open('post', 'https://baidu.com')
// // 发送数据
// ajax.send()

// ajax.onreadystatechange = function () {
//     if (ajax.status === 200 && ajax.readyState === 4) {
//         console.log(ajax.response);
//     }
// }


// interface Iparame {
//     /*** 请求方式*/
//     meth: string,
//     /**请求地址 */
//     url: string,
//     /**发送请求的数据   可选可不选 */
//     data?: any
// }

// enum Status {
//     /**状态码*/
//     A = 200,
//     B = 4
// }

// // 定义的类型
// function getAjaxRes(parames: Iparame) {
//     // 定义ajax
//     let ajax = new XMLHttpRequest()
//     //  发送请求方式  和地址连接
//     ajax.open(parames.meth, parames.url)
//     //   发送数据
//     ajax.send(parames.data)
//     // 判断
//     ajax.onreadystatechange = function () {
//         if (ajax.status == Status.A && ajax.readyState == Status.B) {
//             console.log('我是成功的');
//         }
//     }
// }

// const params = { meth: 'get', url: "https://baidu.com" }
// getAjaxRes({ meth: params.meth, url: params.url })