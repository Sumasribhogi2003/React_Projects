import React, { useState } from 'react';

const BookmarkItem = ({ bookmark, onDelete, onUpdate, onToggleFavorite, provided }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(bookmark.title);
  const [editedUrl, setEditedUrl] = useState(bookmark.url);

  const handleSave = () => {
    onUpdate(bookmark.id, {
      ...bookmark,
      title: editedTitle,
      url: editedUrl
    });
    setIsEditing(false);
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(bookmark.url)
      .then(() => alert('Link copied to clipboard!'))
      .catch((err) => console.error('Failed to copy: ', err));
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this bookmark?')) {
      onDelete(bookmark.id);
    }
  };

  return (
    <div
      className="bookmark-item fade-in"
      ref={provided?.innerRef}
      {...provided?.draggableProps}
      {...provided?.dragHandleProps}
    >
      {isEditing ? (
        <div className="edit-row">
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <input
            type="url"
            value={editedUrl}
            onChange={(e) => setEditedUrl(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <>
          <div className="bookmark-content">
  <span
    className="favorite-star"
    onClick={() => onToggleFavorite(bookmark.id)}
    title="Toggle Favorite"
  >
    {bookmark.favorite ? '★' : '☆'}
  </span>
  <img
    src={`https://www.google.com/s2/favicons?domain=${bookmark.url}`}
    alt="favicon"
    className="favicon"
  />
  <a href={bookmark.url} target="_blank" rel="noopener noreferrer">
    {bookmark.title}
  </a>
</div>
<div className="button-group">
  <button onClick={handleCopy}>Copy</button>
  <button onClick={() => setIsEditing(true)}>Edit</button>
  <button onClick={handleDelete}>Delete</button>
</div>

        </>
      )}
    </div>
  );
};

export default BookmarkItem;