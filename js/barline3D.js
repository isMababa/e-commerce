var  hoursbarline3D= [ '2011', '2012', '2013', '2014', '2015', '2016','2017F','2018F'];
var daysbarline3D= ['',''];

var databarline3D = [
    [1,0,8673.9],
    [1,1,12856.0],
    [1,2,19749.8],
    [1,3,28637.2],
    [1,4,38351.7],
    [1,5,53288.0],
    [1,6,68901.4],
    [1,7,82061.6]
];
var databarline3D2 = [
    [0,0,58900],
    [0,1,48200],
    [0,2,53600],
    [0,3,45000],
    [0,4,33900],
    [0,5,39100],
    [0,6,29300],
    [0,7,19100]
];
var chartbarline3D = echarts.init(document.getElementById('barline3D'));
chartbarline3D.setOption({
    title: {
        show:true,
        text: '2017-2018年中国网络零售市场交易规模预测',
        textStyle:{
            color:'#fff'
        },
        left:'center',
        top:'5px'
    },
    tooltip: {
        show:true,
        formatter:function (params) {
           if(params.seriesName=="增长率"){
                return params.seriesName+"<br/>"+hoursbarline3D[params.dataIndex]+": "+(params.value[2]/1000)+"%"
           }else{
               return params.seriesName+"<br/>"+hoursbarline3D[params.dataIndex]+": "+params.value[2]+"亿元"
           };
        }
    },
    legend: {
        left: 'center',
        top: 'bottom',
        textStyle: {
            color: '#000000'
        },
        data: ['增长率', '零售额']
    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: hoursbarline3D
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: daysbarline3D
    },
    zAxis3D: {
        type: 'value',
        name: ''
    },
    grid3D: {
        boxWidth: 260,
        boxDepth: 40,
        viewControl: {
            //projection: 'orthographic'
            beta:0,
            alpha:0
        },
        light: {
            main: {
                intensity: 1.2,
                shadow: true
            },
            ambient: {
                intensity: 0.3
            }
        }
    },
    series: [{
            type: 'line3D',
            barSize: 10,
            name:'增长率',
            data: databarline3D2.map(function (item) {
                return {
                    value: [item[1], item[0], item[2]]
                }
            }),
            shading: 'lambert',
            label: {
                normal: {
                    show: true,
                    //position: app.config.position,
                    //distance: app.config.distance,
                    //align: app.config.align,
                    //verticalAlign: app.config.verticalAlign,
                    //rotate: app.config.rotate,
                    formatter: function (params) {
                        console.log(params)
                    },
                    fontSize: 16,
                    rich: {
                        name: {
                            textBorderColor: '#fff'
                        }
                    }
                },
                textStyle: {
                    fontSize: 16,
                    borderWidth: 1
                }
            },
            itemStyle: {
                opacity: 1,
                color: '#f00'
            },
            emphasis: {
                label: {
                    textStyle: {
                        fontSize: 20,
                        color: '#f00'
                    }
                },
                itemStyle: {
                    color: '#f00'
                }
            }
        },{
        type: 'bar3D',
        name:'零售额',
        barSize: 20,
        data: databarline3D.map(function (item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'lambert',
        itemStyle: {
            opacity: 0.7,
            color: '#469499'
        },
        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#469499'
                }
            },
            itemStyle: {
                color: '#469499'
            }
        }
    }]
});
window.addEventListener('resize', function() {
    chartbarline3D.resize();
});