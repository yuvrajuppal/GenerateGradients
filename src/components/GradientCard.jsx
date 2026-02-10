import React from 'react';
import { Copy } from 'lucide-react';

const GradientCard = ({color1,color2}) => {
  const gradientData = {
    angle: '135deg', // Changed to 'deg' for CSS compatibility
    colors: [color1, color2],
  };

  // Ensure the string is perfectly formatted
  const gradientStyle = {
    backgroundImage: `linear-gradient(${gradientData.angle}, ${gradientData.colors[0]}, ${gradientData.colors[1]})`
  };

  return (
    <div className="w-full max-w-[320px] bg-[#1a192b] border border-gray-800 rounded-4xl overflow-hidden shadow-2xl">
      {/* Gradient Preview Area */}
      <div 
        style={gradientStyle}
        className="h-42 w-full block rounded-t-[28px]" // Changed h-64 to h-48 and added block
      />

      {/* Info Section */}
      <div className="p-6 flex flex-col gap-4">
        <div>
          <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">
            LINEAR 135°
          </h3>
          
          <div className="space-y-3">
            {gradientData.colors.map((color, index) => (
              <div key={index} className="flex items-center gap-3">
                <div 
                  className="w-4 h-4 rounded-full border border-white/10" 
                  style={{ backgroundColor: color }} // Individual color circles
                />
                <span className="text-gray-300 font-mono text-sm lowercase tracking-wider">
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button className="flex items-center justify-center gap-2 w-full bg-[#24233a] hover:bg-[#2d2c46] border border-gray-700/50 py-3 rounded-2xl transition-all active:scale-[0.98] group mt-2">
          <Copy size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-white text-sm font-bold">Copy CSS</span>
        </button>
      </div>
    </div>
  );
};

export default GradientCard;