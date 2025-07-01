import React, { useState, useEffect } from 'react';
import BookmarkForm from './components/BookmarkForm';
import BookmarkList from './components/BookmarkList';
import SearchBar from './components/SearchBar';
import Toast from './components/Toast';

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('date');
  const [toast, setToast] = useState('');

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('bookmarks'));
    if (stored) setBookmarks(stored);
  }, []);

  useEffect(() => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const showToast = (msg) => {
    setToast(msg);
    setTimeout(() => setToast(''), 2000);
  };

  const addBookmark = (bookmark) => {
    setBookmarks([bookmark, ...bookmarks]);
    showToast('Bookmark added!');
  };

  const deleteBookmark = (id) => {
    setBookmarks(bookmarks.filter((b) => b.id !== id));
    showToast('Bookmark deleted');
  };

  const updateBookmark = (id, updatedBookmark) => {
    setBookmarks(bookmarks.map((b) => (b.id === id ? updatedBookmark : b)));
    showToast('Bookmark updated');
  };

  const toggleFavorite = (id) => {
    setBookmarks(
      bookmarks.map((b) =>
        b.id === id ? { ...b, favorite: !b.favorite } : b
      )
    );
  };

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(bookmarks);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setBookmarks(items);
  };

  const sortedBookmarks = [...bookmarks].sort((a, b) => {
  if (sortBy === 'title') {
    return a.title.localeCompare(b.title); // A–Z
  } else if (sortBy === 'date') {
    return new Date(b.createdAt) - new Date(a.createdAt); // Newest first
  }
  return 0;
});



  const filteredBookmarks = sortedBookmarks.filter((b) =>
    b.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    b.url.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      <h1>Bookmark Manager</h1>
      <div className="controls">
        <SearchBar searchTerm={searchTerm} onSearch={setSearchTerm} />
        <div className="sort-dropdown">
          <label>Sort by:</label>
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="date">Date Added</option>
            <option value="title">Title</option>
          </select>
        </div>
      </div>
      <BookmarkForm onAdd={addBookmark} bookmarks={bookmarks} />
      <BookmarkList
        bookmarks={filteredBookmarks}
        onDelete={deleteBookmark}
        onUpdate={updateBookmark}
        onToggleFavorite={toggleFavorite}
        onDragEnd={onDragEnd}
      />
      {toast && <Toast message={toast} />}
    </div>
  );
};

export default App;