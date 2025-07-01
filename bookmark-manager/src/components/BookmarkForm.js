import React, { useState } from 'react';

const BookmarkForm = ({ onAdd, bookmarks }) => {
  const [title, setTitle] = useState('');
  const [url, setUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !url) return alert('Fill in all fields');

    const isDuplicate = bookmarks.some(
      (b) => b.url.trim().toLowerCase() === url.trim().toLowerCase()
    );
    if (isDuplicate) {
      alert('This bookmark already exists!');
      return;
    }

    const newBookmark = {
  id: Date.now(),
  title,
  url,
  favorite: false,
  createdAt: new Date().toISOString()
};



    onAdd(newBookmark);
    setTitle('');
    setUrl('');
  };

  return (
    <form className="bookmark-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Website Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="url"
        placeholder="https://example.com"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add Bookmark</button>
    </form>
  );
};

export default BookmarkForm;