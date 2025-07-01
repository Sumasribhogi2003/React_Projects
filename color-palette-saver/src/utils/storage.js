const STORAGE_KEY = "saved_palettes";

export const getPalettes = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const savePalette = (palette) => {
  const palettes = getPalettes();
  const existing = palettes.find(p => p.name === palette.name);
  if (!existing) {
    palettes.push(palette);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(palettes));
  }
};

export const deletePalette = (name) => {
  const palettes = getPalettes().filter(p => p.name !== name);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(palettes));
};
