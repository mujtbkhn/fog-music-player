import React from 'react';
import { SkipBack, Play, Pause, SkipForward, Repeat } from 'lucide-react';

const PlayerControls = ({
    isPlaying,
    onPlayPause,
    onPrevious,
    onNext,
    isRepeat,
    onRepeatToggle
}) => {
    return (
        <div className="flex items-center justify-center space-x-6">
            <button
                className="text-gray-400 hover:text-white"
                onClick={onPrevious}
            >
                <SkipBack size={24} />
            </button>
            <button
                className="flex items-center justify-center w-12 h-12 text-red-900 bg-white rounded-full hover:bg-gray-200"
                onClick={onPlayPause}
            >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button>
            <button
                className="text-gray-400 hover:text-white"
                onClick={onNext}
            >
                <SkipForward size={24} />
            </button>
            <button
                className={`text-gray-400 hover:text-white ${isRepeat ? 'text-white' : ''}`}
                onClick={onRepeatToggle}
            >
                <Repeat size={24} />
            </button>
        </div>
    );
};

export default PlayerControls;