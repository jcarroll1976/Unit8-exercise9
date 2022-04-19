import React from 'react';
import Header from './components/Header'
import './App.css';
import { Navigate, Route, Router, Routes } from 'react-router-dom';
import MenuRoute from './components/MenuRoute';
import DetailsRoute from './components/DetailsRoute';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        < Route path = "/" element={<MenuRoute />} />
        <Route path = "/details/:id" element ={<DetailsRoute />} />
        <Route path = "*" element ={<Navigate to ="/"/>} />
      </Routes>
    </Router>
      
  
  );
}

export default App
