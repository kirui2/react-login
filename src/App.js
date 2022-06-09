import logo from './logo.svg';
import './App.css';
import Register from './Register'
import Login from './Login'
import Home from './Home'
import { Route, Routes } from 'react-router-dom';
import React from "react";

function App() {
  return (
    <div className="App">
       {/* <Register/> */}
       {/* <Login/> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/"element={ <Login/> }/>
        <Route path="/Home"element={ <Home/> }/>
      </Routes>
    </div>
  );
}
export default App;
