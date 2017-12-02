/**
 * Created by Administrator on 2017/11/3.
 */
$(window).resize(function(){
    $("#canvas1").remove();
    $("#canvas2").remove();
    $("#canvas3").remove();
    $("#canvas4").remove();
    $("#bcb1").append('<canvas id="canvas1"></canvas>');
    $("#bcb2").append('<canvas id="canvas2"></canvas>');
    $("#bcb3").append('<canvas id="canvas3"></canvas>');
    $("#bcb4").append('<canvas id="canvas4"></canvas>');
    canvas1();
    canvas2();
    canvas3();
    canvas4();
});
canvas1();
canvas2();
canvas3();
canvas4();
// 定义文字位置
var txt_x = $('#bcb1').width() / 3;
var txt_y = $('#bcb1').height() * 2 / 5;
function canvas1() {
    var canvas = document.querySelector('#canvas1'),
        context = canvas.getContext('2d');
// 定义文字位置
    var txt_x = $('#bcb1').width() / 3;
    var txt_y = $('#bcb1').height() * 2 / 5;
// 定义边长、颜色、边数、canvas大小
    var length = $('#bcb1').width() * 2 / 5, fillColor = '#B1D22D', vertices = 6;
    canvas.width = $('#bcb1').width();
    canvas.height = $('#bcb1').height();

    var getDegree = function (vertices, i) {
        return 360 / vertices * i + 90;
    };

    var getRadian = function (degree) {
        return degree * Math.PI / 180;
    };

    context.beginPath();
    for (var i = 0; i < vertices; i++) {
        // 计算偏转
        var degree = getDegree(vertices, i),
            radian = getRadian(degree);

        // 增加1/3的canvas大小位移量以免被边缘挡住
        var x = Math.cos(radian) * length + canvas.width / 2;
        var y = Math.sin(radian) * length + canvas.height / 2;
        context.lineTo(x, y);
    }
    context.closePath();
//context.stroke();
    context.fillStyle = fillColor;
    context.fill();
    context.font = "bold 14px 宋体";
    context.fillStyle = "#333333";
    context.fillText("92.1%", txt_x+10, txt_y+7);
    context.fillText("电商网站", txt_x, txt_y+25);
//context.fillText("绘制填充文字",x,y);
}

//第二个
function canvas2() {
    var canvas = document.querySelector('#canvas2'),
        context = canvas.getContext('2d');
// 定义文字位置
    var txt_x = $('#bcb1').width() / 3;
    var txt_y = $('#bcb1').height() * 2 / 5;
// 定义边长、颜色、边数、canvas大小
    var length = $('#bcb2').width() * 2 / 5, fillColor = '#88C240', vertices = 6;
    canvas.width = $('#bcb2').width();
    canvas.height = $('#bcb2').height();

    var getDegree = function (vertices, i) {
        return 360 / vertices * i + 90;
    };

    var getRadian = function (degree) {
        return degree * Math.PI / 180;
    };

    context.beginPath();
    for (var i = 0; i < vertices; i++) {
        // 计算偏转
        var degree = getDegree(vertices, i),
            radian = getRadian(degree);

        // 增加1/3的canvas大小位移量以免被边缘挡住
        var x = Math.cos(radian) * length + canvas.width / 2;
        var y = Math.sin(radian) * length + canvas.height / 2;
        context.lineTo(x, y);
    }
    context.closePath();
//context.stroke();
    context.fillStyle = fillColor;
    context.fill();
    context.font = "bold 14px 宋体";
    context.fillStyle = "#333333";
    context.fillText("71.6%", txt_x+10, txt_y+7);
    context.fillText("超市", txt_x+14, txt_y+25);
//context.fillText("绘制填充文字",x,y);
}

//第三个
function canvas3() {
    var canvas = document.querySelector('#canvas3'),
        context = canvas.getContext('2d');
// 定义文字位置
    var txt_x = $('#bcb1').width() / 3;
    var txt_y = $('#bcb1').height() * 2 / 5;
// 定义边长、颜色、边数、canvas大小
    var length = $('#bcb3').width() * 2 / 5, fillColor = '#66AF46', vertices = 6;
    canvas.width = $('#bcb3').width();
    canvas.height = $('#bcb3').height();

    var getDegree = function (vertices, i) {
        return 360 / vertices * i + 90;
    };

    var getRadian = function (degree) {
        return degree * Math.PI / 180;
    };

    context.beginPath();
    for (var i = 0; i < vertices; i++) {
        // 计算偏转
        var degree = getDegree(vertices, i),
            radian = getRadian(degree);

        // 增加1/3的canvas大小位移量以免被边缘挡住
        var x = Math.cos(radian) * length + canvas.width / 2;
        var y = Math.sin(radian) * length + canvas.height / 2;
        context.lineTo(x, y);
    }
    context.closePath();
//context.stroke();
    context.fillStyle = fillColor;
    context.fill();
    context.font = "bold 14px 宋体";
    context.fillStyle = "#333333";
    context.fillText("57.7%", txt_x+10, txt_y+7);
    context.fillText("菜市场", txt_x+6, txt_y+25);
}

//第四个
function canvas4() {
    var canvas = document.querySelector('#canvas4'),
        context = canvas.getContext('2d');
// 定义文字位置
    var txt_x = $('#bcb1').width() / 3;
    var txt_y = $('#bcb1').height() * 2 / 5;
// 定义边长、颜色、边数、canvas大小
    var length = $('#bcb4').width() * 2 / 5, fillColor = '#1DC8F2', vertices = 6;
    canvas.width = $('#bcb4').width();
    canvas.height = $('#bcb4').height();

    var getDegree = function (vertices, i) {
        return 360 / vertices * i + 90;
    };

    var getRadian = function (degree) {
        return degree * Math.PI / 180;
    };

    context.beginPath();
    for (var i = 0; i < vertices; i++) {
        // 计算偏转
        var degree = getDegree(vertices, i),
            radian = getRadian(degree);

        // 增加1/3的canvas大小位移量以免被边缘挡住
        var x = Math.cos(radian) * length + canvas.width / 2;
        var y = Math.sin(radian) * length + canvas.height / 2;
        context.lineTo(x, y);
    }
    context.closePath();
    //context.stroke();
    context.fillStyle = fillColor;
    context.fill();
    context.font = "bold 14px 宋体";
    context.fillStyle = "#333333";
    context.fillText("22.0%", txt_x+10, txt_y+7);
    context.fillText("便利店", txt_x+7, txt_y+25);
}