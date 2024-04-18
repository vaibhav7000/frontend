import React, { useEffect, useState } from 'react'
import TodoInput from '../components/TodoInput'
import axios from 'axios';
import TodoItem from '../components/TodoItem';
function Home(props) {
  const [todos,setTodos] = useState([]);
  const userData = props.userData;
  const tokens = props.tokens;
  console.log('tokens', todos);

  useEffect(() => {
    const updateTodo = async() => {
      try {
        const response = await axios.post('https://backend-pe1a.onrender.com/todo/allTodo',userData);
        setTodos(response.data);
        console.log(response.data);
      } catch (error) {
        console.log('error is present in Home');
      }
    }

    updateTodo();

  },[]);

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-gray-300'>
      <TodoInput userData={userData} setTodos={setTodos}/>
      {
        todos.map((element) => {
          return <TodoItem key={element._id} setTodos={setTodos} userData={userData} todo={element}/>
        })
      }
    </div>
  )
}

export default Home