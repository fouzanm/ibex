import { useState } from 'react'
import './App.css'
import Portfolio from './page/Portfolio/Portfolio'
import Login from './page/Login/Login'
import { createBrowserRouter, RouterProvider, Route, Link, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Chat from './page/Chat/Chat';


function App() {

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/'>
            {/* <Route index element={<Portfolio/>}/> */}
            <Route index path='/ibex/' element={<Login/>}/>
            {/* <Route path='/chat' element={<Chat/>}/> */}
          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
