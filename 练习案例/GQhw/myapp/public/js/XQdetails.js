// JavaScript Document
$(function(){
	//详情页商品总价格
	$("#totalNum").html(0);
	$(".price").each(function(){
		var tit = $(this).attr("title");
		var v =  parseInt( $("#shuLang"+tit).val() );//商品数量
		var price = parseInt( $("#price"+tit).html() );//商品单价
		var total = parseInt( $("#totalNum").html() );//商品总计
		total = parseInt( total+price*v );
		$("#totalNum").html(total);
    });
	//判断是否选中颜色、型号、相关提示文字
	$(".jieS,.jiaCart").click(function(){
		if( $("#tb-thumbA li").hasClass("tb-selected")== false ){
			$(".prompt_Div_p1").show();
			$(".prompt_Div_p2").hide();
			return false;
		}else{
			$(".prompt_Div_p1").hide();
		}
		if( $("#tb-thumbB li").hasClass("tb-selected")== false ){
			$(".prompt_Div_p2").show();
			$(".prompt_Div_p1").hide();
			return false;
		}else{
			$(".prompt_Div_p2").hide();
		}
	});
	
	
	
	
	xxSwitch(".xxListData",".goodsThe li"); //详细页产品介、产品规格、切换JS,这里调用xxSwitch()函数	
});

//增减商品数量
var maxNum = 999;//购买商品最大数量限制
function inpNumber_L(id){//减
	var v =  parseInt( $("#shuLang"+id).val() );//商品数量
	if( v === 1 ){
		return false;
	}
	if( v <= 1 ){
		return false;
	}
	v--;
	$("#shuLang"+id).val(v);
	if( v === 1 ){
		$('#inpNumber_L'+id).attr("disabled","disabled");
	}
	if( v < maxNum ){
		$('#inpNumber_R'+id).removeAttr("disabled");
	}
	//计算商品总价
	var total = parseInt( $("#totalNum").html() );//商品总价
	var price = parseInt( $("#price"+id).html() );//商品单价
	total = total-price;
	$("#totalNum").html(total);
}
function inpNumber_R(id){//加
	var v = parseInt( $("#shuLang"+id).val() );//商品数量
	if( v >= maxNum ){
		return false;
	}
	if( v === maxNum ){
		return false;
	}
	v++;
	$("#shuLang"+id).val(v);
	if( v > 1 ){
		$('#inpNumber_L'+id).removeAttr("disabled");
	}
	if( v === maxNum ){
		$('#inpNumber_R'+id).attr("disabled","disabled");
	}
	//计算商品总价
	var total = parseInt( $("#totalNum").html() );//商品总价
	var price = parseInt( $("#price"+id).html() );//商品单价
	total = total+price;
	$("#totalNum").html(total);
}
//购物车产品数量直接输入时JS
function jdBlur(id){
	var v =  parseInt( $("#shuLang"+id).val() );//商品数量
	if( v === 1 ){
		$('#inpNumber_L'+id).attr("disabled","disabled");//减
	}
	if( v > 1 ){
		$('#inpNumber_L'+id).removeAttr("disabled");//减
	}
	if( v < maxNum ){
		$('#inpNumber_R'+id).removeAttr("disabled");//加
	}
	if( v === maxNum ){
		$('#inpNumber_R'+id).attr("disabled","disabled");//加
	}
	if( v === 0 ){
		var price = parseInt( $("#price"+id).html() );//商品单价
		$("#shuLang"+id).val( 1 );
		//alert("等于0");
		$("#totalNum").html(price);
	}
	
	//商品总额
	$("#totalNum").html(0);
	$(".price").each(function(){
		var tit = $(this).attr("title");
		var v =  parseInt( $("#shuLang"+tit).val() );//商品数量
		var price = parseInt( $("#price"+tit).html() );//商品单价
		var total = parseInt( $("#totalNum").html() );//商品总计
		var Zprice = price*v ;//单个商品总额
		total = parseInt( total+Zprice );
		$("#totalNum").html(total);
    });
		
}

//详细页选中商品、类型选中JS
function speciColour( xz ){
	if( $("#xzXg"+xz).hasClass("tb-selected") ){
		$("#xzXg"+xz).removeClass("tb-selected");	
	}else{
		$("#xzXg"+xz).addClass("tb-selected").siblings("li").removeClass("tb-selected");
	}
}

//详细页产品介绍、切换JS
function xxSwitch(obj,objTab){
	$(obj).first().show();
	$(objTab).first().addClass("xxCurrent");
	$(objTab).click(function(){
		$(this).addClass("xxCurrent").siblings().removeClass("xxCurrent");
		var name=$(this).attr("name");
		if($(obj).has(name)){
			$(obj).hide();
			$(obj+"."+name).show();	
		};
	});
};







