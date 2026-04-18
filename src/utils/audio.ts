export const playBlip = () => {
  try {
    const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();

    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(400, audioCtx.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(600, audioCtx.currentTime + 0.05);

    gainNode.gain.setValueAtTime(0.015, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.05);

    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    oscillator.start();
    oscillator.stop(audioCtx.currentTime + 0.05);
  } catch (e) {}
};

export const playLevelUp = () => {
    try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const notes = [
            { freq: 440, time: 0 },
            { freq: 554, time: 0.1 },
            { freq: 659, time: 0.2 },
            { freq: 880, time: 0.3, dur: 0.4 }
        ];

        notes.forEach(note => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(note.freq, audioCtx.currentTime + note.time);
            
            gain.gain.setValueAtTime(0, audioCtx.currentTime + note.time);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime + note.time + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + note.time + (note.dur || 0.1));

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + note.time);
            osc.stop(audioCtx.currentTime + note.time + (note.dur || 0.1));
        });
    } catch(e) {}
};

export const playSaveMusic = () => {
    try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        const notes = [
            { freq: 523.25, time: 0 }, // C5
            { freq: 659.25, time: 0.15 }, // E5
            { freq: 783.99, time: 0.30 }, // G5
            { freq: 1046.50, time: 0.45, dur: 0.5 }, // C6
        ];

        notes.forEach(note => {
            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = 'square';
            osc.frequency.setValueAtTime(note.freq, audioCtx.currentTime + note.time);

            gain.gain.setValueAtTime(0, audioCtx.currentTime + note.time);
            gain.gain.setValueAtTime(0.05, audioCtx.currentTime + note.time + 0.02);
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + note.time + (note.dur || 0.15));

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start(audioCtx.currentTime + note.time);
            osc.stop(audioCtx.currentTime + note.time + (note.dur || 0.15));
        });
    } catch (e) {}
};
