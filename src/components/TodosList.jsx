import React from "react";

const checkedBox = (id) => {
  
}

const TodosList = ({Todo, setTodo}) => {
    return (
    <div>
      <ul>
        {Todo.map((item) => (
          <li>
            <input key={item.id} type="checkbox" checked={item.completed} onChange={checkedBox(item.id)}/>
            {item.title}
          </li>
        ))}
      </ul>
    </div>
    )
}

export default TodosList;