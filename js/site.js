$(function () {
	if ($('section#projects').length > 0) {
		$('section#projects section.light_spacer').remove();
		$('section#projects').css({ 'margin-bottom': '40px' });
		$('section#projects').cycle({
			fx:    'fade', 
			timeout: 11000
		});
	}
	
	if($('section.copy a').length > 0) {
		$('section.copy a').attr('target', '_blank');
	}
	
	if($('section#quotes').length > 0) {
		$('section#quotes').cycle({
			fx: 'fade',
			timeout: 0,
			next: '#nextquote'
		});
	}
});