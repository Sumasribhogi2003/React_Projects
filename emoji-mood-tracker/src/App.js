import React, { useState, useEffect } from "react";
import EmojiSelector from "./components/EmojiSelector";
import MoodHistory from "./components/MoodHistory";
import { saveMood, getMoodHistory } from "./utils/storage";
import './styles/style.css';


function App() {
  const [moodData, setMoodData] = useState({});
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const stored = getMoodHistory();
    setMoodData(stored);
  }, []);

  const handleMoodSelect = (emoji, note) => {
    const today = new Date().toISOString().split("T")[0];
    const updated = {
      ...moodData,
      [today]: { emoji, note },
    };
    setMoodData(updated);
    saveMood(today, emoji, note);
  };

  const handleEdit = (date, emoji, note) => {
    const updated = {
      ...moodData,
      [date]: { emoji, note },
    };
    setMoodData(updated);
    saveMood(date, emoji, note);
  };

  const handleClear = () => {
    localStorage.removeItem("mood_tracker_data");
    setMoodData({});
  };

  const today = new Date().toISOString().split("T")[0];
  const todayMood = moodData[today]?.emoji || null;

  return (
  <div className={`app ${darkMode ? "dark" : ""}`}>
    <div className="header-bar">
      <button onClick={() => setDarkMode(!darkMode)} className="theme-toggle-icon">
        {darkMode ? "☀️" : "🌙"}
      </button>
    </div>

    <h1>Emoji Mood Tracker</h1>
    <EmojiSelector onSelect={handleMoodSelect} todayMood={todayMood} />
    <MoodHistory moodData={moodData} onEdit={handleEdit} />
    <button onClick={handleClear} className="clear-btn">🧹 Clear All Moods</button>
  </div>
);

}

export default App;
