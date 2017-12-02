var  hourssurface3D= ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'];
var dayssurface3D= ['',''];

var datasurface3D2 = [
    [0,0,1.06],
    [0,0,0],
    [0,1,1.06],
    [0,1,0]
];
var datasurface3D3 = [
    [8,0,14.90],
    [8,0,0],
    [8,1,14.90],
    [8,1,0]
];
var datasurface3D1 = [
    [0,0,1.06],
    [1,0,1.91],
    [2,0,3.48],
    [3,0,4.72],
    [4,0,6.11],
    [5,0,8.30],
    [6,0,10.91],
    [7,0,12.74],
    [8,0,14.90],
    [0,1,1.06],
    [1,1,1.91],
    [2,1,3.48],
    [3,1,4.72],
    [4,1,6.11],
    [5,1,8.30],
    [6,1,10.91],
    [7,1,12.74],
    [8,1,14.90],
    [0,1,0],
    [1,1,0],
    [2,1,0],
    [3,1,0],
    [4,1,0],
    [5,1,0],
    [6,1,0],
    [7,1,0],
    [8,1,0],
    [0,0,0],
    [1,0,0],
    [2,0,0],
    [3,0,0],
    [4,0,0],
    [5,0,0],
    [6,0,0],
    [7,0,0],
    [8,0,0],
    [0,0,1.06],
    [1,0,1.91],
    [2,0,3.48],
    [3,0,4.72],
    [4,0,6.11],
    [5,0,8.30],
    [6,0,10.91],
    [7,0,12.74],
    [8,0,14.90]
];
var chartsurface3D = echarts.init(document.getElementById('line3D'));
chartsurface3D.setOption({
    title: {
        show:true,
        text: '2008-2016年中国网上零售占社会消费品零售总额占比',
        textStyle:{
            color:'#fff'
        },
        left:'center',
        top:'5px'
    },
    tooltip: {

        show:true,
        formatter:function (params) {
            if(hourssurface3D[params.dataIndex]!=undefined){
                return params.seriesName+"<br/>"+hourssurface3D[params.dataIndex]+": "+params.value[2]+"亿元";
            }
        }

    },
    xAxis3D: {
        type: 'category',
        name: '',
        data: hourssurface3D
    },
    yAxis3D: {
        type: 'category',
        name: '',
        data: dayssurface3D
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
            //projection: 'orthographic',
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
        type: 'surface',
        name:'网上零售占比',
        wireframe: {
            show: false
        },
        data:datasurface3D1,
        itemStyle:{
            color:"#11ab0a",
            opacity:0.7
        }
    }, {
        type: 'surface',
        name:'网上零售占比',
        wireframe: {
            show: false
        },
        data:datasurface3D2,
        itemStyle:{
            color:"#ab130a",
            opacity:0.7
        }
    }, {
        type: 'surface',
        name:'网上零售占比',
        wireframe: {
            show: false
        },
        data:datasurface3D3,
        itemStyle:{
            color:"#ab080f",
            opacity:1
        }
    }]
});
window.addEventListener('resize', function() {
    chartsurface3D.resize();
});