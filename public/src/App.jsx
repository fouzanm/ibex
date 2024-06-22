import './App.css'
import Portfolio from './page/Portfolio/Portfolio'
import Login from './page/Login/Login'
import { createBrowserRouter, RouterProvider, Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import Chat from './page/Chat/Chat';
import Home from './page/Home/Home';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  return (
    <BrowserRouter>
        <ToastContainer position= "top-right" autoClose= {3000} theme= "colored"/>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route exact path='/auth' element={<Login/>}/>
            <Route exact path='/chat' element={<Chat/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;