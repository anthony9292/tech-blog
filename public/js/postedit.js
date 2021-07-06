const editPost = async (event) => { 
    event.preventDefault(); 
    const id = event.target.useDebugValue
    


const text = document.getElementById('text-update').value; 
const title = document.getElementById('edited-title').value;


if(title) { 
    const response = await fetch(`/api/posts/${id}`, { 
         method: 'PUT', 
         body: JSON.stringify({ title, text }), 
         headers: {'Content-Type': 'application/json'}, 
    })

    if (response.ok) {
        document.location.replace('/profile') 
    }
} 
else if (!title) { 
    const previoustitle = document.getElementById('previous-title').value
    const response = await fetch(`/api/posts/${id}`, { 
        method: 'PUT',
        body: JSON.stringify({previoustitle, text}), 
        headers: {'Content-Type': 'application/json'}
    })
    if (response.ok) { 
        document.location.replace('/profile')
    }
}

}; 

document.getElementById('edit').addEventListener('click', editPost);