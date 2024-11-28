import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, Music2, CheckCircle2 } from 'lucide-react';
import { TrackMetadata } from './TrackMetadata';

export function MusicUpload() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    console.log('Uploaded files:', acceptedFiles);
  }, []);

  const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({
    onDrop,
    accept: {
      'audio/*': ['.mp3', '.wav', '.flac']
    },
    maxSize: 50 * 1024 * 1024 // 50MB
  });

  return (
    <div className="bg-white rounded-xl shadow-xl p-6">
      <div className="flex items-center space-x-3 mb-6">
        <Upload className="h-6 w-6 text-purple-600" />
        <h2 className="text-xl font-semibold">Upload Your Music</h2>
      </div>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors
          ${isDragActive ? 'border-purple-500 bg-purple-50' : 'border-gray-300 hover:border-purple-400'}`}
      >
        <input {...getInputProps()} />
        <Music2 className="mx-auto h-12 w-12 text-purple-500 mb-4" />
        {isDragActive ? (
          <p className="text-purple-600 font-medium">Drop your tracks here...</p>
        ) : (
          <div>
            <p className="text-gray-600 mb-2">Drag & drop your music files here</p>
            <p className="text-sm text-gray-500">or click to select files</p>
            <p className="text-xs text-gray-400 mt-2">Supported formats: MP3, WAV, FLAC (max 50MB)</p>
          </div>
        )}
      </div>

      {acceptedFiles.length > 0 && (
        <div className="mt-6">
          <h3 className="text-sm font-medium text-gray-700 mb-3">Uploaded Files:</h3>
          <div className="space-y-3">
            {acceptedFiles.map((file) => (
              <div key={file.name} className="flex items-center space-x-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-green-500" />
                <span className="flex-1 truncate">{file.name}</span>
                <span className="text-gray-500">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <TrackMetadata />
    </div>
  );
}