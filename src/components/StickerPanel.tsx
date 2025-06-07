import React from 'react';
import StickerButton from './StickerButton';

interface StickerPanelProps {
  onAddSticker: (emoji: string) => void;
}

const stickerTypes = [
  { emoji: '🎨', label: 'Art' },
  { emoji: '🌟', label: 'Star' },
  { emoji: '❤️', label: 'Heart' },
  { emoji: '🎵', label: 'Music' },
  { emoji: '🌈', label: 'Rainbow' },
  { emoji: '⚡', label: 'Energy' },
];

const StickerPanel: React.FC<StickerPanelProps> = ({ onAddSticker }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Sticker Collection</h2>
        <p className="text-gray-600">Choose your favorite stickers to add to the canvas</p>
      </div>
      
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {stickerTypes.map((sticker) => (
          <StickerButton
            key={sticker.emoji}
            emoji={sticker.emoji}
            label={sticker.label}
            onClick={() => onAddSticker(sticker.emoji)}
          />
        ))}
      </div>
      
      <div className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200">
        <p className="text-sm text-gray-700 text-center">
          <span className="font-semibold">Pro Tip:</span> Stickers automatically snap to a 40px grid for perfect alignment!
        </p>
      </div>
    </div>
  );
};

export default StickerPanel;