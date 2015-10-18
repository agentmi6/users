$(document).ready(function(){

	$('.read').on('click', function(){
		$(this).closest('tr').toggleClass('active');
		$('.user_details').toggle();
		$('.name').html($(this).closest('tr').find('td:eq(0)').html());
		$('.email').html($(this).closest('tr').find('td:eq(1)').html());
		$('.phone').html($(this).closest('tr').find('td:eq(2)').html());		
	});

	$('.delete').on('click', function(){
		$(this).closest('tr').fadeOut('400');
		if ($(this).closest('tr').hasClass('active')) {
			$('.user_details').fadeOut('2500');
		};
	});

	$('.edit').on('click', function(){
		$(this).html('SAVE').toggleClass('editing');
		

		if ($(this).hasClass('editing')) {	
			$(this).closest('tr').find('td:lt(3)').html("").append("<input class='vals' type='text'>");								
		}
		else{
			$(this).closest('tr').find('td:lt(3)').each(function(){
				if (!$('.vals').val()) {
					alert("You must fill in the fields!")
				}
				else{
					$(this).html($('.vals').val());
				}	
			});
			$(this).html('Edit').removeClass('editing');
		}
	});
});