import React from 'react';
import VolumeControl from './VolumeControl';
import PlayerControls from './PlayerControls';

const NowPlaying = ({
    currentSong,
    isPlaying,
    currentTime,
    duration,
    volume,
    isRepeat,
    onVolumeChange,
    onPlayPause,
    onPrevious,
    onNext,
    onRepeatToggle,
    onSeek
}) => {
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="w-full p-4 bg-red-900 md:w-80 md:p-6">
            <div className="text-center">
                <img
                    src={currentSong.thumbnail}
                    alt={currentSong.title}
                    className="mx-auto mb-6 rounded w-60 h-60"
                />
                <h3 className="mb-1 text-xl font-bold">{currentSong.title}</h3>
                <p className="mb-6 text-gray-300">Michael Jackson</p>

                {/* Progress Bar */}
                <div className="mb-6">
                    <div className="flex justify-between mb-2 text-sm text-gray-400">
                        <span>{formatTime(currentTime)}</span>
                        <span>{formatTime(duration)}</span>
                    </div>
                    <div
                        className="h-1 rounded-full cursor-pointer bg-white/20"
                        onClick={onSeek}
                    >
                        <div
                            className="h-full bg-white rounded-full"
                            style={{ width: `${(currentTime / duration) * 100}%` }}
                        ></div>
                    </div>
                </div>

                <VolumeControl volume={volume} onVolumeChange={onVolumeChange} />

                <PlayerControls
                    isPlaying={isPlaying}
                    onPlayPause={onPlayPause}
                    onPrevious={onPrevious}
                    onNext={onNext}
                    isRepeat={isRepeat}
                    onRepeatToggle={onRepeatToggle}
                />
            </div>
        </div>
    );
};

export default NowPlaying;