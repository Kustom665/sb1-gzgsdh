import { useState, useCallback } from 'react';

export const useAudioProcessor = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const processAudio = useCallback(async (audioFile: File) => {
    setIsProcessing(true);
    try {
      const audioContext = new AudioContext();
      const arrayBuffer = await audioFile.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
      
      // Get audio metrics
      const duration = audioBuffer.duration;
      const numberOfChannels = audioBuffer.numberOfChannels;
      const sampleRate = audioBuffer.sampleRate;
      
      // Calculate average volume
      const channelData = audioBuffer.getChannelData(0);
      const blockSize = Math.floor(channelData.length / 1000);
      const volumes = [];
      
      for (let i = 0; i < 1000; i++) {
        const start = blockSize * i;
        let sum = 0;
        for (let j = 0; j < blockSize; j++) {
          sum += Math.abs(channelData[start + j]);
        }
        volumes.push(sum / blockSize);
      }

      return {
        duration,
        numberOfChannels,
        sampleRate,
        volumes,
        peakVolume: Math.max(...volumes),
        averageVolume: volumes.reduce((a, b) => a + b) / volumes.length
      };
    } finally {
      setIsProcessing(false);
    }
  }, []);

  return { processAudio, isProcessing };
};