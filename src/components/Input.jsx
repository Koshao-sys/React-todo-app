import React from 'react';

const InputScreen = () => {
  const submitInput = (e) => {
    e.preventDefault();
    // setTodo({ id: uuidv4, title: e.target.value, completed: false });
  };

  return (
    <form action="submit">
      <input type="text" placeholder="Add Todo..." />
      <button type="submit" onSubmit={submitInput}>ADD</button>
    </form>
  );
};

export default InputScreen;
