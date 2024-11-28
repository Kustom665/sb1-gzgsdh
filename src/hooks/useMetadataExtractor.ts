import { useState, useCallback } from 'react';

export const useMetadataExtractor = () => {
  const [metadata, setMetadata] = useState<any>(null);
  const [isExtracting, setIsExtracting] = useState(false);

  const extractMetadata = useCallback(async (file: File) => {
    setIsExtracting(true);
    try {
      // Create a URL for the audio file
      const url = URL.createObjectURL(file);
      const audio = new Audio(url);
      
      await new Promise((resolve) => {
        audio.addEventListener('loadedmetadata', () => {
          const metadata = {
            duration: audio.duration,
            title: file.name.replace(/\.[^/.]+$/, ""),
            type: file.type,
            size: file.size,
            lastModified: new Date(file.lastModified).toISOString(),
          };
          setMetadata(metadata);
          resolve(metadata);
        });
      });
      
      URL.revokeObjectURL(url);
      return metadata;
    } finally {
      setIsExtracting(false);
    }
  }, []);

  return { extractMetadata, metadata, isExtracting };
};