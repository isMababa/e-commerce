/**
 * Created by Administrator on 2017/11/1.
 */
var xdataTt = [
    '方便,省去了去超市购买的时间 65.6%',
    '价格比线下超市或市场便宜 59.8%',
    '品类更丰富 44.0%',
    '能购买进口产品 38.0%',
    '品质比线下超市或市场更好 29.7%',
    '能购买到有机产品 26.6%',
    '其他 0.41%'
];
var colorT = ['#B5D335', '#8FC644', '#63AF42', '#14B5EB', '#17C8F4', '#F9EE06', '#F9D302'];
$(window).resize(function () {
    d3.select('#tcenter').select('svg').remove();
    drawBarLj('tcenter', xdataTt);
});
drawBarLj('tcenter', xdataTt);
function drawBarLj(divName, xdata) {
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
        .style("font-size", "16px")
        .attr("fill", "#ffffff")
        .attr('text-anchor','middle')
        .text("用户网购生鲜产品的原因");
    //定义g组，存放右侧柱图和文字
    _group = _gdraw1.selectAll("g")
        .data(xdata)
        .enter()
        .append("g")
        .attr('class','rectRight');
    _rect=_group.append('rect')
        .attr("x", '20%')
        .attr('y', function (data, i) {
            return 30 + i * 0.1 * heightT + i * 5;
        })
        .attr('width', function (data, i) {
            return widthT[i];
        })
        .attr('height', 0.1 * heightT)
        .attr('rx', 4)
        .attr('fill', function (data, i) {
            return colorT[i];
        });
    _text = _group.append("text")
        .attr('font-size', '1.5em')
        .attr('fill', '#333333')
        .attr("x", '21%')
        .attr('y', function (data, i) {
            return 30 + i * 0.1 * heightT + i * 5;
        })
        .attr('dy', '1.6em')
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
        .attr("x", '9%')
        .attr('y', function (data, i) {
            return 30 + i * 0.1 * heightT + i * 5;
        })
        .attr('width', 0.1*widthX)
        .attr('height', 0.1 * heightT)
        .attr('rx', 4)
        .attr('fill', function (data, i) {
            return colorT[i];
        });
    _text = _group1.append("text")
        .attr('font-size', '1.5em')
        .attr('fill', '#333333')
        .attr("x", '12.5%')
        .attr('y', function (data, i) {
            return 30 + i * 0.1 * heightT + i * 5;
        })
        .attr('dy', '1.6em')
        .text(function (d,i) {
            return i+1;
        });
}