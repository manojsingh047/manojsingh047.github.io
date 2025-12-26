// Basic oscillator based sound effects to avoid external assets
const AudioContext = window.AudioContext || window.webkitAudioContext;
const ctx = new AudioContext();

export const playClickSound = () => {
  if (ctx.state === 'suspended') ctx.resume();
  
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.type = 'sine';
  oscillator.frequency.setValueAtTime(800, ctx.currentTime);
  oscillator.frequency.exponentialRampToValueAtTime(300, ctx.currentTime + 0.1);

  gainNode.gain.setValueAtTime(0.3, ctx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.1);
};

export const playWinSound = () => {
  if (ctx.state === 'suspended') ctx.resume();

  // Simple arpeggio
  const notes = [440, 554, 659, 880]; // A Major
  notes.forEach((freq, i) => {
    setTimeout(() => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      
      osc.connect(gain);
      gain.connect(ctx.destination);
      
      osc.type = 'triangle';
      osc.frequency.value = freq;
      
      gain.gain.setValueAtTime(0.2, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.5);
    }, i * 100);
  });
};
