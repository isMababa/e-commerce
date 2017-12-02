var  hoursbar3D= ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
var daysbar3D= [''];

var databar3D = [
    [0,0,1220.1],
    [0,1,2527.7],
    [0,2,5459.2],
    [0,3,8673.9],
    [0,4,12856.0],
    [0,5,19749.8],
    [0,6,28637.2],
    [0,7,38351.7],
    [0,8,53288.0]
];
var chartbar3D = echarts.init(document.getElementById('bar3D'));
chartbar3D.setOption({
    title: {
        show:true,
        text: '2008-2016年中国网上零售市场交易规模',
        textStyle:{
            color:'#fff'
        },
        left:'center',
        top:'5px'
    },
    tooltip: {
        show:true,
        formatter:function (params) {
            return params.seriesName + "<br/>" + hoursbar3D[params.dataIndex] + ": " + params.value[2] + "亿元"
        }
    },
    visualMap: {
        max: 55000,
        inRange: {
            color: ['#313695', '#4575b4', '#74add1', '#abd9e9', '#e0f3f8', '#ffffbf', '#fee090', '#fdae61', '#f46d43', '#d73027', '#a50026']
        },
        itemHeight:80,
        text:[ 55000,0]
    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: hoursbar3D
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: daysbar3D
    },
    zAxis3D: {
        type: 'value',
        name: ''
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
        name:'网络零售',
        barSize: 20,
        data: databar3D.map(function (item) {
            return {
                value: [item[1], item[0], item[2]]
            }
        }),
        shading: 'lambert',

        label: {
            textStyle: {
                fontSize: 16,
                borderWidth: 1
            }
        },
        itemStyle: {
            opacity: 0.7
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
    }],
    animation:true,
    animationDurationUpdate:500,
    animationEasingUpdate:'cubicOut'
});
window.addEventListener('resize', function() {
    chartbar3D.resize();
});