import React from 'react';
import { Volume2 } from 'lucide-react';

const VolumeControl = ({ volume, onVolumeChange }) => {
    return (
        <div className="flex items-center gap-2 mb-6">
            <Volume2 size={16} className="text-gray-400" />
            <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={onVolumeChange}
                className="w-full accent-red-500"
            />
        </div>
    );
};

export default VolumeControl;