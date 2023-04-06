import React from 'react';


function TodoList({todos}) {
  return (
    <ul>
      <li>Todo 1</li>
      <li>Todo 2</li>
      {
        todos.map((todo, index) => {
          return (
            <li key={index}>
              <p>
                <span>Title: {todo.title}</span>
              </p>
              <p>
                <span>Comment: {todo.comment}</span>
              </p>
            </li>
          );
        })
      }
    </ul>
  );
};

export default TodoList;
