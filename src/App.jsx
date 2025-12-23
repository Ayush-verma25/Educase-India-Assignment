import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
  return (
    <main className="min-h-screen w-full bg-gray-100 flex items-center justify-center p-4 font-sans">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </main>
  );
}

export default App;
