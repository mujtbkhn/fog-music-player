import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const SongList = ({ songs, currentSong, onPlay, onDragEnd }) => {
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="songs-list">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className="space-y-2 overflow-y-auto max-h-[calc(100vh-400px)]"
                    >
                        {songs.map((song, index) => (
                            <Draggable key={song.id.toString()} draggableId={song.id.toString()} index={index}>
                                {(provided, snapshot) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`flex items-center p-3 rounded-lg hover:bg-white/10 cursor-pointer
                                            ${currentSong?.id === song.id ? 'bg-red-900' : ''}
                                            ${snapshot.isDragging ? 'opacity-50' : ''}`}
                                        onClick={() => onPlay(song)}
                                    >
                                        <span className="hidden w-8 text-center md:block">{index + 1}</span>
                                        <img
                                            src={song.thumbnail}
                                            alt={song.title}
                                            className="w-12 h-12 mr-4 rounded"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <div className="font-medium truncate">{song.title}</div>
                                            <div className="text-sm text-gray-400 truncate">
                                                {song.plays} plays
                                            </div>
                                        </div>
                                        <div className="hidden text-gray-400 md:block">{song.duration}</div>
                                        <div className="hidden ml-4 text-gray-400 truncate lg:block">{song.album}</div>
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
};

export default SongList;