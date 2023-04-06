import React, {useState} from 'react';
import Form from './Form';
import TodoList from './TodoList';


function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <h1>ToDo's!</h1>
      <Form 
        todos={todos} 
        setTodos={setTodos} 
      />
      <TodoList 
        todos={todos} 
      />
    </>
  );
};

export default App;
