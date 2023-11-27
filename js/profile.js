function editProfile() {
    document.getElementById('profileContainer').style.display = 'none';
    document.getElementById('editForm').style.display = 'block';

    // Fetch user data and populate the edit form
    document.getElementById('editName').value = 'John Doe';
    document.getElementById('editDob').value = '1990-01-01';
    document.getElementById('editQualification').value = 'Bachelor\'s Degree';
    document.getElementById('editEmail').value = 'john.doe@example.com';
    document.getElementById('editAddress').value = '123 Main St, Cityville';
    document.getElementById('editCountry').value = 'United States';
    document.getElementById('editState').value = 'California';
}

function cancelEdit() {
    document.getElementById('profileContainer').style.display = 'block';
    document.getElementById('editForm').style.display = 'none';
}

// You can add an event listener for the form submission and handle it accordingly
document.getElementById('editForm').addEventListener('submit', function (e) {
    e.preventDefault();
    // Add logic to update the user profile on the server side
    alert('Profile updated successfully!');
    // After updating, you may want to refresh the profile display with the new data
    cancelEdit();
});