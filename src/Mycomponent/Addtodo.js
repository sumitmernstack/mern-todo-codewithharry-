import React from 'react'
import  { useState } from 'react';
function Addtodo({addtodo}) {

    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")

   

    const submit=(e)=>{
      e.preventDefault();
      if(!title || !desc){
          alert("title and description can'nt be blank")
      }else{
        addtodo(title,desc)
        setDesc("");
        setTitle("");
      }
      
    }

   
    let addtodomargin={
        marginTop: "25px"
    }
    return (
        <div className='container' >
           
            <form  onSubmit={submit}>
                <h3 className='my-3'>Add Todo</h3>
                <div className="form-group">
                    <label htmlFor="title">Todo Title</label>
                    <input type="text" className="form-control" value={title} onChange={(e)=>setTitle(e.target.value)} id="title"  placeholder="Enter Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Desciption</label>
                    <input type="text" className="form-control" value={desc}  onChange={(e)=>setDesc(e.target.value)} id="desc" placeholder="Description"/>
                </div>
                
                <button type="submit"  style={addtodomargin} className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Addtodo
