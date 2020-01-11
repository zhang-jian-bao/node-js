// JavaScript Document
var maxNum = 999;//购买商品最大数量限制
$(function(){
	//购物车数量
	var nameSl = $(".nameSP_sl").length;
	$(".cartNum").html( nameSl );
	//购物车商品总价格
	$("#totalNum").html(0);
	$(".price").each(function(){
		var tit = $(this).attr("title");
		var v =  parseInt( $("#shuLang"+tit).val() );//商品数量
		var price = parseInt( $("#price"+tit).html() );//商品单价
		var total = parseInt( $("#totalNum").html() );//商品总计
		total = parseInt( total+price*v );
		$("#totalNum").html(total);
    });
	
	
	
		
});

//删除购物车商品
function del_ete(id){
	$("#del_ete"+id).remove();
	//购物车商品总价格
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

	var nameSl = $(".nameSP_sl").length;
	$(".cartNum").html( nameSl );
}
//清空购物车
function empty_qk(){
	$(".empty_qk").remove();
	$("#totalNum").html("0.00");//商品总价	
	$(".cartNum").html( 0 );//商品数量
}
//购物车增减
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










