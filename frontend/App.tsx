import React from 'react';
import { LangProvider } from './context/LangContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import Location from './components/Location';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <LangProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <MenuSection />
          <Location />
        </main>
        <Footer />
      </div>
    </LangProvider>
  );
};

export default App;
