// JavaScript Document
$(function(){
	//收货地址页JS
	$(".radioInp").each(function(){
		var id = $(this).val();
		//判断当前默认地址
        if( this.checked === true ){
			$(this).siblings(".radioSpan").css("color","#C00000");	
		}
		//删除地址
		$("#dzDele"+id).click(function(){
			$("#add_ress"+id).remove();
		});
		//设置默认地址、改变默认地址字体为红色
		$("#defaultLab"+id).click(function(){
			$("span.radioSpan").css("color","#000000");	
			$(this).children("span.radioSpan").css("color","#C00000");	
		});
		
    });;
	
		
});


//收货地址管理提交
function souHuoform(){
	//收货人姓名
	if( $("#manName_inp").val()=="" ){
		$("#blackBg,#manName").show();
		setInterval(function(){$("#blackBg,#manName").hide();},3000);
		return false;
	}
	//手机
	var sj_a = /^1[3|4|5|7|8][0-9]\d{4,8}$/ ; 
	var sj_v = $("#mobileNum_inp").val();
	//alert("执行函数");
	if( sj_v.length!=11||!sj_v.match(sj_a) ){
		$("#blackBg,#mobileNum").show();
		setInterval(function(){$("#blackBg,#mobileNum").hide();},3000);
		return false;
	}
	//地区
	if( $("#selectH_a").children("option:selected").text()=="请选择" ){
		$("#blackBg,#province").show();
		setInterval(function(){$("#blackBg,#province").hide();},3000);
		return false;	
	}
	if( $("#selectH_b").children("option:selected").text()=="请选择" ){
		$("#blackBg,#cityS").show();
		setInterval(function(){$("#blackBg,#cityS").hide();},3000);

		return false;	
	}
	if( $("#selectH_c").children("option:selected").text()=="请选择" ){
		$("#blackBg,#areaQ").show();
		setInterval(function(){$("#blackBg,#areaQ").hide();},3000);
		return false;	
	}
	//详细地址	
	var dz = $("#detailedDz_text").val();
	dzleng = dz.length;
	if( dz==""|| dzleng<3 ){
		$("#blackBg,#detailedDz").show();
		setInterval(function(){$("#blackBg,#detailedDz").hide();},3000);
		return false;	
	}
	return true;
}



