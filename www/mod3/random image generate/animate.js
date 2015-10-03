jQuery('document').ready(function () {
	jQuery('.mytext').hide();
	
	jQuery('.bubble1').on('click', function () {
    jQuery(this).stop(true,true).hide('explode', { pieces: 128 } , 1000, function() { jQuery('.mytext').show(); } );
  });
    
  var bubbleWidth = jQuery('.bubble1').width();
  var bubbleHeight = jQuery('.bubble1').height();

 });