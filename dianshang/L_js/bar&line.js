
var myechart1 = echarts.init(document.getElementById('L_letf_bottom'));
function barLine() {
    option = {
       // backgroundColor: 'linear-gradient(#C2C2C2 1%,#9E9E9F 5%, #C2C2C2 10%, #cccccc )',
       backgroundColor: 'transparent',
        //backgroundColor: 'rgba(255,255,255,0.3)',
        tooltip: {
            trigger: 'axis',
           /* axisPointer: {
                type: 'cross',
                /!*crossStyle: {
                    color: '#999'
                }*!/
            }*/
        },
        /*toolbox: {
            feature: {
                dataView: {show: true, readOnly: false},
                magicType: {show: true, type: ['line', 'bar']},
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },*/
        legend: {
            data:['交易规模','增长率']
        },
        xAxis: [
            {
                type: 'category',
                data: ['2012年','2013年','2014年','2015年','2016年','2017年'],
                axisPointer: {
                    type: 'shadow'
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '交易规模（亿元）',
                min: 0,
                interval: 500,
                axisLabel: {
                    formatter: '{value}'
                }
            },
            {
                type: 'value',
                name: '增长率（%）',
                min: 0,
                interval: 50,
                axisLabel: {
                    formatter: '{value}%'
                }
            }
        ],
        series: [
            {
                name:'交易规模',
                type:'bar',
                data:[24.8, 48.9,121.5 , 544.5, 1239.7, 2147.2],
                itemStyle: {
                    normal: {
                        color:'#1C76AD',
                        label: {
                            show: true,
                            formatter: '{c}'
                        }
                    }
                },
                label: {
                    normal: {
                        show: true,
                        position:  ['25%', '-20px'],
                        fontSize:18,

                    }
                },
            },

            {
                name:'增长率',
                type:'line',
                yAxisIndex: 1,
                data:[20,85.9,244.5, 345.0, 127.8, 73.2],
                itemStyle: {
                    normal: {
                        color:'#ED551A',
                        label: {
                            show: true,
                            formatter: '{c}%',
                            fontSize:18,
                        }
                    }
                },

            }
        ]
    };
    myechart1.setOption(option);
}