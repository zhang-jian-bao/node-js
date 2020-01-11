//页面加载完成之后，渲染页面
$(function () {
    load();
    Num();
})


//新增
$('.head [type=text]').on('keydown',function(event){
    var code = event.keyCode;
    if(code == 13){
        //1.获取用户输入的信息
        var str = $(this).val().trim();
        if(str == ""){
            alert('请输入内容');
            return false;
        }
        //2.将数据存储到本地
        //a.先获取本地数据
        var data = getData();
        data.push({title:str,done:false});
        //b.保存本地
        saveData(data);

        //3.渲染页面
        load();
        Num();
        //4.清除内容框
        $(this).val("");
    }

})

//获取本地数据
function getData(){
    var data = localStorage.getItem('list');
    // console.log(data);
    if(data == null){
        return [];
    }else{
        return JSON.parse(data);
    }
}
// getData();
//保存本地
function saveData(data){
    localStorage.setItem('list',JSON.stringify(data));
}

//渲染页面
function load(){
    //0.清空ol,ul里的儿子
    $('.container>ol,.container>ul').empty();
    //1.获取本地数据
    var data = getData();
    //2.区分已完成和待完成
    $.each(data,function(index,element){
        if(element.done){
            //已完成
            // <li>
            // 	<input type="checkbox" checked>
            // 	<span>我是一个ol-li-span</span>
            // 	<a href="javscript:void(1);">×</a>
            // </li>
            //创建元素
            var oLi = $("<li></li>");
            var oInp = $('<input type="checkbox" checked>');
            var oSpan = $('<span></span>').html(element.title);
            var oA = $('<a href="javscript:void(1);">×</a>').attr('index',index);

            oLi.append(oInp,oSpan,oA);

            $('.container ol').append(oLi);

        }else{
            //待完成
            var oLi = $("<li></li>");
            var oInp = $('<input type="checkbox">');
            var oSpan = $('<span></span>').html(element.title);
            var oA = $('<a href="javscript:void(1);">×</a>').attr('index',index);

            oLi.append(oInp,oSpan,oA);

            $('.container ul').append(oLi);
        }
    })
}

//渲染完成或者未完成个数
function Num(){
    $(".container>p>span:eq(0)").html($(".container>ul>li").length);
    $(".container>p>span:eq(1)").html($(".container>ol>li").length);
}

//删除
// $('.container a').click(function(){
$('.container>ol,.container>ul').on('click','a',function(){
    // 1.获取本地数据(localStorage对象)
    var data = getData();
    //2.获取当前数据在本地存储对象中的下标
    var index = $(this).attr('index');
    data.splice(index,1);

    //3.保存到本地(localStorage对象)
    saveData(data);

    //4.渲染页面
    load();
    Num();

    return false;
})

//复选框
// $('.container li>input:checkbox').click(function(){
$('.container>ol,.container>ul').on('click','input',function(){
    //1.获取当前复选框的checked的属性值
    var checked = $(this).prop('checked');

    // 2.获取本地数据(localStorage对象)
    var data = getData();

    //3.修改done状态
    var index = $(this).next().next().attr('index');
    data[index].done = checked;

    //4.保存到本地(localStorage对象)
    saveData(data);

    //5.渲染页面
    load();
    Num();
})
