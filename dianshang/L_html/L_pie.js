
pie();
function pie() {

    $('#L_pie1').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            options3d: {
                enabled: true,
                alpha:60
            }
        },

        title: {
            text: '2014年',
            verticalAlign: 'middle',
            style:{
                fontSize:'1.5em',
                fontWeight:"bold"
            },
            margin: [0, 0, 0, 0],
            spacing:[0, 0, 0, 0]

        },

        plotOptions: {
            pie: {
                innerSize: '60%',
                depth: 60,
                dataLabels:{
                    color:'red'
                }
            }
        },
        credits: {
            enabled: false  //隐藏highCharts.com标识
        },
        exporting: {enabled: false},//是否显示打印
        colors: ['#5A9AD4', '#ED551A'],
        series: [{
            name: '平台/自营占比',
            data: [
                ['平台类', 90.00],
                ['自营类', 10.00]
            ]
        }]
    });
};

pie1();
function pie1() {
    $('#L_pie2').highcharts({
        chart: {
            type: 'pie',
            backgroundColor: 'rgba(255, 255, 255, 0)',
            options3d: {
                enabled: true,
                alpha: 30
            }
        },
        title: {
            text: '2015年',
            verticalAlign: 'middle',
            style:{
                fontSize:'1.5em',
                fontWeight:"bold"
            },
            margin: [0, 0, 0, 0],
            spacing:[0, 0, 0, 0]

        },
        exporting: {enabled: false},//是否显示打印
        plotOptions: {
            pie: {
                innerSize: '60%',
                depth: 60
            }
        },
        credits: {
            enabled: false  //隐藏highCharts.com标识
        },
        colors: ['#5A9AD4', '#ED551A'],
        series: [{
            name: '平台/自营占比',
            data: [
                ['平台类', 74.5],
                ['自营类', 25.5]
            ]
        }]
    });
};