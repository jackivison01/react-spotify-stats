import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import CurrentlyPlaying from './pages/CurrentlyPlaying';
import Navbar from './components/NavBar';
import SpotifyAuth from './pages/SpotifyAuth';
import SpotifyCallback from './pages/SpotifyCallback';

export default function App() {
  return (
    <Router>
      <div className="flex h-screen">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<SpotifyAuth />} />
            <Route path="/callback" element={<SpotifyCallback />} />
            <Route path="/HomePage" element={<HomePage />} />
            <Route path="/currently-playing" element={<CurrentlyPlaying />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
