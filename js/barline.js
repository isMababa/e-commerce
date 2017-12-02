var  hoursbarline= [ '2011', '2012', '2013', '2014', '2015', '2016','2017F','2018F'];
var daysbarline= ['',''];

var databarline = [
    [1,0,97.1],
    [1,1,685.7],
    [1,2,2616.5],
    [1,3,8616.5],
    [1,4,20752.7],
    [1,5,44726.0],
    [1,6,60633.2],
    [1,7,75496.7]
];
var databarline2 = [
    [0,1,60650],
    [0,2,28160],
    [0,3,22930],
    [0,4,14800],
    [0,5,11550],
    [0,6,3550],
    [0,7,2450]
];
var chartbarline = echarts.init(document.getElementById('barline'));
chartbarline.setOption({
    title: {
        show:true,
        text: '2017-2018年中国移动网购市场交易规模预测',
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
                return params.seriesName+"<br/>"+hoursbarline[params.dataIndex]+": "+(params.value[2]/100)+"%"
            }else{
                return params.seriesName+"<br/>"+hoursbarline[params.dataIndex]+": "+params.value[2]+"亿元"
            };
        }
    },
    legend: {
        left: 'center',
        top: 'bottom',
        textStyle: {
            color: '#000000'
        },
        data: ['增长率', '移动网购额']
    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: hoursbarline
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: daysbarline
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
        data: databarline2.map(function (item) {
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
        name:'移动网购额',
        barSize: 20,
        data: databarline.map(function (item) {
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
    chartbarline.resize();
});