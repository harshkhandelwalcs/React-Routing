import React from 'react';

const Contact = (props) =>{
    setTimeout(()=>{
        props.history.push('/about');
    },2000)
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque quibusdam necessitatibus illum laboriosam at possimus incidunt beatae rerum pariatur tenetur, facilis nihil reprehenderit nemo nostrum eius. Eveniet, suscipit explicabo. Doloribus.</p>
        </div>
    )
}

export default Contact;