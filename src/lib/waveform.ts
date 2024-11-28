import WaveSurfer from 'wavesurfer.js';

export const createWaveform = (container: HTMLElement, audioUrl: string) => {
  const wavesurfer = WaveSurfer.create({
    container,
    waveColor: '#6B21A8',
    progressColor: '#FFB800',
    cursorColor: '#FFB800',
    barWidth: 2,
    barGap: 1,
    responsive: true,
    height: 60,
    normalize: true,
  });

  wavesurfer.load(audioUrl);
  return wavesurfer;
};