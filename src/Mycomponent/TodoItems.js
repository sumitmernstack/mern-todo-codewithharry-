
import React from 'react'

function TodoItems({todo,onDelete}) {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                    <h4>sno.{todo.sno}</h4>
                    <h6>{todo.title}</h6>
                    <p>{todo.desc}</p>
                    <button type="button" className="btn btn-danger" onClick={()=>onDelete(todo)}>Delete</button>
                </div>
             </div>
            
        </div>
    )
}

export default TodoItems
