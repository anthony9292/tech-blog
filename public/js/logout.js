const logout = async () => {
    console.log("log out")
    const response = await fetch('/api/users/logout', { 
        method: 'POST',
        headers: { 'Content-type': 'application/json'}, 
    }); 

    if(response.ok) {
    document.location.replace('/'); 
}
else{ 
   alert(response.statusText);
}
}; 

document.getElementById('logout').addEventListener('click', logout);