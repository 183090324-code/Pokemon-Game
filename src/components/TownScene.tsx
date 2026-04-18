import React from 'react';
import { motion } from 'motion/react';
import { AvatarSprite, PikachuSprite, CharmanderSprite, PsyduckSprite } from './Sprites';

export const PokemonCenter = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 64 64" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Base Building */}
    <path fill="#F8F8F8" d="M8 24h48v32H8z" />
    <path fill="#E0E0E0" d="M8 56h48v4H8z" />
    <path fill="#D0D0D0" d="M52 24h4v32h-4z M8 24h4v32H8z" />
    
    {/* Roof */}
    <path fill="#EE4444" d="M4 12h56v12H4z" />
    <path fill="#FF6666" d="M4 12h56v2H4z" />
    <path fill="#CC2222" d="M4 22h56v2H4z" />
    {/* Roof Angled Corners */}
    <path fill="#EE4444" d="M8 8h48v4H8zM12 4h40v4H12z" />
    
    {/* Pokeball Logo */}
    <circle cx="32" cy="18" r="6" fill="#FFF" />
    <path d="M 26 18 a 6 6 0 0 1 12 0 z" fill="#EE4444" />
    <circle cx="32" cy="18" r="2" fill="#FFF" stroke="#222" strokeWidth="0.5" />
    <line x1="26" y1="18" x2="38" y2="18" stroke="#222" strokeWidth="0.5" />
    
    {/* Door */}
    <path fill="#66BBDD" d="M24 36h16v20H24z" />
    <path fill="#88DDFF" d="M26 38h4v14h-4zM34 38h4v14h-4z" />
    <path fill="#111" d="M31.5 36h1v20h-1z" />
    
    {/* Window & P.C Sign */}
    <path fill="#66BBDD" d="M12 36h8v8H12z M44 36h8v8H44z" />
    <path fill="#88DDFF" d="M13 37h6v6h-6z M45 37h6v6h-6z" />
    
    {/* Sign Background */}
    <rect x="42" y="28" width="16" height="6" fill="#FFF" rx="1" />
    <text x="43.5" y="33" fill="#EE4444" fontFamily="monospace" fontSize="5px" fontWeight="black" letterSpacing="0.5">P.C</text>
  </svg>
);

export const House = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 48 48" className={className} style={{ imageRendering: 'pixelated' }}>
    {/* Main Wall */}
    <path fill="#EFE8C8" d="M6 20h36v24H6z" />
    <path fill="#DBCFA0" d="M6 40h36v4H6z" />
    
    {/* Roof Base */}
    <path fill="#DD7755" d="M2 14h44v6H2z M4 8h40v6H4z M8 4h32v4H8z" />
    <path fill="#EE8866" d="M2 14h44v2H2z M4 8h40v2H4z M8 4h32v2H8z" />
    <path fill="#CC5533" d="M2 18h44v2H2z" />
    
    {/* Wood Door */}
    <path fill="#EE9944" d="M28 28h12v16H28z" />
    <path fill="#CC7722" d="M28 28h12v2H28z M28 28h2v16H28z M38 28h2v16h-2z" />
    <circle cx="37" cy="38" r="1.5" fill="#555" />
    
    {/* Window */}
    <path fill="#66BBDD" d="M10 26h12v10H10z" />
    <path fill="#88DDFF" d="M11 27h10v8H11z" />
    <path fill="#222" d="M15.5 26h1v10h-1z M10 30.5h12v1H10z" />
    {/* Window frame bottom */}
    <path fill="#A0A0A0" d="M9 36h14v2H9z" />
  </svg>
);

export const Bush = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
    <path fill="#154B22" d="M2 14h12v2H2z" />
    <path fill="#277C38" d="M1 6h14v8H1z M2 4h12v2H2z" />
    <path fill="#4AA853" d="M2 5h12v6H2z M3 3h10v2H3z" />
    <path fill="#85D67A" d="M3 4h6v5H3z M4 2h6v2H4z M9 4h2v2H9z" />
    <path fill="#DEFFD6" d="M5 3h1v1H5z M4 5h1v1H4z" />
    <rect x="5" y="4" width="1" height="1" fill="#BBFFB0" />
    <rect x="9" y="5" width="1" height="1" fill="#BBFFB0" />
    <rect x="4" y="8" width="1" height="1" fill="#BBFFB0" />
    <rect x="11" y="7" width="1" height="1" fill="#BBFFB0" />
    <rect x="7" y="9" width="1" height="1" fill="#BBFFB0" />
    <rect x="12" y="10" width="1" height="1" fill="#BBFFB0" />
  </svg>
);

export const TownScene = ({ onClick, onPokeClick }: { onClick: () => void, onPokeClick: (name: string) => void }) => {
  return (
    <div 
        className="w-full bg-[#8ECE9C] rounded-xl border-2 border-[#555] h-[220px] relative overflow-hidden shadow-[inset_0_4px_10px_rgba(0,0,0,0.2)] cursor-pointer"
        onClick={onClick}
    >
        {/* Grass Dots Overlay */}
        <div 
          className="absolute inset-0 opacity-70 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#D8EEDB 1.5px, transparent 1.5px)', 
            backgroundSize: '16px 16px', 
            backgroundPosition: '0 0, 8px 8px' 
          }}
        ></div>
        
        {/* Dirt Path - Intersecting lines */}
        {/* Horizontal */}
        <div className="absolute top-[85px] left-[70px] right-0 h-[65px] bg-[#DEEECD] border-y-[3px] border-[#C1DFB2] shadow-[inset_0_0_10px_rgba(0,0,0,0.05)] rounded-l-3xl"></div>
        {/* Vertical */}
        <div className="absolute top-[85px] left-[55%] w-[65px] bottom-0 bg-[#DEEECD] border-x-[3px] border-[#C1DFB2] rounded-t-3xl -translate-x-1/2 shadow-[inset_0_0_10px_rgba(0,0,0,0.05)]"></div>
        {/* Center intersection cover for clean look */}
        <div className="absolute top-[88px] left-[55%] w-[59px] h-[59px] bg-[#DEEECD] -translate-x-1/2 z-0"></div>

        {/* Poke Center */}
        <div className="absolute -top-3 left-4 z-10 hover:scale-[1.02] transition-transform">
           <PokemonCenter className="w-32 h-32 drop-shadow-md" />
        </div>
        
        {/* House */}
        <div className="absolute top-2 right-4 z-10 hover:scale-[1.02] transition-transform">
           <House className="w-20 h-20 drop-shadow-md" />
        </div>

        {/* Dense Bushes Grouping */}
        <div className="absolute top-[50px] -left-2 z-20 flex flex-col drop-shadow-md">
            <div className="flex"><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
        </div>

        <div className="absolute bottom-0 right-0 z-20 flex flex-col drop-shadow-md">
            <div className="flex"><Bush className="w-8 h-8" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
            <div className="flex -mt-3"><Bush className="w-8 h-8" /><Bush className="w-8 h-8 -ml-1" /><Bush className="w-8 h-8 -ml-1" /></div>
        </div>
        
        <div className="absolute top-[170px] right-24 z-20 flex drop-shadow-md">
             <Bush className="w-8 h-8" /><Bush className="w-8 h-8 -ml-1" />
        </div>

        {/* Player Avatar */}
        <div className="absolute top-[102px] left-[55%] transform -translate-x-1/2 z-30 pointer-events-none">
            <motion.div animate={{ y: [0, -3, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
                <AvatarSprite className="w-12 h-16 drop-shadow-md" />
            </motion.div>
        </div>

        {/* Animated Pokemon passing by */}
        <motion.div 
            animate={{ x: [-50, 400] }} 
            transition={{ repeat: Infinity, duration: 8, ease: "linear", delay: 1 }} 
            className="absolute bottom-4 -left-10 z-20"
            onClick={(e) => { e.stopPropagation(); onPokeClick('pikachu'); }}
        >
            <PikachuSprite className="w-8 h-8 drop-shadow-md transform scale-x-[-1] hover:scale-110 active:scale-95" />
        </motion.div>

        <motion.div 
            animate={{ x: [400, -50] }} 
            transition={{ repeat: Infinity, duration: 12, ease: "linear", delay: 4 }} 
            className="absolute top-[95px] right-0 z-20"
            onClick={(e) => { e.stopPropagation(); onPokeClick('charmander'); }}
        >
            <CharmanderSprite className="w-7 h-7 drop-shadow-md hover:scale-110 active:scale-95" />
        </motion.div>

        <div className="absolute top-2 left-2 px-1.5 py-0.5 text-[9px] bg-black/60 text-white font-black rounded backdrop-blur-sm pointer-events-none tracking-widest uppercase">
           ▶ 真新镇 (探索中)
        </div>
    </div>
  );
};
