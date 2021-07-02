const PostCreateForm = async (event) => { 
    event.preventDefault(); 

      
 const title = document.getElementById('title-post').value
 const text = document.getElementById('title-text').value

 
 if( title && text) {
    const response = await fetch ('api/posts', { 
        method: 'POST', 
        body: JSON.stringify({
            title, text
        }), 
        headers: { 'Content-type' : 'application/json'},
    }); 

    if (response.ok) { 
        document.location.replace('/')
    }

 } else { 
     alert('Posting error')
 }

}; 

document.getElementById('post').addEventListener('click',PostCreateForm); 