import React, { useEffect, useState } from 'react'

function Notes() {
const [notes, setnotes] = useState([{
    title:"",content:""
}])

useEffect(()=>{
    fetch("http://localhost:3001/notes").then(res=>{   //sending this request to the node server.
        if(res.ok)                                     //dont forget to set proxy in the package.json 
            return res.json()
    }).then(jsonres=>setnotes(jsonres))
},[])

    return (
        <div className="container">
            <h1>Notes Page</h1>
            {
                notes.map((note)=>{
                   
                    return(    <div>
                        <h1>{note.title}</h1>
                        <p>{note.content}</p>
                        </div>
                )})
            }
        </div>
    )
}

export default Notes
