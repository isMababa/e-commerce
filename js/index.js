/*预加载*/
$(function () {
    myDate();
    //lidao();
});
/*时间函数*/
function myDate() {
    var date=new Date();
    var year=date.getFullYear();
    var month=date.getMonth()+1;
    var day=date.getDate();
    var hour=date.getHours();
    var min=date.getMinutes();
    var s=date.getSeconds();
    month=add0(month);
    day=add0(day);
    hour=add0(hour);
    min=add0(min);
    s=add0(s);
    $("#year").text(year);
    $("#month").text(month);
    $("#day").text(day);
    $("#hour").text(hour);
    $("#minute").text(min);
    $("#second").text(s);
}
setInterval(myDate,1000);
function add0(num) {
    if(num<10){
        return "0"+num;
    }else{
        return num;
    }
}
