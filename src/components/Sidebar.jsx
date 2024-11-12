import React from 'react';

const Sidebar = () => {
    return (
        <div className="w-full p-4 bg-black border-b border-gray-800 md:w-64 md:p-6 md:border-b-0 md:border-r">
            <div className="flex items-center mb-12">
                <div className="mr-2 text-2xl text-red-500">♫</div>
                <div className="text-2xl font-bold">
                    <span className="text-red-500">Dream</span>Music
                </div>
            </div>

            <nav className="space-y-6">
                <div className="space-y-4">
                    <a href="#" className="flex items-center text-red-500">
                        <div className="w-6 h-6 mr-4">🏠</div>
                        Home
                    </a>
                    <a href="#" className="flex items-center text-gray-400 hover:text-white">
                        <div className="w-6 h-6 mr-4">📈</div>
                        Trends
                    </a>
                    <a href="#" className="flex items-center text-gray-400 hover:text-white">
                        <div className="w-6 h-6 mr-4">📚</div>
                        Library
                    </a>
                    <a href="#" className="flex items-center text-gray-400 hover:text-white">
                        <div className="w-6 h-6 mr-4">🔍</div>
                        Discover
                    </a>
                </div>
            </nav>
        </div>
    );
};

export default Sidebar;