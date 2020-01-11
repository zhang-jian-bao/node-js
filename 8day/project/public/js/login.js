// JavaScript Document
//登录页信息提交JS
// function subform(obj){
// 	if( obj.email.value === "" ){
// 		$("#point_pA").show();
// 		return false;
// 	}else{
// 		$("#point_pA").hide();
// 	}
// 	if( obj.pass.value === "" ){
// 		$("#point_pA").show();
// 		return false;
// 	}else{
// 		$("#point_pA").hide();
// 	}
// 	return true;
// }
//


$(function () {
	$(".login_but").click(function () {
		//获取到输入的用户名
		var user = $("#email").val();
		//获取到输入的密码
		var pass = $("#pass").val();
		//通过ajax发送到后台
		$.ajax({
			url : "/api/login",
			type : "POST",
			data : {
				user : user,
				pass : pass
			},
			success : function (response) {
				console.log(response)
			},
			error : function (error) {
				console.log(error)
			}
		})


	})
})




