import React, { useEffect, useState } from 'react';
import { Palette, RotateCcw, Box, CircleDot } from 'lucide-react';
import { getRandomHexColor } from '../utils/getRandomHexColor';
import { useDispatch } from 'react-redux';
import { assignnewlist } from '../store/cardslistSlice.js';
const Navbar = ({setpage}) => {



    const [count, setCount] = useState(10);
    const [type, setType] = useState('linear'); // 'linear' or 'radial'
    const dispatch = useDispatch();

    const RegerateAll = () => {
        let colorlist = []
        for (let i = 0; i < count; i = i + 1) {
            colorlist = [...colorlist, {
                color1: getRandomHexColor(),
                color2: getRandomHexColor(),
            }]
        }

        dispatch(assignnewlist(colorlist))



    }


    useEffect(() => {
        RegerateAll()
    }, [])


    return (
        <nav className="w-full sticky top-0 z-50 bg-[#0b0a1a] p-4 text-white font-sans border-b border-gray-900">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">

                {/* Left Section: Logo */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                    <div className="bg-[#6322ff] p-2 rounded-lg shadow-[0_0_15px_rgba(99,34,255,0.4)] shrink-0">
                        <Palette size={24} fill="white" />
                    </div>
                    <div className="flex flex-col">
                        <h1 className="text-xl font-bold tracking-tight leading-none">GradientGen</h1>
                        <p className="text-gray-400 text-[10px] font-medium uppercase tracking-wider mt-1">Random Mixes</p>
                    </div>
                </div>

                {/* Right Section: Controls */}
                <div className="flex flex-wrap items-center justify-center sm:justify-end gap-3 w-full sm:w-auto">

                    {/* Type Toggle: Linear vs Radial */}
                    <div className="flex bg-[#161527] border border-gray-800 rounded-lg p-1">
                        <button
                            onClick={() => {
                                setType('linear')
                                setpage(0)
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${type === 'linear'
                                ? 'bg-[#6322ff] text-white shadow-md'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <Box size={14} />
                            Linear
                        </button>
                        <button
                            onClick={() => {
                                setType('radial')
                                setpage(1)
                            }}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-bold transition-all ${type === 'radial'
                                ? 'bg-[#6322ff] text-white shadow-md'
                                : 'text-gray-500 hover:text-gray-300'
                                }`}
                        >
                            <CircleDot size={14} />
                            Radial
                        </button>
                    </div>

                    {/* Count Input */}
                    <div className="flex items-center bg-[#161527] border border-gray-800 rounded-lg px-4 py-2.5 focus-within:border-[#6322ff] transition-all">
                        <label htmlFor="count-input" className="text-gray-500 text-[10px] font-bold uppercase tracking-widest mr-3 select-none">
                            Count
                        </label>
                        <input
                            id="count-input"
                            type="number"
                            min="1"
                            value={count}
                            onChange={(e) => setCount(e.target.value)}
                            className="bg-transparent border-none outline-none w-8 text-sm font-bold text-white [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                        />
                    </div>

                    {/* Regenerate Button */}
                    <button
                        onClick={() => {

                            RegerateAll()

                        }}
                        className="flex items-center justify-center gap-2 bg-[#6322ff] hover:bg-[#7239ff] active:scale-95 transition-all px-6 py-2.5 rounded-xl font-bold text-sm shadow-lg w-full sm:w-auto"
                    >
                        <RotateCcw size={18} strokeWidth={3} />
                        <span className="whitespace-nowrap">Regenerate All</span>
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;