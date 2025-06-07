import React, { useState, useRef } from 'react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import { Download, RotateCcw } from 'lucide-react';

interface Sticker {
  id: string;
  emoji: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

interface StickerCanvasProps {
  stickers: Sticker[];
  onUpdateSticker: (id: string, x: number, y: number) => void;
  onDeleteSticker: (id: string) => void;
  onClearAll: () => void;
}

const StickerCanvas: React.FC<StickerCanvasProps> = ({
  stickers,
  onUpdateSticker,
  onDeleteSticker,
  onClearAll,
}) => {
  const stageRef = useRef<any>(null);
  const [hoveredSticker, setHoveredSticker] = useState<string | null>(null);

  const snapToGrid = (value: number, gridSize: number = 40): number => {
    return Math.round(value / gridSize) * gridSize;
  };

  const handleDragEnd = (id: string, x: number, y: number) => {
    const snappedX = snapToGrid(x);
    const snappedY = snapToGrid(y);
    onUpdateSticker(id, snappedX, snappedY);
  };

  const handleDownload = () => {
    if (stageRef.current) {
      const dataURL = stageRef.current.toDataURL({
        mimeType: 'image/png',
        quality: 1.0,
        pixelRatio: 2,
      });
      
      const link = document.createElement('a');
      link.download = `myera-sticker-canvas-${Date.now()}.png`;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const EmojiImage: React.FC<{
    sticker: Sticker;
    onDragEnd: (x: number, y: number) => void;
    onDoubleClick: () => void;
    isHovered: boolean;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
  }> = ({ sticker, onDragEnd, onDoubleClick, isHovered, onMouseEnter, onMouseLeave }) => {
    const [image, setImage] = useState<HTMLImageElement | null>(null);

    React.useEffect(() => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      const devicePixelRatio = window.devicePixelRatio || 1;
      
      canvas.width = sticker.width * devicePixelRatio;
      canvas.height = sticker.height * devicePixelRatio;
      canvas.style.width = `${sticker.width}px`;
      canvas.style.height = `${sticker.height}px`;
      
      if (context) {
        context.scale(devicePixelRatio, devicePixelRatio);
        context.font = `${sticker.width * 0.8}px Arial`;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        
        // Add subtle shadow for depth
        context.shadowColor = 'rgba(0, 0, 0, 0.2)';
        context.shadowBlur = 4;
        context.shadowOffsetX = 2;
        context.shadowOffsetY = 2;
        
        context.fillText(
          sticker.emoji,
          sticker.width / 2,
          sticker.height / 2
        );
      }
      
      const img = new window.Image();
      img.src = canvas.toDataURL();
      img.onload = () => setImage(img);
    }, [sticker]);

    if (!image) return null;

    return (
      <KonvaImage
        image={image}
        x={sticker.x}
        y={sticker.y}
        width={sticker.width}
        height={sticker.height}
        draggable
        onDragEnd={(e) => onDragEnd(e.target.x(), e.target.y())}
        onDblClick={onDoubleClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        scaleX={isHovered ? 1.1 : 1}
        scaleY={isHovered ? 1.1 : 1}
        opacity={isHovered ? 0.9 : 1}
        shadowColor={isHovered ? 'rgba(59, 130, 246, 0.5)' : 'rgba(0, 0, 0, 0.1)'}
        shadowBlur={isHovered ? 10 : 5}
        shadowOffsetX={isHovered ? 0 : 2}
        shadowOffsetY={isHovered ? 0 : 2}
      />
    );
  };

  return (
    <div className="flex flex-col space-y-4">
      {/* Canvas Container */}
      <div className="relative bg-white rounded-2xl shadow-2xl p-6 backdrop-blur-sm bg-white/90 border border-white/20">
        <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-white">
          <Stage
            ref={stageRef}
            width={600}
            height={400}
            className="block mx-auto"
          >
            <Layer>
              {stickers.map((sticker) => (
                <EmojiImage
                  key={sticker.id}
                  sticker={sticker}
                  onDragEnd={(x, y) => handleDragEnd(sticker.id, x, y)}
                  onDoubleClick={() => onDeleteSticker(sticker.id)}
                  isHovered={hoveredSticker === sticker.id}
                  onMouseEnter={() => setHoveredSticker(sticker.id)}
                  onMouseLeave={() => setHoveredSticker(null)}
                />
              ))}
            </Layer>
          </Stage>
          
          {/* Grid overlay hint */}
          <div className="absolute inset-0 pointer-events-none opacity-20">
            <svg className="w-full h-full">
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="#e5e7eb"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </div>
        </div>
        
        {/* Canvas Info */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">
            Drag stickers to rearrange • Double-click to delete • Snaps to 40px grid
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-blue-700 hover:to-purple-700"
        >
          <Download size={20} />
          Download PNG
        </button>
        
        <button
          onClick={onClearAll}
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-600 to-gray-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 hover:from-gray-700 hover:to-gray-800"
          disabled={stickers.length === 0}
        >
          <RotateCcw size={20} />
          Clear All
        </button>
      </div>
    </div>
  );
};

export default StickerCanvas;