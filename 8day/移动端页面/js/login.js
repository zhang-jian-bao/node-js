// JavaScript Document
//登录页信息提交JS
function subform(obj){
	if( obj.email.value === "" ){
		$("#point_pA").show();
		return false;
	}else{
		$("#point_pA").hide();	
	}
	if( obj.pass.value === "" ){
		$("#point_pA").show();
		return false;
	}else{
		$("#point_pA").hide();	
	}
	return true;
}






