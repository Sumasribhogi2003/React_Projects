import React, { useState } from "react";

function MoodCard({ date, emoji, note, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newEmoji, setNewEmoji] = useState(emoji);
  const [newNote, setNewNote] = useState(note || "");

  const handleSave = () => {
    onEdit(date, newEmoji, newNote);
    setIsEditing(false);
  };

  return (
    <div className="mood-card">
      <div>
        <strong>{date}</strong>
        {!isEditing ? (
          <>
            <div>{emoji}</div>
            {note && <p className="note">📝 {note}</p>}
          </>
        ) : (
          <div className="edit-form">
            <select value={newEmoji} onChange={(e) => setNewEmoji(e.target.value)}>
              {["😄", "🙂", "😐", "😢", "😡", "😴", "🤩", "😭", "😎", "😇", "😤", "😬",
  "🥳", "🤔", "😶", "😕", "😱", "😴", "😈", "🥺"].map((e) => (
                <option key={e} value={e}>{e}</option>
              ))}
            </select>
            <input
              type="text"
              value={newNote}
              onChange={(e) => setNewNote(e.target.value)}
              placeholder="Edit note..."
            />
          </div>
        )}
      </div>
      <div>
        {!isEditing ? (
          <button onClick={() => setIsEditing(true)}>Edit</button>
        ) : (
          <button onClick={handleSave}>Save</button>
        )}
      </div>
    </div>
  );
}

export default MoodCard;
