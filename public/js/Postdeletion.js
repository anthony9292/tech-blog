const PostDeletion = async (event) => { 
    event.preventDefault(); 
   
    const id = windows.location.

    const response = await fetch('/api/posts/${posts}', { 
        method: "Delete", 
        headers: { 'Content-type': 'application/json'}
    })
    if (response.ok) { 
        document.location.replace('/profile'); 
    }
};