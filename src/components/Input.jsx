import React from "react";

const Input = () => {
  
    const [input, setInput] = newState('');

  const submitInput = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  }

  return (
    <form action="submit">
      <input type="text" placeholder="Add Todo..." onSubmit={submitInput}/> <button>ADD</button>
    </form>
  );
}

export default Input;