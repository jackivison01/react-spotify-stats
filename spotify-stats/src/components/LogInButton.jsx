import React, { useEffect } from 'react';

const LogInButton = () => {
  const clientId = '49bc21756a90498798430c482a071f4d';
  const redirectUri = 'http://localhost:5173/callback'; // Match the registered URI
  const scopes = [
    'user-read-private', // Example scopes
    'user-read-email',
  ];

  // Redirect to Spotify login
  const loginWithSpotify = () => {
    const authorizeUrl = `https://accounts.spotify.com/authorize?` +
      `client_id=${clientId}&` +
      `response_type=token&` +
      `redirect_uri=${encodeURIComponent(redirectUri)}&` +
      `scope=${encodeURIComponent(scopes.join(' '))}`;
    window.location.href = authorizeUrl;
  };

  // Extract token from URL hash
  const getAccessTokenFromUrl = () => {
    const hash = window.location.hash.substring(1);
    const params = new URLSearchParams(hash);
    return params.get('access_token');
  };

  useEffect(() => {
    const token = getAccessTokenFromUrl();
    if (token) {
      localStorage.setItem('spotifyAccessToken', token); // Store token securely
      window.location.hash = ''; // Clean URL hash
    }
  }, []); // Run on component mount

  return (
    <button onClick={loginWithSpotify}>Log in with Spotify</button>
  );
};

export default LogInButton;
