import axios from 'axios';
import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Register(props) {
  const [username , setUserName] = useState('');
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const naviagte = useNavigate();

  if(props.auth){
    naviagte('/');
    // return ;
  }

  const RegisterHandler = async(event_object) => {
    event_object.preventDefault();

    const userData = {
      name : username,
      email : email,
      password : password,
    };

    try {
      const response = await axios.post('https://backend-pe1a.onrender.com/register',userData);
      const data = response.data;
      props.setUserData(data.userPresent);
      props.setTokens(data.tokens);
      props.setAuth(true);
      toast.success('User Logged In');
    } catch (error) {
      console.log('error is prsent in register page',error);
      toast.error('Unable to Register User');
    }

  }

  console.log(username,email,password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Register Your Account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(event_object) =>  RegisterHandler(event_object)}>

          <div className="rounded-md shadow-sm -space-y-px">
          <div>
              <label htmlFor="username" className="sr-only"></label>
              <input id="username" name="username" type="text" value={username} required onChange={(event_object) => setUserName(event_object.target.value)}
                     className=" block w-full px-3 py-2 border border-gray-300 mb-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:border-indigo-500"
                     placeholder="User Name"/>
            </div>
            <div>
              <label htmlFor="email-address" className="sr-only"></label>
              <input id="email-address" name="email" type="email"  required onChange={(event_object) => setEmail(event_object.target.value)}
                     className=" block w-full px-3 py-2 border border-gray-300 mb-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:border-indigo-500"
                     placeholder="Email address"/>
            </div>
            <div>
              <label htmlFor="password" className="sr-only"></label>
              <input id="password" name="password" type="password" required onChange={(event_object) => setPassword(event_object.target.value)}
                     className="block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-indigo-500"
                     placeholder="Password"/>
            </div>
          </div>

          <div>
            <button type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               Register
            </button>
          </div>
        </form>

        <div className='flex items-center justify-center'>
          <button onClick={() =>naviagte('/login')} className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-transparent">Login</button>
        </div>
      </div>
    </div>
  );
}

export default Register