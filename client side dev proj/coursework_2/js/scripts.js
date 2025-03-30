document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript is working!');
    
    // Example of form validation
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        if (name && email && message) {
            alert('Form submitted successfully!');
        } else {
            alert('Please fill out all fields.');
        }
    });
});