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
    <div className="w-[60%] sm-w-auto mx-auto">
  <form className='flex flex-col sm:flex-row items-center justify-center p-4' onSubmit={handleAddClick}>
    <input
      type="text"
      className="form-input px-1 py-3 rounded-md sm:rounded-r-none border-2 border-r-0 border-gray-300 focus:outline-none w-full sm:w-auto"
      placeholder="Add new todo"
      value={input}
      onChange={handleInputChange}
    />
    <button
      className="px-4 py-3 sm:bg-blue-500 sm:text-white rounded-r-md sm:rounded-l-none sm:rounded-r-md font-bold focus:outline-none bg-transparent text-blue-500 sm:w-auto"
    >
      Add
    </button>
  </form>
</div>

  );
}

export default TodoInput;
