/*力导图超链接*/
function lidao() {
//1.定义数据：
    var data=[
        {name:'3c类',level:1},
        {name:'母婴类',level:2},
        {name:'汽车类',level:2},
        {name:'医疗类',level:2},
        {name:'生鲜类',level:2},
        {name:'家装类',level:2},
        {name:'金融类',level:2},
        {name:'女性用品类',level:2},
        {name:'跨境电商',level:2}
    ];
    //2.定义关系
    var links=[
        {source:'3c类',target:'母婴类'},
        {source:'3c类',target:'汽车类'},
        {source:'3c类',target:'医疗类'},
        {source:'3c类',target:'生鲜类'},
        {source:'3c类',target:'家装类'},
        {source:'3c类',target:'金融类'},
        {source:'3c类',target:'女性用品类'},
        {source:'3c类',target:'跨境电商'}
    ];
    var herf=["http://www.baidu.com","http://www.baidu.com","http://www.baidu.com","http://www.baidu.com","http://www.baidu.com","http://www.baidu.com","http://www.baidu.com","http://www.baidu.com","http://www.baidu.com"];
    var innerwidth=$("#lidao").innerWidth();
    var innerheight=$("#lidao").innerHeight();
    //3.定义力模拟器
    var _simulation=d3.forceSimulation()
        .force("center",d3.forceCenter(innerwidth/2,innerheight/2))
        .force("charge",d3.forceManyBody().strength(-2000))
        .force("link",d3.forceLink().id(function(d){
            return d.name;
        }));
    console.log(data);
    _simulation.nodes(data)
        .on("tick",function(){
            _allcircle.attr("cx",function(d){
                return d.x
            });
            _allcircle.attr("cy",function(d){
                return d.y
            });
            _allcircle.attr("x",function(d){
                return d.x
            });
            _allcircle.attr("y",function(d){
                return d.y
            });
            _allline.attr("x1",function(d){
                return d.source.x
            })
                .attr("y1",function(d){
                    return d.source.y
                })
                .attr("x2",function(d){
                    return d.target.x
                })
                .attr("y2",function(d){
                    return d.target.y
                });
            _alltext.attr("x",function(d){
                return d.x
            });
            _alltext.attr("y",function(d){
                return d.y
            })
        })
    ;//对data数据重新布局
    _simulation.force("link")
        .links(links);
    //4.定义画布：
    var _svg=d3.select("#lidao")
        .append("svg")
        .attr("width",innerwidth)
        .attr("height",innerheight);


    //6.添加连接：
    var _allline=_svg.selectAll("line")
        .data(links)
        .enter()
        .append("line")

        .style("stroke","black");

    //5.添加圆及相应的设置
    var _allcircle=_svg.selectAll("image")
        .data(data)
        .enter()
        .append("a")
        .attr("xlink:href",function (d, i) {
            return herf[i];
        })
        .append("circle")
        .attr("r",35)
        .style("stroke",function(d,i){
            return d3.schemeCategory10[i]
        })
        .style("stroke-width",1)
        .style("fill","#fff")
        //调取拖拽事件：
        .call(d3.drag()
            .on("start",_dragstart)
            .on("drag",_draging)
            .on("end",_dragend)
        );
    function _dragstart(){
        if(!d3.event.active)
            _simulation.alphaTarget(0.3).restart();
    }
    function _draging(){
        d3.event.subject.fx=d3.event.x;
        d3.event.subject.fy=d3.event.y;

    }
    function _dragend(){
        d3.event.subject.fx=null;
        d3.event.subject.fy=null;
    }

    //6.添加文本：
    var _alltext=_svg.selectAll("text")
        .data(data)
        .enter()
        .append("a")
        .attr("xlink:href",function (d, i) {
            return herf[i];
        })
        .append("text")
        .text(function(d){
            return d.name
        })
        .attr("text-anchor","middle")
        .attr("dy","0.5em")
}
window.addEventListener('resize', function() {
    $("#lidao").html("");
    lidao();
});