function sweet() {
    // Get the form elements
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var txt = document.getElementById('txt').value.trim();
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    // Check if all fields are filled
    if (name === "" || email === "" || txt === "") {
        Swal.fire({
            title: 'Oops!',
            text: 'Please fill in all fields.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    }
    else if (!emailPattern.test(email)) {
        Swal.fire({
            title: 'Invalid Email!',
            text: 'Please enter a valid email address.',
            icon: 'error',
            confirmButtonText: 'Okay'
        });
    } 
    else {
        // If all fields are filled, show the SweetAlert success message
        Swal.fire({
            title: 'Thanks!',
            text: "We'll contact you soon!",
            icon: 'success',
            confirmButtonText: 'Okay'
        });
    }
}