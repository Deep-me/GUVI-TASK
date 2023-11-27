$(document).ready(function() {
    // Click event for the login button
    $('#login').click(function() {
        // Use AJAX to load the login page
        $.ajax({
            url: 'index.html', // Update with your actual login page path
            type: 'GET',
            success: function(data) {
                // Replace the content of the body with the login page content
                $('body').html(data);
            },
            error: function() {
                alert('Error loading login page');
            }
        });
    });
});