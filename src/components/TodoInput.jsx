import React, { useState } from 'react';
import axios from 'axios';

function TodoInput(props) {
  const setTodos = props.setTodos;
  const [input, setInput] = useState('');
  const userData = props.userData;

  const handleInputChange = (event_object) => {
    setInput(event_object.target.value);
  };

  const handleAddClick = async(event_object) => {
    event_object.preventDefault();
    try {
      if (input.trim()) {
        const response = await axios.post('https://backend-pe1a.onrender.com/todo/addTodo',{
          title : input,
          isComplete:false,
          userData,
        });
        setTodos(response.data);
        console.log(response , 'add');
        setInput('');
      }
    } catch (error) {
      console.log('error is present');
    }
  };


  return (
    <div className="w-[50%]">
      <form className='flex w-full items-center justify-center p-4' onSubmit={handleAddClick}>
        <input
          type="text"
          className="form-input px-4 py-3 rounded-l-md border-2 border-r-0 border-gray-300 focus:outline-none"
          placeholder="Add new todo"
          value={input}
          onChange={handleInputChange}
        />
        <button
          className="px-4 py-3 bg-blue-500 text-white rounded-r-md hover:bg-blue-700 focus:outline-none"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default TodoInput;
