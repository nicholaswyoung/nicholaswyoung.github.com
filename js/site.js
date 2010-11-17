$(function () {
	if ($('section#projects').length > 0) {
		$('section#projects section.light_spacer').remove();
		$('section#projects').css({ 'margin-bottom': '40px' });
		$('section#projects').cycle({
			fx:    'fade', 
			timeout: 10050
		});
	}
});