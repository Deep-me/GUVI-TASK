$(document).ready(function() {

        document.getElementById('registrationForm').addEventListener('submit', function (e) {
            e.preventDefault();
            // Add registration logic here (can be implemented on the server side).
            alert('Registration functionality will be implemented on the server side.');
        });


    // Click event for the register button
    $('#register').click(function() {
        // Use AJAX to load the registration page
        $.ajax({
            url: 'register.html', // Update with your actual registration page path
            type: 'GET',
            success: function(data) {
                // Replace the content of the body with the registration page content
                $('body').html(data);
            },
            error: function() {
                alert('Error loading registration page');
            }
        });
    });
});