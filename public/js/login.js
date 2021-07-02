const loginForm = async (event) => {

async function loginFormHandler(event) { 
    event.preventDefault() 

    const email = document.querySelector('#email-login').nodeValue.trim(); 
    const password = document.querySelector('#password-login').nodeValue.trim(); 

    if(email && password) { 
        const response = await fetch('/api/users/login',  { 
            method: 'POST', 
            body: JSON.stringify({ email, password }), 
            headers: { 'Content-Type': 'application/json' }, 
            
        }); 
        
        if (response.ok)
        document.location.replace('/');        
} else { 
    alert('login information incorrect');
}
}

}; 

document.getElementById('login').addEventListener('click',loginForm)