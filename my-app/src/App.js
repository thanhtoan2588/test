import './App.css';
import Register from './components/Register';
import Home from './pages/home';
import Login from './components/Login';
import EmailSendingForm from './components/EmailSendingForm';

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import ProductDetails from './components/ProductDetails';

function App() {

  const [id,setId] = useState("")
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home setId={setId}/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/emailSendingForm' element={<EmailSendingForm/>}/>
          <Route path={`/products/${id}`} element={<ProductDetails id={id}/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
