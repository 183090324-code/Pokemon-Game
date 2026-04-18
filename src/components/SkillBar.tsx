import React from 'react';
import { motion } from 'motion/react';

export const SkillBar = ({ label, value, max = 100, color = 'bg-[#4CAF50]' }: { label: string, value: number, max?: number, color?: string }) => (
    <div className="mb-4">
        <div className="flex justify-between text-xs font-bold mb-1 uppercase text-[#222224]">
            <span>{label}</span>
        </div>
        <div className="h-3 bg-[#ddd] border-2 border-[#555] rounded-md relative overflow-hidden">
            <motion.div 
               className={`h-full ${color}`}
               initial={{ width: 0 }}
               animate={{ width: `${(value/max)*100}%` }}
               transition={{ type: 'spring', stiffness: 50, damping: 10 }}
            />
        </div>
    </div>
);
