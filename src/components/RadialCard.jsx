import React from 'react';
import { Copy } from 'lucide-react';
import { toast } from 'react-toastify';

const RadialCard = ({ color1, color2 }) => {



  const gradientData = {
    // Radial gradients typically use a shape or position (e.g., 'circle at center')
    type: 'circle at center',
    colors: [color1, color2],
  };

  const gradientStyle = {
    // We use radial-gradient here instead of linear
    backgroundImage: `radial-gradient(${gradientData.type}, ${gradientData.colors[0]}, ${gradientData.colors[1]})`
  };


  const copyToClipboard = () => {
    // Copies the actual CSS property value
    window.navigator.clipboard.writeText(`background-image: ${gradientStyle.backgroundImage};`);
    toast.success('CSS Copied to clipboard! 🎨', {
      style: { background: '#24233a', color: '#fff' }
    });
  };

  return (
    <div className="w-full flex flex-col  max-w-[320px] bg-[#1a192b] border border-gray-800 rounded-4xl overflow-hidden shadow-2xl">
      {/* Gradient Preview Area */}
      <div
        style={gradientStyle}
        className="h-42 w-full block rounded-t-[28px]"
      />

      {/* Info Section */}
      <div className="p-6 flex-1 flex flex-col gap-4 justify-between">
        <div>
          <h3 className="text-gray-500 text-[10px] font-black uppercase tracking-widest mb-3">
            RADIAL CENTER
          </h3>

          <div className="space-y-3">
            {gradientData.colors.map((color, index) => (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-4 h-4 rounded-full border border-white/10 shadow-sm"
                  style={{ backgroundColor: color }}
                />
                <span className="text-gray-300 font-mono text-sm lowercase tracking-wider">
                  {color}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <button onClick={()=>{
          copyToClipboard()
        }} className="flex items-center justify-center gap-2 w-full bg-[#24233a] hover:bg-[#2d2c46] border border-gray-700/50 py-3 rounded-2xl transition-all active:scale-[0.98] group mt-2">
          <Copy size={16} className="text-gray-400 group-hover:text-white transition-colors" />
          <span className="text-white text-sm font-bold">Copy CSS</span>
        </button>
      </div>


    </div>
  );
};

export default RadialCard;