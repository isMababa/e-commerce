/**
 * Created by Administrator on 2017/11/1.
 */
$(function () {
    $('#bleft').highcharts({
        chart: {
            type: 'column',
            marginLeft: 50,
            backgroundColor: null
        },
        title: {
            text: '2008-2015年生鲜产品产量',
            x: 10,
            style: {
                color: '#ffffff',
                fontSize:16
            }
        },
        colorByPoint: true,
        xAxis: {
            lineColor: 'black',
            labels: {
                style: {
                    color: 'black'
                }
            },
            categories: ['2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015']
        },
        yAxis: {
            min: 0,
            title: {
                text: '单位:亿吨',
                align: 'high',
                offset: 0,
                rotation: 0,
                x: 55,
                y: 20
            },
            visible: true,
            lineColor: 'black',//轴颜色
            lineWidth: 1,
            showLastLabel: false,//不显示最后一个轴标签
            gridLineWidth: 0,//网格线不显示
            labels: {//轴标签文字样式
                style: {
                    color: 'black'
                },
                align: 'right',//轴文本与y轴对齐方式
                x: -2   //轴文本与y轴距离
            },
            stackLabels: {
                enabled: true,
                style: {//柱形图最上面文字样式
                    fontWeight: 'normal',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'center',//图例对齐方式
            //x: -20,//图例位置横向调整
            verticalAlign: 'top',
            y: 30,
            padding: 4,
            itemMarginBottom: 2,
            itemDistance: 1,//图例水平放置时，图例项之间间距
            symbolRadius: 18,//图例圆形标志圆形曲度
            floating: true,
            backgroundColor: null,
            //borderColor: '#CCC',
            //borderWidth: 1,
            shadow: false,
            itemStyle: {
                fontWeight: 'normal'
            }
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    '总量: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: 'black'
                }
            }
        },
        credits: {
            enabled: false//隐藏highcharts版权标志
        },
        series: [
            {
                name: '水产品',
                data: [1, 1, 1, 1, 1,1.2,1.1,1.2],
                color: '#FEFF01',
                dataLabels: {
                    enabled: false
                }
            },
            {
                name: '禽蛋',
                color: '#05AAD8',
                data: [0.8, 0.8, 0.8, 0.8, 0.8,0.8,0.8,0.9],
                dataLabels: {
                    enabled: false
                }
            },
            {
                name: '奶类',
                color: '#17C8F4',
                data: [1, 1, 1, 1, 1,1.2,1.1,1.2],
                dataLabels: {
                    enabled: false
                }
            },
            {
                name: '肉类',
                color: '#59AF28',
                data: [1,1, 1, 1, 1, 1,1,1],
                dataLabels: {
                    enabled: false
                }
            },
            {
                name: '水果',
                color: '#8AC33E',
                data: [1.6, 1.7, 1.9, 2.0, 2.1,2.3,2.6,2.7]
            },
            {
                name: '蔬菜',
                color: '#B2D030',
                data: [5.9, 6.2, 6.5, 6.8, 7.1,7.4,7.6,7.9]
            }
        ]
    });
});