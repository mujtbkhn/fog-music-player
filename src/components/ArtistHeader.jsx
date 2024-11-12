import React from 'react';
import michael from "../thumbnails/Michael.png";

const ArtistHeader = () => {
    return (
        <div className="relative p-8 mb-20 rounded-2xl bg-gradient-to-r from-red-950 to-black">
            <div className="absolute inset-0 opacity-50 rounded-2xl mix-blend-overlay">
                <div className="w-full h-full bg-gradient-to-r from-red-800/30 to-transparent" />
            </div>

            <div className="relative flex items-end">
                <div className="z-10 flex-1">
                    <div className="flex items-center mb-2">
                        <span className="flex items-center px-2 py-1 mr-2 text-xs bg-blue-500 rounded-full">
                            <span className="mr-1">✓</span> Verified Artist
                        </span>
                    </div>
                    <h1 className="mb-2 text-4xl font-bold text-white">Michael Jackson</h1>
                    <p className="text-gray-400">27,852,501 monthly listeners</p>
                </div>

                <div className="absolute hidden right-4 -top-24 w-96 md:block">
                    <img
                        src={michael}
                        alt="Michael Jackson"
                        className="object-contain w-full h-full"
                    />
                </div>
            </div>
        </div>
    );
};

export default ArtistHeader;