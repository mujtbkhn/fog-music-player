import React, { useState, useEffect, useRef } from 'react';
import { Howl, Howler } from 'howler';
import { Search } from 'lucide-react';
import Sidebar from './components/Sidebar';
import SongList from './components/SongList';
import ArtistHeader from './components/ArtistHeader';
import NowPlaying from './components/NowPlaying';
import { sampleSongs } from './data/sampleSongs';

const App = () => {
  const [songs, setSongs] = useState(sampleSongs);
  const [currentSong, setCurrentSong] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isRepeat, setIsRepeat] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const soundRef = useRef(null);

  useEffect(() => {
    Howler.volume(volume);
  }, []);

  useEffect(() => {
    if (currentSong && currentSong.audioUrl) {
      if (soundRef.current) {
        soundRef.current.stop();
      }

      soundRef.current = new Howl({
        src: [currentSong.audioUrl],
        html5: true,
        volume: volume,
        onplay: () => {
          setIsPlaying(true);
          requestAnimationFrame(updateSeeker);
        },
        onpause: () => setIsPlaying(false),
        onstop: () => {
          setIsPlaying(false);
          setCurrentTime(0);
        },
        onend: () => {
          if (isRepeat) {
            soundRef.current.play();
          } else {
            handleNext();
          }
        },
        onload: () => setDuration(soundRef.current.duration())
      });

      if (isPlaying) {
        soundRef.current.play();
      }
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.stop();
      }
    };
  }, [currentSong]);

  const updateSeeker = () => {
    if (soundRef.current && isPlaying) {
      setCurrentTime(soundRef.current.seek());
      requestAnimationFrame(updateSeeker);
    }
  };

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const newSongs = Array.from(songs);
    const [removed] = newSongs.splice(source.index, 1);
    newSongs.splice(destination.index, 0, removed);

    setSongs(newSongs);
  };

  const handlePlay = (song) => {
    if (currentSong && currentSong.id === song.id) {
      togglePlayPause();
    } else {
      setCurrentSong(song);
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (soundRef.current) {
      if (isPlaying) {
        soundRef.current.pause();
      } else {
        soundRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleNext = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
    if (currentIndex < songs.length - 1) {
      setCurrentSong(songs[currentIndex + 1]);
      setIsPlaying(true);
    }
  };

  const handlePrevious = () => {
    const currentIndex = songs.findIndex(song => song.id === currentSong?.id);
    if (currentIndex > 0) {
      setCurrentSong(songs[currentIndex - 1]);
      setIsPlaying(true);
    }
  };

  const handleSeek = (e) => {
    if (soundRef.current) {
      const seekBar = e.currentTarget;
      const clickPosition = (e.clientX - seekBar.getBoundingClientRect().left) / seekBar.offsetWidth;
      const newPosition = clickPosition * duration;
      soundRef.current.seek(newPosition);
      setCurrentTime(newPosition);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (soundRef.current) {
      soundRef.current.volume(newVolume);
    }
    Howler.volume(newVolume);
  };

  return (
    <div className="flex flex-col h-screen text-white bg-black md:flex-row">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-4 overflow-y-auto md:p-6 bg-gradient-to-b from-red-900 to-black">
        {/* Search Bar */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Michael Jackson"
                className="w-full px-4 py-2 pl-12 text-white bg-black bg-opacity-50 rounded-full md:w-96"
              />
              <Search className="absolute left-4 top-2.5 text-gray-400 w-5 h-5" />
            </div>
          </div>
        </div>

        {/* Artist Header */}
        <ArtistHeader />

        {/* Popular Songs */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Popular</h2>
            <button className="text-gray-400 hover:text-white">See All</button>
          </div>
          <SongList
            songs={songs}
            currentSong={currentSong}
            onPlay={handlePlay}
            onDragEnd={handleDragEnd}
          />
        </div>
      </div>

      {/* Now Playing */}
      {currentSong && (
        <NowPlaying
          currentSong={currentSong}
          isPlaying={isPlaying}
          currentTime={currentTime}
          duration={duration}
          volume={volume}
          isRepeat={isRepeat}
          onVolumeChange={handleVolumeChange}
          onPlayPause={togglePlayPause}
          onPrevious={handlePrevious}
          onNext={handleNext}
          onRepeatToggle={() => setIsRepeat(!isRepeat)}
          onSeek={handleSeek}
        />
      )}
    </div>
  );
};

export default App;