$(document).ready(function(){
	let nthclick = 0;
	$(".btnNext").click(function(){
		nthclick++;
		if(nthclick>=3) {
			nthclick=3;
		};
		$(".train").css("transform","translateX("+(-25*nthclick)+"%)");
	});
	$(".btnPrev").click(function() {
		nthclick--;
		if(nthclick<0) {
			nthclick=0;
		};
		$(".train").css("transform","translateX("+(-25*nthclick)+"%)");
	});
	
	let timer = setInterval(function(){
	nthclick++;
		if(nthclick>3) {
			nthclick=3;
		};
		$(".train").css("transform","translateX("+(-25*nthclick)+"%)");
		
	},3000);
	$(".station").mouseover(function(){
		clearInterval(timer);
	})
});