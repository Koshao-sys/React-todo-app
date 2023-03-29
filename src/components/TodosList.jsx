import React from 'react';
/* eslint-disable */
const TodosList = (props) => {
  const { Todo } = props;

  return (
    <div>
      <ul>
        {Todo.map((item) => (
          <li>
            <input key={item.id} type="checkbox" checked={item.completed} />
            {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodosList;
