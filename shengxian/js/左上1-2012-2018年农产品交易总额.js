/**
 * Created by Administrator on 2017/11/1.
 */
(function(){
    var arrYear=[2012,2013,2014,2015,2016,2017,2018];
    var zztdata=[2.9,3.2,3.9,4.8,6.2,8.3,11.2];
    var zxtdata=[5.8,8.6,22.2,24.8,29.3,33.7,34.8];
    var mychart1= echarts.init(document.getElementById('tleft'));
    var option1 = {
        backgroundColor: 'linear-gradient(#acacad 1%, #6e6e6e 5%, #79797a 10%, #fdfdfe)',
        title: {
            textStyle: {
                fontSize: 16,
                fontWeight: 'normal',
                color: '#ffffff'          // 主标题文字颜色
            },
            text: '2012-2018年农产品交易总额',
            x: 'center'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#283b56'
                }
            }
        },
        legend: {
            textStyle: {
                fontSize: 12,
                fontWeight: 'normal',
                color: '#000000' // 图例文字颜色
            },
            top: 28,
            left: 'center',
            data:['总额增长率(%)', '交易总额(万亿)']
        },
        dataZoom: {
            show: false,
            start: 1,
            end: 100
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: true,
                data: arrYear
            }
        ],
        yAxis: [
            {
                splitLine:{show: false},//去除网格线
                type: 'value',
                scale: true,
                max: 18,
                min: 0,
                boundaryGap: [0.2, 0.2]
            },
            {
                show: false,
                type: 'value',
                scale: true,
                name: '增长率',
                max: 55,
                min: -100,
                boundaryGap: [0.2, 0.2]
            }
        ],
        series: [
            {
                name:'交易总额(万亿)',
                type:'bar',
                barWidth: '60%',
                data:zztdata,
                yAxisIndex: 0,
                itemStyle:{
                    normal:{
                        color: "#B1D132",
                        label:{
                            show: true,
                            position: 'top',
                            textStyle:{
                                color: '#000000'
                            }
                        }
                    }
                }
            },
            {
                name:'总额增长率(%)',
                type:'line',
                data:zxtdata,
                yAxisIndex: 1,
                itemStyle:{
                    normal:{
                        color: "#4FAFC5",
                        label:{
                            show: true,
                            position: 'top',
                            textStyle:{
                                color: '#000000'
                            }
                        }
                    }
                }
            }
        ]
    };
    var temp,temp1,temp2;
    setInterval(function (){
        var data0 = option1.series[0].data;//柱状图
        var data1 = option1.series[1].data;//折线图
        temp1=data0.shift();
        data0.push(temp1);
        temp2=data1.shift();
        data1.push(temp2);

        temp=option1.xAxis[0].data.shift();//X轴
        option1.xAxis[0].data.push(temp);

        mychart1.setOption(option1);
    }, 5000);
    mychart1.setOption(option1);

    //窗口改变图形大小改变
    window.addEventListener('resize',function(){
        mychart1.resize();
    });
}());
