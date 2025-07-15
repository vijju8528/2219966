import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function RedirectHandler({ urls }) {
  const { shortcode } = useParams();

  useEffect(() => {
    const entry = urls.find(u => u.shortcode === shortcode);
    if (entry) {
      window.location.href = entry.original;
    } else {
      alert('Shortcode not found or expired');
    }
  }, [shortcode, urls]);

  return <div>Redirecting...</div>;
}