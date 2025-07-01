import React, { useState } from "react";

const emojis = ["😄", "🙂", "😐", "😢", "😡", "😴", "🤩", "😭", "😎", "😇", "😤", "😬",
  "🥳", "🤔", "😶", "😕", "😱", "😴", "😈", "🥺"];

function EmojiSelector({ onSelect, todayMood }) {
  const [note, setNote] = useState("");

  const handleSelect = (emoji) => {
    onSelect(emoji, note);
    setNote(""); // Clear note after selection
  };

  return (
    <div className="emoji-selector">
      <h2>How are you feeling today?</h2>
      <div className="emoji-buttons">
        {emojis.map((emoji) => (
          <button
            key={emoji}
            onClick={() => handleSelect(emoji)}
            className={todayMood === emoji ? "selected" : ""}
          >
            {emoji}
          </button>
        ))}
      </div>
      
    </div>
  );
}

export default EmojiSelector;
