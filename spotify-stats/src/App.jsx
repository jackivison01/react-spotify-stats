import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CurrentlyPlaying from './pages/CurrentlyPlaying';
import Navbar from './components/NavBar';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/currently-playing" element={<CurrentlyPlaying />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
