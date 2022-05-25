import React from 'react';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Login from './components/Login';
import Tablas from './components/Tablas';
import Nuevo from './components/Nuevo';
import Editar from './components/Editar';
import Test from './components/Test';


import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {

  return (
    <React.Fragment> 
    <BrowserRouter>

      <Routes>
         <Route exact path='/' element={<Login />} />
        <Route exact path='/Tablas' element={<Tablas />} />
        <Route exact  path='/Nuevo' element={<Nuevo/>} />
        <Route exact path='/Editar/:id' element={<Editar />} />
        <Route exact path='/test' element={<Test/>} />

      </Routes>

    </BrowserRouter>
    </React.Fragment>

  );


}


