var yi = document.querySelector('.yi')
var er = document.querySelector('.er')
var li = document.querySelectorAll('li')


// 随机数
function sj(n, m) {
    return parseInt(Math.random() * (n - m + 1) + m)
}


var timer;

yi.onclick = function () {
    var num = 20;
    // 获取到随机数
    timer = setInterval(function () {
        var sjs = sj(1, 20)
        console.log(sjs);
        for (var a = 0; a < li.length; a++) {
            li[a].style.backgroundColor = 'rgb(226, 188, 188)'
        }
        li[sjs].style.backgroundColor = 'red'
        num--
        num1(num)


    }, 100)
    function num1(a) {
        if (a < 0) {
            clearInterval(timer)
        }
    }
}
er.onclick = function () {
    var num = 20;
    // 获取到随机数
    timer = setInterval(function () {
        var sjs = sj(1, 20)
        var sj1 = sj(1, 20)
        console.log(sjs);
        for (var a = 0; a < li.length; a++) {
            li[a].style.backgroundColor = 'rgb(226, 188, 188)'
        }

        li[sjs].style.backgroundColor = 'red'
        li[sj1].style.backgroundColor = 'red'

        num--
        num1(num)
    }, 100)
    function num1(a) {
        if (a < 0) {
            // 清除定时器
            clearInterval(timer)
        }
    }
}








