const PostDeletion = async (event) => { 
    event.preventDefault(); 
    const post = event.target.value;

    const response = await fetch('/api/posts/${posts}', { 
        method: "Delete", 
        headers: { 'Content-type': 'application/json'}
    })
}