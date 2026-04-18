import React, { useState, useEffect } from 'react';
import { PokeballSprite, CharmanderSprite, PsyduckSprite, MagikarpSprite } from './Sprites';
import { motion } from 'motion/react';

export const MiniGame = ({ onExit }: { onExit: () => void }) => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(20);
    const [activePos, setActivePos] = useState(-1);
    const [activeType, setActiveType] = useState(0);

    useEffect(() => {
        if (timeLeft <= 0) return;
        const timer = setInterval(() => {
            setTimeLeft(t => t - 1);
        }, 1000);
        return () => clearInterval(timer);
    }, [timeLeft]);

    useEffect(() => {
        if (timeLeft <= 0) {
            setActivePos(-1);
            return;
        }
        const interval = setInterval(() => {
            setActivePos(Math.floor(Math.random() * 9));
            setActiveType(Math.floor(Math.random() * 4));
        }, 800);
        return () => clearInterval(interval);
    }, [timeLeft]);

    const handleClick = (pos: number) => {
        if (pos === activePos && timeLeft > 0) {
            setScore(s => s + 10);
            setActivePos(-1);
        }
    };

    const Sprites = [PokeballSprite, CharmanderSprite, PsyduckSprite, MagikarpSprite];

    return (
        <div className="absolute inset-0 bg-[#222224]/90 z-50 flex flex-col items-center justify-center p-4 backdrop-blur-sm">
            <div className="bg-[#E0F8D0] p-6 border-[8px] border-[#333] rounded-xl max-w-md w-full relative shadow-[12px_12px_0px_rgba(0,0,0,0.5)]">
                <h2 className="text-2xl font-black text-center mb-4 text-[#333] tracking-widest uppercase">🎯 捕捉挑战！</h2>
                <div className="flex justify-between mb-4 font-bold text-lg bg-white p-3 border-4 border-[#333] rounded-lg">
                    <span>得分: <strong className="text-red-500">{score}</strong></span>
                    <span>时间: <strong className="text-blue-500">{timeLeft}s</strong></span>
                </div>
                
                {timeLeft > 0 ? (
                    <div className="grid grid-cols-3 gap-3">
                        {[0,1,2,3,4,5,6,7,8].map(i => (
                            <div 
                                key={i}
                                className="h-28 bg-[#78C850] border-4 border-[#333] rounded-lg flex items-center justify-center cursor-pointer overflow-hidden relative shadow-inner hover:scale-105 transition-transform"
                                onClick={() => handleClick(i)}
                            >
                                <div className="absolute bottom-0 w-full h-1/2 bg-[#5E9B3D]"></div>
                                {activePos === i && (
                                    <motion.div initial={{y: 20, opacity: 0}} animate={{y: 0, opacity: 1}} className="relative z-10 w-16 h-16 pointer-events-none">
                                        {React.createElement(Sprites[activeType], { className: "w-full h-full" })}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-10 bg-white border-4 border-[#333] rounded-lg">
                        <h3 className="text-4xl font-black text-red-500 mb-2">时间到！</h3>
                        <p className="text-2xl font-bold mb-4">最终得分: {score}</p>
                        <p className="text-md font-bold text-gray-700 bg-gray-100 p-2 mx-4 rounded-md">这证明了你非凡的反应力和执行力！满分手速！</p>
                    </div>
                )}
                
                <button 
                    onClick={onExit}
                    className="mt-6 w-full poke-button py-4 font-black text-xl tracking-widest uppercase hover:bg-gray-100"
                >
                    返回主菜单
                </button>
            </div>
        </div>
    );
}
