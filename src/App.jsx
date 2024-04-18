import { Toaster } from "react-hot-toast";
import React, { useState } from "react";
import { Routes ,Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AuthRoute from "./components/AuthRoute";
import Auth from './utils/Auth';
import { useEffect } from "react";
import axios from "axios";

function App() {
  const [auth,setAuth] = useState(false);
  const [userData , setUserData] = useState(null);
  const [tokens , setTokens] = useState('');
  const verifyAuth = async () => {
    try {
      const res = await axios.get('https://backend-pe1a.onrender.com/isLoggedIn');
      setAuth(res.data);
    } catch (err) {
      console.log(err);
      setAuth(false);
    }
  };

  useEffect(() => {
    (
      async () => {
        const data = await verifyAuth();
        setAuth(false);
      }
    )();
  }, []);

  return (
    <div>
      <Toaster
        position="top-right"
        toastOptions={{
          fontSize : '1.8rem',
        }}
      />

      {/* <Home/> */}

    <Routes>
      <Route element={<AuthRoute auth={auth}/>}>
        <Route path="/" element={<Home userData={userData} tokens={tokens}/>}/>
      </Route>
      <Route path="/login" element={<Login auth={auth} setTokens={setTokens} setUserData={setUserData} setAuth={setAuth} />}/>
      <Route path="/register" element={<Register auth={auth} setTokens={setTokens} setUserData={setUserData} setAuth={setAuth} />}/>
    </Routes>

    </div>
  )
}

export default App
