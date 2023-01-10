import React from 'react';
import { Routes, Route } from "react-router-dom"
import Main from "./components/Main"
import Login from "./components/Login"
import './App.css';

function App() {
  return (
    <>

      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
