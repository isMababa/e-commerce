



var myMap=echarts.init(document.getElementById('L_letf_top'));
function drawMap(){

    var planePath = 'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z';
    var options=  {


        geo: {
            map: 'bmap',
            label: {
                emphasis: {
                    show: false
                }
            },
            itemStyle: {
                normal: {
                    areaColor: '#323c48',
                    borderColor: '#111'
                },
                emphasis: {
                    areaColor: '#2a333d'
                }
            }
        },
        bmap:{
            center: [127.087149,37.640005],//中心点
            zoom: 3,//代表中国地图
            roam: true,
            mapStyle: {

                "featureType": "background",
                        "elementType": "all",
                        "stylers": {}


              /*  styleJson: [
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": {
                            "color": "#021019"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "highway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#147a92"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "arterial",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#0b3d51"
                        }
                    },
                    {
                        "featureType": "local",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "land",
                        "elementType": "all",
                        "stylers": {
                            "color": "#08304b"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "railway",
                        "elementType": "geometry.stroke",
                        "stylers": {
                            "color": "#08304b"
                        }
                    },
                    {
                        "featureType": "subway",
                        "elementType": "geometry",
                        "stylers": {
                            "lightness": -70
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "geometry.fill",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.fill",
                        "stylers": {
                            "color": "#857f7f"
                        }
                    },
                    {
                        "featureType": "all",
                        "elementType": "labels.text.stroke",
                        "stylers": {
                            "color": "#000000"
                        }
                    },
                    {
                        "featureType": "building",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#022338"
                        }
                    },
                    {
                        "featureType": "green",
                        "elementType": "geometry",
                        "stylers": {
                            "color": "#062032"
                        }
                    },
                    {
                        "featureType": "boundary",
                        "elementType": "all",
                        "stylers": {
                            "color": "#1e1c1c"
                        }
                    },
                    {
                        "featureType": "manmade",
                        "elementType": "all",
                        "stylers": {
                            "color": "#022338"
                        }
                    }
                ]*/
            }
        },



        /*visualMap: {
            min: 0,
            max: 5,
            left: 'left',
            top: 'bottom',
            text: ['高','低'],           // 文本，默认为数值文本
            inRange: {
                color: ['#50a3ba', '#eac736', '#d94e5d']
            },

            calculable: true
        },*/

        series: [
            {
                type: 'lines',//航线图
                coordinateSystem: 'bmap',//地理坐标系
                effect:{
                    show:true,//是否有效果
                    trailLength: 0,
                    symbol:planePath,//有箭头
                    symbolSize:25//元素大小
                },
                lineStyle:{
                    normal:{
                        color:"#F8462A",
                        curveness:0.2,
                        width:3
                    }
                },
                data:[
                   /* {fromName:"上海",toName:"北京",coords:[[121.4648,31.2891],[116.4551,40.2539]]},
                    {fromName:"南京",toName:"北京",coords:[[118.8062,31.9208],[116.4551,40.2539]]},
                    {fromName:"宁波",toName:"北京",coords:[[121.5967,29.6466],[116.4551,40.2539]]},
                    {fromName:"成都",toName:"北京",coords:[[103.9526,30.7617],[116.4551,40.2539]]},
                    {fromName:"呼和浩特",toName:"北京",coords:[[111.4124,40.4901],[116.4551,40.2539]]},
                    {fromName:"乌鲁木齐",toName:"北京",coords:[[87.9236,43.5883],[116.4551,40.2539]]},
                    {fromName:"昆明",toName:"北京",coords:[[102.9199,25.4663],[116.4551,40.2539]]}*/
                    {fromName:"韩国",toName:"北京",coords:[[127.087149,37.640005],[116.4551,40.2539]]},
                    {fromName:"日本",toName:"北京",coords:[[139.74449,35.86355],[116.4551,40.2539]]},
                    {fromName:"美国",toName:"北京",coords:[[-77.041753,38.851479],[116.4551,40.2539]]},
                    {fromName:"德国",toName:"北京",coords:[[13.391855,52.705669],[116.4551,40.2539]]},
                    {fromName:"澳洲",toName:"北京",coords:[[151.297992,-33.787808],[116.4551,40.2539]]},
                    {fromName:"加拿大",toName:"北京",coords:[[-111.821843,60.883757],[116.4551,40.2539]]},
                    {fromName:"沙特阿拉伯",toName:"北京",coords:[[46.543784,24.75061],[116.4551,40.2539]]},
                    {fromName:"中非",toName:"北京",coords:[[ 20.181232,6.912109],[116.4551,40.2539]]},
                    {fromName:"俄罗斯",toName:"北京",coords:[[49.543318,58.673984],[116.4551,40.2539]]}
                ]
            }
        ]
    };
    myMap.setOption(options);
}

