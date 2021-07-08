const registrationForm = async (event) => { 
    event.preventDefault(); 

    const name = document.getElementById('register-name').value; 
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    if ( name && email && password) { 
        const response =  await fetch('api/users/register', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }), 
            headers: { 'Content-Type': 'application/json'}, 
        }); 

        if (response.ok) { 
            document.location.replace('/'); 

        }
        else { 
            alert('registration has failed,please try again');
        }
    }
}; 

document.getElementById('register').addEventListener('click', registrationForm)