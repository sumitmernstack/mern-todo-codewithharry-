import './App.css';
import Header from './Mycomponent/Header'
import Footer from './Mycomponent/Footer'
import Todos from './Mycomponent/Todos';
import React, { useState, useEffect } from 'react';
import Addtodo from './Mycomponent/Addtodo';
import About from './Mycomponent/about';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
function App() {
  let inittodo;
  if (localStorage.getItem("todos") === null) {
    inittodo = [];
  } else {
    inittodo = JSON.parse(localStorage.getItem("todos"))
  }

  const addtodo = (title, desc) => {
    console.log("title-->", title, " and description-->", desc)
    let sno = 0;
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1;
    } else {
      sno = 1;
    }

    const mytodo = {
      sno: sno,
      title: title,
      desc: desc
    }

    setTodo([...todos, mytodo])
    console.log(mytodo)

  }

  const onDelete = (todo) => {
    console.log("i am on delete", todo);
    // let index=todos.indexOf(todo)
    //todos.splice(index,1)
    setTodo(todos.filter((e) => {
      return e !== todo
    }))
    localStorage.setItem("todos", JSON.stringify(todo))
  }
  const [todos, setTodo] = useState(inittodo)
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])



  return (
    <div>
      <Router>
      <Header title="My Todos List" searchBar={false} /> 
      <Switch>
          <Route exact path="/" render={()=>{
            return(
            <>
            <Addtodo addtodo={addtodo} />
            <Todos todos={todos} onDelete={onDelete} /> 
            </>)
          }}> 
          </Route>
          <Route exact path="/about">
            <About />
          </Route> 
        </Switch> 
      <Footer />
    </Router>
    </div>

  );
}

export default App;
