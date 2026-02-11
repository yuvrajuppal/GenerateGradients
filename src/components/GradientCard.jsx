import React, { useState } from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';
const GradientCard = ({ color1 = "#ff0080", color2 = "#7928ca" }) => {
  // 1. Initialize state for the angle
  const [angle, setAngle] = useState(135);

  const gradientString = `linear-gradient(${angle}deg, ${color1}, ${color2})`;

  const copyToClipboard = () => {
    // Copies the actual CSS property value
    window.navigator.clipboard.writeText(`background-image: ${gradientString};`);
    toast.success('CSS Copied to clipboard! 🎨', {
      style: { background: '#24233a', color: '#fff' }
    });
  };

  return (
    <div className="w-full max-w-[320px] bg-[#1a192b] border border-gray-800 rounded-4xl overflow-hidden shadow-2xl">
      {/* Gradient Preview Area */}
      <div
        style={{ backgroundImage: gradientString }}
        className="h-42 w-full block rounded-t-[28px] transition-all duration-300"
      />

      {/* Info Section */}
      <div className="p-6 flex flex-col gap-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest">
            LINEAR {angle}°
          </h3>+



          
        </div>

        {/* 2. Range Slider Input */}
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="360"
            value={angle}
            onChange={(e) => setAngle(e.target.value)}
            className="w-full h-1.5 bg-gray-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
          />
          <div className="flex justify-between text-[10px] text-gray-500 font-mono">
            <span>0°</span>
            <span>180°</span>
            <span>360°</span>
          </div>
        </div>

        {/* Color Indicators */}
        <div className="space-y-3">
          {[color1, color2].map((color, index) => (
            <div key={index} className="flex items-center gap-3">
              <div
                className="w-4 h-4 rounded-full border border-white/10"
                style={{ backgroundColor: color }}
              />
              <span className="text-gray-300 font-mono text-sm lowercase tracking-wider">
                {color}
              </span>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <button
          onClick={copyToClipboard}
          className="flex items-center justify-center gap-2 w-full bg-[#24233a] hover:bg-[#2d2c46] border border-gray-700/50 py-3 rounded-2xl transition-all active:scale-[0.98] group mt-2"
        >
          <Copy size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-white text-sm font-bold">Copy CSS</span>
        </button>
      </div>
    </div>
  );
};

export default GradientCard;