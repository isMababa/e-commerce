var  hoursbardui3D= ['2013Q2', '2013Q3', '2013Q4', '2014Q1','2014Q2', '2014Q3', '2014Q4', '2015Q1','2015Q2', '2015Q3', '2015Q4', '2016Q1', '2016Q2'];
var daysbardui3D= [''];

var databardui3D = [
    [0,0,10.4],
    [0,1,10.3],
    [0,2,17.8],
    [0,3,23.8],
    [0,4,25.5],
    [0,5,32.5],
    [0,6,35.2],
    [0,7,36.7],
    [0,8,47.4],
    [0,9,55.5],
    [0,10,65.0],
    [0,11,70.7],
    [0,12,72.3]];
var databardui3D1 = [
    [0,0,89.6],
    [0,1,89.7],
    [0,2,82.2],
    [0,3,76.2],
    [0,4,74.5],
    [0,5,67.5],
    [0,6,64.8],
    [0,7,63.3],
    [0,8,52.6],
    [0,9,44.5],
    [0,10,35.0],
    [0,11,29.3],
    [0,12,27.7]
];
var chartbardui3D = echarts.init(document.getElementById('bardui3D'));
chartbardui3D.setOption({
    title: {
        show:true,
        text: '2011-2018年中国网上零售/移动网络占比',
        textStyle:{
            color:'#fff'
        },
        left:'center',
        top:'5px'
    },
    tooltip: {
        show:true,
        formatter:function (params) {
            return params.seriesName+"<br/>"+hoursbardui3D[params.dataIndex]+": "+params.value[2]+"%"
        }
    },
    legend: {
        left: 'center',
        top: 'bottom',
        textStyle: {
        color: '#000000'
        },
        data: ['PC端', '移动端']
    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: hoursbardui3D
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: daysbardui3D
    },
    zAxis3D: {
        type: 'value',
        name: '',
        axisLabel: {
            formatter: '{value} %'
        }
    },
    grid3D: {
        boxWidth: 220,
        boxDepth: 40,
        viewControl: {
            // projection: 'orthographic'
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
        type: 'bar3D',
        name:'移动端',
        barSize: 20,
        data: databardui3D.map(function (item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'lambert',
        stack: 'stack',
        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },
        itemStyle: {
            opacity: 0.7,
            color: '#1512ff'
        },
        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    },{
        type: 'bar3D',
        name:'PC端',
        barSize: 20,
        data: databardui3D1.map(function (item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'lambert',
        stack: 'stack',
        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },
        itemStyle: {
            opacity: 0.7,
            color: '#ff0722'
        },
        emphasis: {
            label: {
                textStyle: {
                    fontSize: 20,
                    color: '#900'
                }
            },
            itemStyle: {
                color: '#900'
            }
        }
    }]
});
window.addEventListener('resize', function() {
    chartbardui3D.resize();
});