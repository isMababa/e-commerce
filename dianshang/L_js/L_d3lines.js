



function drawLine(L1_divname,L1_ydata,L1_xdata){

    var L1_svgHeight = $('#'+L1_divname).height();
    var L1_svgWidth = $('#'+L1_divname).width();
    var L1_svg = d3.select('#'+L1_divname)
        .append('svg')
        .attr('width', L1_svgWidth)
        .attr('height', L1_svgHeight)
        .style('backgroundColor', 'rgba(255,255,255,0.3);');
    var L1_margin = {top: 10, right: 10, bottom: 0, left: 50};
    var L1_g1 = L1_svg.append('g')
        .attr('transform', 'translate(' + L1_margin.left + ',' + L1_margin.top + ')')
        .attr('id', 'g1');
    var L1_titleHeight = 0;
    var L1_g2 = L1_g1.append('g')
        .attr('transform', 'translate(0,' + L1_titleHeight + ')')
        .attr('id', 'L1_g2');
    //6，核心绘图区的外边距
    var L1_charmargin = {top: 20, right: 20, bottom: 20, left: 20};
    //7，绘图区的宽高
    var L1_charHeight = L1_svgHeight -L1_margin.top - L1_margin.bottom - L1_titleHeight;
    var L1_charWidth = L1_svgWidth - L1_margin.left - L1_margin.right;
    //8,核心绘图区的宽高，即x轴和y轴的宽高
    var L1_xaxisWidth = L1_charWidth - L1_charmargin.left - L1_charmargin.right;
    var L1_yaxisHeight = L1_charHeight - L1_charmargin.top - L1_charmargin.bottom;
    var L1_gxaxis = L1_g2.append('g')
        .attr('id',L1_divname+ 'xaxis')
        .attr('transform', 'translate(0,' + L1_yaxisHeight + ')');
    //10,定义G组，绘制核心绘图区添加Y轴
    var L1_gyaxis = L1_g2.append('g')
        .attr('id', L1_divname+'yaxis');
    //11,序段比例尺
    var L1_bandScale = d3.scaleBand()
        .padding(0.2)
        .domain(L1_xdata)
        .range([0, L1_charWidth - L1_charmargin.left - L1_charmargin.right]);
    //12,线性比例尺
    var L1_lineScale = d3.scaleLinear()
        .domain([0, d3.max(L1_ydata)])
        .range([L1_yaxisHeight, 0]);
    //13,生成x轴
    var L1_xaxis = d3.axisBottom()
        .scale(L1_bandScale);
    L1_xaxis(L1_gxaxis);
    //14，生成y轴
    var L1_yaxis = d3.axisLeft()
        .scale(L1_lineScale);
    L1_yaxis(L1_gyaxis);




    //定义折线
    //1.转化数据，将两个数组转化为一个二维数组
    var L1_dataset = d3.zip(L1_xdata,L1_ydata);
    console.log(L1_dataset);
    //2.使用线性生成器生成路径
    var L1_line = d3.line()
        .x(function(d,i){
            return L1_bandScale(d[0])+L1_bandScale.bandwidth()/2;
        })
        .y(function(d,i){
            return L1_lineScale(d[1])
        })
        .curve(d3.curveNatural);//定义线为曲线

    var _linePath2 = L1_g2.append('path')
        .attr('d',L1_line(L1_dataset))
        .attr("class","rect_line")
        .style('stroke','#1CAD8A')
        .style('stroke-width',5)
        .style('fill','none');

    L1_g2.selectAll('circle')
        .data(L1_xdata)
        .enter()
        .append('circle')
        .attr('cx',function(d,i){
            return L1_bandScale(L1_xdata[i])+L1_bandScale.bandwidth()/2;
        })
        .attr('cy',function(d,i){
            return L1_lineScale(L1_ydata[i])
        })

        .attr('r',8)
        .attr('fill','#90D7A7');

    L1_g2.append('g').selectAll('text')
        .data(L1_ydata)
        .enter()
        .append('text')
        .attr('x', function (d, i) {
            return L1_bandScale(L1_xdata[i]);
        })
        .attr('y', function (d, i) {
            return L1_lineScale(d);
        })
        .text(function(d,i){
            return d+'%';
        })
        .attr('text-anchor', 'middle')
        .attr('dy', '1em')
        .attr('dx', L1_bandScale.bandwidth() / 2)
        .style('fill', '#000000');

//给折线生成添加动画。
   /* var path = document.getElementsByClassName('rect_line');  //获取class标签为line的元素
    var length = path[0].getTotalLength();               //获取第一个折线的总共的长度
    d3.select('.rect_line')
        .style('stroke-dasharray', length)//stroke-dasharray设置线段间隔长度
        .style('stroke-dashoffset',length)//stroke-dashoffset线段的偏移量
        .transition()
        .duration(1000*2)
        .ease(d3.easeCubic)
        .delay(100)
        .style('stroke-dashoffset',0);*/



}



