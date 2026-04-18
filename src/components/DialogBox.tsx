import React, { useEffect, useState } from 'react';
import { playBlip } from '../utils/audio';

export const DialogBox = ({ text, speaker = "系统" }: { text: string, speaker?: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        if (!text) {
            setDisplayedText('');
            return;
        }
        
        setIsTyping(true);
        setDisplayedText('');
        let i = 0;
        
        const interval = setInterval(() => {
            setDisplayedText((prev) => prev + text.charAt(i));
            if (i % 2 === 0) playBlip();
            i++;
            if (i >= text.length) {
                clearInterval(interval);
                setIsTyping(false);
            }
        }, 50);

        return () => clearInterval(interval);
    }, [text]);

    return (
        <div className="relative text-[16px] leading-[1.6] font-bold text-[#222224] w-full h-full flex flex-col justify-start pt-2 pr-8">
            <div className="text-[14px] text-[#2A52BE] mb-1">[{speaker}]</div>
            <div className="whitespace-pre-wrap">
                {displayedText}
                {isTyping && <span className="inline-block w-2 h-4 bg-[#222224] animate-pulse ml-1 align-middle"></span>}
            </div>
        </div>
    );
}
