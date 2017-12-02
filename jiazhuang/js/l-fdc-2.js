/**
 * Created by Administrator on 2017/9/26 0026.
 */


$("#d1").hover(function(){
    $("#d1").stop().animate({
        height:'44%',
        width: '22%',
        top: '9%',
        left: '14%'
    },"slow");
},function(){
    $("#d1").stop().animate({
        height:'40%',
        width: '20%',
        top: '10%',
        left: '15%'
    },"slow");
});
$("#d3").hover(function(){
    $("#d3").stop().animate({
        height:'44%',
        width: '22%',
        top: '9%',
        left:'64%'
    },"slow");
},function(){
    $("#d3").stop().animate({
        height:'40%',
        width: '20%',
        top: '10%',
        left: '65%'
    },"slow");
});
$("#d2").hover(function(){
    $("#d2").stop().animate({
        height:'52%',
        width: '29%',
        top: '-51px',
        left:'36%'
    },"slow");
},function(){
    $("#d2").stop().animate({
        height:'50%',
        width: '27%',
        top:"-50px",
        left:'37%'
    },"slow");
});


/*$("#d1").click(function(){
    console.log(123);
    $(".L").css("display","none");
    $(".Z").css("display","block")

});*/









/*二手房数*/
function fun(){
    var sql1="SELECT COUNT(*) as num from es";
    $.ajax({
        type:'get',
        url:'http://localhost:8080/ajaxsys/a.do',
        data:{'sql':sql1},
        success:function (data) {
            datainfo={
                "xdata":data[0][0]
            };
            $(function(){
                $("#s1").text(datainfo.xdata)
            });
        }
    })
}
fun();
/*新房数*/
function fun1(){
    var sql2="SELECT COUNT(*) as num from newhouse";
    $.ajax({
        type:'get',
        url:'http://localhost:8080/ajaxsys/a.do',
        data:{'sql':sql2},
        success:function (data) {
            datainfo={
                "xdata":data[0][0]
            };
            $(function(){
                $("#s2").text(datainfo.xdata)
            });
        }
    })
}
fun1();
/*租房数*/
function fun2(){
    var sql2="SELECT COUNT(*) as num from zufang";
    $.ajax({
        type:'get',
        url:'http://localhost:8080/ajaxsys/a.do',
        data:{'sql':sql2},
        success:function (data) {
            datainfo={
                "xdata":data[0][0]
            };
            $(function(){
                $("#s3").text(datainfo.xdata)
            });
        }
    })
}
fun2();

/*左侧*/
function drawBar() {
    var Myecharts = echarts.init(document.getElementById("main-left-t"),"walden");
    var options={
        /*backgroundColor: 'transparent',*/
        title:{
            text:"供销套数",
            left:215,
            textStyle:{
                fontWeight:100,
                color:"#fff"
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            }
        },
        toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true}
                /*saveAsImage: {show: true}*/
            }
        },
        legend: {
            top:30,
            left:150,
            data:['成交套数','供应套数','成交价']
        },
        grid:{
            left:70,
            top:70,
            bottom:50,
            right:20
        },
        axisLabel:{
            textStyle:{
                color:"#fff"
            }
        },
        xAxis: [
            {
                type: 'category',
                data: ['1月','2月','3月','4月','5月','6月','7月','8月'],
                axisPointer: {
                    type: 'shadow'
                },
                splitLine:{
                    show:false
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '套数',
                min: 500,
                max: 3500,
                interval: 1000,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine:{
                    show:false
                }
            },
            {
                type: 'value',
                name: '万/平',
                min: 0,
                max: 6,
                interval: 0,
                axisLabel: {
                    formatter: '{value}'
                },
                splitLine:{
                    show:false
                }
            }
        ],
        series: [
            {
                name:'供应套数',
                type:'bar',
                data:[1504, 806, 907, 1401, 1352, 2211, 996, 1801]
            },
            {
                name:'成交套数',
                type:'bar',
                data:[2214, 1646, 2441, 2083, 2314, 1818, 1505, 1476]
            },
            {
                name:'成交价',
                type:'line',
                yAxisIndex: 1,
                data:[4.1, 4.8, 4.4, 4.8, 4.5, 4.75, 5.2,4.9]
            }
        ]
    };
    Myecharts.setOption(options);
    window.addEventListener("resize",function(){
        Myecharts.resize();
    });
}
$(function () {
    drawBar()
});
function drawBar1() {
    var Myecharts = echarts.init(document.getElementById("main-left-b"),"walden");
    var pathSymbols = {
        reindeer:"image://img/timg.jpg",
        rocket:"image://img/timg1.jpg",
        plane:"image://img/timg2.jpg",
        train:"image://img/timg3.jpg",
        ship:"image://img/timg4.gif",
        car:"image://img/timg5.gif"
    };
    var options= {
        title:{
            text:"在售房均价",
            left:"center",
            textStyle:{
                fontWeight:100,
                color:"#fff"
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function (params) {
                return params[0].name + ': ' + params[0].value;
            }
        },
        grid:{
            top:100,
            bottom:40,
            left:60
        },
        xAxis: {
            data: ['别墅','办公楼','营业用房','住宅','其他房' , '平均售价'],
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                textStyle: {
                    color: '#e54035'
                }
            },
            splitLine:{
                show:false
            }
        },
        yAxis: {
            splitLine: {show: false},
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {show: false}
        },
        color: ['#c14089'],
        series: [{
            name: 'hill',
            type: 'pictorialBar',
            barCategoryGap: '-130%',
            // symbol: 'path://M0,10 L10,10 L5,0 L0,10 z',
            symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
            itemStyle: {
                normal: {
                    opacity: 0.5
                },
                emphasis: {
                    opacity: 1
                }
            },
            data: [38817.00, 28917.00, 27312.00,22300.00, 7070.00,22633.00],
            z: 10
        }, {
            name: 'glyph',
            type: 'pictorialBar',
            barGap: '-100%',
            symbolPosition: 'end',
            symbolSize: 50,
            symbolOffset: [0, '-120%'],
            data: [{
                value: 38817.00,
                symbol: pathSymbols.reindeer,
                symbolSize: [60, 60]
            }, {
                value: 28917.00,
                symbol: pathSymbols.rocket,
                symbolSize: [50, 60]
            }, {
                value: 27312.00,
                symbol: pathSymbols.plane,
                symbolSize: [65, 35]
            }, {
                value: 22300.00,
                symbol: pathSymbols.train,
                symbolSize: [50, 30]
            }, {
                value: 7070.00,
                symbol: pathSymbols.ship,
                symbolSize: [50, 35]
            }, {
                value: 22633.00,
                symbol: pathSymbols.car,
                symbolSize: [40, 30]
            }]
        }]
    };
    Myecharts.setOption(options);
    window.addEventListener("resize",function(){
        Myecharts.resize();
    });
}
$(function () {
    drawBar1()
});
/*中部*/
/*function drawBar2() {
 var Myecharts = echarts.init(document.getElementById("main-cent-t"));
 var options;

 Myecharts.setOption(options);
 }
 $(function () {
 drawBar2()
 });*/

function drawBar3() {
    var Myecharts = echarts.init(document.getElementById("main-cent-b"));
    var spirit ='image://data:image/png;base64,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';
    var maxData = 7000;
    var options = {
        title:{
            text:"租房均价",
            left:"center",
            textStyle:{
                fontWeight:100,
                color:"#fff"
            }
        },
        tooltip: {
        },
        yAxis: {
            max: maxData,
            splitLine: {show: false},
            offset: 10,
            axisLine: {
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                margin: 10
            }
        },
        xAxis: {
            data: ["个人","我爱我家","链家","独立经纪人","中天","蛋壳公寓","爱屋及乌",
                "华熙房产","中润置发","麦田","金色时光","鹏基伟业","汇鑫房产","搜房网","夏威夷房产",
                "兴达恒远","世杰佳园","广发地产","中五地产"],
            inverse: false,
            axisTick: {show: false},
            axisLine: {show: false},
            axisLabel: {
                margin: 10,
                textStyle: {
                    color: '#999',
                    fontSize: 16
                }
            }
        },
        grid: {
            left: 90,
            right: 120,
            bottom:40
        },
        series: [{
            // current data
            type: 'pictorialBar',
            symbol: spirit,
            symbolRepeat: 'fixed',
            symbolMargin: '5%',
            symbolClip: true,
            symbolSize: 30,
            symbolBoundingData: maxData,
            data: ["1500","2954","2223","2206","1678","2606","1213","1366","6390",
                "1642","1036","1326","2820","1127","1025","2303","2302","2367","2560"],
            markLine: {
                symbol: 'none',
                label: {
                    normal: {
                        formatter: 'max: {c}',
                        position: 'start'
                    }
                },
                lineStyle: {
                    normal: {
                        color: 'green',
                        type: 'dotted',
                        opacity: 0.2,
                        width: 2
                    }
                },
                data: [{
                    type: 'max'
                }]
            },
            z: 10
        }]
        /* {
         // full data
         type: 'pictorialBar',
         itemStyle: {
         normal: {
         opacity: 0.2
         }
         },
         label: {
         normal: {
         show: true,
         formatter: function (params) {
         return (params.value / maxData * 100).toFixed(1) + ' %';
         },
         position: 'outside',
         offset: [10, 0],
         textStyle: {
         color: 'green',
         fontSize: 18
         }
         }
         },
         animationDuration: 0,
         symbolRepeat: 'fixed',
         symbolMargin: '5%',
         symbol: spirit,
         symbolSize: 30,
         symbolBoundingData: maxData,
         data: [891, 1220, 660, 1670],
         z: 5
         }]*/
    };


    /*var xAxisData = ["个人","我爱我家","链家","独立经纪人","中天","蛋壳公寓","爱屋及乌",
     "华熙房产","中润置发","麦田","金色时光","鹏基伟业","汇鑫房产","搜房网","夏威夷房产",
     "兴达恒远","世杰佳园","广发地产","中五地产"];
     var data1 = ["84494","77409","24090","18950","16556","14632","12003","10000","9523",
     "9000","8800","8500","8000","7300","6300","6100","6000","5500","5000"];
     var data2 = ["1500","2954","2223","2206","1678","2606","1213","1366","6390",
     "1642","1036","1326","2820","1127","1025","2303","2302","2367","2560"];
     /!*for (var i = 1; i < 10; i++) {
     xAxisData.push( i+ '月');
     data1.push((Math.sin(i / 5) * (i / 5 -10) + i / 6) * 5);
     data2.push((Math.cos(i / 5) * (i / 5 -10) + i / 6) * 5);
     }*!/
     var options= {
     title: {
     text: '柱状图动画延迟'
     },
     legend: {
     data: ['bar', 'bar2'],
     align: 'left'
     },
     toolbox: {
     // y: 'bottom',
     feature: {
     magicType: {
     type: ['stack', 'tiled']
     },
     dataView: {},
     saveAsImage: {
     pixelRatio: 2
     }
     }
     },
     tooltip: {},
     xAxis: {
     data: xAxisData,
     silent: false,
     splitLine: {
     show: false
     }
     },
     yAxis: [
     {
     type: 'value',
     scale: true,
     name: '价格',
     max: 100000,
     min: 0,
     boundaryGap: [0.2, 0.2]
     },
     {
     type: 'value',
     scale: true,
     name: '预购量',
     max: 7000,
     min: 0,
     boundaryGap: [0.2, 0.2]
     }
     ],
     series: [{
     name: 'bar',
     type: 'bar',
     data: data1,
     animationDelay: function (idx) {
     return idx * 10;
     }
     }, {
     name: 'bar2',
     type: 'line',
     data: data2,
     animationDelay: function (idx) {
     return idx * 10 ;
     }
     }],
     animationEasing: 'elasticOut',
     animationDelayUpdate: function (idx) {
     return idx * 5;
     }
     };*/


    Myecharts.setOption(options);
    window.addEventListener("resize",function(){
        Myecharts.resize();
    });
}
$(function () {
    drawBar3()
});
/*右侧*/
function drawBar4() {
    var Myecharts = echarts.init(document.getElementById("main-right-t"),'walden');
    var options= {
        title : {
            text: '在售项目面积',
            /*subtext: '纯属虚构',*/
            x:'center',
            textStyle:{
                fontWeight:100,
                color:"#fff"
            }
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            top:40,
            data: ['其他房','住宅','营业用房','办公楼','别墅']
        },
        series : [
            {
                name: '销售面积(万平方米)',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:99.58, name:'其他房'},
                    {value:1126.84, name:'住宅'},

                    {value:84.81, name:'营业用房'},
                    {value:243.02, name:'办公楼'},
                    {value:71.98, name:'别墅'}

                ],
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
    Myecharts.setOption(options);
    window.addEventListener("resize",function(){
        Myecharts.resize();
    });
}
$(function () {
    drawBar4()
});

function drawBar5() {
    var Myecharts = echarts.init(document.getElementById("main-right-b"),'macarons');
    var options= {
        title:{
            text:"购房能力分析",
            left:"center",
            textStyle:{
                fontWeight:100,
                color:"#fff"
            }
        },
        tooltip: {
            trigger: 'item',
            triggerOn: 'mousemove'
        },

        textStyle:{
            color:"#fff"
        },
        series:[{
            type:"sankey",
            top:"7%",
            left:0,
            right:"12%",
            bottom:"2%",
            data:[
                {name:"在京5年以上",value:100},
                {name:"农村户籍",value:28},
                {name:"城镇户籍",value:72},
                {name:"50后",value:2.3},
                {name:"60后",value:6.3},
                {name:"70后",value:40.55},
                {name:"80后",value:47.1},
                {name:"90后",value:3.66},
                /* {name:"初中及以下",value:10.99},
                 {name:"高中",value:14.82},
                 {name:"大专",value:25.89},
                 {name:"本科及以上",value:48.3},*/
                {name:"0-2K",value:4.35},
                {name:"2-4K",value:19.44},
                {name:"4-6K",value:26.89},
                {name:"6-8K",value:15.96},
                {name:"8-10K",value:18.18},
                {name:"10K以上",value:15.18}
            ],

            links:[
                {source:"在京5年以上",target:"农村户籍",value:28},
                {source:"在京5年以上",target:"城镇户籍",value:72},
                {source:"农村户籍",target:"50后",value:0.644},
                {source:"农村户籍",target:"60后",value:1.764},
                {source:"农村户籍",target:"70后",value:11.354},
                {source:"农村户籍",target:"80后",value:13.188},
                {source:"农村户籍",target:"90后",value:1.0248},
                {source:"城镇户籍",target:"50后",value:1.656},
                {source:"城镇户籍",target:"60后",value:4.536},
                {source:"城镇户籍",target:"70后",value:29.196},
                {source:"城镇户籍",target:"80后",value:33.912},
                {source:"城镇户籍",target:"90后",value:2.6352},
                {source:"50后",target:"0-2K",value:0.1},
                {source:"50后",target:"2-4K",value:0.464},
                {source:"50后",target:"4-6K",value:0.642},
                {source:"50后",target:"6-8K",value:0.381},
                {source:"50后",target:"8-10K",value:0.434},
                {source:"50后",target:"10K以上",value:0.369},
                {source:"60后",target:"0-2K",value:0.274},
                {source:"60后",target:"2-4K",value:1.224},
                {source:"60后",target:"4-6K",value:1.694},
                {source:"60后",target:"6-8K",value:1.005},
                {source:"60后",target:"8-10K",value:1.147},
                {source:"60后",target:"10K以上",value:0.956},
                {source:"70后",target:"0-2K",value:1.763},
                {source:"70后",target:"2-4K",value:7.882},
                {source:"70后",target:"4-6K",value:10.903},
                {source:"70后",target:"6-8K",value:6.471},
                {source:"70后",target:"8-10K",value:7.371},
                {source:"70后",target:"10K以上",value:5.89},
                {source:"80后",target:"0-2K",value:2.048},
                {source:"80后",target:"2-4K",value:9.156},
                {source:"80后",target:"4-6K",value:12.665},
                {source:"80后",target:"6-8K",value:7.517},
                {source:"80后",target:"8-10K",value:8.562},
                {source:"80后",target:"10K以上",value:7.152},
                {source:"90后",target:"0-2K",value:0.159},
                {source:"90后",target:"2-4K",value:0.711},
                {source:"90后",target:"4-6K",value:0.984},
                {source:"90后",target:"6-8K",value:0.584},
                {source:"90后",target:"8-10K",value:0.665},
                {source:"90后",target:"10K以上",value:0.557}

            ],
            label:{
                normal:{
                    textStyle:{
                        color:"#fff"
                    }
                }
            },
            lineStyle: {
                normal: {
                    color: 'source',
                    curveness: 0.5
                }
            }
        }]
    };

    Myecharts.setOption(options);
    window.addEventListener("resize",function(){
        Myecharts.resize();
    });
}
$(function () {
    drawBar5()
});
