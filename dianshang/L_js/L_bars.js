
var myBars=echarts.init(document.getElementById("L_chart1"));
function bar(){

    var option = {
        backgroundColor: 'transparent',
       /* backgroundColor: 'rgba(255,255,255,0.3)',*/
        tooltip : {
            trigger: 'axis',
            axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        grid: {
            left: '1%',
            right: '1%',
            bottom: '2%',
            top:'13%',
            containLabel: true
        },
        legend: {
            data: ['线上零售', 'B2B']
        },
        xAxis:  {
            type: 'category',
            data: ['2012','2013','2014','2015','2016','2017']

        },
        yAxis: [
            {
                type: 'value',
                min: 0,
                max: 100,
                axisLabel: {
                    show: true,
                    interval: 'auto',
                    formatter: '{value} %'
                },
                show: true
            }
        ],
        series: [
            {
                name: '线上零售',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        fontSize:18,
                    }
                },
                itemStyle: {
                    normal: {
                        color:'#50B432',
                        label: {
                            show: true,

                            formatter: '{c}%'
                        }
                    }
                },

                data: [19.9, 22.1, 23.3, 28.8, 34.0, 35.4]
            },
            {
                name: 'B2B',
                type: 'bar',
                stack: '总量',
                label: {
                    normal: {
                        show: true,
                        position: 'inside',
                        fontSize:18,
                    }
                },
                itemStyle: {
                    normal: {
                        color:'#8DEE0D',
                        label: {
                            show: true,

                            formatter: '{c}%'
                        }
                    }
                },


                data: [80.1, 77.9, 76.7, 71.2, 66.0, 64.6]
            }



        ]
    };
    myBars.setOption(option);
}
