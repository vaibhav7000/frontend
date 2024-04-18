import axios from 'axios';
import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';

const TodoItem = (props) => {
  const todo = props.todo;
  const userData = props.userData;
  const setTodos = props.setTodos;
  const [updateTodo , setUpdateTodo] = useState(false);
  const [title,setTitle] = useState('');
  
  const updateHandler = async() => {
    try {
      const todoId = todo._id;
      const updateData = {
        title : title,
        _id : userData._id,
      };
      const response =  await axios.put(`https://backend-pe1a.onrender.com/todo/updatetodo/${todoId}`,updateData);

      const allTodo = response.data;
      console.log(response.data);
      setUpdateTodo(false);
      setTitle('');
      setTodos(allTodo);
    } catch (error) {
      
    }
  }
  

  const deleteHandler = async() => {
    try {
      const todoId = todo._id;

      const response = await axios.put(`https://backend-pe1a.onrender.com/todo/deletetodo/${todoId}`,userData);
      const allTodo = response.data;
      setTodos(allTodo);
    } catch (error) {
      
    }
  }

  return (
    <div className="w-[40%] flex justify-between items-center bg-white shadow-md rounded-lg p-4 m-2">
      {
        updateTodo ? <div className='flex items-center justify-center'>
        <input
          type="text"
          className="form-input px-4 py-2 rounded-l-md border-2 border-gray-300 focus:outline-none"
          placeholder="Update todo"
          value={title}
          onChange={(event_object)=>setTitle(event_object.target.value)}        
          />
          <button onClick={() =>updateHandler()} className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-transparent">Update</button>
        </div> :
        <span className="text-gray-800 text-sm md:text-lg">{todo.title}</span>
      }
      <div className="flex space-x-2">
        <button
          onClick={() => setUpdateTodo(true)}
          className="text-blue-500 hover:text-blue-700 transition-colors duration-150">
          <AiOutlineEdit size="1.5em" />
        </button>
        <button
          onClick={deleteHandler}
          className="text-red-500 hover:text-red-700 transition-colors duration-150">
          <AiOutlineDelete size="1.5em" />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
