$(document).ready(function(){
	//홈페이지가 로딩 된 후 실행할 구문
	$("#list3").append("<li>추가된 리스트6</li>")	;
	$("#list3").prepend("<li>추가된 리스트1</li>");
	$("#list3").append("<li>추가된 리스트7</li>");
	$("#list3 li").eq(0).remove();
	
	// let result = $(".link").attr("target");
	// alert(result);
	
	$(".link").attr("href","ahskdgl");
	$(".link").attr("target","_self");
	$(".box").addClass("off"); //removeclass()
	
	$(".btnopen").click(function() {
		$(".menu").addClass("active");
	});
	$(".btnclose").click(function() {
		$(".menu").removeClass("active");
	});
});