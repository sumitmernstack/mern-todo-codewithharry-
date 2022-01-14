import React from 'react'
import TodoItems from './TodoItems'

function Todos(props) {
    const mystyle={
        minHeight:"70vh",
        magin:"40px auto"
    }

    return (
        <div className='container' style={mystyle}>
        <h4 className="text-center my-3">Todo List</h4>
  
        {props.todos.length===0 ? <div className="card">
  <div className="card-body">
   no data to display
  </div>
</div>:
        props.todos.map((todolist)=>{
            return  <TodoItems todo={todolist}  key={todolist.sno} onDelete={props.onDelete}/>
        })}
       
        </div>
    )
}

export default Todos
