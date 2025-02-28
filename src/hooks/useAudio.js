import { useState, useRef, useEffect } from 'react';

function useAudio(audioData) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio());

  useEffect(() => {
    // Create a Blob from the raw audio data 
    const blob = new Blob([new Uint8Array(audioData)], { type: 'audio/mpeg' }); // Adjust 'audio/wav' based on actual format 

    // Create a URL for the Blob
    const audioUrl = URL.createObjectURL(blob);

    audioRef.current.src = audioUrl;

    audioRef.current.onended = () => {
      setIsPlaying(false);
    };

    return () => {
      audioRef.current.pause();
      audioRef.current.src = '';
      audioRef.current.load();
      URL.revokeObjectURL(audioUrl); // Clean up the URL
    };
  }, [audioData]);

  const play = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pause = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return { isPlaying, play, pause };
}

export default useAudio;