$(document).ready(function(){
	$(".tabMenu > dt").click(function(){
		$(".tabMenu > dt").removeClass("on");
		$(this).addClass("on");
		$(".tabMenu > dd").removeClass("on");
		$(this).next().addClass("on"); // this(dt태그) 다음의 형제 클래스(dd)에 addClass 적용
	});
});