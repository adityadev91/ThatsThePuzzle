
var arrowFlag = 0;
var alphIndex = 0;
var balloonsArray = [
			'red-balloon.png',
			'blue-balloon.png',
			'green-balloon.png',
			'purple-balloon.png'
		];
var alphabetsArray = [
			'a.png',
			'b.png',
			'c.png',
			'd.png',
			'e.png',
			'f.png',
			'g.png',
			'h.png',
			'i.png',
			'j.png',
			'k.png',
			'l.png',
			'm.png',
			'n.png',
			'o.png',
			'p.png',
			'q.png',
			'r.png',
			's.png',
			't.png',
			'u.png',
			'v.png',
			'w.png',
			'x.png',
			'y.png',
			'z.png'
		];

$(document).ready(function(){

	$("#alphabet1").hide();
	$("#alphabet2").hide();
	$(".nextarrow").hide();
	$(".complete").hide();
	$("#balloon1").click(function () {
		jQuery(this).stop(true,true).hide('explode', { pieces: 128 } , 1000, function() {
			jQuery('#alphabet1').show(); } );
			arrowFlag = arrowFlag + 1;
			showArrow();
	});
	
	$("#balloon2").click(function () {
		jQuery(this).stop(true,true).hide('explode', { pieces: 128 } , 1000, function() {
			jQuery('#alphabet2').show(); } );
			arrowFlag = arrowFlag + 1;
			showArrow();
	});
	
	$(".nextarrow").click(function () {
		jQuery(this).stop(true,true).hide(function() {
			jQuery("#alphabet1").hide();
			jQuery("#alphabet2").hide();
			randInitBalloons();
			jQuery("#balloon1").show();
			jQuery("#balloon2").show();
			arrowFlag = 0;
			if(alphIndex<26){
				changeAlphabet(alphabetsArray[alphIndex],alphabetsArray[alphIndex + 1]);
			}
			else{
				jQuery("#alphabet1").hide();
				jQuery("#alphabet2").hide();
				jQuery("#balloon1").hide();
				jQuery("#balloon2").hide();
				$(".complete").show();
			}

	 } );
			arrowFlag = arrowFlag + 1;
			alphIndex = alphIndex + 2;
			showArrow();
	});
	
	$(".complete").click(function () {
		goBack();
	});
	
	initBalloons();
	changeAlphabet(alphabetsArray[alphIndex],alphabetsArray[alphIndex + 1]);
});

function initBalloons(){
	jQuery("#balloonImgId1").attr("alt", "Balloon1");
	jQuery("#balloonImgId2").attr("alt", "Balloon2");
	randInitBalloons();
}

function showArrow(){
			if(arrowFlag==2){
				$(".nextarrow").show(2000);
		}		
};

function changeAlphabet(alph1, alph2){
	jQuery("#alphabetImgId1").attr("src", 'alphabets/' + alph1);
	jQuery("#alphabetImgId2").attr("src", 'alphabets/' + alph2);
}

function randInitBalloons(){
	var randBalloon1 = Math.floor((Math.random() * 100) % 4);
	var randBalloon2 = Math.floor((Math.random() * 100) % 4);
	jQuery("#balloonImgId1").attr("src", 'balloons/' + balloonsArray[randBalloon1]);
	jQuery("#balloonImgId2").attr("src", 'balloons/' + balloonsArray[randBalloon2]);
}

function goBack(){
	window.history.go(-1);
}