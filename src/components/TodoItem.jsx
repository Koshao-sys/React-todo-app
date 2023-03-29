// import React, { useState } from 'react';
import TodosList from './TodosList';
import InputScreen from './Input';

const TodoApp = () => (
  <div>
    <h1>todos</h1>
    <InputScreen />
    <TodosList />
  </div>
);

export default TodoApp;
