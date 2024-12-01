import React from 'react';
import { Hero } from '../components/home/Hero';
import { About } from '../components/home/About';
import { Solutions } from '../components/home/Solutions';
import { Contact } from '../components/home/Contact';

export function Home() {
  return (
    <div className="pt-16">
      <Hero />
      <About />
      <Solutions />
      <Contact />
    </div>
  );
}