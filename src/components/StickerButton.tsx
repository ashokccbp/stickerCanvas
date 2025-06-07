import React from 'react';
import { Plus } from 'lucide-react';

interface StickerButtonProps {
  emoji: string;
  label: string;
  onClick: () => void;
  className?: string;
}

const StickerButton: React.FC<StickerButtonProps> = ({
  emoji,
  label,
  onClick,
  className = '',
}) => {
  return (
    <button
      onClick={onClick}
      className={`group relative flex flex-col items-center gap-3 p-6 bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-blue-300 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/80 ${className}`}
    >
      {/* Emoji Display */}
      <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl group-hover:from-blue-100 group-hover:to-purple-100 transition-colors duration-300">
        <span className="text-3xl transform group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </span>
        
        {/* Plus Icon Overlay */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-md group-hover:bg-blue-700 transition-colors duration-300">
          <Plus size={14} className="text-white" />
        </div>
      </div>
      
      {/* Label */}
      <span className="text-sm font-semibold text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
        {label}
      </span>
      
      {/* Hover Effect Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default StickerButton;