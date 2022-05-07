export const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

export const randomNumber = (max = 1, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const randomValueGenerator = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};