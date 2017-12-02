/**
 * Created by Administrator on 2017/11/2.
 */
var xdataT = [
    '水果类 72.0%',
    '乳品 49.0%',
    '肉类 46.7%',
    '水产 4.63%',
    '蛋类 24.9%',
    '蔬菜类 24.9%'
];
var colors = ['#B5D335', '#8FC644', '#63AF42', '#14B5EB', '#17C8F4', '#F9EE06'];
$(window).resize(function () {
    d3.select('#bctLeft').select('svg').remove();
    drawBarT('bctLeft', xdataT);
});
drawBarT('bctLeft', xdataT);
function drawBarT(divName, xdata) {
    //1.定义svg宽高
    var svgwidth = $("#" + divName).width();
    var svgheight = $("#" + divName).height();
    //2.定义整体svg
    var _svg = d3.select("#" + divName)
        .append('svg')
        .attr('width', svgwidth)
        .attr('height', svgheight);
    //.style('background-color','gray');
    //3.真正画图可能要与画框之间都有一个边距,我们定义外边距(即实现绘图区与svg四边有距离)
    var _margin = {top: 10, left: 50, right: 10, bottom: 30};
    //4.定义G组,实现绘图区域
    var _gdraw1 = _svg.append('g')
        .attr('transform', 'translate(' + _margin.left + ',' + _margin.top + ')')
        .attr('id', 'gdraw1');
    var widthX = svgwidth - _margin.left - _margin.right;
    var widthT = [0.6 * widthX, 0.5 * widthX, 0.4 * widthX, 0.3 * widthX, 0.2 * widthX, 0.1 * widthX, 0.01 * widthX];
    var heightT = svgheight - _margin.top - _margin.bottom;
    //生成标题
    d3.select("#" + divName).select("svg").append("text")
        .attr("id", "titleT")
        .attr("x", svgwidth / 2)
        .attr("y", 20)
        .attr('text-anchor','middle')
        .style("font-size", "16px")
        .attr("fill", "#ffffff")
        .text("2015年网购品类分布");
    //定义g组，存放右侧柱图和文字
    _group = _gdraw1.selectAll("g")
        .data(xdata)
        .enter()
        .append("g")
        .attr('class','rectRight');
    _rect=_group.append('rect')
        .attr("x", '16%')
        .attr('y', function (data, i) {
            return 30 + i * 0.12 * heightT + i * 5;
        })
        .attr('width', function (data, i) {
            return widthT[i];
        })
        .attr('height', 0.12 * heightT)
        .attr('rx', 4)
        .attr('fill', function (data, i) {
            return colors[i];
        });
    _text = _group.append("text")
        .attr('font-size', '1.2em')
        .attr('fill', '#333333')
        .attr("x", '17%')
        .attr('y', function (data, i) {
            return 30 + i * 0.12 * heightT + i * 5;
        })
        .attr('dy', '1.2em')
        .text(function (d) {
            return d;
        });
    //定义g组，存放左侧柱图和文字
    _group1 = _gdraw1.selectAll(".g")
        .data(xdata)
        .enter()
        .append("g")
        .attr('class','rectLeft');
    _rect=_group1.append('rect')
        .attr("x", '5%')
        .attr('y', function (data, i) {
            return 30 + i * 0.12 * heightT + i * 5;
        })
        .attr('width', 0.1*widthX)
        .attr('height', 0.12 * heightT)
        .attr('rx', 4)
        .attr('fill', function (data, i) {
            return colors[i];
        });
    _text = _group1.append("text")
        .attr('font-size', '1.2em')
        .attr('fill', '#333333')
        .attr("x", '8.5%')
        .attr('y', function (data, i) {
            return 30 + i * 0.12 * heightT + i * 5;
        })
        .attr('dy', '1.2em')
        .text(function (d,i) {
            return i+1;
        });
}