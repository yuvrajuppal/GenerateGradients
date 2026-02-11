import React, { useState } from 'react';
import { RotateCcw, Copy, ArrowLeftRight } from 'lucide-react';

const GradientGenerator = ({config, setConfig}) => {
  

  // --- Logic Handlers ---

  const handleColorChange = (key, value) => {
    setConfig((prev) => ({ ...prev, [key]: value.toUpperCase() }));
  };

  const swapColors = () => {
    setConfig((prev) => ({
      ...prev,
      startColor: prev.endColor,
      endColor: prev.startColor,
    }));
  };

  const generateRandom = () => {
    const randomHex = () => `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
    setConfig((prev) => ({
      ...prev,
      startColor: randomHex().toUpperCase(),
      endColor: randomHex().toUpperCase(),
      angle: Math.floor(Math.random() * 360),
    }));
  };

  const copyToClipboard = () => {
    const css = `background: ${config.type === 'linear'
      ? `linear-gradient(${config.angle}deg, ${config.startColor}, ${config.endColor})`
      : `radial-gradient(circle, ${config.startColor}, ${config.endColor})`};`;
    navigator.clipboard.writeText(css);
    alert('CSS Copied!');
  };

  return (
    <div className="flex items-center justify-center p-4 font-sans text-white">
      <div className="w-full max-w-md bg-[#1D162B]/50 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/5">

        <header className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight mb-1">Choose Color</h1>
          <p className="text-gray-400 text-sm">Adjust parameters or roll the dice.</p>
        </header>

        {/* Color Swatches */}
        <div className="flex items-center justify-between gap-4 mb-8">
          {/* Start Color */}
          <div className="flex-1 text-center relative">
            <div className="relative group cursor-pointer h-24 rounded-2xl mb-3 overflow-hidden border border-white/10">
              <div className="absolute inset-0 transition-transform group-hover:scale-110" style={{ backgroundColor: config.startColor }} />
              <input
                type="color"
                value={config.startColor}
                onChange={(e) => handleColorChange('startColor', e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">Start</span>
            <code className="text-lg font-semibold">{config.startColor}</code>
          </div>

          <button
            onClick={swapColors}
            className="p-2 bg-white/5 rounded-full hover:bg-white/10 transition-colors active:rotate-180 duration-300"
          >
            <ArrowLeftRight size={18} className="text-gray-300" />
          </button>

          {/* End Color */}
          <div className="flex-1 text-center relative">
            <div className="relative group cursor-pointer h-24 rounded-2xl mb-3 overflow-hidden border border-white/10">
              <div className="absolute inset-0 transition-transform group-hover:scale-110" style={{ backgroundColor: config.endColor }} />
              <input
                type="color"
                value={config.endColor}
                onChange={(e) => handleColorChange('endColor', e.target.value)}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
            </div>
            <span className="text-[10px] uppercase tracking-widest text-gray-400 block mb-1">End</span>
            <code className="text-lg font-semibold">{config.endColor}</code>
          </div>
        </div>

        {/* Toggle Switch */}
        {/* <div className="bg-[#1a2625] p-1 rounded-xl flex mb-8">
          <button
            onClick={() => setConfig({ ...config, type: 'linear' })}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${config.type === 'linear' ? 'bg-indigo-600 shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Linear
          </button>
          <button
            onClick={() => setConfig({ ...config, type: 'radial' })}
            className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition-all ${config.type === 'radial' ? 'bg-indigo-600 shadow-lg' : 'text-gray-500 hover:text-gray-300'}`}
          >
            Radial
          </button>
        </div> */}

        {/* Angle Slider */}
        {/* <div className={`mb-10 transition-opacity duration-300 ${config.type === 'radial' ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>
          <div className="flex justify-between items-center mb-4">
            <label className="text-sm font-medium text-gray-300">Angle</label>
            <span className="text-indigo-400 text-sm font-bold">{config.angle}°</span>
          </div>
          <input
            type="range" min="0" max="360" value={config.angle}
            onChange={(e) => setConfig({ ...config, angle: e.target.value })}
            className="w-full h-1.5 bg-[#1a2625] rounded-lg appearance-none cursor-pointer accent-indigo-500"
          />
        </div> */}

        {/* Actions */}
        <div className="flex gap-3">
          <button
            onClick={generateRandom}
            className="flex-1 bg-indigo-600 hover:bg-indigo-500 py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all active:scale-95 shadow-lg shadow-indigo-600/20"
          >
            <RotateCcw size={20} />
            Generate Random
          </button>
          {/* <button
            onClick={copyToClipboard}
            className="px-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all flex items-center gap-2 group"
          >
            <Copy size={18} className="text-gray-400 group-hover:text-white" />
            <span className="text-sm font-bold text-gray-300 group-hover:text-white uppercase tracking-tighter">CSS</span>
          </button> */}
        </div>

      </div>
    </div>
  );
};

export default GradientGenerator;