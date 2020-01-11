// JavaScript Document

$(function(){
	//删除订单商品
	$(".deleA").each(function() {
        var id = $(this).attr("name");
		$("#deleA"+id).click(function(){
			$("#blackBg,#deleCon").show();
			$(".NObut").click(function(){
				$("#blackBg,#deleCon").hide();	
			});
			$(".YESbut").click(function(){
				$("#goods"+id).remove();
				$("#blackBg,#deleCon").hide();	
			});
		});
    });
});



