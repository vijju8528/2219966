import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import URLShortenerForm from './components/URLShortenerForm';
import URLList from './components/URLList';
import StatsPage from './components/StatsPage';
import RedirectHandler from './components/RedirectHandler';
import { LoggerProvider } from './context/LoggerContext';

function App() {
  const [urls, setUrls] = useState([]);

  return (
    <LoggerProvider>
      <Router>
        <Routes>
          <Route path="/" element={<>
            <URLShortenerForm urls={urls} setUrls={setUrls} />
            <URLList urls={urls} />
          </>} />
          <Route path="/stats" element={<StatsPage urls={urls} />} />
          <Route path="/:shortcode" element={<RedirectHandler urls={urls} />} />
        </Routes>
      </Router>
    </LoggerProvider>
  );
}

export default App;
