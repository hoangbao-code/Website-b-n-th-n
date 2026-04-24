import { useState, useRef, useEffect, ChangeEvent } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, MonitorSpeaker, Repeat, Shuffle } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Giả lập thanh tiến trình nhạc (do là luồng trực tiếp nên không có điểm kết thúc/duration)
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) return 0;
          return prev + 0.1;
        });
      }, 300);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        // Handle autoplay policy restrictions gracefully
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.then(() => {
            setIsPlaying(true);
          }).catch(error => {
            console.error("Autoplay prevented or stream error:", error);
            alert("Luồng nhạc hiện không khả dụng. Trình duyệt chặn hoặc link nhạc có thể đã hỏng.");
            setIsPlaying(false);
          });
        } else {
          setIsPlaying(true);
        }
      }
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (audioRef.current) {
      audioRef.current.volume = val;
    }
    setIsMuted(val === 0);
  };

  const toggleMute = () => {
    if (audioRef.current) {
      const newMutedState = !isMuted;
      audioRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState && volume === 0) {
        setVolume(0.5);
        audioRef.current.volume = 0.5;
      }
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 h-20 glass rounded-none border-b-0 border-l-0 border-r-0 z-50 flex items-center justify-between px-6">
      {/* HTML5 Audio element loading the provided Lofi Stream */}
      <audio 
        ref={audioRef} 
        src="https://stream.zeno.fm/f3wvbbqmdg8uv" 
        preload="none" 
      />

      {/* Left section: Cover Art & Track Info */}
      <div className="flex items-center gap-4 w-1/3 min-w-[200px]">
        <div className="w-12 h-12 rounded bg-gray-800 flex items-center justify-center overflow-hidden border border-white/10 group relative">
          <img 
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100&h=100&fit=crop" 
            alt="Lofi Cover" 
            className="object-cover w-full h-full" 
          />
        </div>
        <div className="hidden sm:block">
          <h4 className="text-[var(--text-main)] text-sm font-bold hover:underline cursor-pointer">Lofi Chill Vibes</h4>
          <p className="text-[var(--text-dim)] text-xs mt-0.5">Streaming Live from Radio</p>
        </div>
      </div>

      {/* Center section: Playback Controls */}
      <div className="flex flex-col items-center justify-center w-full max-w-[40%] gap-1">
        <div className="flex items-center gap-6">
          <button className="text-[var(--text-dim)] hover:text-white transition-colors">
            <SkipBack size={18} className="fill-current bg-transparent" />
          </button>
          
          <button 
            onClick={togglePlay} 
            className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform"
          >
            {isPlaying ? (
              <Pause size={16} className="fill-current" />
            ) : (
              <Play size={16} className="fill-current pl-1" />
            )}
          </button>
          
          <button className="text-[var(--text-dim)] hover:text-white transition-colors">
            <SkipForward size={18} className="fill-current" />
          </button>
        </div>
        
        {/* Fake Progress Bar & Wave Visualizer */}
        <div className="w-full flex items-center gap-2 group">
          <span className="text-[10px] text-[var(--text-dim)] w-8 text-right">Live</span>
          <div className="h-1 flex-1 bg-white/10 rounded-full overflow-hidden relative cursor-pointer group-hover:h-1.5 transition-all">
            <div 
              className="absolute top-0 left-0 h-full bg-[var(--accent)] rounded-full transition-all duration-300" 
              style={{ width: isPlaying ? '100%' : '0%' }}
            ></div>
          </div>
          
          <div className="player-wave w-8" style={{ visibility: isPlaying ? 'visible' : 'hidden' }}>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
            <div className="wave-bar"></div>
          </div>
        </div>
      </div>

      {/* Right section: Actions & Volume Control */}
      <div className="flex items-center justify-end w-1/3 min-w-[150px] gap-3 sm:gap-4 hidden sm:flex">
        <span className="text-xs text-[var(--text-dim)] mr-2">Vol</span>
        <div className="flex items-center gap-2 group/volume w-24">
          <div className="relative w-full h-1 bg-white/10 rounded-full flex items-center group-hover/volume:h-1.5 transition-all">
            <div 
              className="absolute top-0 left-0 h-full bg-white rounded-full group-hover/volume:bg-[var(--accent)] transition-colors pointer-events-none" 
              style={{ width: `${isMuted ? 0 : volume * 100}%` }}
            ></div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={isMuted ? 0 : volume}
              onChange={handleVolumeChange}
              className="absolute inset-0 w-full opacity-0 cursor-pointer z-10"
              title="Volume"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
