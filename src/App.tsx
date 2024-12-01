import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Ecobot } from './components/chatbot/Ecobot';
import { Home } from './pages/Home';
import { Learn } from './pages/Learn';

function App() {
  const path = window.location.pathname;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {path === '/' && <Home />}
      {path === '/learn' && <Learn />}
      <Footer />
      <Ecobot />
    </div>
  );
}

export default App;