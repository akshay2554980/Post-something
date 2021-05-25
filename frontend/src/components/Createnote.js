import React, { useState } from 'react'
import axios from 'axios';                 //to send data from frontend to backend.
import './Createnote.css'
function Createnote() {
    const [data, setdata] = useState({          //to keep track of the data 
        title:"",
        content:""
    })
    const handleChange = (e) =>{
       const {name,value} = e.target;          //just changing the new part only.
        setdata((prev)=>{
            return({
                ...prev,[name]:value         // remember this [] in name
            })
        })
    }
    const handleClick =(e)=>{
        e.preventDefault();
        console.log(data);
        const newNote = {
            title:data.title,content : data.content
        }                                            
        axios.post('http://localhost:3001/create',newNote);
        // on click post send this data to the nodeserver... and there add to db.
    }
    return (
        <div className="container">
            <h1>Post Something</h1>
            <form>
            <div className="form-group">
            <input type="text" onChange={handleChange} value={data.title}  autoComplete="off" name="title" className="form-control" placeholder="type title here" />
            </div>
            <div className="form-group">
            <textarea className="form-control" onChange={handleChange} value={data.content} autoComplete="off" name="content" placeholder="type content here"/>
            </div>
            <button onClick={handleClick} className="btn btn-lg btn-info">Submit</button>
            </form>
        </div>
    )
}

export default Createnote
