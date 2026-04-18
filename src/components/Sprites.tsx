import React from 'react';

export const AvatarSprite = ({ className = "w-16 h-16", isAnimating = false }: { className?: string, isAnimating?: boolean }) => (
    <svg viewBox="0 0 16 22" className={`${className} ${isAnimating ? 'animate-bounce' : ''}`} style={{ imageRendering: 'pixelated' }}>
        {/* Hair Back */}
        <path fill="#2E2E2E" d="M3 4h10v12H3z" />
        {/* Skin */}
        <path fill="#FCE1CA" d="M5 5h6v5H5z" />
        {/* Hair Front / Bangs */}
        <path fill="#2E2E2E" d="M5 3h6v2H5z M4 5h2v5H4z M10 5h2v5H10z M6 5h1v1H6z M9 5h1v1H9z" />
        {/* Glasses */}
        <path fill="#111" d="M3 8h10v1H3z M4 7h1v2H4z M11 7h1v2H11z M5 9h2v1H5z M9 9h2v1H9z" />
        <path fill="#fff" d="M6 9h1v1H6z M9 9h1v1H9z" /> {/* eyes inside glasses */}
        {/* Shirt / Hoodie */}
        <path fill="#222" d="M4 10h8v6H4z M3 11h2v5H3z M11 11h2v5H11z" />
        {/* Graphic on shirt (Mardi style logo) */}
        <path fill="#EE7711" d="M7 12h2v1H7z M6 13h4v1H6z M8 14h1v1H8z" />
        {/* Hands */}
        <path fill="#FCE1CA" d="M3 16h2v1H3z M11 16h2v1H11z" />
        {/* Jeans */}
        <path fill="#609EEA" d="M5 16h6v4H5z M4 17h2v3H4z M10 17h2v3H10z M7 18h2v2H7z" />
        <path fill="#4070A0" d="M7 16h2v3H7z" /> {/* crotch shadow */}
        {/* Shoes */}
        <path fill="#fff" d="M4 20h3v2H4z M9 20h3v2H9z" />
        <path fill="#87CEFA" d="M4 21h2v1H4z M10 21h2v1H10z" />
    </svg>
);

export const ArchitectureSprite = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
        <path fill="#888" d="M2 14h12v2H2z" />
        <path fill="#ccc" d="M3 8h10v6H3z" />
        <path fill="#555" d="M5 10h2v4H5zm4 0h2v4H9z" />
        <path fill="#c44" d="M8 2L2 8h12z" />
        <path fill="#222" d="M7 4h2v4H7z" />
    </svg>
);

export const ProductManagerSprite = ({ className = "w-16 h-16" }: { className?: string }) => (
    <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }}>
        <path fill="#ffb" d="M6 2h4v4H6z" />
        <path fill="#34c" d="M5 6h6v4H5z" />
        <path fill="#111" d="M6 10h4v6H6z" />
        <path fill="#aaa" d="M3 8h10v2H3z" />
        <path fill="#888" d="M2 10h12v1H2z" />
        <path fill="#fff" d="M4 9h8v1H4z" />
    </svg>
);

export const PokeballSprite = ({ className = "w-12 h-12", onClick }: { className?: string, onClick?: () => void }) => (
    <svg viewBox="0 0 16 16" onClick={onClick} className={`${className} cursor-pointer hover:scale-110 active:scale-95 transition-transform drop-shadow-md`} style={{ imageRendering: 'pixelated' }}>
        <circle cx="8" cy="8" r="7" fill="white" stroke="#222" strokeWidth="1" />
        <path d="M1 8 a7 7 0 0 1 14 0 Z" fill="#EE1515" stroke="#222" strokeWidth="1" />
        <line x1="1" y1="8" x2="16" y2="8" stroke="#222" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="3" fill="white" stroke="#222" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="1.5" fill="#222" />
    </svg>
);

export const CharmanderSprite = ({className, style, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated', ...style }} onClick={onClick}>
    <path fill="#EE7711" d="M6 3h4v2H6z M4 5h8v4H4z M5 9h6v3H5z M4 12h3v2H4z M9 12h3v2H9z M13 6h2v3h-2z" />
    <path fill="#FFF7CC" d="M6 8h4v3H6z" />
    <path fill="#FF0000" d="M14 4h1v2h-1z M13 3h1v1h-1z" />
    <path fill="#222" d="M7 6h1v1H7z M10 6h1v1H10z" />
  </svg>
);

export const PsyduckSprite = ({className, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }} onClick={onClick}>
    <path fill="#FFCC00" d="M5 2h6v6H5z M4 8h8v6H4z M3 10h1v2H3z M12 10h1v2H12z" />
    <path fill="#FF8800" d="M6 6h4v2H6z M5 14h2v1H5z M9 14h2v1H9z" />
    <path fill="#222" d="M6 4h1v1H6z M9 4h1v1H9z" />
  </svg>
);

export const MagikarpSprite = ({className, style, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated', ...style }} onClick={onClick}>
    <path fill="#FF4422" d="M4 6h8v4H4z M3 7h1v2H3z M12 6h2v4h-2z M7 2h2v2H7z" />
    <path fill="#FFCC00" d="M7 4h2v2H7z M7 10h2v2H7z M2 6h1v4H2z" />
    <path fill="#FFF" d="M6 7h2v2H6z" />
    <path fill="#222" d="M7 8h1v1H7z" />
  </svg>
);

export const PonytaSprite = ({className, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }} onClick={onClick}>
    <path fill="#FFF7CC" d="M4 4h4v4H4z M5 8h6v4H5z M4 12h2v4H4z M9 12h2v4H9z" />
    <path fill="#FF4400" d="M8 2h3v4H8z M11 6h2v4h-2z M3 10h2v2H3z" />
    <path fill="#222" d="M6 5h1v1H6z" />
  </svg>
);

export const PikachuSprite = ({className, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }} onClick={onClick}>
    <path fill="#FFCC00" d="M4 6h8v6H4z M3 7h1v4H3z M12 7h1v4H12z M5 12h2v1H5z M9 12h2v1H9z M2 2h2v4H2z M12 2h2v4H12z" />
    <path fill="#222" d="M3 3h1v1H3z M12 3h1v1H12z M5 8h1v1H5z M10 8h1v1H10z" />
    <path fill="#FF0000" d="M3 9h1v1H3z M12 9h1v1H12z" />
  </svg>
);

export const SnorlaxSprite = ({className, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }} onClick={onClick}>
    <path fill="#213845" d="M3 4h10v10H3z M2 6h1v6H2z M13 6h1v6H13z" />
    <path fill="#EADCA6" d="M5 6h6v6H5z M4 5h2v1H4z M10 5h2v1H10z" />
    <path fill="#222" d="M6 7h1v1H6z M9 7h1v1H9z M7 8h2v1H7z" />
    <path fill="#FFF" d="M5 14h2v1H5z M9 14h2v1H9z" />
  </svg>
);

export const JigglypuffSprite = ({className, style, onClick}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated', ...style }} onClick={onClick}>
    <path fill="#FFB6C1" d="M4 4h8v8H4z M3 5h1v6H3z M12 5h1v6H12z" />
    <path fill="#FFF" d="M5 7h2v2H5z M9 7h2v2H9z" />
    <path fill="#0000FF" d="M6 7h1v1H6z M10 7h1v1H10z" />
    <path fill="#FF69B4" d="M8 3h2v2H8z" />
  </svg>
);

export const TrainerSprite = ({className, onClick, skin="#D2B48C", hair="#333", clothes="#FFF", extra}:any) => (
  <svg viewBox="0 0 16 16" className={className} style={{ imageRendering: 'pixelated' }} onClick={onClick}>
    <path fill={skin} d="M6 2h4v4H6z M7 6h2v1H7z M4 9h2h1H4z M10 9h2v1h-2z" />
    <path fill={hair} d="M5 2h6v2H5z M6 1h4v1H6z" />
    {extra && <path fill={extra} d="M5 11h2v5H5z M9 11h2v5H9z" />}
    <path fill={clothes} d="M5 7h6v4H5z" />
    <path fill="#222" d="M6 4h1v1H6z M9 4h1v1H9z" />
  </svg>
);
