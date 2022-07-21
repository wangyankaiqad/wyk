

// // 创建ajax
// let ajax = new XMLHttpRequest()
// // 制定发送方式和url
// ajax.open('get', 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
// //发送数据
// ajax.send()
// //判断是不是返回成功和状态码
// ajax.onreadystatechange = function () {
//     if (ajax.status === 200 && ajax.readyState === 4) {
//         console.log(ajax.response);
//     }
// }


// enum Status {
//     a = 200,
//     b = 4
// }


// interface Iparame {
//     meth: string,
//     url: string,
//     data?: any
// }


// function getAjaxRes(parames:Iparame) {
//     let ajax = new XMLHttpRequest()
//     // meth方法  url地址
//     ajax.open(parames.meth, parames.url)
//     ajax.send(parames.data)
//     // 
//     ajax.onreadystatechange = function () {
//         if (ajax.status === Status.a && ajax.readyState === Status.b) {
//             console.log('我是成功的');

//         }
//     }
// }

// const params = { meth: 'get', url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata' }

// getAjaxRes({ meth: params.meth, url: params.url })


