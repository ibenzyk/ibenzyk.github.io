
$(function() {
    // Get the form.
    var form = $('#ajax-contact');

    // Set up an event listener for the contact form.
	$(form).submit(function(event) {
	    // Stop the browser from submitting the form.
	    event.preventDefault();

	    // Serialize the form data.
		var formData = $(form).serialize();
		
		// Submit the form using AJAX.
		$.ajax({
		    type: 'POST',
		    url: $(form).attr('action'),
		    data: formData
		})
		.done(function(response) {

		    // Set the message text.
		    alert(response);

		    // Clear the form.
		    $('#name').val('');
		    $('#email').val('');
		    $('#tel').val('');
		    $('#message').val('');
		})
		.fail(function(data) {

		    // Set the message text.
		    if (data.responseText !== '') {
		        alert(data.responseText);
		    } else {
		        alert('Упс! Во время отправки произошла ошибка. Сообщение не отправлено.'); //Oops! An error occured and your message could not be sent.');
		    }
		});
	});
});