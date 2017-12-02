/**
 * Created by Administrator on 2017/11/1.
 */
(function () {
    var mychart8 = echarts.init(document.getElementById('bright'));
    var option = {
        backgroundColor: 'linear-gradient(#acacad 1%, #6e6e6e 5%, #79797a 10%, #fdfdfe)',
        title: {
            textStyle: {
                fontSize: 16,
                fontWeight: 'normal',
                color: '#ffffff'          // 主标题文字颜色
            },
            text: '2012-2018年生鲜电商市场交易规模及增长率',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                crossStyle: {
                    color: '#999'
                }
            },
            formatter: function (params) {      //修改提示框显示信息
                //console.log(params);
                var bar0 = params[0].seriesName;
                var bar1 = params[0].data;
                var line10 = params[1].seriesName;
                var line11 = params[1].data;
                var line20 = params[2].seriesName;
                var line21 = params[2].data;
                return bar0 + '：' + bar1 + '<br/>' + line10 + ' : ' + line11 + "%" + '<br/>' + line20 + "：" + line21 + "%";
            }
        },
        grid: {         //坐标系位置
            left: '5%',
            right: '1%',
            bottom: '7%',
            containLabel: true
        },
        /*toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },*/
        legend: {          //图形组件
            show: true,
//                itemGap: 10,
            top: '6%',
            padding: 4,
            itemGap: 2,
            data: ['电商交易总额(亿元)', '总额增长率(%)', '电商占农产品零售比例(%)']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2012', '2013', '2014', '2015', '2016', '2017', '2018'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                splitLine:{show: false},//去除网格线
                type: 'value',
                min: 0,
                max: 3800
            },
            {
                show: false,
                type: 'value',
                min: -700,
                max: 400,
                interval: 5,
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series: [
            {
                name: '电商交易总额(亿元)',
                type: 'bar',
                barWidth: '70%',
                itemStyle: {normal: {color: '#b0d235'}},
                label: {
                    normal: {
                        show: true,
                        position: 'top',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value
                        }
                    }
                },
                data: [35.6, 125.7, 305.0, 497.1, 904.5, 1537.8, 2365.8]
            },
            {
                name: '总额增长率(%)',
                type: 'line',
                lineStyle: {normal: {color: '#a4bf78', width: 3}},
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
                data: [260.2,255.8, 117.0, 80.8, 82.0, 70.0, 53.8]
            },
            {
                name: '电商占农产品零售比例(%)',
                type: 'line',
                yAxisIndex: 1,
                lineStyle: {normal: {color: '#11ccff', width: 3}},
                label: {
                    normal: {
                        show: true, position: 'bottom',
                        textStyle: {color: '#000'},
                        formatter: function (params) {
                            return params.value + "%"
                        }
                    }
                },
                data: [0.4, 1.3, 2.4, 3.4, 4.8, 6.1, 7.0]
            }
        ]
    };
    mychart8.setOption(option);
    /*var temp,temp1,temp2,temp3;
    setInterval(function (){
        var data0 = option.series[0].data;//柱状图
        var data1 = option.series[1].data;//折线图总额增长率
        var data2 = option.series[2].data;//折线图与农产品占比
        temp=data0.shift();
        data0.push(temp);
        temp1=data1.shift();
        data1.push(temp1);
        temp2=data2.shift();
        data2.push(temp2);

        temp3=option.xAxis[0].data.shift();
        option.xAxis[0].data.push(temp3);

        mychart8.setOption(option);
    }, 5000);*/

    //窗口改变图形大小改变
    window.addEventListener('resize',function(){
        mychart8.resize();
    });
    /*window.onresize=function(){
        mychart8.resize();
    }*/
}());