import React from 'react';
import BookmarkItem from './BookmarkItem';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const BookmarkList = ({ bookmarks, onDelete, onUpdate, onToggleFavorite, onDragEnd }) => {
  if (bookmarks.length === 0) return <p>No bookmarks added yet.</p>;

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="bookmark-list">
        {(provided) => (
          <div className="bookmark-list" {...provided.droppableProps} ref={provided.innerRef}>
            {bookmarks.map((bookmark, index) => (
              <Draggable key={bookmark.id} draggableId={bookmark.id.toString()} index={index}>
                {(provided) => (
                  <BookmarkItem
                    bookmark={bookmark}
                    onDelete={onDelete}
                    onUpdate={onUpdate}
                    onToggleFavorite={onToggleFavorite}
                    provided={provided}
                  />
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

export default BookmarkList;