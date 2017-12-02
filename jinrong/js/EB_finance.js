/**
 * Created by Administrator on 2017/10/16.
 */

//1.左上部分折柱混合图
//可视化数据
var ydataTt=[38.5,56.6,79.4,111.5,149.0,191.0,233.6,275.4];
var xdataTt=['2013','2014','2015','2016','2017e','2018e','2019e',
    '2020e'];
//开发数据
var ydataTtdep=[42.3,46.8,40.3,40.5,33.6,28.2,22.3,17.9];
//改变窗口改变尺寸
$(window).resize(function(){
    d3.select("#MyChart1Tt").select("svg").remove();
    d3.select("#MyChart1Tt").select(".legendT").remove();
    drawBarTt('MyChart1Tt',xdataTt,ydataTt,ydataTtdep,false);
});
drawBarTt('MyChart1Tt',xdataTt,ydataTt,ydataTtdep,false);
function drawBarTt(divName,xdata,ydata,ydataT,bool){
    //定义鼠标悬停提示信息
    var _tooltipArea=d3.select("#"+divName)
        .append("g")
        .append("div")
        .attr("class","tooltip")
        .attr("class","pa");
    //1.定义svg宽高
    var svgwidth=$("#"+divName).width();
    var svgheight=$("#"+divName).height();
    //2.定义整体svg
    var _svg=d3.select("#"+divName)
        .append('svg')
        .attr('width',svgwidth)
        .attr('height',svgheight);
    //.style('background-color','gray');
    //3.真正画图可能要与画框之间都有一个边距,我们定义外边距(即实现绘图区与svg四边有距离)
    var _margin={top:10,left:50,right:10,bottom:30};
    //4.定义G组,实现绘图区域
    var _gdraw1=_svg.append('g')
        .attr('transform','translate('+_margin.left+','+_margin.top+')')
        .attr('id','gdraw1');
    //5.定义title，给其设定高度
    var _titleHeight=50;
    //6.定义G组，实现绘图区（去标题高度之后）
    var _gdraw2=_gdraw1.append("g")
        .attr('transform','translate(0,'+_titleHeight+')')
        .attr('id','gdraw2');
    //7.定义核心绘图区与周边距离
    var _chartmargin={top:20,left:20,right:20,bottom:20};
    //8.计算出绘图区的宽与高
    var chartwidth=svgwidth-_margin.left-_margin.right;
    var chartheight=svgheight-_margin.top-_margin.bottom-_titleHeight;
    //9.计算出核心绘图区的宽和高(x轴和y轴)
    var xaxiswidth=chartwidth-_chartmargin.left-_chartmargin.right;
    var yaxisheight=chartheight-_chartmargin.top-_chartmargin.bottom;
    //10.定义G组,以添加x轴
    var gxaxis=_gdraw2.append('g')
        .attr('id',divName+'xaxis')
        .attr('transform','translate(0,'+yaxisheight+')');
    //11.定义x轴
    var _bandscale=d3.scaleBand()
        .padding(0.2)
        .domain(xdata)
        .range([0,xaxiswidth]);
    //12.生成x轴
    var xaxis=d3.axisBottom()
        .scale(_bandscale);
    //13.定义G组以添加y轴
    //左侧y轴
    var gyaxis=_gdraw2.append('g')
        .attr('id',divName+'yaxis');
    //右侧y轴(折线图)
    var gyaxisT=_gdraw2.append('g')
        .attr('id',divName+'yaxisT')
        .attr('transform','translate('+xaxiswidth+',0)');
    //14.定义y轴
    var _linescale=d3.scaleLinear()
        .domain([0,(d3.max(ydata)*1.8+10)]).nice()
        .range([yaxisheight,0]);
    var _linescaleT=d3.scaleLinear()
        .domain([-(d3.max(ydataT)+10),(d3.max(ydataT)+10)]).nice()
        .range([yaxisheight,0]);
    //15.生成y轴
    var yaxis=d3.axisLeft()
        .scale(_linescale);
    var yaxisT=d3.axisRight()
        .scale(_linescaleT);
    //16.绘制y轴
    yaxis(gyaxis);
    yaxisT(gyaxisT);
    //17.绘制x轴
    xaxis(gxaxis);
    //18.设置图形经过互动的g组
    var _rectHover=_gdraw2.append("g");
    //19.定义坐标轴相关颜色
    //定义X轴
    d3.select('#'+divName+'xaxis')
        .selectAll('line')
        .attr('stroke', 'none');//x轴刻度线颜色
    d3.select('#'+divName+'xaxis')
        .selectAll('text')
        .attr('fill', '#000')//x轴文字颜色
        .attr("font-size",'12px');
    d3.select('#'+divName+'xaxis')
        .selectAll('path')
        .attr('stroke', '#000');//x轴颜色
    //定义左侧Y轴
    d3.select('#'+divName+'yaxis')
        .selectAll('line')
        .attr('stroke', 'none');//y轴刻度线颜色
    d3.select('#'+divName+'yaxis')
        .selectAll('text')
        .attr('fill', '#000');//y轴文字颜色
    d3.select('#'+divName+'yaxis')
        .selectAll('path')
        .attr('stroke', '#000');//y轴颜色
    //定义右侧Y轴
    d3.select('#'+divName+'yaxisT')
        .selectAll('line')
        .attr('stroke', 'none');//y轴刻度线颜色
    d3.select('#'+divName+'yaxisT')
        .selectAll('text')
        .attr('fill', 'none');//y轴文字颜色
    d3.select('#'+divName+'yaxisT')
        .selectAll('path')
        .attr('stroke', 'none');//y轴颜色
    //19.添加柱形图
    var rectwidth=_bandscale.bandwidth();
    //定义数据
    _group1=_gdraw2.append('g')
        .attr('class','rects');
    _rect=_group1.selectAll("rect")
        .data(ydata)
        .enter()
        .append("rect")
        .attr("x",function(d,i){
            return _bandscale(xdata[i]);
        })
        .attr("y",yaxisheight)
        .attr('width',rectwidth)
        .attr("height",0)
        .style('fill','#b1d334')
        .on("click",function(){
            d3.select(this.parentNode)
                .selectAll("rect")
                .style("fill","#b1d334");
            d3.select(this).style("fill","#b1d334");
        })
        .on("mouseover",function(d,i){
            //设置文本框提示内容
/*            _tooltipArea.style("top",d3.event.clientY+5+'px')
                .style("left",d3.event.clientX+5+'px')
                .style("opacity",1)
                .style("display","block")
                .html(xdata[i]+"<br/>综合支付交易规模（万亿）："+d);*/
            //设置鼠标经过显示的柱形图
            _rectHover.append('rect')
                .attr('x', function () {
                    return _bandscale(xdata[i]) - 0.1 * rectwidth;
                })
                .attr('y', 0)
                .attr('width', 1.2 * rectwidth)
                .attr('height', yaxisheight)
                .attr('fill', 'rgba(0,255,255,.2)');
        })
        .on("mousemove",function(d){
            _tooltipArea.style("top",d3.event.pageY+5+'px')
                .style("left",d3.event.pageX+5+'px')
        })
        .on("mouseout",function(){
            //鼠标离开柱图提示框消失
            _tooltipArea.style("opacity",0)
                .style("display","none");
            //鼠标离开柱图新建柱图效果消失
            _rectHover.select("rect").remove();
        })
        .transition()
        .duration(1500)
        .ease(d3.easeBounce)
        .attr("y",function(d,i){
            return _linescale(d);
        })
        .attr("height",function(d){
            return yaxisheight-_linescale(d);
        });
    //19.柱形图添加文字
    _text=_group1.selectAll("text")
        .data(ydata)
        .enter()
        .append("text")
        .attr("x",function(data,i){
            return _bandscale(xdata[i]);
        })
        /*.attr('y',function(d){
         return _linescale(d);
         })*/
        .attr('font-size','14px')
        .attr('fill','#000')
        .attr('text-anchor','middle')
        .attr('dx',rectwidth/2)
        .attr('dy','1em')
        .transition()
        .duration(1500)
        .tween("text",function(d){
            var node=this;
            return function(t){
                node.textContent=(t*d).toFixed(1);
                node.setAttribute("y",_linescale((t*d).toFixed(1)))
            }
        });
    //20.以下使用线段生成器生成path,添加折线图
    var _line=d3.line()
        .x(function(d){
            return _bandscale(d[0])+_bandscale.bandwidth()/2
        })
        .y(function(d){
            return _linescaleT(d[1])
        })
        .curve(d3.curveNatural);//生成带弧度的曲线
    var datasetT=d3.zip(xdata,ydataT);
    //console.log(_line(dataset));//生成的路径
    _gdraw2.append("g")
        .append("path")
        .attr("class","g_zx")
        .attr("d",_line(datasetT))
        .on("mouseover",function(){
            d3.select(this).style("stroke","blue");
        })
        .on("mouseout",function(){
            d3.select(this).style("stroke","#1ec7f3");
        })
        .style("stroke","#1ec7f3")
        .style("stroke-width","2px")
        .style("fill","none");
    //21.添加每个折线的节点
    _gdraw2.append("g")
        .attr("class","g_zxjd")
        .selectAll("circle")
        .data(xdata)
        .enter()
        .append("circle")
        .attr("cx",0)
        .attr("cy",yaxisheight)
        .transition()
        .duration(1000)
        .attr("cx",function(d,i){
            return _bandscale(xdata[i])+_bandscale.bandwidth()/2;
        })
        .attr("cy",function(d,i){
            return _linescaleT(ydataT[i]);
        })
        .attr("r",5)
        .attr("fill","#1ec7f3");
    //折线图添加文字
    _group2=_gdraw2.append('g')
        .attr('class','zxT');
    _text=_group2.selectAll("text")
        .data(ydataT)
        .enter()
        .append("text")
        .attr("x",function(data,i){
            return _bandscale(xdata[i]);
        })
        .attr('font-size','14px')
        .attr('fill','#000')
        .attr('text-anchor','middle')
        .attr('dx',rectwidth)
        .attr('dy','0.4em')
        .transition()
        .duration(1500)
        .tween("text",function(d){
            var node=this;
            return function(t){
                node.textContent=(t*d).toFixed(1)+'%';
                node.setAttribute("y",_linescaleT((t*d).toFixed(1)))
            }
        });
    //给折线生成添加动画。
    var path = document.getElementsByClassName('g_zx');  //获取class标签为line的元素
    var length = path[0].getTotalLength();               //获取第一个折线的总共的长度
    d3.select('.g_zx')
        .style('stroke-dasharray', length)//stroke-dasharray设置线段间隔长度
        .style('stroke-dashoffset',length)//stroke-dashoffset线段的偏移量
        .transition()
        .duration(5000)
        .ease(d3.easeCubic)
        .delay(600)
        .style('stroke-dashoffset',0);
    //添加标题
    _group3=_gdraw1.append('g')
        .attr('class','legendT');
    _group4=_gdraw1.append('g')
        .attr('class','tuli');
    var txt=["2013-2020年 中国综合支付交易规模"];
    _title=_group3.selectAll("text")
        .attr("class","titleT")
        .data(txt)
        .enter()
        .append("text")
        .attr("x",xaxiswidth/5)
        .attr('y',yaxisheight/15)
        .attr('font-size','1.5em')
        .attr('fill','#fff')
        .text(txt);
    //添加区分柱形图和折线图的图例
    var arrayT=[0];//设置任意值的长度为1的数组
    _group4.append("g")
        .selectAll("rect")
        .data(arrayT)
        .enter()
        .append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr('width',30)
        .attr("height",20)
        .style('fill','#b1d334')
        .attr("transform","translate("+(xaxiswidth*0.1)+","+(yaxisheight*1.225)+")");
    _group4.append("g")
        .selectAll("text")
        .data(txt)
        .enter()
        .append("text")
        .attr("x",0)
        .attr('y',0)
        .attr('font-size','14px')
        .attr('fill','#000')
        .text(["综合支付规模(万亿元)"])
        .attr("transform","translate("+(xaxiswidth*0.17)+","+(yaxisheight*1.275)+")");
    _group4.append("g")
        .selectAll("line")
        .data(txt)
        .enter()
        .append("line")
        .attr("x1",xaxiswidth-105)
        .attr('y1',25)
        .attr("x2",xaxiswidth-75)
        .attr('y2',25)
        .attr("stroke-width","2px")
        .attr("stroke","blue")
        .attr("transform","translate("+(xaxiswidth*-0.3)+","+(yaxisheight*1.185)+")");
    _group4.append("g")
        .selectAll("text")
        .data(txt)
        .enter()
        .append("text")
        .attr("x",xaxiswidth-70)
        .attr('y',30)
        .attr('font-size','14px')
        .attr('fill','#000')
        .text(["增长率(%)"])
        .attr("transform","translate("+(xaxiswidth*-0.3)+","+(yaxisheight*1.195)+")");
    //根据形参判断是否添加网格线
    if(bool==true){
        drawXGridLineTt(divName,xaxiswidth);
        drawYGridLineTt(divName,yaxisheight);
    }
}
//添加网格线
function drawXGridLineTt(divName,xaxiswidth){
    //添加Y轴分割线
    d3.select("#"+divName+"yaxis")
        .selectAll('g')
        .append("line")
        .attr('x1',0)
        .attr('y1',0)
        .attr('x2',xaxiswidth)
        .attr('y2','0')
        .attr('stroke','#cccccc')
        .attr('stoke-width','1');
}
function drawYGridLineTt(divName,yaxisheight) {
    //添加X轴分割线
    d3.select("#" + divName + "xaxis")
        .selectAll('g')
        .append("line")
        .attr('x1', '0')
        .attr('y1', -yaxisheight)
        .attr('x2', 0)
        .attr('y2', 0)
        .attr('stroke', '#cccccc')
        .attr('stoke-width', '1');
}
/*—————————————————————————右上折柱混合————————————————*/
drawline2();
function drawline2() {
    var myecharts = echarts.init(document.getElementById('l_bot'));
    var option = {
        title : {
            text: '2013-2020年中国互联网支付及移动支付用户规模',
            x:'center',
            top:'2%',
            textStyle:{
                color:"#fff",
                fontSize:"24",
                fontWeight:200
            }
        },
        tooltip: {
            trigger: 'axis',        //提示线
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (params) {      //修改提示框显示信息
                var bar0 = params[0].seriesName;
                var bar1 = params[0].data;
                var bar10 = params[1].seriesName;
                var bar11 = params[1].data;
                var line10 = params[2].seriesName;
                var line11 = params[2].data;
                var line20 = params[3].seriesName;
                var line21 = params[3].data;
                return bar0 + '：' + bar1 + '<br/>'+bar10 + '：' + bar11 + '<br/>' + line10 + ' : ' + line11 + "%" + '<br/>' + line20 + "：" + line21 + "%";
            }
        },
        grid: {         //坐标系位置
            left: '5%',
            right: '3%',
            bottom: '15%',
            containLabel: true
        },
        //注销工具框
/*        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },*/
        legend: {          //图例
            show: true,
//                itemGap: 10,
            bottom: '3%',
            data: ['互联网用户支付规模（亿人）','移动用户支付规模（亿人）', '互联网支付用户增长率（%）', '移动用户支付增长率（%）']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017e', '2018e'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {type: 'value', min: 0, max: 12},
            {
                show: false,
                type: 'value',
                min: -200,
                max: 100,
                interval: 5,
                axisLabel: {formatter: '{value} %'}
            }
        ],
        series: [
            {
                name: '互联网用户支付规模（亿人）',
                type: 'bar',
                barWidth: '30%',
                itemStyle: {            //色彩渐变
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#b1d334'
                        }, {
                            offset: 1,
                            color: '#b1d334'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                        shadowBlur: 20
                    }
                },
                label: {
                normal: {
                    show: true, position: 'inside',
                    textStyle: {color: '#000'},
                    formatter: function (params) {
                        return params.value + "%"
                    }
                }
            },
                data: [2.6, 3.0, 4.2, 4.9, 5.3, 5.7, 6.1, 6.4]
            },
            {
                name: '移动用户支付规模（亿人）',
                type: 'bar',
                barWidth: '30%',
                itemStyle: {            //色彩渐变
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1ec7f3'
                        }, {
                            offset: 1,
                            color: '#1ec7f3'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                        shadowBlur: 20
                    }
                },
                label: {
                    normal: {
                        show: true, position: 'inside',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                data: [1.3, 2.2, 3.6, 4.4, 4.9, 5.5, 6.0, 6.3]
            },
            {
                name: '互联网支付用户增长率（%）',
                type: 'line',
                lineStyle: {normal: {color: '#b1d334', width: 3}},
//                    itemStyle: {normal: {}},
                label: {
                    normal: {
                        show: true, position: 'top',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                yAxisIndex: 1,
                data: [8.0, 17.0, 36.8, 17.6, 8.8, 7.0, 6.7, 5.3]
            },
            {
                name: '移动用户支付增长率（%）',
                type: 'line',
                yAxisIndex: 1,
                lineStyle: {normal: {color: '#1ec7f3', width: 3}},
                label: {
                    normal: {
                        show: true, position: 'bottom',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                data: [70.2, 73.2, 64.5, 22.5, 12.6, 10.7, 10.1, 4.9]
            }
        ]
    };
    myecharts.setOption(option);
    window.addEventListener("resize", function () {
        myecharts.resize();
    });
}
/*—————————————————————————中下折柱混合————————————————*/
drawline3();
function drawline3() {
    var myecharts = echarts.init(document.getElementById('2_bot'));
    var option = {
        title : {
            text: '2013-2020年中国网络理财及信贷用户规模',
            x:'center',
            top:'2%',
            textStyle:{
                color:"#fff",
                fontSize:"24",
                fontWeight:200
            }
        },
        tooltip: {
            trigger: 'axis',        //提示线
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (params) {      //修改提示框显示信息
                var bar0 = params[0].seriesName;
                var bar1 = params[0].data;
                var bar10 = params[1].seriesName;
                var bar11 = params[1].data;
                var line10 = params[2].seriesName;
                var line11 = params[2].data;
                var line20 = params[3].seriesName;
                var line21 = params[3].data;
                return bar0 + '：' + bar1 + '<br/>'+bar10 + '：' + bar11 + '<br/>' + line10 + ' : ' + line11 + "%" + '<br/>' + line20 + "：" + line21 + "%";
            }
        },
        grid: {         //坐标系位置
            left: '5%',
            right: '3%',
            bottom: '15%',
            containLabel: true
        },
        //注销工具框
/*        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },*/
        legend: {          //图例
            show: true,
//                itemGap: 10,
            bottom: '3%',
            data: ['互联网用户支付规模（亿人）','移动用户支付规模（亿人）', '互联网支付用户增长率（%）', '移动用户支付增长率（%）']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2011', '2012', '2013', '2014', '2015', '2016', '2017e', '2018e'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {type: 'value', min: 0, max: 12},
            {
                show: false,
                type: 'value',
                min: -200,
                max: 100,
                interval: 5,
                axisLabel: {formatter: '{value} %'}
            }
        ],
        series: [
            {
                name: '互联网用户支付规模（亿人）',
                type: 'bar',
                barWidth: '40%',
                itemStyle: {            //色彩渐变
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#b1d334'
                        }, {
                            offset: 1,
                            color: '#b1d334'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                        shadowBlur: 20
                    }
                },
                label: {
                    normal: {
                        show: true, position: 'inside',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                data: [0.5, 2.0, 3.2, 4.4, 5.0, 5.3, 5.8, 6.0]
            },
            {
                name: '移动用户支付规模（亿人）',
                type: 'bar',
                barWidth: '40%',
                itemStyle: {            //色彩渐变
                    normal: {
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: '#1ec7f3'
                        }, {
                            offset: 1,
                            color: '#1ec7f3'
                        }]),
                        shadowColor: 'rgba(0, 0, 0, 0.4)',
                        shadowBlur: 20
                    }
                },
                label: {
                    normal: {
                        show: true, position: 'inside',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                data: [0.5, 0.8, 1.3, 1.6, 1.8, 1.9, 2.0, 2.2]
            },
            {
                name: '互联网支付用户增长率（%）',
                type: 'line',
                lineStyle: {normal: {color: '#b1d334', width: 3}},
//                    itemStyle: {normal: {}},
                label: {
                    normal: {
                        show: true, position: 'top',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                yAxisIndex: 1,
                data: [200.7, 271.8, 62.4, 34.7, 15.1, 5.6, 8.5, 4.2]
            },
            {
                name: '移动用户支付增长率（%）',
                type: 'line',
                yAxisIndex: 1,
                lineStyle: {normal: {color: '#1ec7f3', width: 3}},
                label: {
                    normal: {
                        show: true, position: 'bottom',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                data: [64, 51.7, 76.9, 23.6, 7.8, 9.9, 5.2, 7.0]
            }
        ]
    };
    myecharts.setOption(option);
    window.addEventListener("resize", function () {
        myecharts.resize();
    });
}
/*—————————————————————————右下大饼图————————————————*/
function drawPie2(){
    var myecharts=echarts.init(document.getElementById('pie2'));
    var options={
        title : {
            text: '2016年中国第三方互联网支付交易规模市场份额',
            subtext: 'PC端',
            x:'center',
            top:'2%',
            textStyle:{
                color:"#fff",
                fontSize:"24",
                fontWeight:200
            },
            subtextStyle:{
                color:"#fff",
                fontSize:"18"
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {d}%"
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                labelLine: {
                    normal:{
                        lineStyle:{
                            color:"#000"
                        }
                    }
                },
                label: {
                    normal:{
                        color:"#000"
                    }
                },
                data:[
                    {value:47.5, name:'支付宝'},
                    {value:20, name:'财付通'},
                    {value:10.9, name:'银商'},
                    {value:6.9, name:'块钱'},
                    {value:5.0, name:'汇付天下'},
                    {value:3.4, name:'易宝支付'},
                    {value:1.2, name:'环迅支付'},
                    {value:2.0, name:'京东支付'},
                    {value:1.2, name:'易付宝'},
                    {value:1.1, name:'宝付'},
                    {value:0.8, name:'其他'}
                ],
                color:['#b1d334','#8bc53e','#fff500','#ffcf00','#acacad','#969696','#1ec7f3','#3483fca','#fc9c9a','#f369d4','#c64edc'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myecharts.setOption(options);
    window.addEventListener("resize", function () {
        myecharts.resize();
    });//窗口响应式
}
$(function(){
    drawPie2();
});
/*—————————————————————————左下大饼图————————————————*/
function drawPie1(){
    var myecharts=echarts.init(document.getElementById('pie1'));
    var options={
        title : {
            text: '2016年中国第三方手机支付交易规模市场份额',
            subtext: '移动端',
            top:'2%',
            x:'center',
            textStyle:{
                color:"#fff",
                fontSize:"24",
                fontWeight:200
            },
            subtextStyle:{
                color:"#fff",
                fontSize:"18"
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{b} : {d}%"
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                labelLine: {
                    normal:{
                        lineStyle:{
                            color:"#000"
                        }
                    }
                },
                label: {
                    normal:{
                        color:"#000"
                    }
                },
                data:[
                    {value:68.4, name:'支付宝'},
                    {value:20.6, name:'财付通'},
                    {value:2.4, name:'拉卡拉'},
                    {value:1.2, name:'联动优势'},
                    {value:1.2, name:'连连支付'},
                    {value:0.6, name:'快钱'},
                    {value:0.5, name:'易宝支付'},
                    {value:0.5, name:'平安付'},
                    {value:0.5, name:'京东钱包'},
                    {value:0.5, name:'翼支付'},
                    {value:0.5, name:'百度钱包'},
                    {value:3.2, name:'其他'}
                ],
            color:['#b1d334','#8bc53e','#fff500','#ffcf00','#acacad','#969696','#1ec7f3','#3483fca','#fc9c9a','#f369d4','#c64edc','#f6595f'],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };

    myecharts.setOption(options);
    window.addEventListener("resize", function () {
        myecharts.resize();
    });
}
$(function(){
    drawPie1();
});
//地图填充
drawMap("mapWrap");
function drawMap(divname) {
    var dataset = [
        {name: '安徽', value: 290},
        {name: '北京', value: 700},
        {name: '重庆', value: 150},
        {name: '福建', value: 430},
        {name: '广东', value: 900},
        {name: '甘肃', value: 100},
        {name: '广西', value: 230},
        {name: '贵州', value: 110},
        {name: '河北', value: 350},
        {name: '黑龙江', value: 240},
        {name: '河南', value: 450},
        {name: '海南', value: 50},
        {name: '湖北', value: 320},
        {name: '湖南', value: 290},
        {name: '江苏', value: 800},
        {name: '江西', value: 220},
        {name: '吉林', value: 200},
        {name: '辽宁', value: 350},
        {name: '内蒙古', value: 150},
        {name: '宁夏', value: 50},
        {name: '青海', value: 50},
        {name: '山西', value: 240},
        {name: '陕西', value: 240},
        {name: '山东', value: 450},
        {name: '上海', value: 700},
        {name: '四川', value: 300},
        {name: '天津', value: 140},
        {name: '台湾', value: 0},
        {name: '香港', value: 430},
        {name: '西藏', value: 50},
        {name: '新疆', value: 50},
        {name: '云南', value: 110},
        {name: '浙江', value: 1110}];
    //取得数组中value最大值
    var sumdata = d3.sum(dataset, function (d) {
        return d.value;
    });
    var maxdata = d3.max(dataset, function (d) {
        return (d.value / sumdata * 100).toFixed(2);
    });
    var color1 = ['#d6d3ff', '#cfc', '#b3b6ff', '#602581', '#be2584', "#ff6700"];
    var arr = [];
    for (var i = 0; i < color1.length; i++) {
        arr.push((maxdata / 5 * i).toFixed(2) + "-" + (maxdata / 5 * (i + 1)).toFixed(2) + "%");
    }
    //定义量化比例尺：
    var color = d3.scaleQuantize()
        .domain([0, maxdata])
        .range(color1);
    //定义map对象：
    var mapdata = d3.map(dataset, function (d) {
        return d.name;
    });

    d3.json("../js/china.json", function (error, data) {
        //定义投影：
        var _projecttion = d3.geoMercator()
            .center([116.39096260070801, 39.9147396604924])
            .fitExtent([[0, 0], [$("#" + divname).width(), $("#" + divname).height()]], data);

        //定义地理路径生成器：
        var _geopath = d3.geoPath()
            .projection(_projecttion);
        //定义svg,生成path
        var _svg = d3.select("#" + divname)
            .append("svg")
            .attr("class", "svg")
            .attr("width", "100%")
            .attr("height", "100%");
        /*.attr("d",_geopath(data))
         .attr("fill","green")
         .attr("stroke","#ffffff")
         .attr("stroke-width",1)*/
        _svg.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("d", _geopath)
            .attr("stroke", "#fff")
            .attr("stroke-width", "1")
            .attr("fill", function (d) {
//                   console.log((d.properties.name))
                var proname = d.properties.name;
                var prodata = mapdata.get(proname);
                    if (prodata) {
                    // console.log((prodata.value/sumdata*100).toFixed(2));
                    return color((prodata.value / sumdata * 100).toFixed(2))
                } else {
                    return 'gray'
                }
            })
            .on("click", function (d) {
                d3.select(this.parentNode)
                    .selectAll('path')
                    .style("fill", function (d) {
//                   console.log((d.properties.name))
                        var proname = d.properties.name;
                        var prodata = mapdata.get(proname);
                        if (prodata) {
                            return color((prodata.value / sumdata * 100).toFixed(2))
                        } else {
                            return 'gray'
                        }
                    });
                d3.select(this).style("fill", "gray")
            });
        //添加文字
        _svg.selectAll("text")
            .data(data.features)
            .enter()
            .append('text')
            .attr("x", function (d) {
                var xypoint = _geopath.centroid(d);
                return xypoint[0];
            })
            .attr("y", function (d) {
                var xypoint = _geopath.centroid(d);
                return xypoint[1];
            })
            .attr("dy", "1em")
            .attr("text-anchor", "middle")
            .text(function (d) {
                //console.log(d);
                return d.properties.name;
            })
            .style("font-size", '12px');
        //添加图例
        var g = _svg.append("g");
        g.selectAll("rect")
            .data(arr)
            .enter()
            .append("rect")
            .attr("class", "rect")
            .attr("x", "5%")
            .attr("y", function (d, i) {
                //console.log(d);
                return $(".svg").height() - 20 * color1.length + 20 * i;
            })
            .attr("width", "4%")
            .attr("height", "3%")
            .attr("fill", function (d, i) {
                return color1[i]
            })
            .on("click", function (d) {
                d3.select(this.parentNode)
                    .selectAll('rect')
                    .style("fill", function (d, i) {
                        return "gray"
                    });
                console.log(this.parentNode.parentNode)
                ;
                d3.select(this).style("fill", function (d, i) {
                    var shen = this;
                    return color1[shen.index]
                });
                d3.select(this.parentNode.parentNode)
                    .selectAll('path')
                    .style("fill", function (d, i) {
                        return color1[i]
                    });

            });
        g.selectAll("text")
            .data(arr)
            .enter()
            .append("text")
            .attr("x", "10%")
            .attr("y", function (d, i) {
                console.log(d);
                return $(".svg").height() - 20 * color1.length + 20 * i;
            })
            .attr("dy", "1em")
            .attr("text-anchor", "left")
            .text(function (d) {
                return d;
            })
            .style("font-size", '12px')
            .attr("fill", function () {
                return "#ff0008"
            });
    });
}
$(window).resize(function(){
    d3.select("#mapWrap").select("svg").remove();
    drawMap("mapWrap");
});
/*--------------------------------------------------中上部分-----------------------------------------*/
$(window).resize(function(){
    d3.select("#drawCircle").select("svg").remove();
    drawcircle("drawCircle");
});
drawcircle("drawCircle");
function drawcircle(divname){
    var data1 = ["1.2万亿","7000元","150万亿","300元"];
    var data2 = ['2016网贷额度','单用户信贷','综合支付','移动单笔支付'];
    //1.定义SVG宽及高
    var svgwidth=$("#"+divname).width();
    var svgheight=$("#"+divname).height();
    //2.定义整体svg
    var _svg=d3.select("#"+divname)
        .append('svg')
        .attr("width",svgwidth)
        .attr("height",svgheight);
    //3.真正画图可能要与画框之间都有一个边距,我们定义margin(即实现绘图区与SVG四边有距离)
    var _margin={top:10,left:30,right:10,bottom:30};
    //4.定义G组，实现绘图区
    var _gdraw2=_svg.append("g")
        .attr("transform","translate("+_margin.left+","+_margin.top+")")
        .attr("id","gdraw2");
    var gcircle=_gdraw2.append("g")
        .selectAll("circle")
        .data(data1)
        .enter()
        .append("circle")
        .attr("cx",function(d,i){
            return (i+1)*svgwidth/5;
        })
        .attr("cy",function(d,i){
            return svgheight*3/5
        })
        .attr("r",svgheight*0.3)
        .attr("fill",function(d,i){
            return d3.schemeCategory20[i];
        });
    gtext1=_gdraw2.append("g")
        .selectAll("text")
        .data(data1)
        .enter()
        .append("text")
        .attr("x",function(d,i){
            return (i+1)*svgwidth/5;
        })
        .attr("y",function(d,i){
            return svgheight*3/5;
        })
        .text(function(d,i){
            return d;
        })
        .attr("text-anchor","middle")
        .attr("dy","0.5em")
        .style("fill","#fff");
    gtext2=_gdraw2.append("g")
        .selectAll("text")
        .data(data2)
        .enter()
        .append("text")
        .attr("x",function(d,i){
            return (i+1)*svgwidth/5;
        })
        .attr("y",function(d,i){
            return svgheight*3/5;
        })
        .text(function(d,i){
            return d;
        })
        .attr("text-anchor","middle")
        .attr("dy",-svgheight*0.4)
        .style("fill","#fff")
        .style("font-weight","normal")
        .style("font-size","24px")

}
