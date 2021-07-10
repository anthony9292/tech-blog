const e = require("express");

const updatePost =  async (event) => { 
    event.preventDefault(); 
    const id = event.target.value

    const title =  document.getElementById('update-title').value;
    const text = document.getElementById('update-text').value;

    if(title) { 
        const response = await  fetch(`/api/posts/${id}`, { 
            method: 'PUT', 
            body: JSON.stringify({ title, text }), 
            headers: { 'Content-Type': 'application/json'}, 
        })
        if (response.ok) { 
            document.location.replace('/profile')
        }
    } 
    else if(!title) {  
        const previousTitle = document.getElementById('previous-title').value
        const response =  await fetch(`/api/posts/${id}`, { 
            method: 'PUT', 
            body: JSON.stringify({ previousTitle, text }), 
            headers: { 'Content-Type': 'application/json' },
        })
        if(response.ok) { 
            document.location.replace('/profile')
        }
    }
   
}; 

document.getElementById('update').addEventListener('click', updatePost)