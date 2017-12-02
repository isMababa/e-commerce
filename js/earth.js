if(!Detector.webgl){
    /*检测是否支持webgl*/
    Detector.addGetWebGLMessage();
}
function init() {
    var wid=$("#earth").innerWidth();
    var hei=$("#earth").innerHeight();
    var scene=new THREE.Scene();
    var camera=new THREE.PerspectiveCamera(45,wid/hei,1,1000);
    camera.position.x=20;
    camera.position.y=-170;
    camera.position.z=100;
    camera.lookAt(scene.position);
    //创建灯光
    var spotLight=new THREE.SpotLight(0xffffff,2);
    spotLight.position.set(20,-140,150);
    scene.add(spotLight);
    //创建轨道
    var RingGeometry = new THREE.RingGeometry( 39,39.1, 200 );
    var materialRingGeometry = new THREE.MeshBasicMaterial( { color: 0x000000, side: THREE.DoubleSide } );
    var meshRingGeometry = new THREE.Mesh( RingGeometry, materialRingGeometry );
    //meshRingGeometry.rotation.y =-0.3;
    //meshRingGeometry.rotation.x =-(Math.PI/2);
    meshRingGeometry.position.y =-55;
    meshRingGeometry.position.x =4;
    meshRingGeometry.position.z =25;
    scene.add( meshRingGeometry );
    //创建月形
    var yueGeometry = new THREE.SphereGeometry( 5, 300,300,0,2*Math.PI,0,Math.PI );
    var Meshyue =new THREE.MeshPhongMaterial({
        map:THREE.ImageUtils.loadTexture("../images/yueqiu.jpg"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/yueqiu.jpg"),
        bumpScale:1,
        opacity:0.7
    });
    var yue = new THREE.Mesh( yueGeometry, Meshyue );
    //yue.position.y =-24*Math.cos(1.2);
    //yue.position.x =0;
    //yue.position.z =25+24*Math.sin(1.2);
    yue.position.y =-55-34;
    yue.position.x =4;
    yue.position.z =25;
    scene.add(yue);
    //创建球形
    var SphereGeometry = new THREE.SphereGeometry(28, 300,300,0,2*Math.PI,0,Math.PI );
    var MeshBasicMaterial1 =new THREE.MeshPhongMaterial({
        map:THREE.ImageUtils.loadTexture("../images/earthbg7.jpg"),
        bumpMap :THREE.ImageUtils.loadTexture("../images/earthbg7.jpg"),
        bumpScale:1,
        opacity:0.7
    });
    var sphere = new THREE.Mesh( SphereGeometry, MeshBasicMaterial1 );
    sphere.rotation.x =1.2;
    sphere.rotation.z =-0.1;
    sphere.position.y =-55;
    sphere.position.x =4;
    sphere.position.z =25;
    scene.add(sphere);

    //创建渲染器
    var webRenderer=new THREE.WebGLRenderer({
        alpha:true
    });
    webRenderer.setSize(wid,hei);//设置渲染器尺寸
    webRenderer.render(scene,camera);
    $("#earth").append(webRenderer.domElement);

    //调试插件初始化

    var tranckballControls1=new THREE.TrackballControls(camera);
    tranckballControls1.rotateSpeed=1.0;
    tranckballControls1.zoomSpeed=1.0;
    tranckballControls1.panSpeed=1.0;
    function animateearth() {
        if(flags1==0||flags1==3) {
            var clock1 = new THREE.Clock();
            var delta1 = clock1.getDelta();
            tranckballControls1.update(delta1);
            requestAnimationFrame(animateearth);
            webRenderer.render(scene, camera);
        }
    }
    var steps1=0;
    function animateearth1() {
        steps1+=0.01;
        sphere.rotation.y += 0.002;
        yue.position.y = -55-39*Math.sin(steps1);
        yue.position.x = 4-39*Math.cos(steps1);
        yue.rotation.y += 0.01;
        yue.rotation.x +=0.01;
        requestAnimationFrame(animateearth1);
        webRenderer.render(scene, camera);
    }
    animateearth1();
    animateearth();
    $("#earth").hover(function () {
        flags1=3;
        animateearth();
    },function () {
        flags1=1;
    });
    //响应式
    window.addEventListener("resize",resize);
    function resize() {
        camera.aspect=wid/hei;
        camera.updateProjectionMatrix();
        webRenderer.setSize(wid,hei);
    }
}
window.onload=init();