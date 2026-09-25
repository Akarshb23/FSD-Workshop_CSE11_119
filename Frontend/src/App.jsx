import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import User from './pages/User.jsx'; // Assuming your file path
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Protected Route: Anyone trying to go to "/" will be checked first */}
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <User />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
