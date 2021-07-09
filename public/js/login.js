const loginForm =  async (event) => {
    event.preventDefault(); 

    const email = document.getElementById('login-email').value.trim(); 
    const password = document.getElementById('login-password').value.trim(); 

   if ( email && password) { 
       const response = await fetch('/api/users/login',  { 
           method: 'POST', 
           body: JSON.stringify({ email, password }), 
           headers: { 'Content-Type': 'application/json' },
       });

        if (response.ok) { 
            document.location.replace('/'); 
        }
        else { 
            alert('incorrect information'); 
        }
   }
}; 

document.getElementById('login').addEventListener('click', loginForm)