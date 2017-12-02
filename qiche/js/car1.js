/*柱线混合图数据开始*/
var ydata1 = [835.5, 1374.4, 1851.9, 2487.4, 3387.9, 4279.0, 5408.9];
var xdatal = ['2009', '2010', '2011', '2012', '2013', '2014', '2015'];
var array = [31.5, 64.5, 34.7, 34.3, 36.2, 26.3, 26.4];
/*柱线混合图数据开始*/
/*双柱线图数据开始*/
var ydata2 = [8.9, 41.4, 43.5, 6.1];
var xdata2 = ['0-5公里', '5-10公里', '10-20公里', '20公里以上'];
var ydata3 = [4.3, 33.3, 52.1, 10.3];
var xdata3 = ['1小时以内', '1-2小时', '2-4小时', '4小时以上'];
/*双柱线图数据开始*/
var xdata4 = [19.2, 15.9, 9.5, 8.2, 7.8];
var ydata4 = ['产品来源及质量', '服务质量及专业度', '服务透明度', '网上口碑评价', '品牌知名度'];
var ydata5 = [19.5, 27.4];
var xdata5 = ['整体用户', '使用过在线用户'];
var ydata6 = [59.4, 67.0];
var xdata6 = ['整体用户', '使用过在线用户'];
var dataleida_shanghai = [
    [
        {name:"0",value:10},
        {name:"0",value:10},
        {name:"0",value:10},
        {name:"0",value:10},
        {name:"0",value:10},
        {name:"0",value:10}
    ]];
//上排左边开始
function drawBar(divname, ydata, xdata, array) {
    //1.����SVG����
    var svgwidth = $("#" + divname).width();
    var svgheight = $("#" + divname).height();
    //2.��������svg
    var _svg = d3.select("#" + divname)
        .append('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight)
        .attr("class", "svg");
    //3.������ͼ����Ҫ�뻭��֮�䶼��һ���߾�,���Ƕ���margin(��ʵ�ֻ�ͼ����SVG�ı��о���)
    var _margin = {top: 20, left: 50, right: 10, bottom: 30};
    //4.����G�飬ʵ�ֻ�ͼ��
    var _gdraw1 = _svg.append("g")
        .attr("transform", "translate(" + _margin.left + "," + _margin.top + ")")
        .attr("id", "gdraw1");
    //5.����title���������
    var _titleHeight = 10;
    //6.����G�飬ʵ�ֻ�ͼ����ȥ����߶�֮��
    var _gdraw2 = _gdraw1.append("g")
        .attr("transform", "translate(0," + _titleHeight + ")")
        .attr("id", "gdraw2");
    //7.������Ļ�ͼ�����ܱ߾��룺
    var _chartmargin = {top: 30, left: 20, right: 20, bottom: 20};
    //8.�������ͼ���Ŀ����;
    var chartheight = svgheight - _margin.top - _margin.bottom - _titleHeight;
    var chartwidth = svgwidth - _margin.left - _margin.right;
    //9.��������Ļ�ͼ���Ŀ���ߣ�x���y�ᣩ
    var yaxisheight = chartheight - _chartmargin.bottom - _chartmargin.top;
    var xaxiswidth = chartwidth - _chartmargin.left - _chartmargin.right;
    //10.����G�飬���ƺ��Ļ�ͼ�������y��
    var gyaxis = _gdraw2.append("g")
        .attr("id", divname + "yaxis");
    var gyaxis2 = _gdraw2.append("g")
        .attr("id", divname + "yaxis2")
        .attr("transform", "translate(" + xaxiswidth + ",0)")
        .attr("class", "yaxajs");
    //11.����G�飺�Դ�X��
    var gxaxis = _gdraw2.append("g")
        .attr("id", divname + "xaxis")
        .attr("transform", "translate(0," + yaxisheight + ")");
    //12.����x�᣺
    var _bandscale = d3.scaleBand()
        .padding(0.5)
        .domain(xdata)
        .range([0, chartwidth - _chartmargin.left - _chartmargin.right]);
    //13.����x��
    var xaxis = d3.axisBottom()
        .scale(_bandscale)
        .tickSize(0)
        .tickPadding(10);
         xaxis(gxaxis);
    //14.����y��
    var _linescale = d3.scaleLinear()
        .domain([0, 8000])
        .range([yaxisheight, 0]);
    var _linescale2 = d3.scaleLinear()
        .domain([0, d3.max(array)])
        .range([yaxisheight - 150, 0]);
    console.log(array);
    //15.����y��
    var yaxis = d3.axisLeft()
        .scale(_linescale)
        .tickSize(0)
        .tickPadding(10)
        .ticks(5);
    var yaxis2 = d3.axisRight()
        .scale(_linescale2)
        .tickSize(0)
        .tickPadding(10)
        .ticks(0);
    yaxis(gyaxis);
    yaxis2(gyaxis2);
    var gbar = _gdraw2.append("g")
        .selectAll("rect")
        .data(ydata)
        .enter()
        .append("rect");
    gbar.attr("x", function (d, i) {
        return _bandscale(xdata[i])
    })
        .attr("width", _bandscale.bandwidth())
        .attr("fill", "#b1d334")
        .attr("height", 0)
        .attr("y", yaxisheight);
    gbar.on('mouseover', function () {
    })
        .transition()
        .duration(3 * 1000)
        .attr("y", function (d, i) {
            return _linescale(d);
        })
        .attr("height", function (d, i) {
            return yaxisheight - _linescale(d);
        });
    var gtext = _gdraw2.append("g")
        .selectAll("text")
        .data(ydata)
        .enter()
        .append("text")
        .style("font-size", "12")
        .attr("x", function (d, i) {
            return _bandscale(xdata[i]);
        })
        .attr("y", function (d, i) {
            return _linescale(d + 500);
        })
        .text(function (d, i) {
            return d;
        })
        .attr("text-anchor", "middle")
        .attr("dx", _bandscale.bandwidth() / 2)
        .attr("dy", "-0.5em")
        .style("fill", "#b1d334")
        .transition()
        .duration(3 * 1000)
        .tween("text", function (d) {
            var node = this;
            return function (t) {
                node.textContent = (t * d).toFixed(1);
                node.setAttribute("y", _linescale(t * d));
            }
        });
    var dataset = d3.zip(xdata, array);
    var _line = d3.line()
        .x(function (d) {
            return _bandscale(d[0]) + _bandscale.bandwidth() / 2;
        })
        .y(function (d) {
            return _linescale2(d[1]);
        })
        .curve(d3.curveNatural);
    _gdraw2.append("path")
        .attr("d", _line(dataset))
        .attr("stroke", "#b1d334")
        .style("fill", "none");
    _gdraw2.selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("cx", function (d, i) {
            console.log(d);
            return _bandscale(d[0]) + _bandscale.bandwidth() / 2;
        })
        .attr("cy", function (d, i) {
            return _linescale2(d[1]);
        })
        .attr("r", 5)
        .attr("fill", "#b1d334");
    var linetext = _gdraw2.append("g")
        .selectAll("text")
        .data(array)
        .enter()
        .append("text")
        .attr("x", function (d, i) {
            console.log(_bandscale(xdata[i]));
            return _bandscale(xdata[i]);
        })
        .attr("y", function (d, i) {
            console.log(_linescale2(d));
            return _linescale2(array[i])
        })
        .attr("text-anchor", "middle")
        .attr("dx", _bandscale.bandwidth() / 2)
        .attr("dy", "-0.8em")
        .style("fill", "#b1d334")
        .style("font-size", "10")
        .text(function (d, i) {
            return d + "%"
        });
}
drawBar("rectWrap", ydata1, xdatal, array);
//上排左边结束
//上排中间开始
/*上排中间上部开始*/
function drawraderM(divname) {

    //1.定义SVG宽及高
    var svgwidth = $("#" + divname).width();
    var svgheight = $("#" + divname).height();
    //2.定义整体svg
    var _svg = d3.select("#" + divname)
        .append('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight);
    var _gdraw2=_svg.append('g');
    _gdraw2.append("circle")
        .attr("cx",svgwidth/5)
        .attr("cy",svgheight /2)
        .attr("r",svgwidth/10)
        .attr("fill", "#93d14e");
    _gdraw2.append("circle")
        .attr("cx",svgwidth/5)
        .attr("cy",svgheight /2)
        .attr("r",svgwidth/11)
        .attr("fill", "#fff");
    var arr=['中国汽车后市','场养护行业电商化','程度（到店服务的纯','汽配产品不包含)','在内<1%'];

    _gdraw2.selectAll(".hhhh")
        .data(arr)
        .enter()
        .append("text")
        .attr("x",svgwidth/5)
        .attr("y",function(d,i){
            return svgheight/3+15*i
        })
        .attr("text-anchor","middle")
        .attr("font-size","0.6em")
        .text(function(d,i){
            return d
        })
        .attr("fill","rgba(0,0,0,.8)");
    _gdraw2.append("circle")
        .attr("cx",(svgwidth/5)*2)
        .attr("cy",((svgheight /2)-(svgwidth/10)))
        .attr("r",5)
        .attr("fill", "#93d14e");
    _gdraw2.append("circle")
        .attr("cx",(svgwidth/5)*2)
        .attr("cy",((svgheight /2)+(svgwidth/10)))
        .attr("r",5)
        .attr("fill", "#93d14e");
    _gdraw2.append("line")
        .attr("x1",(svgwidth/5)*2)
        .attr("y1",((svgheight /2)-(svgwidth/10)))
        .attr("x2",(svgwidth/5)*2)
        .attr("y2",((svgheight /2)+(svgwidth/10)))
        .attr("stroke", "#93d14e")
        .attr("stroke-width",2);
    _gdraw2.append("line")
        .attr("x1",(svgwidth/5)*2)
        .attr("y1",svgheight /2)
        .attr("x2",(svgwidth/10)*3)
        .attr("y2",svgheight /2)
        .attr("stroke", "#93d14e")
        .attr("stroke-width",2);
    _gdraw2.append("text")
        .attr("x",(svgwidth/5)*2+8)
        .attr("y",((svgheight/2)-(svgwidth/10)+15))
        .attr("text-anchor","left")
        .attr("font-size","0.8em")
        .text("中国服装行业电商化程度")
        .attr("fill",'rgba(0,0,0,.8)');
    _gdraw2.append("text")
        .attr("x",(svgwidth/5)*2+8)
        .attr("y",((svgheight /2)+(svgwidth/10)-15))
        .attr("text-anchor","left")
        .attr("font-size","0.8em")
        .text("中国消费品行业电商化程度")
        .attr("fill",'rgba(0,0,0,.8)');
    _gdraw2.append("circle")
        .attr("cx",(svgwidth/5)*4)
        .attr("cy",((svgheight /2)-(svgwidth/10)+15))
        .attr("r","8%")
        .attr("fill", "#93d14e");
    _gdraw2.append("circle")
        .attr("cx",(svgwidth/5)*4)
        .attr("cy",((svgheight /2)-(svgwidth/10)+15))
        .attr("r","7%")
        .attr("fill", "#fff");
    _gdraw2.append("text")
        .attr("x",(svgwidth/5)*4)
        .attr("y",((svgheight /2)-(svgwidth/10)+15))
        .attr("text-anchor","middle")
        .attr("font-size","1em")
        .text("21.9%")
        .attr("fill","#000");
    _gdraw2.append("circle")
        .attr("cx",(svgwidth/5)*4)
        .attr("cy",((svgheight /2)+(svgwidth/10)-15))
        .attr("r","8%")
        .attr("fill", "#93d14e");
    _gdraw2.append("circle")
        .attr("cx",(svgwidth/5)*4)
        .attr("cy",((svgheight /2)+(svgwidth/10)-15))
        .attr("r","7%")
        .attr("fill", "#fff");
    _gdraw2.append("text")
        .attr("x",(svgwidth/5)*4)
        .attr("y",((svgheight /2)+(svgwidth/10)-10))
        .attr("text-anchor","middle")
        .attr("font-size","1em")
        .text("10.0%")
        .attr("fill","#000");

}
drawraderM("circle_t");
/*上排中间上部结束*/
/*上排中间中部开始*/
function drawrader(divname,dataset) {

    //1.定义SVG宽及高
    var svgwidth = $("#" + divname).width();
    var svgheight = $("#" + divname).height();
    //2.定义整体svg
    var _svg = d3.select("#" + divname)
        .append('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight);
    //3.真正画图可能要与画框之间都有一个边距,我们定义margin(即实现绘图区与SVG四边有距离)
    var _margin = {top: 10, left: 30, right: 10, bottom: 30};
    //4.定义G组，实现绘图区
    var _gdraw1 = _svg.append("g")
        .attr("transform", "translate(" + _margin.left + "," + _margin.top + ")")
        .attr("id", "gdraw1")
    //5.定义title，给其设高
    var _titleHeight = 50;
    //6.定义G组，实现绘图区（去标题高度之后）
    var _gdraw2 = _gdraw1.append("g")
        .attr("transform", "translate(0," + _titleHeight + ")")
        .attr("id", "gdraw2");
    //7.定义核心绘图区与周边距离：
    var _chartmargin = {top: 20, left: 20, right: 20, bottom: 20};
    //8.计算出绘图区的宽与高;
    var chartheight = svgheight - _margin.top - _margin.bottom - _titleHeight;
    var chartwidth = svgwidth - _margin.left - _margin.right;
    //9.计算出核心绘图区的宽与高（x轴和y轴）
    var yaxisheight = chartheight - _chartmargin.bottom - _chartmargin.top;
    var xaxiswidth = chartwidth - _chartmargin.left - _chartmargin.right;
    /*###############################################################*/
//以下才是真正实现雷达图：
    /*1.生成几根轴线，且是平分的*/
    //以下添加值相同的数组
    var outpie_data = [];
    for (var i = 0; i < dataset[0].length; i++) {
        outpie_data.push(1);
    }
    var _pie = d3.pie();
    var _arcpie = _pie(outpie_data);
    var _arc = d3.arc()
        .innerRadius(xaxiswidth / 4)
        .outerRadius(xaxiswidth /4);
    //画六边形
    _gdraw2.append('g')
        .attr("transform", "translate(" + xaxiswidth /2 + "," + yaxisheight /2 + ")")
        .append('polygon')
        .attr('points', function () {
            var mm="";
            for(var i= 0;i<_arcpie.length;i++){
                mm+=_arc.centroid(_arcpie[i])[0]+","+_arc.centroid(_arcpie[i])[1]+" ";
            }
            return mm;
        })
        .attr('fill', function(){
            if(divname=="circle_b_left"){
                return "#93d14e"
            }else{
                return "#64AF44"
            }

        });
    //添加字体

    _gdraw2.append("text")
        .attr("x",xaxiswidth /2)
        .attr("y",yaxisheight / 2)
        .attr("text-anchor","middle")
        .attr("font-size","1em")
        .attr("font-weight",800)
        .text(function(){
            if(divname=="circle_b_left"){
                return "383元"
            }else{
                return "519元"
            }
        })
        .attr("fill","#fff");
    _gdraw2.append("circle")
        .attr("cx",function(){
            if(divname=="circle_b_left"){
                return xaxiswidth /6
            }else{
                return (xaxiswidth /6)*5
            }
        })
        .attr("cy","-10%")
        .attr("r","3%")
        .attr("fill",function(){
            if(divname=="circle_b_left"){
                return "#93d14e"
            }else{
                return "#64AF44"
            }
        });
    var _rect=_svg.append("g");
    _rect.append("rect")
        .attr("x","6%")
        .attr("y",0)
        .attr("rx","5%")
        .attr("ry","5%")
        .attr("width","88%")
        .attr("height","15%")
        .attr("fill",function(){
            if(divname=="circle_b_left"){
                return "#93d14e"
            }else{
                return "#64AF44"
            }
        });
    _rect.append("text")
        .attr("x",(xaxiswidth/5)*4)
        .attr("y","11%")
        .attr("text-anchor","middle")
        .attr("font-size","1em")
        .attr("font-weight",800)
        .attr("fill","#fff")
        .text(function(){
            if(divname=="circle_b_left"){
                return "养护类电商平均水平"
            }else{
                return "养护行业平均水平"
            }
        });
    _rect.append("rect")
        .attr("x","5%")
        .attr("y","40%")
        .attr("width","3%")
        .attr("height","60%")
        .attr("fill",function(){
            if(divname=="circle_b_left"){
                return "#93d14e"
            }else{
                return "#64AF44"
            }

        });
    var _rect=_svg.append("g");
    _rect.append("rect")
        .attr("x",0)
        .attr("y","90%")
        .attr("width","90%")
        .attr("height","5%")
        .attr("fill",function(){
            if(divname=="circle_b_left"){
                return "#93d14e"
            }else{
                return "#64AF44"
            }
        });
}
drawrader("circle_b_left",dataleida_shanghai);
drawrader("circle_b_right",dataleida_shanghai);
/*上排中间中部开始*/
//上排中间结束
//上排右边开始
function drawMap(divname) {
    var dataset = [

        {name: '安徽', value: 536},
        {name: '北京', value: 2895},
        {name: '重庆', value: 2521},
        {name: '福建', value:1065},
        {name: '广东', value: 2108},
        {name: '甘肃', value: 320},
        {name: '广西', value:621},
        {name: '贵州', value: 240},
        {name: '河北', value: 752},
        {name: '黑龙江', value:854},
        {name: '河南', value: 962},
        {name: '海南', value: 375},
        {name: '湖北', value: 852},
        {name: '湖南', value: 951},
        {name: '江苏', value:632},
        {name: '江西', value: 863},
        {name: '吉林', value:426},
        {name: '辽宁', value: 894},
        {name: '内蒙古', value:25},
        {name: '宁夏', value:66},
        {name: '青海', value: 37},
        {name: '山西', value: 96},
        {name: '陕西', value:486},
        {name: '山东', value: 1988},
        {name: '上海', value: 1735},
        {name: '四川', value: 956},
        {name: '天津', value:753},
        {name: '台湾', value:553},
        {name: '香港', value: 22},
        {name: '西藏', value: 51},
        {name: '新疆', value:24},
        {name: '云南', value: 99},
        {name: '浙江', value: 2210}];
    //取得数组中value最大值
    var sumdata = d3.sum(dataset, function (d) {
        return d.value;
    });
    var maxdata = d3.max(dataset, function (d) {
        return (d.value / sumdata * 100).toFixed(2);
    });
    var color1 = ['#ffbf00', '#b1d334', '#64AF44', '#03aef2', '#0475c2'];
    var arr = [];
    for (var i = 0; i < color1.length; i++) {
        arr.push((maxdata / 5 * i).toFixed(2) + "-" + (maxdata / 5 * (i + 1)).toFixed(2) + "%");
    }
    //定义量化比例尺：
    var color = d3.scaleQuantize()
        .domain([0, maxdata])
        .range(color1);
    //定义map对象：
    var mapdata = d3.map(dataset, function (d) {
        return d.name;
    });

    d3.json("../js/china.json", function (error, data) {
        //定义投影：
        var _projecttion = d3.geoMercator()
            .center([116.39096260070801, 39.9147396604924])
            .fitExtent([[0, 0], [$("#" + divname).width()-10, $("#" + divname).height()-10]], data)

        //定义地理路径生成器：
        var _geopath = d3.geoPath()
            .projection(_projecttion);
        //定义svg,生成path
        var _svg = d3.select("#" + divname)
            .append("svg")
            .attr("class", "svg")
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("stoke", "#000000")
            .attr("stoke-width", "1");
        _svg.selectAll("path")
            .data(data.features)
            .enter()
            .append("path")
            .attr("d", _geopath)
            .attr("fill", function (d) {
                var proname = d.properties.name;
                var prodata = mapdata.get(proname);
                if (prodata) {
                    return color((prodata.value / sumdata * 100).toFixed(2))
                } else {
                    return 'gray'
                }
            })
            .on("click", function (d) {
                d3.select(this.parentNode)
                    .selectAll('path')
                    .style("fill", function (d) {
                        var proname = d.properties.name;
                        var prodata = mapdata.get(proname);
                        if (prodata) {
                            return color((prodata.value / sumdata * 100).toFixed(2))
                        } else {
                            return 'gray'
                        }
                    });
                d3.select(this).style("fill", "gray")
            });
        _svg.selectAll("text")
            .data(data.features)
            .enter()
            .append('text')
            .attr("x", function (d) {
                var xypoint = _geopath.centroid(d);
                return xypoint[0];
            })
            .attr("y", function (d) {
                var xypoint = _geopath.centroid(d);
                return xypoint[1];
            })
            .attr("dy", "1em")
            .attr("text-anchor", "middle")
            .text(function (d) {
                //console.log(d);
                return d.properties.name;
            })
            .style("font-size", '12px');
        var g = _svg.append("g");
        g.selectAll("rect")
            .data(arr)
            .enter()
            .append("rect")
            .attr("class", "rect")
            .attr("x", "5%")
            .attr("y", function (d, i) {
                //console.log(d);
                return $(".svg").height() - 8 * color1.length + 15 * i;
            })
            .attr("width", "4%")
            .attr("height", "3%")
            .attr("fill", function (d, i) {
                return color1[i]
            })
            .on("click", function (d) {
                d3.select(this.parentNode)
                    .selectAll('rect')
                    .style("fill", function (d, i) {
                        return "gray"
                    });
                console.log(this.parentNode.parentNode)
                ;
                d3.select(this).style("fill", function (d, i) {
                    var shen = this;
                    return color1[shen.index]
                });
                d3.select(this.parentNode.parentNode)
                    .selectAll('path')
                    .style("fill", function (d, i) {

                        return color1[i]
                    });

            });
        g.selectAll("text")
            .data(arr)
            .enter()
            .append("text")
            .attr("x", "10%")
            .attr("y", function (d, i) {
                console.log(d);
                return $(".svg").height() - 8 * color1.length + 15 * i;
            })
            .attr("dy", "1em")
            .attr("text-anchor", "left")
            .text(function (d) {
                return d;
            })
            .style("font-size", '12px')
            .attr("fill", function () {
                return "#888"
            });
    });

}
drawMap("mapWrap");
//上排右边结束
//下排左边开始
function drawRect(divname, ydata, xdata) {
    var svgwidth = $("#" + divname).width();
    var svgheight = $("#" + divname).height();
    //2.定义整体svg
    var _svg = d3.select("#" + divname)
        .append('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight)
        .attr("class", "svg");
    //3.真正画图可能要与画框之间都有一个边距,我们定义margin(即实现绘图区与SVG四边有距离)
    var _margin = {top: 10, left: 10, right: 10, bottom: 10};
    //4.定义G组，实现绘图区
    var _gdraw1 = _svg.append("g")
        .attr("transform", "translate(" + _margin.left + "," + _margin.top + ")")
        .attr("class", "gdraw");
    //5.定义title，给其设高
    var _titleHeight = 100;
    var _title = _svg.append("g");
    _title.append("text")
        .attr("y", "2%")
        .attr("x", "25%")
        .text(function () {
            if (divname == "left") {
                return "单次平均出行里程"
            } else {
                return "最长驾驶时间"
            }
        })
        .attr("dy", "2em")
        .attr("text-anchor", "left")
        .attr("font-size", "1.2em")
        .attr("fill", "rgba(255, 255, 255, 0.8)");
    //6.定义G组，实现绘图区（去标题高度之后）
    var _gdraw2 = _gdraw1.append("g")
        .attr("transform", "translate(0," + _titleHeight + ")")
        .attr("id", "gdraw2");
    //7.定义核心绘图区与周边距离：
    var _chartmargin = {top: 10, left: 10, right: 10, bottom: 10};
    //8.计算出绘图区的宽与高;
    var chartheight = svgheight - _margin.top - _margin.bottom - _titleHeight;
    var chartwidth = svgwidth - _margin.left - _margin.right;
    //9.计算出核心绘图区的宽与高（x轴和y轴）
    var yaxisheight = chartheight - _chartmargin.bottom - _chartmargin.top;
    var xaxiswidth = chartwidth - _chartmargin.left - _chartmargin.right;
    //10.定义G组，绘制核心绘图区以添加y轴
    var gyaxis = _gdraw2.append("g")
        .attr("id", divname + "yaxis");
    //11.定义G组：以存X轴
    var gxaxis = _gdraw2.append("g")
        .attr("id", divname + "xaxis")
        .attr("transform", "translate(0," + yaxisheight + ")");
    //12.定义x轴：
    var _bandscale = d3.scaleBand()
        .padding(0.2)
        .domain(xdata)
        .range([0, chartwidth - _chartmargin.left - _chartmargin.right]);
    //13.生成x轴
    var xaxis = d3.axisBottom()
        .scale(_bandscale)
        .tickSize(0)
        .tickPadding(10);
    xaxis(gxaxis);
    //14.定义y轴
    var _linescale = d3.scaleLinear()
        .domain([0, d3.max(ydata)])
        .range([yaxisheight, 0]);
    //15.生成y轴
    var yaxis = d3.axisLeft()
        .scale(_linescale)
        .tickSize(0)
        .tickPadding(10)
        .ticks(0);
    //16。绘制Y轴
    yaxis(gyaxis);
    var gbar = _gdraw2.append("g")
        .selectAll("rect")
        .data(ydata)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return _bandscale(xdata[i])
        })
        .attr("y", function (d, i) {
            return _linescale(d);
        })
        .attr("rx","3%")
        .attr("ry", "1%")
        .attr("width", _bandscale.bandwidth())
        .attr("height", function (d, i) {
            return yaxisheight - _linescale(d);
        })
        .attr("border-radius","5%")
        .attr("fill", function () {
            if (divname == 'left') {
                return '#b1d334'
            } else {
                return '#64AF44'
            }
        });
    //以下在柱形图上添加文本
    //1.定义G组，存放添加的文本
    var gtext = _gdraw2.append("g")
        .selectAll("text")
        .data(ydata)
        .enter()
        .append("text")
        .attr("x", function (d, i) {
            return _bandscale(xdata[i]);
        })
        .attr("y", function (d, i) {
            return _linescale(d);
        })
        .text(function (d, i) {
            return d + "%";
        })
        .attr("text-anchor", "middle")
        .attr("dx", _bandscale.bandwidth() / 2)
        .attr("dy", "-0.5em")
        .style("fill", function () {
            if (divname == 'left') {
                return 'rgba(0,0,0,.8)'
            } else {
                return 'rgba(0,0,0,.8)'
            }
        })
        .style("font-size", "12px")
}
drawRect("right", ydata3, xdata3);
drawRect("left", ydata2, xdata2);
function DrawCircle(divname){
    var svgwidth=$("#"+divname).width();
    var svgheight=$("#"+divname).height();
    var _svg=d3.select("#"+divname)
        .append('svg')
        .attr("class","svg")
        .attr("width",svgwidth)
        .attr("height",svgheight);
    var _rect=_svg.append("g");
    _rect.append("rect")
        .attr("x",svgwidth/2)
        .attr("y",0)
        .attr("width",svgheight/5)
        .attr("height",svgheight/5)
        .attr("fill",function(){
            if(divname=="pathWrap_left_p"){
                return "#b1d334"
            }else{
                return "#64AF44"
            }
        });
    _rect.append("circle")
        .attr("cx",svgwidth/2)
        .attr("cy",svgheight/5)
        .attr("r",svgheight/5)
        .attr("fill",function(){
            if(divname=="pathWrap_left_p"){
                return "#b1d334"
            }else{
                return "#64AF44"
            }
        });
    var arr=['AVG', '10.9','公里'];
    var arr1=['AVG', '2.5','小时'];
    _rect.selectAll(".nisha")
        .data(function(){
            if(divname=="pathWrap_left_p"){
                return arr
            }else{
                return arr1
            }
        })
        .enter()
        .append("text")
        .attr("x",svgwidth/2)
        .attr("y",function(d,i){
            return svgheight/8+10*i
        })
        .attr("text-anchor","middle")
        .attr("font-size","8px")
        .text(function(d,i){
            return d

        })
        .attr("fill","#fff")


}
DrawCircle("pathWrap_left_p");
DrawCircle("pathWrap_right_p");
//下排左边结束
//下排中间开始
function DrawCircle1(divname){
    var svgwidth=$("#"+divname).width();
    var svgheight=$("#"+divname).height();
    var _svg=d3.select("#"+divname)
        .append('svg')
        .attr("class","svg")
        .attr("width",svgwidth)
        .attr("height",svgheight);
    var _rect=_svg.append("g");
    var arr=['平均2年','更换一次'];
    var arr1=['平均3月','保养一次'];
    _rect.append("text")
        .attr("x",svgwidth/2)
        .attr("y",svgheight/8)
        .attr("text-anchor","middle")
        .attr("font-size","1em")
        .text(function(){
            if(divname=='circle0'){
                return '轮胎'
            }else{
                return '养护'
            }
        })
        .attr("fill","rgba(0,0,0,0.8)");
    _rect.append("circle")
        .attr("cx",svgwidth/2)
        .attr("cy",svgheight/2)
        .attr("r",svgheight/3)
        .attr("fill","#93d14e");
    _rect.append("circle")
        .attr("cx",svgwidth/2)
        .attr("cy",svgheight/2)
        .attr("r",svgheight/3-5)
        .attr("fill","rgba(255,255,255,0.5)");

    _rect.selectAll(".sha")
        .data(function(){
            if(divname=='circle0'){
                return arr
            }else{
                return arr1
            }
        })
        .enter()
        .append("text")
        .attr("x",svgwidth/2)
        .attr("y",function(d,i){
            return svgheight/2+16*i
        })
        .attr("text-anchor","middle")
        .attr("font-size","16px")
        .text(function(d,i){
            return d
        })
        .attr("fill","#000")


}
DrawCircle1("circle0");
DrawCircle1("circle1");
function hua(divname){
    var svgwidth=$("#"+divname).width();
    var svgheight=$("#"+divname).height();
    var _svg=d3.select("#"+divname)
        .append('svg')
        .attr("class","svg")
        .attr("width",svgwidth)
        .attr("height",svgheight);
    var _rect=_svg.append("g");
    _rect.append("rect")
        .attr("x",0)
        .attr("y",0)
        .attr("width","100%")
        .attr("height","100%")
        .attr("fill","#93d14e");
    arr=['个','人','月','收','入'];
    arr1=['学','历'];
    _rect.selectAll(".sha")
        .data(function(){
            if(divname=='tranWrap_top_t_left'){
                return arr
            }else{
                return arr1
            }
        })
        .enter()
        .append("text")
        .attr("x",svgwidth/2)
        .attr("y",function(d,i){
            if(divname=='tranWrap_top_t_left'){
                return svgheight/3+20*i
            }else{
                return svgheight/2+20*i
            }

        })
        .attr("text-anchor","middle")
        .attr("font-size","14px")
        .attr("font-weight",800)
        .text(function(d,i){
            return d

        })
        .attr("fill","#fff")
};
function drawRect1(divname, ydata, xdata) {
    var svgwidth = $("#" + divname).width();
    var svgheight = $("#" + divname).height();
    //2.定义整体svg
    var _svg = d3.select("#" + divname)
        .append('svg')
        .attr("width", svgwidth)
        .attr("height", svgheight)
        .attr("class", "svg");
    //3.真正画图可能要与画框之间都有一个边距,我们定义margin(即实现绘图区与SVG四边有距离)
    var _margin = {top: 10, left: 20, right: 10, bottom: 10};
    //4.定义G组，实现绘图区

    var _gdraw1 = _svg.append("g")
        .attr("transform", "translate(" + _margin.left + "," +_margin.top+ ")")
        .attr("class", "gdraw");
    //5.定义title，给其设高
    var _titleHeight = 20;
    var _title = _svg.append("g");
    _title.append("text")
        .attr("y", "2%")
        .attr("x", "55%")
        .text(function () {
            if (divname == "tranWrap_top_t_right") {
                return "10000以上"
            } else {
                return "本科及以上"
            }
        })
        .attr("dy", "0.8em")
        .attr("text-anchor", "left")
        .attr("fill", "rgba(255,255,255,.8)");
    //6.定义G组，实现绘图区（去标题高度之后）
    var _gdraw2 = _gdraw1.append("g")
        .attr("transform", "translate(0," + _titleHeight + ")")
        .attr("id", "gdraw2");
    //7.定义核心绘图区与周边距离：
    var _chartmargin = {top: 10, left: 10, right: 10, bottom: 10};
    //8.计算出绘图区的宽与高;
    var chartheight = svgheight - _margin.top - _margin.bottom - _titleHeight;
    var chartwidth = svgwidth - _margin.left - _margin.right;
    //9.计算出核心绘图区的宽与高（x轴和y轴）
    var yaxisheight = chartheight - _chartmargin.bottom - _chartmargin.top;
    var xaxiswidth = chartwidth - _chartmargin.left - _chartmargin.right;
    //10.定义G组，绘制核心绘图区以添加y轴
    var gyaxis = _gdraw2.append("g")
        .attr("id", divname + "yaxis");
    //11.定义G组：以存X轴
    var gxaxis = _gdraw2.append("g")
        .attr("id", divname + "xaxis")
        .attr("transform", "translate(0," + yaxisheight + ")");
    //12.定义x轴：
    var _bandscale = d3.scaleBand()
        .padding(0.2)
        .domain(xdata)
        .range([0, chartwidth - _chartmargin.left - _chartmargin.right]);
    //13.生成x轴
    var xaxis = d3.axisBottom()
        .scale(_bandscale)
        .tickSize(0)
        .tickPadding(10)
        .ticks(0);
    xaxis(gxaxis);
    //14.定义y轴
    var _linescale = d3.scaleLinear()
        .domain([0, d3.max(ydata)*1.5])
        .range([yaxisheight, 0]);
    //15.生成y轴
    var yaxis = d3.axisLeft()
        .scale(_linescale)
        .tickSize(0)
        .tickPadding(10)
        .ticks(0);

    //16。绘制Y轴
    yaxis(gyaxis);
    var gbar = _gdraw2.append("g")
        .selectAll("rect")
        .data(ydata)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return _bandscale(xdata[i])
        })
        .attr("y", function (d, i) {
            return _linescale(d);
        })
        .attr("rx","3%")
        .attr("ry", "1%")
        .attr("width", _bandscale.bandwidth())
        .attr("height", function (d, i) {
            return yaxisheight - _linescale(d);
        })
        .attr("border-radius","5%")
        .attr("fill", function () {
            if (divname == 'tranWrap_top_t_right') {
                return '#b1d334'
            } else {
                return '#64AF44'
            }
        });
    //以下在柱形图上添加文本
    //1.定义G组，存放添加的文本
    var gtext = _gdraw2.append("g")
        .selectAll("text")
        .data(ydata)
        .enter()
        .append("text")
        .attr("x", function (d, i) {
            return _bandscale(xdata[i]);
        })
        .attr("y", function (d, i) {
            return _linescale(d);
        })
        .text(function (d, i) {
            return d + "%";
        })
        .attr("text-anchor", "middle")
        .attr("dx", _bandscale.bandwidth() / 2)
        .attr("dy", "-0.5em")
        .style("fill", function () {
            if (divname == 'tranWrap_top_t_right') {
                return '#b1d334'
            } else {
                return '#64AF44'
            }
        })
        .style("font-size", "12px")
}
hua('tranWrap_top_t_left');
hua('tranWrap_top_b_left');
drawRect1('tranWrap_top_t_right',ydata5,xdata5);
drawRect1('tranWrap_top_b_right',ydata6,xdata6)
//下排中间结束
//下排右边开始
function drawBar1(divname,xdata,ydata){
    //1.定义svg的宽高
    var svgwidth=$("#"+divname).width();
    var svgheight=$("#"+divname).height();
    //2.定义整体svg
    var _svg=d3.select("#"+divname)
        .append('svg')
        .attr("class","svg")
        .attr("width",svgwidth)
        .attr("height",svgheight);
    //设置周边宽高
    var _margin={top:10,left:30,right:10,bottom:30};
    //绘图区
    var _gdraw1=_svg.append("g")
        .attr("transform","translate("+_margin.left+","+_margin.top+")")
        .attr("id","_gdraw1")
        .attr("height",svgheight-(_margin.bottom+_margin.top))
        .attr("width",svgwidth-(_margin.left+_margin.right));
    //设置标题的高度
    var _titleHeight=0;
    var _gdraw2=_gdraw1.append("g")
        .attr("transform","translate(0,"+_titleHeight+")")
        .attr("id","gdraw2");
    //7.定义核心绘图区与周边距离：
    var _chartmargin={top:20,left:20,right:20,bottom:20};
    //8.计算出绘图区的宽与高;
    var chartheight=svgheight-_margin.top-_margin.bottom-_titleHeight;
    var chartwidth=svgwidth-_margin.left-_margin.right;
    //9.计算出核心绘图区的宽与高（x轴和y轴）
    var yaxisheight=chartheight-_chartmargin.bottom-_chartmargin.top;
    var xaxiswidth=chartwidth-_chartmargin.left-_chartmargin.right;
    //11.定义G组：以存X轴
    var gxaxis=_gdraw2.append("g")
        .attr("id",divname+"xaxis")
        .attr("transform","translate("+xaxiswidth/2+",0)");
    //12.定义x轴：
    var _linescale=d3.scaleLinear()
        .domain([0,d3.max(ydata)])
        .range([0,xaxiswidth/3]);
    //15.生成x轴
    var xaxis=d3.axisTop()
        .scale(_linescale)
        .tickSize(0)
        .tickPadding(10)
        .ticks(0);
    xaxis(gxaxis);
    //10.定义G组，绘制核心绘图区以添加y轴
    var gyaxis=_gdraw2.append("g")
        .attr("id",divname+"yaxis")
        .attr("transform","translate("+xaxiswidth/2+",0)");
    //12.定义y轴：
    var _bandscale=d3.scaleBand()
        .padding(0.5)
        .domain(xdata)
        .range([0,chartheight-_chartmargin.top-_chartmargin.bottom]);
    //13.生成y轴
    var yaxis=d3.axisLeft()
        .scale(_bandscale)
        .tickSize(0)
        .tickPadding(10);
    yaxis(gyaxis);
    //生成柱状图
    var gbar1=_gdraw2.append("g")
        .selectAll("rect")
        .data(xdata)
        .enter()
        .append("rect")
        .attr("x",function(){
            return xaxiswidth/2
        })
        .attr("y",function(d,i){
            return _bandscale(d);
        })
        .attr("height",_bandscale.bandwidth())
        .attr("width",function(d,i){
            return _linescale(ydata[i])
        })
        .attr("rx","3%")
        .attr("ry", "3%")
        .attr("fill","#b1d334");
    var gtext1=_gdraw2.append("g")
        .selectAll("text")
        .data(ydata)
        .enter()
        .append("text")
        .attr("x",function(d,i){
            return _linescale(ydata[i])+xaxiswidth/2
        })
        .attr("y",function(d,i){
            return _bandscale(xdata[i])+_bandscale.bandwidth()/2+4;
        })
        .attr("text-anchor", "end")
        .attr("dx", "3em")
        .text(function(d,i){
            return d+"%"
        })
        .attr("fill","#000");
};
drawBar1('ruWrap',ydata4,xdata4);
//下排右边结束
