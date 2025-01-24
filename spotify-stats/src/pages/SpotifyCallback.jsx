import React, { useEffect, useState } from 'react';

const SpotifyCallback = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getAccessTokenFromUrl = () => {
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);
      return params.get('access_token');
    };

    const token = getAccessTokenFromUrl();
    if (token) {
      setToken(token);
      localStorage.setItem('spotifyAccessToken', token); // Store token securely
      window.location.hash = ''; // Clean the hash from the URL
    }
  }, []);

  return (
    <div>
      {token ? (
        <h2>Login Successful! Token stored.</h2>
      ) : (
        <h2>Fetching your access token...</h2>
      )}
    </div>
  );
};

export default SpotifyCallback;
