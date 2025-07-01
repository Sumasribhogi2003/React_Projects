import React from "react";
import MoodCard from "./MoodCard";

function MoodHistory({ moodData, onEdit }) {
  const sortedDates = Object.keys(moodData).sort((a, b) => new Date(b) - new Date(a));

  return (
    <div className="mood-history">
      <h2>Mood History</h2>
      {sortedDates.length === 0 ? (
        <p>No moods recorded yet.</p>
      ) : (
        sortedDates.map((date) => (
          <MoodCard
  key={date}
  date={date}
  emoji={moodData[date].emoji}
  note={moodData[date].note}
  onEdit={onEdit}
/>

        ))
      )}
    </div>
  );
}

export default MoodHistory;
