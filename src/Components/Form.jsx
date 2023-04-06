import React, {useState} from 'react';


function Form({setTodos, todos}) {
  const [todoTitle, setTodoTitle] = useState('');
  const [todoComment, setTodoComment] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    const todo = {
      title: todoTitle,
      comment: todoComment
    };
    console.log(todo);
    setTodos([...todos, todo]);
    setTodoTitle('');
    setTodoComment('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="todoTitle">
        Todo Title: 
      </label>
      <input 
        type="text" 
        id="todoTitle"
        name="todoTitle"
        value={todoTitle}
        onChange={
          (event) => {
            return (
              setTodoTitle(event.target.value)
            );
          }
        }
      />
      <label htmlFor="todoComment">
        Todo Comment: 
      </label>
      <input 
        type="text" 
        id="todoComment"
        name="todoComment"
        value={todoComment}
        onChange={
          (event) => {
            return (
              setTodoComment(event.target.value)
            );
          }
        }
      />
      <button type="submit">Submit Form</button>
    </form>
  );
};

export default Form;
