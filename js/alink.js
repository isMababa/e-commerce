if(!Detector.webgl){
    /*检测是否支持webgl*/
    Detector.addGetWebGLMessage();
}
function init1() {
    var wid=$("#lidao").innerWidth();
    var hei=$("#lidao").innerHeight();
    var scene1=new THREE.Scene();
    var camera1=new THREE.PerspectiveCamera(45,wid/hei,1,1000);
    camera1.position.x=0;
    camera1.position.y=0;
    camera1.position.z=60;
    camera1.lookAt(scene1.position);
    //创建灯光
    var spotLight=new THREE.SpotLight(0xffffff,4);
    spotLight.position.set(0,0,100);
    scene1.add(spotLight);
    //创建球形
    var SphereGeometry = new THREE.SphereGeometry( 5,15,15,0,2*Math.PI,0,Math.PI );
    var MeshBasicMaterial1 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/muying.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/muying.png"),
        bumpScale:15
    });

    var material = new THREE.LineBasicMaterial({
        color: "#0000ff"
    });

    var sphere = new THREE.Mesh( SphereGeometry, MeshBasicMaterial1 );
    sphere.position.y =17*Math.sin(2*Math.PI/8);
    sphere.position.x =17*Math.cos(2*Math.PI/8);
    sphere.position.z =5*Math.cos(2*Math.PI/8);
    sphere.name ="muying";
    scene1.add(sphere);

    var geometry = new THREE.Geometry();
    geometry.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(2*Math.PI/8), 18*Math.sin(2*Math.PI/8), -6 )
    );
    var line = new THREE.Line( geometry, material );
    scene1.add( line );


    var MeshBasicMaterial11 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/qiche.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/qiche.png"),
        bumpScale:15
    });
    var sphere1 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial11);
    sphere1.position.y =17*Math.sin(4*Math.PI/8);
    sphere1.position.x =17*Math.cos(4*Math.PI/8);
    sphere1.position.z =5*Math.cos(4*Math.PI/8);
    sphere1.name ="qiche";
    scene1.add(sphere1);
    var geometry1 = new THREE.Geometry();
    geometry1.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(4*Math.PI/8), 18*Math.sin(4*Math.PI/8), -6 )
    );
    var line1 = new THREE.Line( geometry1, material );
    scene1.add( line1 );


    var MeshBasicMaterial12 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/yiliao.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/yiliao.png"),
        bumpScale:15
    });
var sphere2 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial12);
    sphere2.position.y =17*Math.sin(6*Math.PI/8);
    sphere2.position.x =17*Math.cos(6*Math.PI/8);
    sphere2.position.z =5*Math.cos(6*Math.PI/8);
    sphere2.name ="yiliao";
    scene1.add(sphere2);

    var geometry2 = new THREE.Geometry();
    geometry2.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(6*Math.PI/8), 18*Math.sin(6*Math.PI/8), -6 )
    );
    var line2 = new THREE.Line( geometry2, material );
    scene1.add( line2 );

    var MeshBasicMaterial13 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/dianshang.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/dianshang.png"),
        bumpScale:15
    });
var sphere3 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial13);
    sphere3.position.y =17*Math.sin(8*Math.PI/8);
    sphere3.position.x =17*Math.cos(8*Math.PI/8);
    sphere3.position.z =5*Math.cos(8*Math.PI/8);
    sphere3.name ="dianshang";
    scene1.add(sphere3);

    var geometry3 = new THREE.Geometry();
    geometry3.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(8*Math.PI/8), 18*Math.sin(8*Math.PI/8),-6 )
    );
    var line3 = new THREE.Line( geometry3, material );
    scene1.add( line3 );


    var MeshBasicMaterial14 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/jiazhuang.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/jiazhuang.png"),
        bumpScale:15
    });
var sphere4 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial14);
    sphere4.position.y =17*Math.sin(10*Math.PI/8);
    sphere4.position.x =17*Math.cos(10*Math.PI/8);
    sphere4.position.z =5*Math.cos(10*Math.PI/8);
    sphere4.name ="jiazhuang";
    scene1.add(sphere4);

    var geometry4 = new THREE.Geometry();
    geometry4.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(10*Math.PI/8), 18*Math.sin(10*Math.PI/8),-6 )
    );
    var line4 = new THREE.Line( geometry4, material );
    scene1.add( line4 );

    var MeshBasicMaterial15 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/jinrong.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/jinrong.png"),
        bumpScale:15
    });
var sphere5 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial15);
    sphere5.position.y =17*Math.sin(12*Math.PI/8);
    sphere5.position.x =17*Math.cos(12*Math.PI/8);
    sphere5.position.z =5*Math.cos(12*Math.PI/8);
    sphere5.name ="jinrong";
    scene1.add(sphere5);

    var geometry5 = new THREE.Geometry();
    geometry5.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(12*Math.PI/8), 18*Math.sin(12*Math.PI/8),-6 )
    );
    var line5= new THREE.Line( geometry5, material );
    scene1.add( line5 );

    var MeshBasicMaterial16 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/shengxian.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/shengxian.png"),
        bumpScale:15
    });
var sphere6 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial16);
    sphere6.position.y =17*Math.sin(14*Math.PI/8);
    sphere6.position.x =17*Math.cos(14*Math.PI/8);
    sphere6.position.z =5*Math.cos(14*Math.PI/8);
    sphere6.name ="shengxian";
    scene1.add(sphere6);

    var geometry6 = new THREE.Geometry();
    geometry6.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(14*Math.PI/8), 18*Math.sin(14*Math.PI/8),-6 )
    );
    var line6 = new THREE.Line( geometry6, material );
    scene1.add( line6 );

    var MeshBasicMaterial17 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/temai.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/temai.png"),
        bumpScale:15
    });
var sphere7 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial17);
    sphere7.position.y =17*Math.sin(16*Math.PI/8);
    sphere7.position.x =17*Math.cos(16*Math.PI/8);
    sphere7.position.z =5*Math.cos(16*Math.PI/8);
    sphere7.name ="temai";
    scene1.add(sphere7);

    var geometry7 = new THREE.Geometry();
    geometry7.vertices.push(
        new THREE.Vector3( 0, 0, 0 ),
        new THREE.Vector3( 18*Math.cos(16*Math.PI/8), 18*Math.sin(16*Math.PI/8),-6 )
    );
    var line7 = new THREE.Line( geometry7, material );
    scene1.add( line7 );
    console.log(line7.geometry.vertices);

    var MeshBasicMaterial18 =new THREE.MeshLambertMaterial({
        color:"#3f7b9d",
        map:THREE.ImageUtils.loadTexture("../images/3C.png"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/3C.png"),
        bumpScale:15
    });
var sphere8 = new THREE.Mesh( SphereGeometry, MeshBasicMaterial18);
    sphere8.position.y =0;
    sphere8.position.x =0;
    sphere8.position.z =0;
    sphere8.name="3C";
    scene1.add(sphere8);

    //创建渲染器
    var webRenderer1=new THREE.WebGLRenderer({
        alpha:true
    });
    webRenderer1.setSize(wid,hei);//设置渲染器尺寸
    webRenderer1.render(scene1,camera1);
    $("#lidao").append(webRenderer1.domElement);

    //调试插件初始化

    var tranckballControls=new THREE.TrackballControls(camera1);
    tranckballControls.rotateSpeed=1.0;
    tranckballControls.zoomSpeed=1.0;
    tranckballControls.panSpeed=1.0;
    function animate() {
        if(flags1==0||flags1==2) {
            var clock = new THREE.Clock();
            var delta = clock.getDelta();
            tranckballControls.update(delta);
            requestAnimationFrame(animate);
            webRenderer1.render(scene1, camera1);
        }
    }
    animate();
    var step=0;
    var rota=0;
  function animate1() {
      step+=0.05;
      rota+= 0.004;
      camera1.rotation.z = rota;
      sphere.rotation.y += 0.01;
      sphere1.rotation.y += 0.01;
      sphere2.rotation.y += 0.01;
      sphere3.rotation.y += 0.01;
      sphere4.rotation.y += 0.01;
      sphere5.rotation.y += 0.01;
      sphere6.rotation.y += 0.01;
      sphere7.rotation.y += 0.01;
      sphere8.rotation.y += 0.01;
      sphere.position.z = 7*Math.cos(2*Math.PI/8+step);
      sphere1.position.z = 7*Math.cos(4*Math.PI/8+step);
      sphere2.position.z = 7*Math.cos(6*Math.PI/8+step);
      sphere3.position.z = 7*Math.cos(8*Math.PI/8+step);
      sphere4.position.z = 7*Math.cos(10*Math.PI/8+step);
      sphere5.position.z = 7*Math.cos(12*Math.PI/8+step);
      sphere6.position.z = 7*Math.cos(14*Math.PI/8+step);
      sphere7.position.z = 7*Math.cos(16*Math.PI/8+step);
      line.geometry.vertices=[];
      line.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(2*Math.PI/8), 18*Math.sin(2*Math.PI/8),7*Math.cos(2*Math.PI/8+step ))
      );
      line1.geometry.vertices=[];
      line1.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(4*Math.PI/8), 18*Math.sin(4*Math.PI/8),7*Math.cos(4*Math.PI/8+step ))
      );
      line2.geometry.vertices=[];
      line2.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(6*Math.PI/8), 18*Math.sin(6*Math.PI/8),7*Math.cos(6*Math.PI/8+step ))
      );
      line3.geometry.vertices=[];
      line3.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(8*Math.PI/8), 18*Math.sin(8*Math.PI/8),7*Math.cos(8*Math.PI/8+step ))
      );
      line4.geometry.vertices=[];
      line4.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(16*Math.PI/8), 18*Math.sin(10*Math.PI/8),7*Math.cos(10*Math.PI/8+step ))
      );
      line5.geometry.vertices=[];
      line5.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(12*Math.PI/8), 18*Math.sin(12*Math.PI/8),7*Math.cos(12*Math.PI/8+step ))
      );
      line6.geometry.vertices=[];
      line6.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(14*Math.PI/8), 18*Math.sin(14*Math.PI/8),7*Math.cos(14*Math.PI/8+step ))
      );
      line7.geometry.vertices=[];
      line7.geometry.vertices.push(
          new THREE.Vector3( 0, 0, 0 ),
          new THREE.Vector3( 18*Math.cos(16*Math.PI/8), 18*Math.sin(16*Math.PI/8),7*Math.cos(16*Math.PI/8+step ))
      );
      requestAnimationFrame(animate1);
      webRenderer1.render(scene1, camera1);
    }
    animate1();
    $("#lidao").hover(function () {
        flags1=2;
        camera1.rotation.z = rota;
        requestAnimationFrame(animate);
        webRenderer1.render(scene1, camera1);
    },function () {
        flags1=1;
    });
    //响应式
    window.addEventListener("resize",resize);
    lidao.addEventListener('click',ray);// 监听窗口鼠标单击事件
    function resize() {
        camera1.aspect=wid/hei;
        camera1.updateProjectionMatrix();
        webRenderer1.setSize(wid,hei);
    }
    var wid=$("#lidao").innerWidth();
    var hei=$("#lidao").innerHeight();
    function ray(event) {
        var Sx = event.clientX-$("#lidao").offset().left;//鼠标单击位置横坐标
        var Sy = event.clientY-$("#lidao").offset().top;//鼠标单击位置纵坐标
        //屏幕坐标转标准设备坐标
        var x = ( Sx / wid ) * 2 - 1;//标准设备横坐标
        var y = -( Sy / hei ) * 2 + 1;//标准设备纵坐标
        var standardVector  = new THREE.Vector3(x, y, 0.5);//标准设备坐标
        //标准设备坐标转世界坐标
        var worldVector = standardVector.unproject(camera1);
        //射线投射方向单位向量(worldVector坐标减相机位置坐标)
        var ray = worldVector.sub(camera1.position).normalize();
        //创建射线投射器对象
        var raycaster = new THREE.Raycaster(camera1.position, ray);
        //返回射线选中的对象
        var intersects = raycaster.intersectObjects([sphere,sphere1,sphere2,sphere3,sphere4,sphere5,sphere6,sphere7,sphere8]);
        if (intersects.length > 0) {
            intersects[0].object.material.transparent = true;
            intersects[0].object.material.opacity = 1;
            if(intersects[0].object.name=="3C"){
                window.location.href="../3C/html/zfp_3c.html";
            }else if(intersects[0].object.name=="temai"){
                window.location.href="../temai/index.html";
            }else if(intersects[0].object.name=="jiazhuang"){
                window.location.href="../jiazhuang/jiazhuang.html";
            }else if(intersects[0].object.name=="jinrong"){
                window.location.href="../jinrong/html/EB-finance.html";
            }else if(intersects[0].object.name=="muying"){
                console.log(1)
                window.location.href="../muying/html/ldw.html";
            }else if(intersects[0].object.name=="qiche"){
                window.location.href="../qiche/html/car.html";
            }else if(intersects[0].object.name=="shengxian"){
                window.location.href="../shengxian/html/shengxian.html";
            }else if(intersects[0].object.name=="yiliao"){
                window.location.href="../yiyao/yiyao/yiyaodianshang.html";
            }else if(intersects[0].object.name=="dianshang"){
                window.location.href="../dianshang/L_html/L_crossBorder.html";
            }
        }
        console.log(intersects)
    }

}
window.onload=init1();