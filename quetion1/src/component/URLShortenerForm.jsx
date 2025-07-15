import React, { useState } from 'react';
import { TextField, Button, Typography } from '@mui/material';
import { useLogger } from '../context/LoggerContext';

export default function URLShortenerForm({ urls, setUrls }) {
  const [inputUrls, setInputUrls] = useState(['']);
  const [expiry, setExpiry] = useState(30);
  const [customCode, setCustomCode] = useState('');
  const { log } = useLogger();

  const handleShorten = () => {
    const newEntries = inputUrls.map((url, idx) => {
      if (!url.startsWith('http')) {
        log(`Invalid URL: ${url}`);

        return null;
      }

      const shortcode = customCode || Math.random().toString(36).substr(2, 5);
      log(`Shortened URL: ${url} -> ${shortcode}`); // ✅ FIXED

      return {
        original: url,
        shortcode: `${shortcode}${idx}`, // ✅ FIXED
        expiry,
        createdAt: Date.now(),
        clicks: []
      };
    }).filter(Boolean); // remove nulls

    setUrls([...urls, ...newEntries]);
    setInputUrls(['']);
    setCustomCode('');
    setExpiry(30);
  };

  return (
    <div>
      <Typography variant="h4">URL Shortener</Typography>
      {inputUrls.map((url, idx) => (
        <TextField
          key={idx}
          label={`URL ${idx + 1}`} // ✅ FIXED
          value={url}
          onChange={(e) => {
            const updated = [...inputUrls];
            updated[idx] = e.target.value;
            setInputUrls(updated);
          }}
          fullWidth
          margin="normal"
        />
      ))}
      {inputUrls.length < 5 && (
        <Button onClick={() => setInputUrls([...inputUrls, ''])}>Add URL</Button>
      )}
      <TextField
        label="Expiry (minutes)"
        type="number"
        value={expiry}
        onChange={(e) => setExpiry(Number(e.target.value))}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Preferred Shortcode (optional)"
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" onClick={handleShorten}>Shorten</Button>
    </div>
  );
}
