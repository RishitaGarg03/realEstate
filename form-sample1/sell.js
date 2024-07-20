{
    document.getElementById('inquiryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Retrieve form data
    const name = document.getElementById('name').value;
    const owner = document.getElementById('ownership').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const number = document.getElementById('whatsApp').value;
    const propertyType = document.getElementById('propertyType').value;
    const budget = document.getElementById('budget').value;
    const message = document.getElementById('message').value;
    
    // Simple form validation (could be expanded as needed)
    if(name && owner && email && phone && number && propertyType && budget && message) {
        alert('Inquiry submitted successfully!');
        
        // Clear the form
        document.getElementById('inquiryForm').reset();
    } else {
        alert('Please fill out all fields.');
    }
});
}
