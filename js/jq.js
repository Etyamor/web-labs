jQuery('#myInput').keyup(function() {
    jQuery('#charCount').text( this.value.replace(/{.*}/g, '').length );
});

jQuery( document ).ready(function() {
    
	$('.burger').click(function(){
		$('header ul').toggleClass('opened');
	})

});