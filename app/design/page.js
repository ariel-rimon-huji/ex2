import React from 'react';
import { ChevronRight, Camera, Share2, MessageCircle, Lock } from 'lucide-react';

const DesignPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Hero Section */}
      <header className="w-full px-4 py-6 bg-white border-b border-green-100">
        <h1 className="text-2xl font-bold text-green-800">MemoryChat</h1>
      </header>

      {/* Features Section */}
      <section className="px-4 py-8">
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Camera className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-green-800 mb-2">Photo Stories</h3>
                <p className="text-green-700">Share and preserve your cherished childhood photos with context and stories.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <Share2 className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-green-800 mb-2">Family Sharing</h3>
                <p className="text-green-700">Connect with family members and share memories in private groups.</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm border border-green-100">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-full">
                <MessageCircle className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-lg text-green-800 mb-2">Memory Threads</h3>
                <p className="text-green-700">Create conversation threads around specific memories or time periods.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="px-4 py-8 bg-green-50">
        <div className="flex items-center justify-center mb-6">
          <div className="bg-white p-4 rounded-full">
            <Lock className="h-8 w-8 text-green-600" />
          </div>
        </div>
        <h2 className="text-2xl font-bold text-green-800 text-center mb-4">Your Memories, Protected</h2>
        <p className="text-green-700 text-center">
          End-to-end encryption ensures your precious memories stay private and secure.
        </p>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Ready to preserve your memories?</h2>
        <div className="space-y-4">
          <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full text-base">
            Create Account
          </button>
          <button className="w-full border-2 border-green-500 text-green-600 hover:bg-green-50 py-3 rounded-full text-base">
            Learn More
          </button>
        </div>
      </section>
    </div>
  );
};

export default DesignPage;