import React, { useState } from 'react';
import Header from './components/Header';
import StickerCanvas from './components/StickerCanvas';
import StickerPanel from './components/StickerPanel';

interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

function App() {
  const [stickers, setStickers] = useState<Sticker[]>([]);

  const snapToGrid = (value: number, gridSize: number = 40): number => {
    return Math.round(value / gridSize) * gridSize;
  };

  const getRandomPosition = () => {
    const maxX = 600 - 60; // Canvas width minus sticker width
    const maxY = 400 - 60; // Canvas height minus sticker height
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    return {
      x: snapToGrid(randomX),
      y: snapToGrid(randomY),
    };
  };

  const addSticker = (emoji: string) => {
    const position = getRandomPosition();
    const newSticker: Sticker = {
      id: `sticker-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      emoji,
      x: position.x,
      y: position.y,
      width: 60,
      height: 60,
    };
    
    setStickers(prev => [...prev, newSticker]);
  };

  const updateStickerPosition = (id: string, x: number, y: number) => {
    setStickers(prev =>
      prev.map(sticker =>
        sticker.id === id
          ? { ...sticker, x: Math.max(0, Math.min(540, x)), y: Math.max(0, Math.min(340, y)) }
          : sticker
      )
    );
  };

  const deleteSticker = (id: string) => {
    setStickers(prev => prev.filter(sticker => sticker.id !== id));
  };

  const clearAllStickers = () => {
    setStickers([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Header />
        
        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Sticker Panel */}
          <div className="lg:col-span-1">
            <StickerPanel onAddSticker={addSticker} />
            
            {/* Stats Card */}
            <div className="mt-6 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Canvas Stats</h3>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Active Stickers:</span>
                  <span className="font-bold text-blue-600">{stickers.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Canvas Size:</span>
                  <span className="font-medium text-gray-800">600 × 400px</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Grid Size:</span>
                  <span className="font-medium text-gray-800">40px</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Canvas Area */}
          <div className="lg:col-span-2">
            <StickerCanvas
              stickers={stickers}
              onUpdateSticker={updateStickerPosition}
              onDeleteSticker={deleteSticker}
              onClearAll={clearAllStickers}
            />
          </div>
        </div>
        
        {/* Instructions */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-6 text-center">How to Use</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">🖱️</span>
              </div>
              <h3 className="font-semibold mb-2">Click to Add</h3>
              <p className="text-sm text-blue-100">Select any sticker button to add it to the canvas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">✋</span>
              </div>
              <h3 className="font-semibold mb-2">Drag to Move</h3>
              <p className="text-sm text-blue-100">Drag stickers around to create your perfect composition</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👆</span>
              </div>
              <h3 className="font-semibold mb-2">Double-tap to Delete</h3>
              <p className="text-sm text-blue-100">Double-click any sticker to remove it from the canvas</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">💾</span>
              </div>
              <h3 className="font-semibold mb-2">Download PNG</h3>
              <p className="text-sm text-blue-100">Save your creation as a high-quality image file</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;