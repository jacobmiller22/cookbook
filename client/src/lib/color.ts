export const hex2rgba = (hex, alpha = 1) => {
  if (hex.length === 4 || hex.length === 3) {
    const [r, g, b] = hex.match(/\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  }
  const [r, g, b] = hex.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r},${g},${b},${alpha})`;
};
