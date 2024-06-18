import { useState } from 'react'
import './App.css'
import Portfolio from './page/Portfolio/Portfolio'
import Login from './page/Login/Login'
import { createBrowserRouter, RouterProvider, Route, Link, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Chat from './page/Chat/Chat';
import Home from './page/Home/Home';


function App() {

  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='/auth' element={<Login/>}/>
            <Route exact path='/chat' element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
