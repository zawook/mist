$(document).ready(function(){
	$(".tab > li").click(function(){
		let idx = $(this).index();
		$(".tab > li").removeClass("on");
		$(this).addClass("on");
		$(".tabContents > section").removeClass("on ani");
		$(".tabContents > section").eq(idx).addClass("on");
	});
});