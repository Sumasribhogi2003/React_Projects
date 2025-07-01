const STORAGE_KEY = "mood_tracker_data";

export const saveMood = (date, emoji, note) => {
  const data = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  data[date] = { emoji, note };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const getMoodHistory = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
};

export const clearMoodHistory = () => {
  localStorage.removeItem(STORAGE_KEY);
};
