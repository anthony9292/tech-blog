const registerForm = async (event) => { 
    event.preventDefault(); 

    const name = document.getElementId('name-register').value;
    const email = document.getElementById('email-register').value;
    const password = document.getElementById('password-register').value


    if (name && email && password) {
        const response = await fetch(api/users/registerForm { 
            method: 'Post', 
            body: JSON.stringify({ name, email, password}),
            headers: { 'Content-Type': 'application/json'},
        }); 

        if (response.ok) { 
            document.location.replace('/'); 
        } else { 
            alert('registration information incorrect');
        }
    }
};

document.getElementById('registration').addEventListener('click', registrationForm);