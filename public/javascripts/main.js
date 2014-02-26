$(function(){
	$('.remove').on('click', function(){
		// var remove = $(this).closest('.applicantItem').data('id');

		$(this).closest('.applicantItem').remove();

		// $.get('/applicants/delete/' + remove , function(data){})
	});

});