import React from 'react';
import { Palette, Sparkles } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center mb-8">
      <div className="inline-flex items-center gap-3 mb-4">
        <div className="p-3 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl shadow-lg">
          <Palette className="text-white" size={28} />
        </div>
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          MyEra Sticker Canvas
        </h1>
        <Sparkles className="text-purple-500" size={24} />
      </div>
      
      <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
        Create beautiful compositions with interactive stickers. Click to add, drag to arrange, 
        and download your masterpiece as a high-quality PNG image.
      </p>
      
      <div className="mt-6 inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <span className="text-sm font-medium text-gray-700">Interactive Canvas Ready</span>
      </div>
    </header>
  );
};

export default Header;