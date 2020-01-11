//封装函数
function add(){
    //数据添加成功，是tbody中的内容为空
    $("tbody").html("");
    //用ajax渲染，创建添加
    $.ajax({
        url:"/api/read",
        success:function (ret) {
            if(ret.code==0){
                var data=ret.data;
                var str="";
                for(var i in data){
                    // str += `   <tr>
                    //                              <td>
                    //                              <span>${data[i].id}</span>
                    //                              <input type="text" class="aa" v="${data[i]._id}">
                    //                              </td>
                    //                              <td>${data[i].name}</td>
                    //                              <td>${data[i].age}</td>
                    //                              <td>${data[i].sex}</td>
                    //                              <td>${data[i].class}</td>
                    //                              <td>
                    //                                <button v="${data[i]._id}" type="button" class="del btn btn-warning">删除</button>
                    //                                <button type="button" class="xg btn btn-warning">修改</button>
                    //                              </td>
                    //                        </tr>`
            }
            $("tbody").html(str);
                $("#a").val("");
                $("#b").val("");
                $("#c").val("");
                $(".n").prop("checked",true);
                $("#d").val("请选择班级");
            }
        },error:function (msg) {
            console.log(msg)
        }
    })
}

//添加数据
$(".cj").click(function () {
    // alert(11)
    //获取数据内容
    var xh=$("#a").val();
    var xm=$("#b").val();
    var nl=$("#c").val();
    var xb=$("input:checked").val();
    var bj=$("#d").val();
    // alert(xb);
    $.ajax({
        url:"/api/tj",
        data:{
            id:xh,
            name:xm,
            age:nl,
            sex:xb,
            class:bj
        },
        success:function (ret) {
            console.log(ret);
            if(ret.code==0){
              add();
            }
        },error:function (msg) {
            console.log(msg);

        }
    })
});

//全部删除数据
$(".delAll").click(function () {
    $.ajax({
        url:"/api/delAll",
        success:function (ret) {
            console.log(ret);
            if(ret.code==0){
                add();
            }
        },error:function (msg) {
            console.log(msg)
        }
    })
});

//单行删除数据  由于是局部渲染，要用事件委托
$("tbody").on("click",".del",function () {
    //获取当前的每个删除按钮的_id，通过他来找到行，并进行删除
   var a=$(this).attr("v");
   // alert(a);
    $.ajax({
        url:"/api/del",
        data:{
            _id:a
        },
        success:function (ret) {
            console.log(ret);
            if(ret.code==0){
                add();
            }
        },error:function (msg) {
            console.log(msg)
        }
    })
});

//点击修改
$("tbody").on("click",".xg",function () {
    //获取当前tr的下标，并让文本框显示，原内容隐藏
   $("tbody tr").eq( $(this).parents("tr").index()).find(".aa").show().siblings().hide();

});
//文本框失去焦点后
$("tbody").on("blur",".aa",function () {
    //当文本框失去焦点的时候，文本框隐藏，原内容显示
    $(".aa").hide().siblings().show();
    //获取当前的文本框的内容
    var sj=$(this).val();
    //获取当前的_id
    var id=$(this).attr("v");
    // alert(id)
    $.ajax({
        url:"/api/blur",
        data:{
            f:{
                _id:id
            },
            list:{
                id:sj
            }
        },
        success:function (ret) {
            console.log(ret)
            if(ret.code==0){
                add();
            }
        },error:function (msg) {
            console.log(msg)
        }
    })
});

//搜索数据
$(".ss").click(function () {
    var xm=$(".cz").val();
    // alert(xm)
    $.ajax({
        url:"/api/search",
        data:{
            name:xm
        },
        success:function (ret) {
            console.log(ret)
            if(ret.code==0){
                var data=ret.data;
                var str="";
                for(var i in data){
                    // str+=`   <tr>
                    //                              <td>
                    //                              <span>${data[i].id}</span>
                    //                              <input type="text" class="aa" v="${data[i]._id}">
                    //                              </td>
                    //                              <td>${data[i].name}</td>
                    //                              <td>${data[i].age}</td>
                    //                              <td>${data[i].sex}</td>
                    //                              <td>${data[i].class}</td>
                    //                              <td>
                    //                                <button v="${data[i]._id}" type="button" class="del btn btn-warning">删除</button>
                    //                                <button type="button" class="xg btn btn-warning">修改</button>
                    //                              </td>
                    //                        </tr>`
                }
                $("tbody").html(str);
            }
        },error:function (msg) {
            console.log(msg)
        }
    })
});

//搜索框中的模糊查询及为空时，用Input事件也叫绑定事件
$(".cz").on("input",function () {
    var a=$(this).val();
    // alert(a)
    if(a==""){
        add();
    }else{
        $.ajax({
            url:"/api/mh",
            data:{
                name:a
            },
            success:function (ret) {
                console.log(ret)
                if(ret.code==0){
                    var data=ret.data;
                    var str="";
                    for(var i in data){
                        str+=`<tr><td><span>${data[i].id}</span><input type="text" class="aa" v="${data[i]._id}"></td><td>${data[i].name}</td><td>${data[i].age}</td>
                                                 <td>${data[i].sex}</td>
                                                 <td>${data[i].class}</td>
                                                 <td>
                                                   <button v="${data[i]._id}" type="button" class="del btn btn-warning">删除</button>
                                                   <button type="button" class="xg btn btn-warning">修改</button>
                                                 </td>
                                           </tr>`;
                    }
                    $("tbody").html(str);
                }
            },error:function (msg) {
                console.log(msg)
            }
        })
    }
})


