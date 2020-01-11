/**
 * Created by 0 on 2019-09-26.
 */
//轮播图效果
//按钮
//    $(".an>span").eq(0).click(function () {
//        alert(111111111)
//    })
var index=0;
$(" .an>span:eq(0)").click(function () {
    index--;
    if(index<0){
        index=3;
    }
    $(".banner>ul>li").eq(index).addClass("one").siblings().removeClass("one");
    $(".xyd>ul>li").eq(index).addClass("two").siblings().removeClass("two");
});
$(" .an>span:eq(1)").click(function () {
    index++;
    if(index>3){
        index=0;
    }
    $(".banner>ul>li").eq(index).addClass("one").siblings().removeClass("one");
    $(".xyd>ul>li").eq(index).addClass("two").siblings().removeClass("two");
});
//点击小圆点
$(".xyd>ul>li").click(function () {
    $(this).addClass("two").siblings().removeClass("two");
    var index=$(this).index();
    $(".banner>ul>li").eq(index).addClass("one").siblings().removeClass("one");
});
//自动轮播
var zd=setInterval(move,1000);
function move(){
    index++;
    if(index>3){
        index=0;
    }
    $(".banner>ul>li").eq(index).addClass("one").siblings().removeClass("one");
    $(".xyd>ul>li").eq(index).addClass("two").siblings().removeClass("two");
}
$(".banner>ul").hover(function () {
    clearInterval(zd);
}, function () {
    zd=setInterval(move,1000);
});
//登录注册选项卡
$(".right>ul>li").click(function () {
    $(this).addClass("san").siblings().removeClass("san");
    var i=$(this).index();
    $(".right>ol>li").eq(i).show().siblings().hide();
});