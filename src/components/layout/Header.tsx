import React from 'react';
import { Leaf } from 'lucide-react';
import { Link } from './Link';

export function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/80 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <Leaf className="h-6 w-6 text-green-600" />
            <span className="text-xl font-bold text-gray-900">EcoDense</span>
          </Link>
          <nav className="flex space-x-8">
            <Link href="/">Home</Link>
            <Link href="/learn">Learn More</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}