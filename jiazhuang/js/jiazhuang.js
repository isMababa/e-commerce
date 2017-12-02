//l-top
var xdata = ["2014", "2015", "2016"];
var ydata = [3.7, 4.1, 4.2];
var ydataT = [1.9, 9.3, 2.2];
drawBar("l-top", ydata, xdata, ydataT);

function drawBar(divName, ydata, xdata, ydataT, bool) {
    var tooltip = d3.select("#" + divName)
        .append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);

    var svgwidth = $("#" + divName).width();
    var svgheight = $("#" + divName).height();
    /* console.log(svgwidth)*/
    //定义整体svg
    var svg = d3.select("#" + divName)
        .append("svg")
        .attr("width", svgwidth)
        .attr("height", svgheight);
    /*.style("background-color","#919191");*/
    //定义轴线四周边距
    var margin = {top: 15, left: 60, right: 10, bottom: 0};
    //定义G组实现绘图区
    var gdraw1 = svg.append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
        .attr("id", "gdraw1");
    //定义title  给其设高
    var titleHeight = 50; //标题高度
    //定义G组实现绘图区（标题高度后）
    var gdraw2 = gdraw1.append("g")
        .attr("transform", "translate(0," + titleHeight + ")")
        .attr("id", "gdraw2");
    //定义核心绘图区及周边距离
    var chartMargin = {top: 20, left: 20, right: 0, bottom: 20};
    //计算出绘图区的宽与高
    var chartHeight = svgheight - margin.top - margin.bottom - titleHeight;
    var chartWidth = svgheight - margin.left - margin.right;
    //计算出核心绘图区的宽与高（x轴和y轴）
    var yaxisHeight = chartHeight - chartMargin.bottom - chartMargin.top;
    var xaxisWidth = chartWidth - chartMargin.left - chartMargin.right;
    //定义G组绘制核心图区 增加X轴
    var gxaxis = gdraw2.append("g")
        .attr("id", divName + "xaxis")
        .attr("transform", "translate(0," + yaxisHeight + ")");
    //定义X轴
    var bandScale = d3.scaleBand()
        .padding(0.2)
        .domain(xdata)
        .range([0, svgwidth - xaxisWidth]);
    //生成X轴
    var xaxis = d3.axisBottom()
        .scale(bandScale);
    xaxis(gxaxis);
    //定义G组绘制核心图区 增加左侧Y轴
    var gyaxis = gdraw2.append("g")
        .attr("id", divName + "yaxis");
    //右侧Y轴
    var gyaxisT = gdraw2.append('g')
        .attr('id', divName + 'yaxisT')
        .attr('transform', 'translate(' + xaxisWidth + ',0)');

    //定义Y轴
    var linesScale = d3.scaleLinear()
        .domain([0, 2 * d3.max(ydata)])
        .range([yaxisHeight, 0]);

    var _linescaleT = d3.scaleLinear()
        .domain([-d3.max(ydataT), d3.max(ydataT)])
        .range([yaxisHeight, 0]);
    //生成Y轴
    var yaxis = d3.axisLeft()
        .scale(linesScale);
    yaxis(gyaxis);

    var yaxisT = d3.axisRight()
        .scale(_linescaleT);
    yaxisT(gyaxisT);

    gdraw2.append("g").append("text")
        .attr("id","titleT")
        .attr("x","17%")
        .attr("y",'-15%')
        .style("font-size", "16px")
        .text("2014-2016年中国建材家居市场规模")
        .attr("fill","#fff")
        .attr("font-weight","bold");

    //折线图
    var dataSetT = d3.zip(xdata, ydataT);//转换数据
    //构造线段生成器 生成path
    var _line = d3.line()
        .x(function (d) {
            return bandScale(d[0]) + bandScale.bandwidth() / 2
        })
        .y(function (d) {
            return _linescaleT(d[1])
        })
        .curve(d3.curveNatural);
    gdraw2.append("g")
        .append("path")
        .attr("class","g_zx")
        .attr("d", _line(dataSetT))//使用线段生成器
        .attr("stroke", "#f2801c")
        .attr("stroke-width", "1px")
        .attr("fill", "none");
    //追加节点
    gdraw2.append("g")
        .attr("id","g_zxjd")
        .selectAll("circle")
        .data(ydataT)
        .enter()
        .append("circle")
        .attr("cx", function (d, i) {
            return bandScale(xdata[i]) + bandScale.bandwidth() / 2
        })
        .attr("cy", function (d, i) {
            return _linescaleT(ydataT[i])
        })
        .attr("r", 10)//节点大小
        .attr("fill", "#f2801c")
        .on("mouseover", function (d, i) {
            tooltip.style("top", d3.event.pageY + "px")
                .style("left", d3.event.pageX + "px")
                .style("opacity", 1)
                .html(xdata[i] + "<br/>增长率:" + d+"%")
        })
        .on("mouseout", function () {
            tooltip.style("opacity", 0)
        });
    /*文字*/
    group2=gdraw2.append('g')
        .attr('class','zxT');
    _text=group2.selectAll("text")
        .data(ydataT)
        .enter()
        .append("text")
        .attr("x", function (d, i) {
            return bandScale(xdata[i])
        })
        .attr("text-anchor", "middle")
        .attr("dy","-1em")
        .attr("dx", bandScale.bandwidth() / 2)
        .attr("fill", "#000")

        .transition()
        .duration(5 * 1000)

        .tween("text", function (d) {
            var node = this;
            return function (t) {
                node.textContent = Math.round(10 * (t * d)) / 10.0+"%";
                node.setAttribute("y", _linescaleT(t * d))
            }
        });
    //折线动画
    var path = document.getElementsByClassName('g_zx');  //获取class标签为line的元素
    var length = path[0].getTotalLength();               //获取第一个折线的总共的长度
    d3.select('.g_zx')
        .style('stroke-dasharray', length)//stroke-dasharray设置线段间隔长度
        .style('stroke-dashoffset',length)//stroke-dashoffset线段的偏移量
        .transition()
        .duration(1400)
        .ease(d3.easeCubic)
        .delay(600)
        .style('stroke-dashoffset',0);


    /*柱子*/
    var gbar = gdraw2.append("g");
    gbar.selectAll("rect")
        .data(ydata)
        .enter()
        .append("rect")
        .attr("width", bandScale.bandwidth())
        .attr("height", 0)
        .attr("fill", "#a7fa1a")
        .attr("x", function (d, i) {
            return bandScale(xdata[i])

        })
        .attr("y", yaxisHeight)

        .on("click", function () {
            d3.select(this.parentNode)
                .selectAll("rect")
                .style("fill", "#2cfaff");
            d3.select(this)
                .style("fill", "red");
        })
        .on("mouseover", function (d, i) {
            tooltip.style("top", d3.event.pageY + "px")
                .style("left", d3.event.pageX + "px")
                .style("opacity", 1)
                .html(xdata[i] + "<br/>销售:" + d+"万元")
        })
        .on("mouseout", function () {
            tooltip.style("opacity", 0)
        })
        .transition()
        .duration(5 * 1000)
        .attr("y", function (d, i) {
            return linesScale(d)
        })
        .attr("height", function (d, i) {
            return yaxisHeight - linesScale(d)
        });

    /*文字*/
    gbar.selectAll("text")
        .data(ydata)

        .enter()
        .append("text")
        .attr("x", function (d, i) {
            return bandScale(xdata[i])
        })
        .attr("text-anchor", "middle")
        /* .attr("dy","1em")*/
        .attr("dx", bandScale.bandwidth() / 2)
        .attr("fill", "#000")

        .transition()
        .duration(5 * 1000)

        .tween("text", function (d) {
            var node = this;
            return function (t) {
                node.textContent =Math.round(10 * (t * d)) / 10.0+"万元";
                node.setAttribute("y", linesScale(t * d))
            }
        });
    /*坐标线*/
    if (bool == true) {
        drawYaxisLine(divName, xaxisWidth);
        drawXaxisLine(divName, yaxisHeight)
    }

}

function drawYaxisLine(divName, xaxisWidth) {
    d3.select("#" + divName + "yaxis")
        .selectAll("g")
        .append("line")
        .attr("x1", 0)
        .attr("y1", 0)
        .attr("x2", xaxisWidth)
        .attr("y2", 0)
        .attr("stroke", "#cccccc");
}

function drawXaxisLine(divName, yaxisHeight) {
    d3.select("#" + divName + "xaxis")
        .selectAll("g")
        .append("line")
        .attr("x1", 0)
        .attr("y1", -yaxisHeight)
        .attr("x2", 0)
        .attr("y2", 0)
        .attr("stroke", "#cccccc")
}

/* window.addEventListener("resize", function () {
     drawBar.resize();
 });*/

//l-cent
function drawBar1() {
    var Myecharts = echarts.init(document.getElementById("l-cent"));
    var options = {
        color: ['#ff6700'],
        title: {
            text: '2016年互联网家装用户装修费用分布',
            left: "center",
            textStyle: {
                color: "#fff",
                align: "center",
                fontSize: 16,
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: false        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        /* legend: {
             data:['蒸发量']
         },*/
            /* toolbox: {
                 show: true,
              /* feature: {
                     dataView: {show: true, readOnly: false},
                     magicType: {show: true, type: ['line', 'bar']}
                 }
        },*/
        calculable: true,
        grid: {
            top: 70,
            bottom: 30
        },
        xAxis: [
            {
                type: 'category',
                data: ["3万元以下", "3-10万元", "10-30万元", "30万元以上"],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                show: false

            }

        ],
        series: [
            {
                name: '占有率',
                type: 'bar',
                data: ["16.3", "59.4", "22.8", "1.4"],
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                }
            }
        ]
    };

    Myecharts.setOption(options);
}

$(function () {
    drawBar1()
});

//l-bot
function drawBar2() {
    var Myecharts = echarts.init(document.getElementById("l-bot"));
    var options = {
        color: ['#8df815'],
        title: {
            text: '2016年互联网家装用户装修面积分布',
            textStyle: {
                color: "#fff",
                align: "center",
                fontSize: 16,
                fontWeight: 'bold'
            },
            left: 150,
            top: 10
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: false      // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '30%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        yAxis: [
            {

                type: 'category',
                data: ['3.1%', '5.3%', '27.7%', '26.0%', '30.1%', '7.1%', '0.8%'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: "#b1d334"
                    }
                },
                axisLabel: {
                    margin: 30,
                    textStyle: {
                        color: "#000"
                    }

                }
            },
            {
                offset: -470,
                type: 'category',
                data: ['>300平米', '180-300平米', '120-180平米', '90-120平米', '60-90平米', '30-60平米', '0-30平米'],
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        normal: {
                            backgroundColor: "#b1d334"
                        }
                    }

                }
            }

        ],
        xAxis: [
            {
                show: false,
                type: 'value',
                splitLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '面积占比',
                type: 'bar',
                barWidth: '60%',
                data: ['3.1', '5.3', '27.7', '26.0', '30.1', '7.1', '0.8']
            }
        ]
    };


    Myecharts.setOption(options);
}

$(function () {
    drawBar2()
});
//c-t-left

var chart = AmCharts.makeChart( "c-t-left", {
    "titles": [{
        "text": "2016年建材家居市场占比",
        "size": 16,
        "color": '#fff'
    }],
    "type": "pie",
    "theme": "light",
    "dataProvider": [ {
        "title": "家装电商",
        "litres": 40
    }, {
        "title": "其他",
        "litres": 60
    } ],
    "marginTop":-10,
    "marginLeft":-8,
    "titleField": "title",
    "valueField": "litres",
    "fontSize":10,
    "labelRadius": -5,
    "colors":["#fadb47", "#23ce2b"],
    "radius": "35%",
    "innerRadius": "60%",
    "labelText": "[[title]]",
    "export": {
        "enabled": true
    }
} );
//c-t-right
var chart = AmCharts.makeChart("c-t-right", {
    "titles": [{
        "text": "2016年用户选择装修公司和工长的决策周期",
        "size": 16,
        "color": '#fff'
    }],
    "type": "pie",
    "theme": "light",
    "innerRadius": "10%",
    "radius": "30%",
    "gradientRatio": [-0.4, -0.4, -0.4, -0.4, -0.4, -0.4, 0, 0.1, 0.2, 0.1, 0, -0.2, -0.5],
    "dataProvider": [{
        "country": "0-30天",
        "litres": 61.5
    }, {
        "country": "31-60天",
        "litres": 28.1
    }, {
        "country": "61-90天",
        "litres": 6.2
    }, {
        "country": "90天以上",
        "litres": 4.2
    }],
    "marginTop":10,

    "balloonText": "[[value]]%",
    "valueField": "litres",
    "titleField": "country",
    "labelRadius": 2,
    "fontSize":10,
    "colors":["#8fff15", "#FF6600", "#FF9E01", "#FCD202"],
    "balloon": {
        "drop": true,
        "adjustBorderColor": false,
        "color": "#FFFFFF",
        "fontSize": 16
    },
    "export": {
        "enabled": true
    }
});
//c-cent
//c-c-top
//定义城市坐标点
var provjson=[
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                116.38916015624999,
                39.90973623453719
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                117.22412109375,
                39.16414104768742
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                114.040216,22.60759
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                121.491121,31.268655
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                104.050484,30.618484
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                114.297778,30.698012
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                106.534119,29.675093
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                113.26753,23.255156
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                108.925768,34.374907
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                113.598681,34.770585
            ]
        }
    },
    {
        "type": "Feature",
        "properties": {},
        "geometry": {
            "type": "Point",
            "coordinates": [
                117.204551,39.167537
            ]
        }
    }
];
//定义数据与上面四个坐标点一致
var dataset=[
    {name:"北京",points:[116.38916015624999, 39.90973623453719],value:10000},
    {name:"深圳",points:[114.040216,22.60759],value:9000},
    {name:"上海",points:[121.491121,31.268655],value:8000},
    {name:"成都",points:[104.050484,30.618484],value:7000},
    {name:"武汉",points:[114.297778,30.698012],value:6000},
    {name:"重庆",points:[106.534119,29.675093],value:5000},
    {name:"广州",points:[113.26753,23.255156],value:4000},
    {name:"西安",points:[108.925768,34.374907],value:3000},
    {name:"郑州",points:[113.598681,34.770585],value:2000},
    {name:"天津",points:[117.204551,39.167537],value:1000}

];
//定义半径
var rsize=d3.scaleQuantize()
    .domain([0,10000])
    .range([5,8,14,16]);

d3.json("json/china.json",function (error,data) {

    //定义投影
    var projection=d3.geoMercator()
        .center([100, 30])
        .fitExtent([[0,0],[$("#c-c-top").width(),$("#c-c-top").height()]],data);//自适应品屏幕尺寸
    /* .scale("600");*/
    //定义地图路径生成器
    var _getPath=d3.geoPath()
        .projection(projection);
    //定义svg,画path
    var svg=d3.select("#c-c-top")
        .append("svg")
        .attr("width",$("#c-c-top").width())
        .attr("height",$("#c-c-top").height());
    svg.append("path")
        .attr("d",_getPath(data))
        /*.attr("transform","translate(0,150)")*/
        .attr("fill","#7bffbe")
        .attr("stroke","#a0891a")
        .attr("stroke-width","1px");
    svg.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx",function (d) {
            var point=d.points;
            var xypoint=projection(point);
            return xypoint[0]
        })
        .attr("cy",function (d) {
            var point=d.points;
            var xypoint=projection(point);
            return xypoint[1]
        })
        .attr("r",function (d) {
            return rsize(d.value)
        })
        .attr("fill",function (d,i) {
            return d3.schemeCategory10[i]
        });
    svg.append("text")
        .attr("id","titleT")
        .attr("x","10%")
        .attr("y",'5%')
        .style("font-size", "16px")
        .attr("fill","#fff")
        .text("2016年互联网家装用户居住城市分布TOP10")
        .attr("font-weight","bold");

});
//c-c-bot
var chart = AmCharts.makeChart("c-c-bot", {
    "type": "serial",
    "theme": "light",
    "marginRight": 70,
    "dataProvider": [{
        "country": "北京",
        "visits": 3025,
        "color": "#1f77b4"
    }, {
        "country": "深圳",
        "visits": 1882,
        "color": "#ff7f0e"
    }, {
        "country": "上海",
        "visits": 1809,
        "color": "#2ca02c"
    }, {
        "country": "成都",
        "visits": 1322,
        "color": "#d62728"
    }, {
        "country": "武汉",
        "visits": 1122,
        "color": "#9467bd"
    }, {
        "country": "重庆",
        "visits": 1114,
        "color": "#8c564b"
    }, {
        "country": "广州",
        "visits": 984,
        "color": "#e377c2"
    }, {
        "country": "西安",
        "visits": 711,
        "color": "#7f7f7f"
    }, {
        "country": "郑州",
        "visits": 665,
        "color": "#bcbd22"
    }, {
        "country": "天津",
        "visits": 580,
        "color": "#17becf"
    }],
    "valueAxes": [{
        "position": "left",
        "axisAlpha": 0,
        "gridAlpha": 0,
        /*"title": "Visitors from country",*/
        "labelsEnabled": false
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "<b>[[category]]: [[value]]</b>",
        "fillColorsField": "color",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "type": "column",
        "valueField": "visits"
    }],
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "marginTop":-5,
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "labelRotation": 45,
        "axisAlpha": 0,
        "gridAlpha": 0
    },
    "export": {
        "enabled": true
    }

});


//c-bot
var chart1 = AmCharts.makeChart("c-bot", {

    "theme": "light",
    "type": "serial",
    "startDuration": 2,
    "dataProvider": [{
        "country": "材料选购",
        "visits": 9.4,
        "color": "#FF0F00"
    }, {
        "country": "装修咨询",
        "visits": 35.8,
        "color": "#FF6600"
    }, {
        "country": "设计与报价",
        "visits": 21.7,
        "color": "#FF9E01"
    }, {
        "country": "装修攻略",
        "visits": 59.1,
        "color": "#FCD202"
    }, {
        "country": "找装修服务",
        "visits": 24.9,
        "color": "#F8FF01"
    }, {
        "country": "查看效果图",
        "visits": 46.3,
        "color": "#B0DE09"
    }, {
        "country": "其他",
        "visits": 5.3,
        "color": "#04D215"
    }],
    "valueAxes": [{//Y轴
        "position": "left",
        "unit": "%",//轴线单位
        "axisAlpha": 0,//轴线透明度
        "gridAlpha": 0,
        "labelsEnabled": false //轴线是否显示
    }],
    "graphs": [{
        "balloonText": "[[category]]: <b>[[value]]%</b>",
        "colorField": "color",
        "fillAlphas": 0.85,
        "lineAlpha": 0.1,
        "type": "column",
        "topRadius": 0,
        "valueField": "visits"
    }],
    "depth3D": 55,
    "angle": 25,
    "chartCursor": {
        "categoryBalloonEnabled": false,
        "cursorAlpha": 0,
        "zoomable": false
    },
    "marginTop":-30,
    "categoryField": "country",
    "categoryAxis": {//X轴
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0

    },
    "export": {
        "enabled": true
    }

}, 0);

//r-top
function drawBar3() {
    var Myecharts = echarts.init(document.getElementById("r-top"),"customed");
    var options = {
        title: {
            text: '2016年互联网家装用户&全体网民年龄分布',
            left: "center",
            top:"6",
            textStyle: {
                fontSize: 16,
                color: '#fff',
                fontWeight: 'bold'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: false        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['29岁以下', '30-39岁', '40岁以上'],
            top: 35,
            left: "center"
        },
        grid: {
            left: '5%',
            right: '1%',
            bottom: '3%',
            top:"40%",
            containLabel: true
        },
        xAxis: {
            show: false
        },
        yAxis: {
            type: 'category',
            data: ['全体网民', '互联网家装用户'],
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            }
        },
        series: [
            {
                name: '29岁以下',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [54, 60]
            },
            {
                name: '30-39岁',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [23.8, 32.3]
            },
            {
                name: '40岁以上',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'insideRight'
                    }
                },
                data: [22.3, 8]
            }

        ]
    };
    Myecharts.setOption(options);
}

$(function () {
    drawBar3()
});
//r-cent
var chart2 = AmCharts.makeChart("r-cent", {
    "titles": [{
        "text": "2016年互联网家装用户&全体网民学历分布",
        "size": 16,
        "color":"#fff"
    }],
    "theme": "light",
    "type": "serial",
    "dataProvider": [{
        "country": "本科及以上",
        "year2004": 11.2,
        "year2005": 45.3
    }, {
        "country": "大专",
        "year2004": 8.4,
        "year2005": 31.2
    }, {
        "country": "高中及以下",
        "year2005": 23.5,
        "year2004": 80.4

    }],
    "valueAxes": [{
        "stackType": "3d",
        "unit": "%",
        "position": "left",
        "axisAlpha": 0,
        "gridAlpha": 0,
        "labelsEnabled": false
        /*"title": "GDP growth rate",*/
    }],
    "startDuration": 1,
    "graphs": [{
        "balloonText": "全体网民: <b>[[value]]%</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "全体网民",
        "type": "column",
        "valueField": "year2004"
    }, {
        "balloonText": "互联网家装用户: <b>[[value]]%</b>",
        "fillAlphas": 0.9,
        "lineAlpha": 0.2,
        "title": "互联网家装用户",
        "type": "column",
        "valueField": "year2005"
    }],
    "plotAreaFillAlphas": 0.1,
    "legend":{
        "align":"center"
    },
    "depth3D": 120,
    "marginTop": -50,
    "angle": 30,
    "colors":["#8fff15", "#ff6700"],
    "categoryField": "country",
    "categoryAxis": {
        "gridPosition": "start",
        "axisAlpha": 0,
        "gridAlpha": 0
    },
    "export": {
        "enabled": true
    }
});
//r-bot
var chart3 = AmCharts.makeChart("r-bot", {
    "titles": [{
        "text": "2016年互联网家装用户偏爱的装修风格",
        "size": 16,
        "color":"#fff"
    }],
    "type": "funnel",
    "theme": "light",
    "dataProvider": [{
        "title": "现代简约",
        "value": 76.9
    }, {
        "title": "田园风格",
        "value": 19.4
    }, {
        "title": "欧式古典",
        "value": 16.7
    }, {
        "title": "中式风格",
        "value": 15.5
    }, {
        "title": "地中海风格",
        "value": 15.2
    }, {
        "title": "美式乡村",
        "value": 11.9
    }, {
        "title": "东南亚风格",
        "value": 3.4
    }, {
        "title": "其他",
        "value": 7.6
    }],
    "balloon": {
        "fixedPosition": true
    },
    "colors":["#ecfc30", "#FF6600", "#FF9E01", "#FCD202", "#F8FF01", "#B0DE09", "#04D215", "#0D8ECF"
    ],
    "valueField": "value",
    "titleField": "title",
    "marginRight": 120,
    "marginLeft": 20,
    "startX": -500,
    "depth3D": 100,
    "angle": 40,
    "outlineAlpha": 1,
    "outlineColor": "#FFFFFF",
    "outlineThickness": 2,
    "labelPosition": "right",
    "labelRadius": -10,
    "balloonText": "[[title]]: [[value]][[description]]%",
    "export": {
        "enabled": true
    }
});