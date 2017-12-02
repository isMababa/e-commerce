/**
 * Created by Administrator on 2017/11/2.
 */
$(function () {
    $('#bctRight').highcharts({
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: null
        },
        title: {
            text: '是否网购过进口生鲜',
            align: 'center',
            verticalAlign: 'top',
            y: 10,
            style: {
                fontSize: '16px',
                color: '#ffffff'
            }
        },
        credits: {
            enabled: false//隐藏highcharts版权标志
        },
        tooltip: {
            headerFormat: '{series.name}<br>',
            pointFormat: '{point.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                dataLabels: {
                    enabled: true,
                    distance: -50,
                    style: {
                        fontWeight: 'bold',
                        color: 'black',
                        textShadow: 'none',
                        fontSize: 14
                    }
                },
                startAngle: -90,
                endAngle: 90,
                center: ['50%', '85%']
            }
        },
        series: [{
            type: 'pie',
            name: '是否网购过进口生鲜',
            innerSize: '70%',
            data: [
                ['是',   53.1],
                ['否',   46.9]
            ]
        }]
    });
});