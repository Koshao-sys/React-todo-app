import React, { useState } from "react";
import TodosList from "./TodosList";

const todos = [{id: 1, title:"Study", completed:true},{id: 2, title:"Play", completed:false},{id: 3, title:"Eat", completed:false}]
const TodoApp = () => {
  const [Todo, setTodo] = useState(todos)
  return (
    <div>
      <h1>todos</h1>
      <TodosList Todo={Todo} setTodo={setTodo}/>
    </div>
  );
}

export default TodoApp;