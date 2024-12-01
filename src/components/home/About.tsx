import React from 'react';
import { Leaf, Brain, Recycle } from 'lucide-react';

export function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About EcoDense
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We're on a mission to revolutionize sustainability through artificial intelligence.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              icon: Leaf,
              title: 'Eco-Friendly Solutions',
              description: 'Developing sustainable technologies that minimize environmental impact.',
            },
            {
              icon: Brain,
              title: 'Green AI',
              description: 'Leveraging artificial intelligence to create efficient, environmentally conscious solutions.',
            },
            {
              icon: Recycle,
              title: 'Sustainable Future',
              description: 'Working towards a cleaner, greener future for generations to come.',
            },
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex justify-center">
                <item.icon className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="mt-4 text-xl font-medium text-gray-900 text-center">
                {item.title}
              </h3>
              <p className="mt-2 text-gray-500 text-center">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}