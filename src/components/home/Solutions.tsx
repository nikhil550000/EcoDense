import React from 'react';
import { Calculator, ShoppingBag, LineChart } from 'lucide-react';

export function Solutions() {
  const solutions = [
    {
      icon: Calculator,
      title: 'Carbon Emission Calculator',
      description: 'Calculate and track your carbon footprint with our advanced AI-powered tool.',
    },
    {
      icon: ShoppingBag,
      title: 'Eco-friendly Product Recommendations',
      description: 'Get personalized suggestions for sustainable products and alternatives.',
    },
    {
      icon: LineChart,
      title: 'Sustainability Strategies',
      description: 'Receive actionable insights and strategies to reduce your environmental impact.',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Solutions
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Comprehensive tools and strategies for a sustainable future
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-green-500 rounded-lg shadow-lg hover:shadow-xl transition-all"
              >
                <div>
                  <span className="rounded-lg inline-flex p-3 bg-green-50 text-green-600 ring-4 ring-white">
                    <solution.icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                </div>
                <div className="mt-8">
                  <h3 className="text-lg font-medium">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      {solution.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm text-gray-500">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}