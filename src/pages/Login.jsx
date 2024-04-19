import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function Login(props) {
  const [email , setEmail] = useState('');
  const [password , setPassword] = useState('');
  const naviagte = useNavigate();

  if(props.auth){
    naviagte('/');
    // return ;
  }

  const loginHandler = async(event_object) => {
    event_object.preventDefault();

    if(!email.trim().includes('@')){
      
    } else if(!password.trim().length){

    }

    try {
      const userData = {
        email : email,
        password : password,
      };

      const response = await axios.post('https://backend-pe1a.onrender.com/login',userData);
      
      if(Object.keys(response.data).length === 2){
        props.setUserData(response.data.userPresent);
        props.setTokens(response.data.tokens);
        props.setAuth(true);
        toast.success('User Logged In');
      }
      else{
        toast.error('Password or email not correct');
      }
      

    } catch (error) {
      toast.error('Internal server error')
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Login to your account</h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={async(event_object) => await loginHandler(event_object)}>

          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required onChange={(event_object) => setEmail(event_object.target.value)}
                     className=" block w-full px-3 py-2 border border-gray-300 mb-2 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none  focus:border-indigo-500"
                     placeholder="Email address"/>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required onChange={(event_object) => setPassword(event_object.target.value)}
                     className="block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:border-indigo-500"
                     placeholder="Password"/>
            </div>
          </div>

          <div>
            <button type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
               Login
            </button>
          </div>
        </form>

        <div className='flex items-center justify-center'>
          <button onClick={() =>naviagte('/register')} className="flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-transparent">Register</button>
        </div>
      </div>
    </div>
  );
}

export default Login