import React from 'react';
import { Brain, Leaf, TreePine } from 'lucide-react';

export function Learn() {
  return (
    <div className="pt-24 pb-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Understanding Green AI
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            The Hidden Carbon Footprint of AI: A Wake-up Call<br />
            The Carbon Cost of One AI Model: Equivalent to a Fleet of Cars<br />
            AI's Growth Equals Environmental Dangers<br />
            <strong>EcoDense:</strong> A Solution to AI’s Environmental Crisis
          </p>
        </div>

        {/* Features Section */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center">
                  <Brain className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center">AI Technology</h3>
                <p className="mt-2 text-gray-500 text-center">
                  Learn how we leverage advanced AI algorithms to create efficient, environmentally-conscious solutions.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center">
                  <Leaf className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center">Environmental Impact</h3>
                <p className="mt-2 text-gray-500 text-center">
                  Understand how our Green AI solutions help reduce carbon emissions and promote sustainability.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
              <div className="p-6">
                <div className="flex justify-center">
                  <TreePine className="h-12 w-12 text-green-600" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-center">Future Vision</h3>
                <p className="mt-2 text-gray-500 text-center">
                  Explore our roadmap for creating a more sustainable future through innovative AI technologies.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16">
          <div className="bg-white rounded-lg shadow-lg hover:shadow-2xl transition-shadow overflow-hidden">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900">Resources</h2>
              <p className="mt-2 text-gray-600">
                Explore valuable resources to understand and contribute to the development of sustainable AI.
              </p>
              <div className="mt-4 grid gap-4">
                {/* Resource 1 */}
                <a
                  href="#"
                  className="block p-4 border rounded-lg hover:bg-gray-50 hover:border-green-500 transition"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    🌍 Green AI White Paper
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Download our comprehensive guide on Green AI and its environmental impact.
                  </p>
                </a>
                {/* Resource 2 */}
                <a
                  href="#"
                  className="block p-4 border rounded-lg hover:bg-gray-50 hover:border-green-500 transition"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    📊 Case Studies
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Explore real-world examples of how our Green AI solutions are making a difference.
                  </p>
                </a>
                {/* Resource 3 */}
                <a
                  href="#"
                  className="block p-4 border rounded-lg hover:bg-gray-50 hover:border-green-500 transition"
                >
                  <h3 className="text-lg font-medium text-gray-900">
                    📚 Research Papers
                  </h3>
                  <p className="mt-2 text-gray-500">
                    Access our latest research on sustainable AI technologies.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
