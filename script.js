document.getElementById('regForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const user = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const pass = document.getElementById('password').value;
    const confirm = document.getElementById('confirmPassword').value;
    const errorBox = document.getElementById('error-message');

    // 1. Check for empty fields (trim() handles spaces)
    if (!user || !email || !phone || !pass || !confirm) {
        errorBox.innerText = "All fields are required and cannot be just spaces.";
        return;
    }

    // 2. Phone Number: Numeric only and exactly 10 digits
    if (!/^\d{10}$/.test(phone)) {
        errorBox.innerText = "Phone must be exactly 10 digits.";
        return;
    }

    /* 3. Password: Min 7 chars, 1 Capital, 1 Digit, 1 Special (&, $, #, @) */
    const passRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[&$#@]).{7,}$/;
    if (!passRegex.test(pass)) {
        errorBox.innerText = "Password needs 7+ chars, 1 uppercase, 1 digit, and a special char (&, $, #, @).";
        return;
    }

    // 4. Password Match
    if (pass !== confirm) {
        errorBox.innerText = "Passwords do not match!";
        return;
    }

    /* 5. Email: Letters before @, exactly 3 letters between @ and ., 2-3 letters after . */
    const emailRegex = /^[a-zA-Z]+@[a-zA-Z]{3}\.[a-zA-Z]{2,3}$/;
    if (!emailRegex.test(email)) {
        errorBox.innerText = "Email format: letters@abc.com (3 chars between @ and .)";
        return;
    }

    errorBox.style.color = "green";
    errorBox.innerText = "Registration Successful!";
});