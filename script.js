jQuery(document).ready(function(){

/* ON CLICK .AVENIR */

$(".avenir").click(function(e) {
	alert("Cette page arrivera prochainement.");
	e.preventDefault();
})


/* ON navtoken click then animate*/

	$("#responsivenav").hide();
	$("#responsivenav a").hide();
	$(".crosstoken").hide();

	

	$(".navtoken").click(function() {
		$("#responsivenav").show();
		$("#responsivenav a").fadeIn(1000);
		$("#responsivenav").animate({
			top: '16vh',
			height: '150px'
		}, 400);
		$(".navtoken").hide();
		$(".crosstoken").show();	
	});

	$(".crosstoken").click(function() {
		$("#responsivenav a").fadeOut(300);
		$("#responsivenav").animate({
			top: '16vh',
			height: '0px'
		}, 400);
		$(".navtoken").show();
		$(".crosstoken").hide();
	});

	
	/* Infos à venir */

	

});