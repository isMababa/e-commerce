/**
 * Created by Administrator on 2017/11/2.
 */
//检测浏览器的兼容性
if(!Detector.webgl){
    Detector.addGetWebGLMessage()
}

//添加第一个球体
window.onload=init1('bcb1');
//添加第二个球体
window.onload=init2('bcb2');
//添加第三个球体
window.onload=init3('bcb3');
//添加第四个球体
window.onload=init4('bcb4');

window.onresize=function(){};
function init1(idName){
    var _width=$('#bcb1').width();
    var _height=$('#bcb1').height();
    //创建场景
    var Scene=new THREE.Scene();
    //创建远景相机
    var Camera=new THREE.PerspectiveCamera(45,_width/_height,1,1000);
    Camera.position.set(0,0,-50);
    Camera.lookAt(Scene.position);
    //创建灯光
    var SpotLight=new THREE.SpotLight(0xffffff,1);
    SpotLight.position.set(50,0,-100);//设置灯光照射位置
    //将光源添加到场景中
    Scene.add(SpotLight);
    //创建球体
    var SphereGeometry=new THREE.SphereGeometry(15,30,30);
    //创建球体材料
    var material2=new THREE.MeshPhongMaterial({
        map:THREE.ImageUtils.loadTexture('../img/dianshang.png')
    });
    //创建地球对象
    var earth=new THREE.Mesh(SphereGeometry,material2);
    earth.position.set(0,0,0);
    Scene.add(earth);
    //创建渲染器
    var renderer=new THREE.WebGLRenderer({
        alpha:true
    });
    renderer.setSize(_width,_height);
    //告诉renderer我要渲染阴影,需在render()方法上面
    renderer.shadowMapEnabled=true;
    renderer.render(Scene,Camera);

    //添加球体
    document.getElementById(idName).appendChild(renderer.domElement);

    function move(){
        earth.rotation.y+=0.02;
        requestAnimationFrame(move);
        renderer.render(Scene,Camera);
    }
    move();
    //自适应窗口大小
    window.addEventListener('resize',function(){
        _width=$('#bcb1').width();
        _height=$('#bcb1').height();
        Camera.aspect=_width/_height;
        Camera.updateProjectionMatrix();//更新动画
        renderer.setSize(_width,_height);
    });
}

function init2(idName){
    var _width=$('#bcb1').width();
    var _height=$('#bcb1').height();
    //创建场景
    var Scene=new THREE.Scene();
    //创建远景相机
    var Camera=new THREE.PerspectiveCamera(45,_width/_height,1,1000);
    Camera.position.set(0,0,-50);
    Camera.lookAt(Scene.position);
    //创建灯光
    var SpotLight=new THREE.SpotLight(0xffffff,1);
    SpotLight.position.set(50,0,-100);//设置灯光照射位置
    //将光源添加到场景中
    Scene.add(SpotLight);
    //创建球体
    var SphereGeometry=new THREE.SphereGeometry(15,30,30);
    //创建球体材料
    var material2=new THREE.MeshPhongMaterial({
        map:THREE.ImageUtils.loadTexture('../img/chaoshi.png')
    });
    //创建地球对象
    var earth=new THREE.Mesh(SphereGeometry,material2);
    earth.position.set(0,0,0);
    Scene.add(earth);
    //创建渲染器
    var renderer=new THREE.WebGLRenderer({
        alpha:true
    });
    renderer.setSize(_width,_height);
    //告诉renderer我要渲染阴影,需在render()方法上面
    renderer.shadowMapEnabled=true;
    renderer.render(Scene,Camera);

    //添加球体
    document.getElementById(idName).appendChild(renderer.domElement);

    function move(){
        earth.rotation.y+=0.02;
        requestAnimationFrame(move);
        renderer.render(Scene,Camera);
    }
    move();
    //自适应窗口大小
    window.addEventListener('resize',function(){
        _width=$('#bcb1').width();
        _height=$('#bcb1').height();
        Camera.aspect=_width/_height;
        Camera.updateProjectionMatrix();//更新动画
        renderer.setSize(_width,_height);
    });
}

//第三个
function init3(idName){
    var _width=$('#bcb1').width();
    var _height=$('#bcb1').height();
    //创建场景
    var Scene=new THREE.Scene();
    //创建远景相机
    var Camera=new THREE.PerspectiveCamera(45,_width/_height,1,1000);
    Camera.position.set(0,0,-50);
    Camera.lookAt(Scene.position);
    //创建灯光
    var SpotLight=new THREE.SpotLight(0xffffff,1);
    SpotLight.position.set(50,0,-100);//设置灯光照射位置
    //将光源添加到场景中
    Scene.add(SpotLight);
    //创建球体
    var SphereGeometry=new THREE.SphereGeometry(15,30,30);
    //创建球体材料
    var material2=new THREE.MeshPhongMaterial({
        map:THREE.ImageUtils.loadTexture('../img/caishichang.png')
    });
    //创建地球对象
    var earth=new THREE.Mesh(SphereGeometry,material2);
    earth.position.set(0,0,0);
    Scene.add(earth);
    //创建渲染器
    var renderer=new THREE.WebGLRenderer({
        alpha:true
    });
    renderer.setSize(_width,_height);
    //告诉renderer我要渲染阴影,需在render()方法上面
    renderer.shadowMapEnabled=true;
    renderer.render(Scene,Camera);

    //添加球体
    document.getElementById(idName).appendChild(renderer.domElement);

    function move(){
        earth.rotation.y-=0.02;
        requestAnimationFrame(move);
        renderer.render(Scene,Camera);
    }
    move();
    //自适应窗口大小
    window.addEventListener('resize',function(){
        _width=$('#bcb1').width();
        _height=$('#bcb1').height();
        Camera.aspect=_width/_height;
        Camera.updateProjectionMatrix();//更新动画
        renderer.setSize(_width,_height);
    });
}

//第四个
function init4(idName){
    var _width=$('#bcb1').width();
    var _height=$('#bcb1').height();
    //创建场景
    var Scene=new THREE.Scene();
    //创建远景相机
    var Camera=new THREE.PerspectiveCamera(45,_width/_height,1,1000);
    Camera.position.set(0,0,-50);
    Camera.lookAt(Scene.position);
    //创建灯光
    var SpotLight=new THREE.SpotLight(0xffffff,1);
    SpotLight.position.set(50,0,-100);//设置灯光照射位置
    //将光源添加到场景中
    Scene.add(SpotLight);
    //创建球体
    var SphereGeometry=new THREE.SphereGeometry(15,30,30);
    //创建球体材料
    var material2=new THREE.MeshPhongMaterial({
        map:THREE.ImageUtils.loadTexture('../img/bianlidian6.png')
    });
    //创建地球对象
    var earth=new THREE.Mesh(SphereGeometry,material2);
    earth.position.set(0,0,0);
    Scene.add(earth);
    //创建渲染器
    var renderer=new THREE.WebGLRenderer({
        alpha:true
    });
    renderer.setSize(_width,_height);
    //告诉renderer我要渲染阴影,需在render()方法上面
    renderer.shadowMapEnabled=true;
    renderer.render(Scene,Camera);

    //添加球体
    document.getElementById(idName).appendChild(renderer.domElement);

    function move(){
        earth.rotation.y-=0.02;
        requestAnimationFrame(move);
        renderer.render(Scene,Camera);
    }
    move();
    //自适应窗口大小
    window.addEventListener('resize',function(){
        _width=$('#bcb1').width();
        _height=$('#bcb1').height();
        Camera.aspect=_width/_height;
        Camera.updateProjectionMatrix();//更新动画
        renderer.setSize(_width,_height);
    });
}
